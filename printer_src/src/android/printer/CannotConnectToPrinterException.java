package com.meterfeederapp.plugin.printer;

/**
 * Created by danl on 8/10/15.
 */
public class CannotConnectToPrinterException extends Exception {

    /**
     * Constructs a new {@code CannotConnectToPrinterException} that includes the
     * current stack trace.
     */
    public CannotConnectToPrinterException() {
    }

    /**
     * Constructs a new {@code CannotConnectToPrinterException} with the current
     * stack trace and the specified detail message.
     *
     * @param detailMessage
     *            the detail message for this exception.
     */
    public CannotConnectToPrinterException(String detailMessage) {
        super(detailMessage);
    }

    /**
     * Constructs a new {@code CannotConnectToPrinterException} with the current
     * stack trace, the specified detail message and the specified cause.
     *
     * @param message
     *            the detail message for this exception.
     * @param cause
     *            the optional cause of this exception, may be {@code null}.
     * @since 1.5
     */
    public CannotConnectToPrinterException(String message, Throwable cause) {
        super(message, cause);
    }

    /**
     * Constructs a new {@code CannotConnectToPrinterException} with the current
     * stack trace and the specified cause.
     *
     * @param cause
     *            the optional cause of this exception, may be {@code null}.
     * @since 1.5
     */
    public CannotConnectToPrinterException(Throwable cause) {
        super((cause == null ? null : cause.toString()), cause);
    }
}
