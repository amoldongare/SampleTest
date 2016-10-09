package com.meterfeederapp.plugin.printer;

import android.content.res.AssetManager;

import org.json.JSONObject;

import java.io.IOException;

import datamaxoneil.connection.ConnectionBase;

public abstract class Driver
{
    public ConnectionBase connection;

    public String address;

    public abstract boolean printDocument(JSONObject fields);

    public abstract void feedPage();

    public abstract boolean connect() throws Exception;

    static public String MANUFACTURER_NAME;
}
