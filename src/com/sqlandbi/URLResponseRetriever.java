package com.sqlandbi;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.PrintWriter;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.ProtocolException;
import java.net.URL;
import java.net.URLEncoder;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

public class URLResponseRetriever {
	
	public void printUrlResponse(StringBuilder encoded, PrintWriter respWriter)
			throws MalformedURLException, IOException, ProtocolException {
		String charset = "UTF-8";
		System.out.println(encoded);
		System.out.println(encoded.length());
		
		String baseUrl = "http://50.57.145.54:8089/Json2/WcfServices/WellProfitabilitySvc.svc/ProfitabilityWell";
		URL url = new URL(baseUrl);
		HttpURLConnection connection = (HttpURLConnection) url.openConnection();
		connection.setDoOutput(true);
		connection.setRequestMethod("POST");
		connection.setRequestProperty("Accept-Charset", charset);
		connection.setRequestProperty("Content-Length", "" + encoded.length());
		connection.setRequestProperty("Content-Type", "application/json;charset=" + charset);
		OutputStream os = connection.getOutputStream();
		os.write( encoded.toString().getBytes(charset));

		System.out.println("responsecode: "  + connection.getResponseCode());
		//if (connection.getResponseCode() == HttpURLConnection.HTTP_OK) {
		BufferedReader reader = null;
		InputStreamReader streamreader = null;
		try {
			streamreader = new InputStreamReader(connection.getInputStream());
		    reader = new BufferedReader(streamreader);
		    for (String line; (line = reader.readLine()) != null;) {
		    	respWriter.print(line);
		    }
		} catch(Exception e) {
			e.printStackTrace();
		} finally {
			streamreader.close();
			reader.close();
		}
		//} else {
			//respWriter.println("Error");
		//}
	}
}