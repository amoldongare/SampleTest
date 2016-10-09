package com.meterfeederapp.plugin.printer.driver;

import android.content.res.AssetManager;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.util.Base64;

import com.meterfeederapp.plugin.printer.CannotConnectToPrinterException;
import com.meterfeederapp.plugin.printer.Driver;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import datamaxoneil.connection.Connection_Bluetooth;
import datamaxoneil.printer.Document;
import datamaxoneil.printer.DocumentDPL;
import datamaxoneil.printer.DocumentEZ;
import datamaxoneil.printer.DocumentExPCL_LP;
import datamaxoneil.printer.DocumentExPCL_PP;
import datamaxoneil.printer.DocumentLP;
import datamaxoneil.printer.MuPDFCore;
import datamaxoneil.printer.ParametersDPL;
import datamaxoneil.printer.ParametersEZ;
import datamaxoneil.printer.ParametersExPCL_LP;
import datamaxoneil.printer.ParametersExPCL_PP;
import datamaxoneil.printer.configuration.ez.BatteryCondition;

import java.io.IOException;
import java.io.InputStream;
import java.io.UnsupportedEncodingException;
import java.math.BigInteger;
import java.nio.charset.StandardCharsets;
import java.text.DecimalFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.Date;
import java.util.Iterator;
import java.util.List;

public class Datamax extends Driver {

    private ParametersExPCL_PP titleParams;
    private ParametersExPCL_PP valueParams;
    private ParametersExPCL_PP labelParams;
    private ParametersExPCL_PP checkmarkParams;
    private int labelHeight = 30;
    private int valueHeight = 35;
    private int leftPad = 5;
    private int width = 570;

    /**
     * Constructor.
     */
    public Datamax() {
    }

    private String getJSONString(JSONObject fields, String key) {
        if (fields == null)
        {
            return "";
        }

        try
        {
            return fields.has(key) ? fields.getString(key) : "";
        }
        catch (JSONException e)
        {
            System.out.println("Key \"" + key + "\" not found, " + e.getLocalizedMessage());
            return "";
        }
    }

    private int createBlock(DocumentExPCL_PP document, List<Item> items, int top)
    {
        return createBlock(document, items, top, 1, 3);
    }
    private int createBlock(DocumentExPCL_PP document, List<Item> items, int top, int valueRows)
    {
        return createBlock(document, items, top, valueRows, 3);
    }
    private int createBlock(DocumentExPCL_PP document, List<Item> items, int top, int valueRows, int printLines)
    {
        int middle = top + labelHeight;
        int bottom = middle + valueHeight * valueRows;

        // Build Outlines:

        if ((printLines & 0x1) == 1)
        {
            document.drawRectangle(leftPad, top, width, top, true, 3);
        }
        if ((printLines & 0x2) == 2)
        {
            document.drawRectangle(leftPad, middle, width, middle, true, 3);
        }
        if ((printLines & 0x4) == 4)
        {
            document.drawRectangle(leftPad, bottom, width, bottom, true, 3);
        }

        Iterator iterator = items.iterator();

        while(iterator.hasNext())
        {
            Item item = (Item) iterator.next();
            int textStart = leftPad * 2 + item.hpos;

            if (item.hpos != 0)  // Don't draw vertical line on first item.
            {
                document.drawRectangle(item.hpos, top, item.hpos, bottom, true, 3);
            }
            document.writeText(item.label,
                    top + 3, textStart, labelParams);

            Iterator valIterator = item.values.iterator();
            int i = 0;
            while(valIterator.hasNext())
            {
                String value = (String) valIterator.next();
                System.out.println(String.format("Drawing Item %s: '%s', %03d", item.label, value, item.hpos));

                document.writeText(value,
                        middle + 1 + (i * valueHeight), textStart, valueParams);
                i++;
            }

        }
        return bottom;
    }

    public void feedPage()
    {
        DocumentCustom_LP doc = new DocumentCustom_LP();
        //doc.rollPaperBack((byte) 80);
        doc.queueNextPage((byte) 200);

        try
        {
            // Open connection to the printer, if needed
            connect();
            if(!connection.getIsOpen())
            {
                connection.open();
            }
        }
        catch (Exception e)
        {
            System.out.println(e.getMessage());
            e.printStackTrace();
        }

        connection.write(doc.getDocumentData());
        connection.close();
    }
    public boolean printDocument(JSONObject fields)
    {

        String id = getJSONString(fields, "ticket_id");
        DocumentExPCL_PP document = new DocumentExPCL_PP(DocumentExPCL_PP.PaperWidth.PaperWidth_576);

        titleParams = new ParametersExPCL_PP();
        titleParams.setFontIndex(10);

        labelParams = new ParametersExPCL_PP();
        labelParams.setFontIndex(8);

        valueParams = new ParametersExPCL_PP();
        valueParams.setFontIndex(10);

        checkmarkParams = new ParametersExPCL_PP();
        checkmarkParams.setFontIndex(14);

        int vpos = 0;
        int hpos = 5;
        int textStart = hpos * 2;

        JSONObject municipality = null;
        JSONObject user = null;
        String muniLabel;
        String muniAddress;
        String muniPhone = "";


        try {
            user = fields.getJSONObject("user");
            municipality = user.getJSONObject("municipality");
            muniLabel = getJSONString(municipality, "label");
            muniAddress = getJSONString(municipality, "address") + ", " +
                          getJSONString(municipality, "city") + ", " +
                          getJSONString(municipality, "state") + " " +
                          getJSONString(municipality, "zip");
            muniPhone = getJSONString(municipality, "phone");
        } catch (JSONException e1) {
            e1.printStackTrace();
            muniAddress = "Addy not found";
            muniLabel = "Label not found";
        }

        document.writeText(muniLabel,
            vpos, textStart, titleParams);
        vpos += 35;
        document.writeText(muniAddress,
            vpos, textStart, labelParams);
        vpos += 30;
        document.writeText(muniPhone,
                vpos, textStart, labelParams);
        vpos += 30;
        document.writeText("PARKING TICKET ID: " + id,
            vpos, textStart, valueParams);
        vpos += 30;

        List<Item> line = new ArrayList<Item>();

        JSONObject vehicle = null;
        String licensePlate;
        String licenseState;


        try {
            vehicle = fields.getJSONObject("vehicle");
            licensePlate = getJSONString(vehicle, "licensePlate");
            licenseState = getJSONString(vehicle, "licenseState");

        } catch (JSONException e1) {
            licensePlate = "vehicle.licensePlate";
            licenseState = "vehicle.licenseState";
        }


        line.add(new Item("REGISTRATION (License Plate No.)", licensePlate, 0));
        line.add(new Item("STATE", licenseState, 400));
        vpos = createBlock(document, line, vpos);
        line.clear();

        String veh_make;
        String veh_model;
        String veh_color;
        try {
            veh_make = vehicle.getJSONObject("make").getString("description");
            veh_model = vehicle.getJSONObject("model").getString("description");
            veh_color = vehicle.getJSONObject("color").getString("description");
        } catch (JSONException e) {
            veh_make = "Error";
            veh_model = "Error";
            veh_color = "Error";
        }

        line.add(new Item("VEHICLE MAKE",  veh_make,  0));
        line.add(new Item("VEHICLE MODEL", veh_model, 288));
        line.add(new Item("COLOR", veh_color, 480));
        vpos = createBlock(document, line, vpos);
        line.clear();

        //                                          2015-12-21 T 04:32:47.554+0000
        SimpleDateFormat dt = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSSZ");
        Date issued;
        try {
            String iss = getJSONString(fields, "issued");
            iss = iss.replace("Z", "+0000");
            System.out.println("Date Issued: " + iss);
            issued = dt.parse(iss);
        } catch (ParseException e) {
            e.printStackTrace();
            issued = new Date();
        }

        line.add(new Item("MONTH", new SimpleDateFormat("MMM").format(issued), 0));
        line.add(new Item("DAY",   new SimpleDateFormat("dd").format(issued), 100));
        line.add(new Item("YEAR",  new SimpleDateFormat("yyyy").format(issued), 200));
        line.add(new Item("TIME",  new SimpleDateFormat("HH:mm").format(issued), 300));
        vpos = createBlock(document, line, vpos);
        line.clear();

        line.add(new Item("LOCATION", getJSONString(fields, "location"), 0));
        vpos = createBlock(document, line, vpos);
        line.clear();


        List<String> violations = new ArrayList<String>();
        try
        {
            JSONArray array = fields.getJSONArray("violations");

            for (int i = 0; i < array.length(); i++)
            {
                JSONObject violation = array.getJSONObject(i);
                double c = violation.getInt("cost");
                double cost = c / 100;
                String cost_str = DecimalFormat.getCurrencyInstance().format(cost);
                String code = getJSONString(violation, "code");
                String text = getJSONString(violation, "label");
                violations.add(String.format("(%s) %s - %s", cost_str, code, text));

                if (violation.has("adjustments"))
                {
                    JSONArray jsonArr = violation.getJSONArray("adjustments");

                    // Jump through hoops to make JSONArray sorted:
                    int lng = jsonArr.length();
                    List<JSONObject> adjustments = new ArrayList<JSONObject>();
                    for (int j = 0; j < lng; j++) {
                        adjustments.add(jsonArr.getJSONObject(j));
                    }
                    Collections.sort(adjustments, new Comparator<JSONObject>() {
                        private static final String KEY_NAME = "newCost";

                        @Override
                        public int compare(JSONObject a, JSONObject b) {
                            int valA;
                            int valB;

                            try {
                                valA = (int) a.get(KEY_NAME);
                                valB = (int) b.get(KEY_NAME);
                            }
                            catch (JSONException e) {
                                return 0;
                            }

                            return valA - valB;
                        }
                    });

                    for(JSONObject adjustment : adjustments)
                    {
                        int count = adjustment.getInt("count");
                        double newCost = adjustment.getInt("newCost") / 100;
                        String newCost_str = DecimalFormat.getCurrencyInstance().format(newCost);
                        String type = adjustment.getString("type");
                        violations.add(String.format("    - %s if paid after %d %s", newCost_str, count, type));
                    }
                }
                else if (violation.has("discount")) {
                    JSONObject discount = violation.getJSONObject("discount");
                    int days = discount.getInt("days");
                    double adjustment = discount.getInt("adjustment") / 100;
                    double discountedCost = cost + adjustment;
                    String discountedString = DecimalFormat.getCurrencyInstance().format(discountedCost);
                    violations.add(String.format("    - %s if paid in %d days", discountedString, days));
                }
                else if (violation.has("hike"))
                {
                    JSONObject hike = violation.getJSONObject("hike");
                    int hours = hike.getInt("hours");
                    double newCost = hike.getInt("newCost") / 100;
                    String adjustedString = DecimalFormat.getCurrencyInstance().format(newCost);
                    violations.add(String.format("    increase to %s after %d hours", adjustedString, hours));
                }
            }
        }
        catch (JSONException e)
        {
            e.printStackTrace();
            violations.add("Issue Parsing Violations");
        }
        line.add(new Item("VIOLATIONS", violations, 0));
        vpos = createBlock(document, line, vpos, violations.size(), 0x5);
        line.clear();

        double a = Integer.parseInt(getJSONString(fields, "amount"), 10);
        double amount = a / 100;
        String amount_str = DecimalFormat.getCurrencyInstance().format(amount);
        document.writeText("AMOUNT DUE:",
                vpos + 1, textStart, valueParams);
        document.writeText(amount_str,
                vpos + 1, 250, valueParams);
        vpos += valueHeight;

        int daysUntilDue = 0;
        try
        {
            daysUntilDue = municipality.getInt("daysUntilDue");
        }
        catch (JSONException e)
        {
            System.out.println("days until due unreadable");
            daysUntilDue = 0;
        }
        document.writeText(String.format("After %d days violations will increase to include court costs", daysUntilDue),
                vpos + 2, textStart, labelParams);
        vpos += 24;

//        Date dueDate;
//        try {
//            String due = getJSONString(fields, "dueDate");
//            due = due.replace("Z", "+0000");
//            System.out.println("Date Due: " + due);
//            dueDate = dt.parse(due);
//        } catch (ParseException e) {
//            e.printStackTrace();
//            dueDate = null;
//        }
//        document.writeText("DATE DUE:",
//                vpos + 1, textStart, valueParams);
//        if (!dueDate.equals(null))
//        {
//            document.writeText(new SimpleDateFormat("MMM dd, yyyy").format(dueDate),
//                    vpos + 1, 250, valueParams);
//        }
//        vpos += valueHeight;

        String cmts = getJSONString(fields, "comments");
        cmts = wrap(cmts, 39, "\n", false);
        String[] array = cmts.split("\n");
        List<String> comments = new ArrayList<String>();
        for (int i = 0; i < array.length; i++)
        {
            comments.add(array[i]);
        }
        line.add(new Item("COMMENTS", comments, 0));
        vpos = createBlock(document, line, vpos, comments.size(), 0x1);
        line.clear();


        String issuer;

        String user_badge = getJSONString(user, "badge");
        issuer = String.format("Issued By: Parking Officer %s", user_badge);

        line.add(new Item(issuer, "", 0));
        vpos = createBlock(document, line, vpos, 1, 0x5);
        line.clear();

        // Check Box:
        vpos += 2;
        document.drawRectangle(textStart, vpos, textStart + 20, vpos + 20, true, 3);
        document.writeText("CHECK IF VEHICLE TOWED",
                vpos + 2, 40, labelParams);
        try
        {
            boolean towed = fields.getBoolean("towed");
            if (towed)
            {
                System.out.println("Vehicle Towed");
                document.writeText("X",
                        vpos - 2, textStart, valueParams);
            }
            else
            {
                System.out.println("Vehicle NOT Towed");
            }
        }
        catch (JSONException e)
        {
            System.out.println("Assume not towed");
        }
        vpos += 22;



        document.setPageHeight(vpos + 10);

        // Print the Footer Content
        DocumentCustom_LP footer = new DocumentCustom_LP();

        String ticketUrl = getJSONString(fields, "url");
        footer.makeQRCode(ticketUrl);
        footer.writeText(wrap(String.format("Scan the QR code with the Meter Feeder App or pay online at https://meterfeeder.com. Make checks payable to %s and send to the address above", muniLabel), 59, "\n", false));
        footer.rollPaperBack((byte) 80);
        footer.queueNextPage((byte) 200);

        // Header to roll paper back:
        DocumentCustom_LP header = new DocumentCustom_LP();
        //header.rollPaperBack((byte) 40);


        try
        {
            connect();
            // Open connection to the printer, if needed
            if(!connection.getIsOpen())
            {
                connection.open();
            }
        }
        catch (Exception e)
        {
            System.out.println(e.getMessage());
            e.printStackTrace();
            return false;
        }

        connection.write(header.getDocumentData());
        connection.write(document.getDocumentData());
        connection.write(footer.getDocumentData());
        connection.close();

        return true;
    }

    /** Establishes Bluetooth Connection.
     **/
    public boolean connect() throws Exception
    {
        String m_DeviceAddress = "";

        //Check if it was successfully created previously
        if (connection != null) {
            //Checks if we already created connection for this device. If not, create a new connection
            if (!m_DeviceAddress.equals(address)) {
                m_DeviceAddress = address;
                connection = Connection_Bluetooth.createClient(m_DeviceAddress);
            }
        }
        //no connection was established so create one
        else {
            m_DeviceAddress = address;
            connection = Connection_Bluetooth.createClient(m_DeviceAddress);
        }

        return true;
    }

    static public boolean detectDevice(String device)
    {
        return device.equals(MANUFACTURER_NAME);
    }

    static public String MANUFACTURER_NAME = "D-O PRINTER";

    private static String wrap(final String str, int wrapLength, String newLineStr, final boolean wrapLongWords) {
        if (str == null) {
            return null;
        }
        if (newLineStr == null) {
            newLineStr = "\n";
        }
        if (wrapLength < 1) {
            wrapLength = 1;
        }
        final int inputLineLength = str.length();
        int offset = 0;
        final StringBuilder wrappedLine = new StringBuilder(inputLineLength + 32);

        while (offset < inputLineLength) {
            if (str.charAt(offset) == ' ') {
                offset++;
                continue;
            }
            // only last line without leading spaces is left
            if(inputLineLength - offset <= wrapLength) {
                break;
            }
            int spaceToWrapAt = str.lastIndexOf(' ', wrapLength + offset);

            if (spaceToWrapAt >= offset) {
                // normal case
                wrappedLine.append(str.substring(offset, spaceToWrapAt));
                wrappedLine.append(newLineStr);
                offset = spaceToWrapAt + 1;

            } else {
                // really long word or URL
                if (wrapLongWords) {
                    // wrap really long word one line at a time
                    wrappedLine.append(str.substring(offset, wrapLength + offset));
                    wrappedLine.append(newLineStr);
                    offset += wrapLength;
                } else {
                    // do not wrap really long word, just extend beyond limit
                    spaceToWrapAt = str.indexOf(' ', wrapLength + offset);
                    if (spaceToWrapAt >= 0) {
                        wrappedLine.append(str.substring(offset, spaceToWrapAt));
                        wrappedLine.append(newLineStr);
                        offset = spaceToWrapAt + 1;
                    } else {
                        wrappedLine.append(str.substring(offset));
                        offset = inputLineLength;
                    }
                }
            }
        }

        // Whatever is left in line is short enough to just pass through
        wrappedLine.append(str.substring(offset));

        return wrappedLine.toString();
    }


    class Item
    {
        public String label;
        public List<String> values;
        public int hpos;

        public Item(String label, String value, int hpos)
        {
            List<String> values = new ArrayList<String>();
            values.add(value);

            this.label = label;
            this.values = values;
            this.hpos = hpos;
        }
        public Item(String label, List<String> values, int hpos)
        {
            this.label = label;
            this.values = values;
            this.hpos = hpos;
        }
    }
    class DocumentCustom_LP extends DocumentExPCL_LP
    {
        public DocumentCustom_LP()
        {
            super(8);
        }

        public void addToDoc(byte[] data)
        {
            this.addToDoc(this.m_Document, data);
        }

        public void makeQRCode(String textString)
        {

            byte[] qrCommand = new byte[]{
                    (byte) Document.ESC,
                    (byte) 'Z',             // Annotated
                    (byte) '7',             // QR Code Type
                    (byte) '2',             // QR Code Model 2
                    (byte) 'M',             // QR Code Error correction level "Standard Level"
                    (byte) 'A',             // QR Code Data Input Modes: Auto
                    (byte) (textString.length() / 256),
                    (byte) (textString.length() % 256),
                    (byte) '2'              // Pixel multiplier
            };
            this.addToDoc(this.m_Document, qrCommand);
            this.addToDoc(this.m_Document, textString);
            this.addToDoc(this.m_Document, EOL);
            System.out.println("QR Code: " + textString);
        }

        public void queueNextPage(byte dotsToPerf)
        {
            this.addToDoc(new byte[] {
                    (byte) ESC,
                    (byte) 'Q',
                    (byte) 'F',
                    (byte) 250,
                    (byte) '\n'
            });
            this.addToDoc(new byte[] {
                    (byte) ESC,
                    (byte) 'J',
                    dotsToPerf
            });
        }

        public void rollPaperBack(byte dots)
        {
            this.addToDoc(new byte[] {
                    (byte) ESC,
                    (byte) 'Q',
                    (byte) 'J',
                    dots
            });
        }
    }
}
