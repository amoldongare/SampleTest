package com.meterfeederapp.plugin.printer;

import android.content.res.AssetManager;
import android.graphics.Bitmap;

/*
import org.apache.pdfbox.cos.COSStream;
import org.apache.pdfbox.cos.COSString;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.pdmodel.PDDocumentCatalog;
import org.apache.pdfbox.pdmodel.PDPage;
import org.apache.pdfbox.pdmodel.interactive.form.PDAcroForm;
import org.apache.pdfbox.pdmodel.interactive.form.PDField;
import org.apache.pdfbox.pdmodel.interactive.form.PDFieldTreeNode;
import org.apache.pdfbox.rendering.PDFRenderer;
*/
import java.io.IOException;
import java.io.InputStream;
import java.util.Iterator;
import java.util.List;

/**
 * Created by danl on 12/20/15.
 */
public class Ticket {
/*
    private PDDocument _pdfDocument = null;

    public Ticket(AssetManager assetManager)
    {
        try
        {
            InputStream stream = assetManager.open("DefaultTicket.pdf");
            _pdfDocument = PDDocument.load(stream);
            printFields();
        }
        catch (IOException e)
        {
            e.printStackTrace();
        }

    }

    public Bitmap convertToBitmap()
    {
        PDFRenderer renderer = new PDFRenderer(_pdfDocument);
        Bitmap page = null;

        try
        {
            page = renderer.renderImage(0);
        }
        catch (IOException e)
        {
            e.printStackTrace();
        }

        return page;
    }

    public void printFields() throws IOException
    {
        PDDocumentCatalog docCatalog = _pdfDocument.getDocumentCatalog();
        PDAcroForm acroForm = docCatalog.getAcroForm();
        List fields = acroForm.getFields();
        Iterator fieldsIter = fields.iterator();

        System.out.println(new Integer(fields.size()).toString() + " top-level fields were found on the form");

        while( fieldsIter.hasNext()) {
            PDField field = (PDField)fieldsIter.next();
            processField(field, "|--", field.getPartialName());
        }
    }
    private void processField(PDField field, String sLevel, String sParent) throws IOException
    {
        List kids = field.getKids();
        if(kids != null) {
            Iterator kidsIter = kids.iterator();
            if(!sParent.equals(field.getPartialName())) {
                sParent = sParent + "." + field.getPartialName();
            }

            System.out.println(sLevel + sParent);

            while(kidsIter.hasNext()) {
                Object pdfObj = kidsIter.next();
                if(pdfObj instanceof PDField) {
                    PDField kid = (PDField)pdfObj;
                    processField(kid, "|  " + sLevel, sParent);
                }
            }
        }
        else {
            String outputString = sLevel + sParent + "." + field.getPartialName() + ",  type=" + field.getClass().getName();
            System.out.println(outputString);
        }
    }

    public void setField(String name, String value) throws IOException {
        PDDocumentCatalog docCatalog = _pdfDocument.getDocumentCatalog();
        PDAcroForm acroForm = docCatalog.getAcroForm();
        PDFieldTreeNode field = acroForm.getField(name);

        System.out.println(String.format("Setting: '%s' to '%s'", name, value));

        if( field != null ) {
            field.setValue(value);
        }
        else {
            System.err.println( "No field found with name:" + name );
        }
    }
    */
}
/*

public class Populater {

	private static PDDocument _pdfDocument;

	public static void main(String[] args) {

		String originalPdf = "C:\\blah\\blah\\input.PDF";
		String targetPdf = "C:\\blah\\blah\\input.PDF";

		try {
			populateAndCopy(originalPdf, targetPdf);
		} catch (IOException | COSVisitorException e) {
			e.printStackTrace();
		}

		System.out.println("Complete");
	}

	private static void populateAndCopy(String originalPdf, String targetPdf) throws IOException, COSVisitorException {
		_pdfDocument = PDDocument.load(originalPdf);

		_pdfDocument.getNumberOfPages();
		//printFields();  //Uncomment to see the fields in this document in console

		setField("SomeFieldName", "SomeFieldValue");
		_pdfDocument.save(targetPdf);
		_pdfDocument.close();
	}

    public static void setField(String name, String value ) throws IOException {
        PDDocumentCatalog docCatalog = _pdfDocument.getDocumentCatalog();
        PDAcroForm acroForm = docCatalog.getAcroForm();
        PDField field = acroForm.getField( name );
        if( field != null ) {
            field.setValue(value);
        }
        else {
            System.err.println( "No field found with name:" + name );
        }
    }

    @SuppressWarnings("rawtypes")
	public static void printFields() throws IOException {
        PDDocumentCatalog docCatalog = _pdfDocument.getDocumentCatalog();
        PDAcroForm acroForm = docCatalog.getAcroForm();
        List fields = acroForm.getFields();
        Iterator fieldsIter = fields.iterator();

        System.out.println(new Integer(fields.size()).toString() + " top-level fields were found on the form");

        while( fieldsIter.hasNext()) {
            PDField field = (PDField)fieldsIter.next();
               processField(field, "|--", field.getPartialName());
        }
    }

    @SuppressWarnings("rawtypes")
	private static void processField(PDField field, String sLevel, String sParent) throws IOException
    {
        List kids = field.getKids();
        if(kids != null) {
            Iterator kidsIter = kids.iterator();
            if(!sParent.equals(field.getPartialName())) {
               sParent = sParent + "." + field.getPartialName();
            }

            System.out.println(sLevel + sParent);

            while(kidsIter.hasNext()) {
               Object pdfObj = kidsIter.next();
               if(pdfObj instanceof PDField) {
                   PDField kid = (PDField)pdfObj;
                   processField(kid, "|  " + sLevel, sParent);
               }
            }
         }
         else {
             String outputString = sLevel + sParent + "." + field.getPartialName() + ",  type=" + field.getClass().getName();
             System.out.println(outputString);
         }
    }
}
 */


