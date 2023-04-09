import { Repo } from "."

export const javaRepo: Repo = {
	label: "Java",
	url: "https://github.com/openjdk/jdk",
	files: [
		{
		 path: "/src/java.base/windows/classes/java/lang/Terminator.java",
		 code:`
		 	package java.lang;

import jdk.internal.misc.Signal;

class Terminator {

    private static Signal.Handler handler = null;


    static void setup() {
        if (handler != null) return;
        Signal.Handler sh = new Signal.Handler() {
            public void handle(Signal sig) {
                Shutdown.exit(sig.getNumber() + 0200);
            }
        };
        handler = sh;

        try {
            Signal.handle(new Signal("INT"), sh);
        } catch (IllegalArgumentException e) {
        }
        try {
            Signal.handle(new Signal("TERM"), sh);
        } catch (IllegalArgumentException e) {
        }
    }

    static void teardown() {
    }

}
		 `
		},
		{
		 path: "/src/jdk.httpserver/windows/classes/sun/net/httpserver/simpleserver/URIPathSegment.java",
		 code:`
		 	package sun.net.httpserver.simpleserver;

/**
 * A class that represents a URI path segment.
 */
final class URIPathSegment {

    private URIPathSegment() { throw new AssertionError(); }

    /**
     * Checks if the segment of a URI path is supported. For example,
     * "C:" is supported as a drive on Windows only.
     *
     * @param segment the segment string
     * @return true if the segment is supported
     */
    static boolean isSupported(String segment) {
        // apply same logic as WindowsPathParser
        if (segment.length() >= 2 && isLetter(segment.charAt(0)) && segment.charAt(1) == ':') {
            return false;
        }
        return true;
    }

    private static boolean isLetter(char c) {
        return ((c >= 'a') && (c <= 'z')) || ((c >= 'A') && (c <= 'Z'));
    }
}

		 `
		 	},


	]
	}
