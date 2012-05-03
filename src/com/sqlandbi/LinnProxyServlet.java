package com.sqlandbi;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.MalformedURLException;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.tools.ant.filters.StringInputStream;


@SuppressWarnings("serial")
public class LinnProxyServlet extends HttpServlet {
	public void doGet(HttpServletRequest req, HttpServletResponse resp)
			throws IOException {
		resp.setContentType("text/plain");
		PrintWriter respWriter = resp.getWriter();
		
		try {
			
			InputStream in = req.getInputStream();
			InputStreamReader is = new InputStreamReader(in);
			BufferedReader br = new BufferedReader(is);
			String read = br.readLine();
			StringBuilder input = new StringBuilder();
			System.out.println("string req body");
			while(read != null) {
			    input.append(read);
			    read = br.readLine();
			}
			System.out.println(input);
			System.out.println("string req body ends");
			URLResponseRetriever retriever = new URLResponseRetriever();
			
			
			retriever.printUrlResponse(input, respWriter);
            
        } catch (MalformedURLException e) {
            e.printStackTrace();
        } catch (IOException e) {
            // ...
        	e.printStackTrace();
        }
	}

	public void doPost(HttpServletRequest req, HttpServletResponse resp)
			throws IOException {
		this.doGet(req, resp);
	}
}
