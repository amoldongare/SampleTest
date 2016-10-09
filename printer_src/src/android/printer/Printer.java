package com.meterfeederapp.plugin.printer;

import android.app.Activity;
import android.bluetooth.BluetoothAdapter;
import android.bluetooth.BluetoothDevice;
import android.content.res.AssetManager;
import android.text.TextUtils;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CordovaWebView;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.IOException;
import java.io.InputStream;
import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Objects;
import java.util.Set;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Printer extends CordovaPlugin {

    public static final List<String> drivers = Arrays.asList(
            "com.meterfeederapp.plugin.printer.driver.Datamax"
    );

    private Driver currentDriver = null;

    /**
     * Constructor.
     */
    public Printer() {
    }

    /**
     * Sets the context of the Command. This can then be used to do things like
     * get file paths associated with the Activity.
     *
     * @param cordova The context of the main Activity.
     * @param webView The CordovaWebView Cordova is running in.
     */
    public void initialize(CordovaInterface cordova, CordovaWebView webView) {
        super.initialize(cordova, webView);
    }

    /**
     * Executes the request and returns PluginResult.
     *
     * @param action          The action to execute.
     * @param args            JSONArry of arguments for the plugin.
     * @param callbackContext The callback id used when calling back into JavaScript.
     * @return True if the action was valid, false if not.
     */
    public boolean execute(String action, final JSONArray args, final CallbackContext callbackContext)
    {
        try {
            if (action.equals("print")) {
                cordova.getThreadPool().execute(new Runnable() {
                    @Override
                    public void run() {
                        try {
                            boolean result = false;
                            JSONObject options = args.getJSONObject(0);
                            JSONObject fields = options.getJSONObject("fields");

                            if (currentDriver == null) {
                                callbackContext.error(new ErrorResponse(
                                        ErrorResponse.ErrorCode.NO_DRIVER_SELECTED,
                                        "No driver selected, fist call 'selectDevice' action",
                                        null
                                ));
                            } else {
                                currentDriver.connect();
                                result = currentDriver.printDocument(fields);
                            }

                            if (result == true)
                            {
                                callbackContext.success();
                            }
                            else
                            {
                                callbackContext.error(new ErrorResponse(
                                        ErrorResponse.ErrorCode.PRINT_ERROR,
                                        "Could not send data to printer",
                                        null
                                ));
                            }


                        } catch (JSONException e) {
                            callbackContext.error(new ErrorResponse(
                                    ErrorResponse.ErrorCode.BAD_PARAMS,
                                    "Bad param set sent to 'print' command.",
                                    e.getStackTrace()
                            ));
                            e.printStackTrace();
                        } catch (Exception e) {
                            callbackContext.error(new ErrorResponse(
                                    ErrorResponse.ErrorCode.CANNOT_CONNECT,
                                    "Unable to connect to printer.",
                                    e.getStackTrace()
                            ));
                            e.printStackTrace();
                        }
                    }
                });
                return true;
            } else if (action.equals("getDevices")) {
                List<HashMap> devices = getBluetoothDevices();
                JSONArray result = new JSONArray(devices);
                callbackContext.success(result);
                return true;
            } else if (action.equals("selectDevice")) {
                try
                {
                    JSONObject options = args.getJSONObject(0);
                    JSONObject device = options.getJSONObject("device");
                    setCurrentDriver(device);
                    callbackContext.success();
                }
                catch (JSONException e)
                {
                    callbackContext.error(new ErrorResponse(
                            ErrorResponse.ErrorCode.BAD_PARAMS,
                            "Bad param set sent to 'selectDevice' command.",
                            e.getStackTrace()
                    ));
                    e.printStackTrace();
                }
                return true;
            }
            else if (action.equals("feedPage"))
            {
                cordova.getThreadPool().execute(new Runnable() {
                    @Override
                    public void run() {
                        try {
                            currentDriver.connect();
                            currentDriver.feedPage();
                            callbackContext.success();
                        } catch (Exception e) {
                            callbackContext.error(new ErrorResponse(
                                    ErrorResponse.ErrorCode.CANNOT_CONNECT,
                                    "Unable to connect to printer.",
                                    e.getStackTrace()
                            ));
                            e.printStackTrace();
                        }
                    }
                });
                return true;
            } else {
                callbackContext.error(new ErrorResponse(
                        ErrorResponse.ErrorCode.UNKNOWN_ACTION,
                        "No action, '" + action + "', in plugin package Printer",
                        null
                ));
                return false;
            }
        }
        catch (Exception ex)
        {
            callbackContext.error(new ErrorResponse(
                    ErrorResponse.ErrorCode.PRINT_ERROR,
                    "Java exception: " +
                            ex.getClass().getSimpleName() + " " + ex.getMessage(),
                    ex.getStackTrace()
            ));
            ex.printStackTrace();
            return false;
        }
    }

    private boolean setCurrentDriver(JSONObject device) throws Exception
    {
        Class[] paramString = new Class[1];
        paramString[0] = String.class;
        String name = device.getString("name");
        String address = device.getString("address");
        for (String driver : drivers)
        {
            Class c = Class.forName(driver);
            Method m = c.getDeclaredMethod("detectDevice", paramString);
            // Invoke the method and cast the result to a boolean
            boolean detected = Boolean.valueOf(m.invoke(null, name).toString());
            if (detected)
            {
                currentDriver = (Driver) c.getConstructor().newInstance();
                currentDriver.address = address;
                return true;
            }
        }
        throw new Exception("Could not load Driver for: " + name);
    }

    /** Converts Bluetooth Address string from 00ABCDEF0102 format => 00:AB:CD:EF:01:02 format
     * @param bluetoothAddr - Bluetooth Address string to convert
     */
    public String formatBluetoothAddress(String bluetoothAddr) throws Exception {
        //Check if user enter bluetooth address with following format: 00ABCDEF0102
        Pattern pattern = Pattern.compile(bluetoothAddressFormat);
        Matcher matcher = pattern.matcher(bluetoothAddr);
        if (matcher.matches()) {
            //Format MAC address string
            StringBuilder formattedBTAddress = new StringBuilder(bluetoothAddr);
            for (int bluetoothAddrPosition = 2; bluetoothAddrPosition <= formattedBTAddress.length() - 2; bluetoothAddrPosition += 3)
                formattedBTAddress.insert(bluetoothAddrPosition, ":");

            //Validate the bluetooth address
            if (!BluetoothAdapter.checkBluetoothAddress(bluetoothAddr)) {
                throw new Exception("Invalid Bluetooth Address format");
            }
            return formattedBTAddress.toString();
        } else {
            return bluetoothAddr;
        }
    }

    //BLuetooth Address format (eg. 0017AC0151B9
    private String bluetoothAddressFormat = "[0-9A-Fa-f]{12}";

    /** Returns a hash map of Bluetooth devices paired with the default adapter
     * 
     * @return
     */
    private List<HashMap> getBluetoothDevices() {
        BluetoothAdapter mBluetoothAdapter = BluetoothAdapter.getDefaultAdapter();
        Set<BluetoothDevice> pairedDevices = mBluetoothAdapter.getBondedDevices();
        List<HashMap> devices = new ArrayList();
        for(BluetoothDevice bt : pairedDevices)
        {
            HashMap item = new HashMap();
            item.put("name", bt.getName());
            item.put("address", bt.getAddress());
            devices.add(item);
        }
        return devices;
    }

    static class ErrorResponse extends JSONObject
    {
        public enum ErrorCode {
            NONE,
            BAD_PARAMS,
            CANNOT_CONNECT,
            NO_DRIVER_SELECTED,
            PRINT_ERROR,
            UNKNOWN_ACTION
        }

        public ErrorResponse(ErrorCode code, String message, StackTraceElement[] stackTrace)
        {
            try {
                this.put("code", code);
                this.put("message", message);
                this.put("stackTrace", stackTrace);
            } catch (JSONException e) {
                e.printStackTrace();
            }
        }
    }

}
