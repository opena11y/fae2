package org.fae.util;

import java.io.IOException;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.Vector;

import org.fae.util.FaeUtil.NoOpIncListener;

import com.gargoylesoftware.htmlunit.AlertHandler;
import com.gargoylesoftware.htmlunit.BrowserVersion;
import com.gargoylesoftware.htmlunit.FailingHttpStatusCodeException;
import com.gargoylesoftware.htmlunit.Page;
import com.gargoylesoftware.htmlunit.RefreshHandler;
import com.gargoylesoftware.htmlunit.SilentCssErrorHandler;
import com.gargoylesoftware.htmlunit.WebClient;
import com.gargoylesoftware.htmlunit.html.HtmlPage;

/** Testing class. Not used during normal processing.  */
public class DepthTest {

  // ==============================================================================================
  // ==============================================================================================
  public static void main(String[] args) {
    try {
      FaeUtil faeUtil = new FaeUtil();

      WebClient webClient = new WebClient(BrowserVersion.FIREFOX_78);

      // Suppress CSS, HTML Parser and Incorrectness warnings and errors
      webClient.setCssErrorHandler(new SilentCssErrorHandler());
      webClient.setHTMLParserListener(null);
      webClient.setIncorrectnessListener(new NoOpIncListener());

      // Disallow exceptions of these types when getPage() is called
      webClient.getOptions().setThrowExceptionOnFailingStatusCode(false);
      webClient.setRefreshHandler(new RefreshHandler() {
        public void handleRefresh(Page page, URL url, int arg)
          throws IOException {
        }
      });

      // Add alert handler
      webClient.setAlertHandler(new AlertHandler() {
        public void handleAlert(Page page, String message) {
          System.out.println("alert: " + message);
        }
      });

      // Set a ScriptPreProcessor to not process problem JavaScript
      webClient.setScriptPreProcessor(new ScriptPreprocessor(faeUtil));

      webClient.getOptions().setThrowExceptionOnScriptError(false);
      webClient.getOptions().setUseInsecureSSL(true); // JSH added

      m_doNotRead.add("http://msn.com/");

      faeUtil.m_extensionsToNotProcess.add("pdf");
      faeUtil.m_extensionsToNotProcess.add("xml");

      String url_str = "http://illinois.edu/";
      URL url = new URL(url_str);
      m_host = url.getHost();
      System.out.println("m_host: " + m_host);

      System.out.println("MAX_DEPTH: " + MAX_DEPTH);

      //DepthTest.diveIn(webClient, "http://localhost/dresSample.html", 1);
      //DepthTest.diveIn(webClient, "http://business.nd.edu/accountancy/", 1, "http://business.nd.edu/");
      DepthTest.diveIn(faeUtil, webClient, "http://illinois.edu/", 1, "http://illinois.edu/");

      for (String urlRead : m_urlsRead) {
        System.out.println("read => " + urlRead);
      }
    }
    catch (Exception e) {
      e.printStackTrace();
    }
  }

  static private String m_host = null;
  static private Vector<String> m_doNotRead = new Vector();

  static private int MAX_DEPTH = 2;

  static int m_urlCount = 0;
  static Vector<String> m_urlsRead = new Vector();

  // ==============================================================================================
  // ==============================================================================================
  public static void diveIn(FaeUtil faeUtil, WebClient webClient, String url, int depth, String baseURL)
    throws FailingHttpStatusCodeException, MalformedURLException, IOException {
    if (m_urlsRead.contains(url))
      return;
    if (depth > MAX_DEPTH)
      return;

    if (m_host != null && m_host.length() > 0)
      if (url.indexOf("//" + m_host) == -1)
        return;

    int myUrlNum = m_urlCount;
    m_urlCount++;

    m_urlsRead.add(url);

    System.out.println("====================================================================");
    System.out.println(myUrlNum + ": reading " + url + " (" + depth + ":" + baseURL + ")");
    HtmlPage page = webClient.getPage(new URL(url));
    //AInspector.dumpNode(page);

    // if going to go past MAX_DEPTH then don't bother
    if ((depth + 1) <= MAX_DEPTH) {
      int cnt = 1;
      Vector<String> urls = new Vector();
      faeUtil.findLinks(page, "", urls);
      for (String found : urls) {
        String newBase = baseURL;
        if (found.startsWith("http"))
          newBase = found;

        System.out.println(myUrlNum + ":" + cnt + ": depth:" + depth + ": found1 " + found);
        if (found.startsWith("/"))
          found = baseURL.toString() + found.substring(1);
        System.out.println(myUrlNum + ":" + cnt + ": depth:" + depth + ": found2 " + found);

        boolean readIt = true;
        for (String doNotRead : DepthTest.m_doNotRead) {
          if (found.startsWith(doNotRead))
            readIt = false;
        }
        if (!m_urlsRead.contains(found)) {
          if (readIt)
            DepthTest.diveIn(faeUtil, webClient, found, depth + 1, newBase);
          else
            System.out.println(myUrlNum + ":" + cnt + ": depth:" + depth + ": NOT READING");
        }
        else
          System.out.println(myUrlNum + ":" + cnt + ": depth:" + depth + ": ALREADY READ");

        cnt++;
      }
    }
  }

  // ==============================================================================================
  // ==============================================================================================
  //  public static void findLinks(DomNode parent, String indent, Vector<String> urls) {
  //    //System.out.println("Num children: " + parent.getChildren());
  //    for (DomNode node : parent.getChildren()) {
  //      if (node instanceof HtmlAnchor) {
  //        HtmlAnchor tmp = (HtmlAnchor) node;
  //        if (tmp.getHrefAttribute() != null && tmp.getHrefAttribute().trim().length() > 0 && !tmp.getHrefAttribute().equals("/") && !tmp.getHrefAttribute().startsWith("..") && !tmp.getHrefAttribute().startsWith("#") && !tmp.getHrefAttribute().startsWith("mailto") && !tmp.getHrefAttribute().startsWith("tel")) {
  //          System.out.println(tmp + ": " + tmp.getHrefAttribute());
  //          //System.out.println(indent + tmp + ": " + tmp.getHrefAttribute());
  //          urls.add(tmp.getHrefAttribute());
  //        }
  //      }
  //      findLinks(node, indent + "\t", urls);
  //    }
  //  }

}
