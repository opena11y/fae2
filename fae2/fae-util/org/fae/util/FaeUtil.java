package org.fae.util;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.DataInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.ArrayList;
import java.util.Enumeration;
import java.util.Hashtable;
import java.util.Locale;
import java.util.Properties;
import java.util.ResourceBundle;
import java.util.Vector;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.xpath.XPathConstants;
import javax.xml.xpath.XPathExpression;
import javax.xml.xpath.XPathFactory;
import javax.xml.xpath.XPath;

import org.apache.commons.logging.LogFactory;
import org.apache.log4j.ConsoleAppender;
import org.apache.log4j.Level;
import org.apache.log4j.Logger;
import org.apache.log4j.PatternLayout;
import org.w3c.dom.NamedNodeMap;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;
import org.w3c.dom.Document;

import com.gargoylesoftware.htmlunit.AlertHandler;
import com.gargoylesoftware.htmlunit.BrowserVersion;
import com.gargoylesoftware.htmlunit.IncorrectnessListener;
import com.gargoylesoftware.htmlunit.Page;
import com.gargoylesoftware.htmlunit.RefreshHandler;
import com.gargoylesoftware.htmlunit.ScriptResult;
import com.gargoylesoftware.htmlunit.SilentCssErrorHandler;
import com.gargoylesoftware.htmlunit.WebClient;
import com.gargoylesoftware.htmlunit.html.DomNode;
import com.gargoylesoftware.htmlunit.html.HtmlAnchor;
import com.gargoylesoftware.htmlunit.html.HtmlElement;

/**
 * FaeUtil
 *
 * Initialize and store the following:
 *   1. Either a single URL or a list of URLs (a list takes precedence)
 *   2. Concatenated scripts
 *   3. Name of directory to store results
 *   4. Reference to WebClient object
 *
 * Provide the following functionality:
 *   1. Iteratively call getPage for each URL to get its DOM object
 *   2. Execute JavaScript on each DOM object and get ScriptResult object
 *   3. Save the results From each ScriptResult object in specified directory
 */
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
class FaeUtil {

  private static String VERSION = "1.3";

  // ==============================================================================================
  public static void main(String args[]) {
    System.out.println("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
    System.out.println(" ===== FaeUtil, Version:" + VERSION + " ===== ");

    String homeDir = System.getenv("FAE_HOME");
    System.out.println("FAE_HOME: " + homeDir);
    if (homeDir == null || homeDir.length() == 0) {
      System.err.println(configError);
      System.err.println("FAE_HOME not set, exiting");
      System.err.println(EXITING);
      System.exit(1);
    }

    // ------------------------------------------------------------------------
    // ------------------------------------------------------------------------
    // Set Log4j loggers
    //Category logger = Category.getRoot();
    Logger logger = Logger.getRootLogger();
    //logger.setLevel(Level.DEBUG);
    logger.setLevel(Level.INFO);
    //logger.addAppender(new ConsoleAppender(new SimpleLayout()));
    logger.addAppender(new ConsoleAppender(new PatternLayout("|%c|%5p| %m%n")));
    //logger = Category.getInstance(WebClient.class);
    logger = Logger.getLogger(WebClient.class);
    logger.setLevel(Level.INFO);
    //logger = Category.getInstance("com.gargoylesoftware.htmlunit");
    //logger.setLevel(Level.DEBUG);
    //logger = Category.getInstance("com.gargoylesoftware.htmlunit.javascript.configuration.JavaScriptConfiguration");
    //logger.setLevel(Level.DEBUG);

    //Load url data in xml to Vector
    try {
      m_args = args;
      //m_ctrl.readArgs(args);
      //JAVASCRIPT = m_ctrl.JAVA_SCRIPT;
      loadAuthorizationXML();
    }
    catch (Exception e) {
      //e.printStackTrace();
    }

    FaeUtil faeUtil = new FaeUtil();

    //    try {
    //      WebClient webClient = new WebClient(BrowserVersion.FIREFOX_17);
    //      faeUtil.initWebClient(webClient);
    //      webClient.getOptions().setPrintContentOnFailingStatusCode(false);
    //      webClient.getOptions().setThrowExceptionOnScriptError(false);
    //      webClient.getOptions().setUseInsecureSSL(true); // JSH added
    //      System.out.println("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
    //      System.out.println("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
    //      HtmlPage page = webClient.getPage("http://www.webaim.org/"); // 301
    //      System.out.println(" &&&&& " + page.getWebResponse());
    //      System.out.println(" &&&&& " + page.getWebResponse().getStatusCode());
    //      System.out.println(" &&&&& " + page.getWebResponse().getStatusMessage());
    //      System.out.println(" &&&&& " + page.getWebResponse().getWebRequest().getUrl());
    //      System.out.println("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
    //      System.out.println("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
    //      page = webClient.getPage("http://www.section508.gov/index.cfm?FuseAction=Content&ID=5"); // 404
    //      System.out.println(" &&&&& " + page.getWebResponse());
    //      System.out.println(" &&&&& " + page.getWebResponse().getStatusCode());
    //      System.out.println(" &&&&& " + page.getWebResponse().getStatusMessage());
    //      System.out.println(" &&&&& " + page.getWebResponse().getWebRequest().getUrl());
    //      System.out.println("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
    //      System.out.println("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
    //      page = webClient.getPage("http://msn.com/");
    //      System.out.println(" &&&&& " + page.getWebResponse());
    //      System.out.println(" &&&&& " + page.getWebResponse().getStatusCode());
    //      System.out.println(" &&&&& " + page.getWebResponse().getStatusMessage());
    //      System.out.println(" &&&&& " + page.getWebResponse().getWebRequest().getUrl());
    //    }
    //    catch (Exception e) {
    //      e.printStackTrace();
    //    }

    faeUtil.doIt(args);
  }

  // ==============================================================================================
  public FaeUtil() {
    // ------------------------------------------------------------------------
    // ------------------------------------------------------------------------
    // Setup events
    events.put("onload", "oaa-has-load");

    events.put("onchange", "oaa-has-change");

    events.put("onclick", "oaa-has-click");
    events.put("ondblclick", "oaa-has-double_click");

    events.put("onblur", "oaa-has-blur");
    events.put("onfocus", "oaa-has-focus");

    events.put("onkeydown", "oaa-has-key_down");
    events.put("onkeypress", "oaa-has-key_press");
    events.put("onkeyup", "oaa-has-key_up");

    events.put("onmousedown", "oaa-has-mouse_down");
    events.put("onmouseup", "oaa-has-mouse_up");
    events.put("onmousemove", "oaa-has-mouse_move");
    events.put("onmouseout", "oaa-has-mouse_out");
    events.put("onmouseover", "oaa-has-mouse_over");

    events.put("ondrag", "oaa-has-drag");
    events.put("ondragend", "oaa-has-drag_end");
    events.put("ondragenter", "oaa-has-drag_enter");
    events.put("ondragleave", "oaa-has-drag_leave");
    events.put("ondragover", "oaa-has-drag_over");
    events.put("ondragstart", "oaa-has-drag_start");
    events.put("ondrop", "oaa-has-drop");
  }

  // ==============================================================================================
  public void doIt(String args[]) {
    String homeDir = System.getenv("FAE_HOME");

    // ------------------------------------------------------------------------
    // ------------------------------------------------------------------------
    // Read properties file
    ResourceBundle resources = ResourceBundle.getBundle("faeUtil", new Locale("", ""));
    m_props = new Properties();
    Enumeration keys = resources.getKeys();
    System.out.println(" ----------------------------------------------------- ");
    System.out.println("from properties file");
    while (keys.hasMoreElements()) {
      String key = keys.nextElement().toString();
      String value = resources.getString(key);
      m_props.put(key, value);
      System.out.println("\t" + key + "=>" + value);
    }

    // preset Controller options
    //m_ctrl = new Controller("java org.fae.util.FaeUtil <options>");
    //ctrl.dump("after create");
    if (m_props.containsKey(m_ctrl.browserVersion.getLongOpt()))
      m_ctrl.BROWSER_VERSION = m_props.getProperty(m_ctrl.browserVersion.getLongOpt());
    m_props.remove(m_ctrl.browserVersion.getLongOpt());
    if (m_props.containsKey(m_ctrl.wait.getLongOpt()))
      m_ctrl.WAIT = m_props.getProperty(m_ctrl.wait.getLongOpt());
    m_props.remove(m_ctrl.wait.getLongOpt());
    /*if (m_props.containsKey(m_ctrl.evaluationLevels.getLongOpt()))
      m_ctrl.EVALUATION_LEVELS = m_props.getProperty(m_ctrl.evaluationLevels.getLongOpt());
    m_props.remove(m_ctrl.evaluationLevels.getLongOpt());*/
    if (m_props.containsKey(m_ctrl.ruleset.getLongOpt()))
      m_ctrl.RULESET = m_props.getProperty(m_ctrl.ruleset.getLongOpt());
    m_props.remove(m_ctrl.ruleset.getLongOpt());
    //ctrl.dump("after set from properties file");

    // ------------------------------------------------------------------------
    // ------------------------------------------------------------------------
    // Consume the command line arguments
    m_ctrl.readArgs(args);
    //ctrl.dump("after consume command line 1");

    // ------------------------------------------------------------------------
    // ------------------------------------------------------------------------
    // Read configuration file
    if (m_ctrl.CONFIG_FILE != null && m_ctrl.CONFIG_FILE.length() > 0) {
      try {
        //m_props = new Properties();
        m_props.load(new FileInputStream(m_ctrl.CONFIG_FILE));

        // override command line options
        if (m_props.containsKey(m_ctrl.browserVersion.getLongOpt()))
          m_ctrl.BROWSER_VERSION = m_props.getProperty(m_ctrl.browserVersion.getLongOpt());
        m_props.remove(m_ctrl.browserVersion.getLongOpt());
        if (m_props.containsKey(m_ctrl.depth.getLongOpt()))
          m_ctrl.DEPTH = m_props.getProperty(m_ctrl.depth.getLongOpt());
        m_props.remove(m_ctrl.depth.getLongOpt());
        if (m_props.containsKey(m_ctrl.groups.getLongOpt()))
            m_ctrl.GROUPS = m_props.getProperty(m_ctrl.groups.getLongOpt());
        m_props.remove(m_ctrl.groups.getLongOpt());
        if (m_props.containsKey(m_ctrl.inputFile.getLongOpt()))
          m_ctrl.INPUT_FILE = m_props.getProperty(m_ctrl.inputFile.getLongOpt());
        m_props.remove(m_ctrl.inputFile.getLongOpt());
        if (m_props.containsKey(m_ctrl.outputDirectory.getLongOpt()))
          m_ctrl.OUTPUT_DIRECTORY = m_props.getProperty(m_ctrl.outputDirectory.getLongOpt());
        m_props.remove(m_ctrl.outputDirectory.getLongOpt());
        if (m_props.containsKey(m_ctrl.scripts.getLongOpt()))
          m_ctrl.SCRIPTS_FILE = m_props.getProperty(m_ctrl.scripts.getLongOpt());
        m_props.remove(m_ctrl.scripts.getLongOpt());
        if (m_props.containsKey(m_ctrl.singleUrl.getLongOpt()))
          m_ctrl.SINGLE_URL = m_props.getProperty(m_ctrl.singleUrl.getLongOpt());
        m_props.remove(m_ctrl.singleUrl.getLongOpt());
        if (m_props.containsKey(m_ctrl.wait.getLongOpt()))
          m_ctrl.WAIT = m_props.getProperty(m_ctrl.wait.getLongOpt());
        m_props.remove(m_ctrl.wait.getLongOpt());

        if (m_props.containsKey(m_ctrl.excludeDomains.getLongOpt()))
          m_ctrl.EXCLUDE_DOMAINS = m_props.getProperty(m_ctrl.excludeDomains.getLongOpt());
        m_props.remove(m_ctrl.excludeDomains.getLongOpt());
        if (m_props.containsKey(m_ctrl.includeDomains.getLongOpt()))
          m_ctrl.INCLUDE_DOMAINS = m_props.getProperty(m_ctrl.includeDomains.getLongOpt());
        m_props.remove(m_ctrl.includeDomains.getLongOpt());
        if (m_props.containsKey(m_ctrl.spanDomains.getLongOpt()))
          m_ctrl.SPAN_DOMAINS = m_props.getProperty(m_ctrl.spanDomains.getLongOpt());
        m_props.remove(m_ctrl.spanDomains.getLongOpt());

        /*if (m_props.containsKey(m_ctrl.evaluationLevels.getLongOpt()))
          m_ctrl.EVALUATION_LEVELS = m_props.getProperty(m_ctrl.evaluationLevels.getLongOpt());
        m_props.remove(m_ctrl.evaluationLevels.getLongOpt());*/
        if (m_props.containsKey(m_ctrl.ruleset.getLongOpt()))
          m_ctrl.RULESET = m_props.getProperty(m_ctrl.ruleset.getLongOpt());
        m_props.remove(m_ctrl.ruleset.getLongOpt());
        if (m_props.containsKey(m_ctrl.javaScript.getLongOpt()))
          m_ctrl.JAVA_SCRIPT = m_props.getProperty(m_ctrl.javaScript.getLongOpt());
        m_props.remove(m_ctrl.javaScript.getLongOpt());
        if (m_props.containsKey(m_ctrl.exportOption.getLongOpt()))
            m_ctrl.EXPORT_OPTION = m_props.getProperty(m_ctrl.exportOption.getLongOpt());
        m_props.remove(m_ctrl.exportOption.getLongOpt());
        if (m_props.containsKey(m_ctrl.maxPages.getLongOpt()))
            m_ctrl.MAX_PAGES = m_props.getProperty(m_ctrl.maxPages.getLongOpt());
        m_props.remove(m_ctrl.maxPages.getLongOpt());
        if (m_props.containsKey(m_ctrl.path.getLongOpt()))
            m_ctrl.PATH = m_props.getProperty(m_ctrl.path.getLongOpt());
        m_props.remove(m_ctrl.path.getLongOpt());
        
      }
      catch (FileNotFoundException e) {
        e.printStackTrace();
        System.exit(0);
      }
      catch (IOException e) {
        e.printStackTrace();
        System.exit(0);
      }
    }

    // ------------------------------------------------------------------------
    // ------------------------------------------------------------------------
    // Consume the command line arguments again to overload configuration file
    m_ctrl.readArgs(args);
    //ctrl.dump("after consume command line 2");

    // ------------------------------------------------------------------------
    // ------------------------------------------------------------------------
    // Validate configuration
    //ctrl.dump("before validate");
    m_ctrl.validateInput();

    //    System.out.println("m_props");
    //    for (Object object : m_props.keySet()) {
    //      System.out.println("\t" + object + "=>" + m_props.get(object));
    //    }
    //    ctrl.dump("final");

    // ------------------------------------------------------------------------
    // ------------------------------------------------------------------------
    DEBUG = m_ctrl.DEBUG;
    //System.out.println("debug: " + DEBUG);
    VERBOSE = m_ctrl.VERBOSE;
    //System.out.println("verbose: " + VERBOSE);
    final String inputFile = m_ctrl.INPUT_FILE;
    final String singleUrl = m_ctrl.SINGLE_URL;

    //FaeUtil.m_traverseSubDomains = ctrl.SEARCH_SUBDOMAINS;
    if (m_ctrl.TEST_MODE) {
      System.out.println("RUNNING IN TEST MODE, NO EVENTS DETECTED OR SCRIPTS EVALUATED");
      URLProcessor.FIND_EVENTS = false;
      URLProcessor.EVAL_SCRIPT = false;

      //Category htmlUnit = Category.getInstance("com.gargoylesoftware");
      Logger htmlUnit = Logger.getLogger("com.gargoylesoftware");
      htmlUnit.setLevel(Level.OFF);
    }

    // ------------------------------------------------------------------------
    // ------------------------------------------------------------------------
    // Check that outputDirectory does not already exist and can be created.
    // If both conditions are not met, exit with error message.
    try {
      //System.out.println("outputDir: " + ctrl.OUTPUT_DIRECTORY);
      if (!initOutputDirectory(m_ctrl.TEST_MODE, m_ctrl.OUTPUT_DIRECTORY)) {
        System.err.println(configError);
        System.err.println("Error: Directory " + m_ctrl.OUTPUT_DIRECTORY + " already exists or could not be created!");
        System.err.println(EXITING);
        System.exit(1);
      }
    }
    catch (Exception e) {
      displayException(e);
      System.err.println(EXITING);
      System.exit(1);
    }

    // ------------------------------------------------------------------------
    // ------------------------------------------------------------------------
    // Get URLs to not traverse
    String exUrl = m_props.getProperty("excludeUrls");
    if (exUrl == null || exUrl.length() == 0) {
      exUrl = homeDir + "/excludeURLs.txt";
    }
    File file = new File(exUrl);
    System.out.println("exUrl file: " + file);
    if (file.exists() && file.isFile()) {
      System.out.println("\treading " + file);
      try {
        FileInputStream fstream = new FileInputStream(file);
        DataInputStream in = new DataInputStream(fstream);
        BufferedReader br = new BufferedReader(new InputStreamReader(in));
        String strLine;
        //Read File Line By Line
        while ((strLine = br.readLine()) != null) {
          if (strLine.trim().length() > 0 && !strLine.startsWith("#")) {
            System.out.println("\t\tURL to not traverse: " + strLine);
            m_urlsToNotTraverse.add(strLine);
          }
        }
        //Close the input stream
        in.close();
      }
      catch (Exception e) {//Catch exception if any
        System.err.println("Error: " + e.getMessage());
      }
    }
    else {
      System.out.println(file + " not found, all URLs will be traversed");
    }

    // ------------------------------------------------------------------------
    // ------------------------------------------------------------------------
    // Get file extensions to ignore
    String exExt = m_props.getProperty("excludeExtensions");
    if (exExt == null || exExt.length() == 0) {
      exExt = homeDir + "/excludeExtensions.txt";
    }
    file = new File(exExt);
    System.out.println("exExt file: " + file);
    if (file.exists() && file.isFile()) {
      System.out.println("\treading " + file);
      try {
        FileInputStream fstream = new FileInputStream(file);
        DataInputStream in = new DataInputStream(fstream);
        BufferedReader br = new BufferedReader(new InputStreamReader(in));
        String strLine;
        //Read File Line By Line
        while ((strLine = br.readLine()) != null) {
          if (strLine.trim().length() > 0 && !strLine.startsWith("#")) {
            System.out.println("\t\tFile extension to not process: " + strLine);
            m_extensionsToNotProcess.add(strLine);
          }
        }
        //Close the input stream
        in.close();
      }
      catch (Exception e) {//Catch exception if any
        System.err.println("Error: " + e.getMessage());
      }
    }
    else {
      System.out.println(file + " not found, file extensions will be processed");
    }

    // ------------------------------------------------------------------------
    // ------------------------------------------------------------------------
    // Get URLs for JavaScript to not load
    if (m_props.getProperty("excludeScripts") != null && m_props.getProperty("excludeScripts").length() > 0) {
      file = new File(m_props.getProperty("excludeScripts"));
      System.out.println("skipFile file: " + file);
      if (file.exists() && file.isFile()) {
        System.out.println("reading " + file);
        try {
          FileInputStream fstream = new FileInputStream(file);
          DataInputStream in = new DataInputStream(fstream);
          BufferedReader br = new BufferedReader(new InputStreamReader(in));
          String strLine;
          //Read File Line By Line
          while ((strLine = br.readLine()) != null) {
            if (strLine.trim().length() > 0 && !strLine.startsWith("#")) {
              System.out.println("\tJavaScript URL to not process: " + strLine);
              m_javascriptUrlsToNotProcess.add(strLine);
            }
          }
          //Close the input stream
          in.close();
        }
        catch (Exception e) {//Catch exception if any
          System.err.println("Error: " + e.getMessage());
        }
      }
    }

    // ------------------------------------------------------------------------
    // ------------------------------------------------------------------------
    // Turn off all logging unless verbose option specified
    if (!VERBOSE)
      LogFactory.getFactory().setAttribute("org.apache.commons.logging.Log", "org.apache.commons.logging.impl.NoOpLog");

    // ------------------------------------------------------------------------
    // ------------------------------------------------------------------------
    if (m_ctrl.BROWSER_VERSION.equalsIgnoreCase("chrome")) {
      BROWSER_VERSION = BrowserVersion.CHROME;
    }
    else if (m_ctrl.BROWSER_VERSION.equalsIgnoreCase("ie")) {
      BROWSER_VERSION = BrowserVersion.INTERNET_EXPLORER;
    }
    else {
      BROWSER_VERSION = BrowserVersion.FIREFOX_78;
    }
    //System.out.println("browser version: " + BROWSER_VERSION.getNickname());

    // ------------------------------------------------------------------------
    // ------------------------------------------------------------------------
    //initWebClient(m_webClient);

    // ------------------------------------------------------------------------
    // ------------------------------------------------------------------------
    if (!m_ctrl.TEST_MODE) {
      //System.out.println("scriptsFile: " + ctrl.SCRIPTS_FILE);
      // Get the JavaScript to execute
      try {
        m_evaluationScript = FileUtil.concatenateFiles(m_ctrl.SCRIPTS_FILE, DEBUG);
      }
      catch (Exception e) {
        e.printStackTrace();
      }
      debug("evaluation script:\n" + m_evaluationScript);

      if (m_evaluationScript.indexOf("OpenAjax.a11y.RulesetManager.getRuleset") != -1) {
        StringBuffer script = new StringBuffer();
        /*script.append("var doc = window.document;" + NEWLINE);//old configuration
        script.append("var ruleset = OpenAjax.a11y.all_rulesets.getRuleset(\"" + m_ctrl.RULESET + "\");" + NEWLINE);
        script.append("ruleset.setEventHandlerProcessor(\"fae-util\");" + NEWLINE);
        script.append("var evaluation = ruleset.evaluate(doc.location.href, doc.title, doc, null, true);" + NEWLINE);
        script.append("var out = evaluation." + m_props.getProperty("exportFunction") + "();" + NEWLINE);
        script.append("out;" + NEWLINE);*/
        debug("OAA config script");
        script.append("var doc = window.document;" + NEWLINE);
        script.append("var ruleset = OpenAjax.a11y.RulesetManager.getRuleset(\"" + m_ctrl.RULESET + "\");" + NEWLINE);
        script.append("var evaluator_factory = OpenAjax.a11y.EvaluatorFactory.newInstance();"  + NEWLINE);
        script.append("evaluator_factory.setParameter('ruleset', ruleset);"  + NEWLINE);
        script.append("evaluator_factory.setFeature('eventProcessing', 'fae-util');"  + NEWLINE);
        script.append("evaluator_factory.setFeature('groups', " + m_ctrl.GROUPS + "); "  + NEWLINE);
        script.append("var evaluator = evaluator_factory.newEvaluator();" + NEWLINE);
        script.append("var evaluation = evaluator.evaluate(doc, doc.title, doc.location.href);" + NEWLINE);
        script.append("var out = evaluation." + m_props.getProperty("exportFunction") + "(" + m_ctrl.EXPORT_OPTION  + ");" + NEWLINE);
        script.append("out;" + NEWLINE);

        try {
          file = new File(OUTPUT_DIRECTORY + FILESEP + "oaa_a11y_config.js");
          System.out.println("writting to " + file);
          FileWriter fstream = new FileWriter(file);
          BufferedWriter out = new BufferedWriter(fstream);
          out.write(script.toString());
          out.close();
        }
        catch (IOException e) {
          e.printStackTrace();
        }

        m_evaluationScript += script.toString();
      }
    }

    //    if (inputFile != null)
    //      System.out.println("multiple URL: " + inputFile);
    //    else
    //      System.out.println("singleUrl: " + singleUrl);

    if (m_ctrl.DEPTH != null && m_ctrl.DEPTH.length() > 0)
      DEPTH = Integer.parseInt(m_ctrl.DEPTH);
    //System.out.println("depth: " + DEPTH);

    //    if (DEPTH > 1)
    //      FaeUtil.m_traverseSubDomains = true;
    //    System.out.println("traverseSubDomains: " + m_traverseSubDomains);

    if (m_ctrl.WAIT != null && m_ctrl.WAIT.length() > 0)
      WAIT = Integer.parseInt(m_ctrl.WAIT);
    //System.out.println("wait: " + WAIT);

    //System.out.println("excludeDomains => " + Controller.EXCLUDE_DOMAINS);
    //System.out.println("includeDomains => " + Controller.INCLUDE_DOMAINS);
    String incDomains_org = m_ctrl.INCLUDE_DOMAINS;
    if (incDomains_org == null)
      incDomains_org = "";
    //System.out.println("spanDomains => " + Controller.SPAN_DOMAINS);

    // ------------------------------------------------------------------------
    // ------------------------------------------------------------------------
    m_startTime = System.currentTimeMillis();
    try {
      if (inputFile != null) {
        m_urlsToProcess = FileUtil.getUrlList(inputFile);
      }
      else {
        m_urlsToProcess = new ArrayList<String>();
        m_urlsToProcess.add(singleUrl);
      }

      for (String url_str : m_urlsToProcess) {
        //System.out.println("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
        //System.out.println("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");

        if (DEPTH < 2) {
          URLProcessor.FIND_LINKS = false;

          // IF NOT TRAVERSING
          //FaeUtil.m_urlsRead.clear(); // need to clear after previous run
          System.out.println("\n");
          URLProcessor processor = new URLProcessor();
          processor.process(this, "ENTRY_POINT", url_str);
        }
        else {
          //Updating url if path is provided
        	if (m_ctrl.PATH != null
					&& !m_ctrl.PATH.toString().isEmpty()) {
        		String path = m_ctrl.PATH;
        		if (path.startsWith("/")) {
        			path = path.substring(1);
        		}
        		if (path.endsWith("/")) {
        			path = path.substring(0, path.length() - 1);
        		}
	        	if (url_str.endsWith("/")) {
	        		url_str = url_str + path + "/";
				} else {
					url_str = url_str + "/" + path + "/";
				}	
        	}
        	
          // IF TRAVERSING
          URL url = new URL(url_str);
          System.out.println("url: " + url);

          String baseUrl = url.getProtocol() + "://" + url.getHost() + "/";
          System.out.println("baseUrl: " + baseUrl);

          m_ctrl.INCLUDE_DOMAINS = incDomains_org;
          m_ctrl.INCLUDE_DOMAINS += ",";
          m_ctrl.INCLUDE_DOMAINS += url.getHost();
          System.out.println("reset includeDomains: " + m_ctrl.INCLUDE_DOMAINS);

          //          String domain = url.getHost();
          //          if (domain.startsWith("www."))
          //            domain = domain.substring(4);
          //          System.out.println("domain: " + domain);

          //          System.out.println("traverseSubDomains: " + FaeUtil.m_traverseSubDomains);
          //          if (FaeUtil.m_traverseSubDomains)
          //            FaeUtil.m_host = domain;
          //          else
          //            FaeUtil.m_host = baseUrl;
          //          System.out.println("host: " + FaeUtil.m_host);

          //FaeUtil.m_urlsRead.clear(); // need to clear after previous run
          System.out.println("\n");
          URLProcessor processor = new URLProcessor();
          processor.traverseURL(this, "ENTRY_POINT", url_str, 1, baseUrl);
        }
      }

      updateStatus("complete", "");
    }
    catch (Exception e) {
      e.printStackTrace();
      displayException(e);
      System.err.println(EXITING);
    }
    finally {
      long endTime = System.currentTimeMillis();
      displaySummary(inputFile, singleUrl, endTime - m_startTime);
    }

    // ------------------------------------------------------------------------
    // ------------------------------------------------------------------------
    System.exit(0);
  }

  //==========================================================================
  // ==========================================================================
  /**
   * Will read all the urls from authorization.xml file and load them in to vector.
   * @throws Exception
   */
  public static void loadAuthorizationXML()
    throws Exception {
    try {
      // Read the XML file
      DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
      DocumentBuilder builder = factory.newDocumentBuilder();
      //Controller m_ctrl = new Controller("java org.fae.util.FaeUtil <options>");
      m_ctrl.readArgs(m_args);
      m_authorizationDoc = builder.parse(m_ctrl.AUTHORIZATION);
    }
    catch (Exception s) {
    }
    // Create new XPathFactory
    XPathFactory xPathfactory = XPathFactory.newInstance();

    // Create new XPath object
    m_authorizationXpath = xPathfactory.newXPath();

    // Compile the expression
    XPathExpression urlExpr = m_authorizationXpath.compile("//authorization/url/text()");

    // Run the query for url and load in to new hashtable
    NodeList urlNodes = (NodeList) urlExpr.evaluate(m_authorizationDoc, XPathConstants.NODESET);
    for (int i = 0; i < urlNodes.getLength(); i++) {
      String link = urlNodes.item(i).getNodeValue();

      System.err.println(link);

      m_authorizationURLs.add(link);
    }

  }

  //=============================================================================================
  public Vector<String> getAuthorizationURLs() {
    return m_authorizationURLs;
  }

  //=============================================================================================	
  public Document getAuthorizationDoc() {
    return m_authorizationDoc;
  }

  //=============================================================================================
  public XPath getAuthorizationXpath() {
    return m_authorizationXpath;
  }

  // ==============================================================================================
  private boolean initOutputDirectory(boolean testMode, String dirName)
    throws IOException {
    File dir = new File(dirName);
    // delete output dir if testMode or debug
    if (testMode || DEBUG) {
      if (dir.exists())
        FileUtil.delete(dir);
    }
    // else error
    else {
      if (dir.exists())
        return false;
    }
    if (!dir.mkdir())
      return false;
    OUTPUT_DIRECTORY = dir.getAbsolutePath();
    return true;
  }

  // ==============================================================================================
  public void initWebClient(WebClient webClient) {
    // Suppress CSS, HTML Parser and Incorrectness warnings and errors
    if (!VERBOSE) {
      webClient.setCssErrorHandler(new SilentCssErrorHandler());
      webClient.setHTMLParserListener(null);
      webClient.setIncorrectnessListener(new NoOpIncListener());
    }

    //PJ added - turn off htmlunit warnings
    //Logger logger = Logger.getRootLogger();
    Logger.getLogger("com.gargoylesoftware.htmlunit.javascript.host.css.CSSStyleSheet").setLevel(Level.OFF);
    Logger.getLogger("com.gargoylesoftware.htmlunit.WebConsole").setLevel(Level.OFF);
    Logger.getLogger("com.gargoylesoftware.htmlunit.javascript.JavaScriptEngine").setLevel(Level.OFF);
    Logger.getLogger("com.gargoylesoftware.htmlunit.html.HtmlScript").setLevel(Level.OFF);
    Logger.getLogger("com.gargoylesoftware.htmlunit.javascript.StrictErrorReporter").setLevel(Level.OFF);
    Logger.getLogger("com.gargoylesoftware.htmlunit.javascript.background.JavaScriptJobManagerImpl").setLevel(Level.OFF);
    
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
        if (VERBOSE)
          System.out.println("alert: " + message);
      }
    });

    // Set a ScriptPreProcessor to not process problem JavaScript
    webClient.setScriptPreProcessor(new org.fae.util.ScriptPreprocessor(this));
  }

  // ==============================================================================================
  public void dumpNode(Node node) {
    dumpNode(node, new String());
  }

  public void dumpNode(Node node, String indent) {
    System.out.println(indent + "node => " + node);

    if (node.hasAttributes()) {
      NamedNodeMap attrs = node.getAttributes();

      for (int i = 0; i < attrs.getLength(); ++i) {
        Node attr = attrs.item(i);
        System.out.println(indent + "\tattr => " + attr);
      }
    }

    if (node.hasChildNodes()) {
      NodeList nodes = node.getChildNodes();

      for (int i = 0; i < nodes.getLength(); ++i) {
        Node child = nodes.item(i);
        dumpNode(child, indent + "\t");
      }
    }
  }

  // ==============================================================================================
  public void updateStatus(String status, String url) {
    try {
      File file = new File(OUTPUT_DIRECTORY + FILESEP + "status.txt");
      //System.out.println("writting to " + file);
      FileWriter fstream = new FileWriter(file);
      BufferedWriter out = new BufferedWriter(fstream);
      int attempt = URLProcessor.m_loginSuccessURLs.size() + URLProcessor.m_loginFailURLs.size();

      out.write("status=" + status + NEWLINE);
      out.write("url=" + url + NEWLINE);
      out.write("processed=" + m_urlsRead.size() + NEWLINE);
      out.write("unprocessed=" + m_unprocessedURLs.size() + NEWLINE);
      out.write("excluded=" + m_excludedURLs.size() + NEWLINE);
      out.write("filtered=" + m_filteredURLs.size() + NEWLINE);

      long endTime = System.currentTimeMillis();
      long delta = (endTime - m_startTime);
      out.write("time=" + (delta / 1000.0) + NEWLINE);
      out.write("login_attempts=" + attempt + NEWLINE);
      out.write("login_success=" + URLProcessor.m_loginSuccessURLs.size() + NEWLINE);
      out.write("login_fail=" + URLProcessor.m_loginFailURLs.size() + NEWLINE);
      out.write("more_urls=" + URLProcessor.more_urls + NEWLINE);

      out.close();
    }
    catch (IOException e) {
      e.printStackTrace();
    }
  }

  //==============================================================================================
  public void updateAuthorizationStatus() {
    try {
      // URLProcessor m_processor = new URLProcessor();
      File file = new File(OUTPUT_DIRECTORY + FILESEP + "authorizationStatus.txt");
      FileWriter fstream = new FileWriter(file);
      BufferedWriter out = new BufferedWriter(fstream);

      out.write("Login Success:" + NEWLINE);
      for (String successURL : URLProcessor.m_loginSuccessURLs) {
        out.write(successURL + NEWLINE);
      }
      out.write(NEWLINE + "Login Fail:" + NEWLINE);
      for (String failedURL : URLProcessor.m_loginFailURLs) {
        out.write(failedURL + NEWLINE);
      }
      out.close();
    }
    catch (IOException e) {
      e.printStackTrace();
    }

  }

  // ==============================================================================================
  public void findEvents(DomNode parent, String indent) {
    Vector<HtmlElement> hasEvents = new Vector<HtmlElement>();
    //debug("Num children: " + parent.getChildren());
    for (DomNode node : parent.getChildren()) {
      if (node instanceof HtmlElement) {
        HtmlElement tmp = (HtmlElement) node;
        if (tmp != null) {
          //debug(indent + tmp);
          boolean added = false;
          for (String event : events.keySet()) {
            if (tmp.hasEventHandlers(event)) {
              tmp.setAttribute(events.get(event), "true");
              debug("\t\t" + tmp + " has event: " + event);
              if (!added) {
                added = true;
                hasEvents.add(tmp);
              }
            }
          }
        }
      }
      //      else if (node instanceof DomText) {
      //        DomText tmp = (DomText) node;
      //        if (tmp != null && tmp.getTextContent().trim().length() > 0) {
      //          debug(indent + tmp.getTextContent());
      //        }
      //      }
      //      else {
      //        debug(indent + node + ":" + node.getClass().getName());
      //      }
      findEvents(node, indent + "\t");
    }
    for (HtmlElement ele : hasEvents)
      verbose("\t" + ele + " has interested event(s).");
  }

  // ==============================================================================================
  /** Get children for given DomNode. If child is of type HtmlAnchor then try to get HREF attribute.
   * Place attribute into given Vector. */
  public void findLinks(DomNode parent, String indent, Vector<String> urls) {
    //System.out.println("Num children: " + parent.getChildren());
    for (DomNode node : parent.getChildren()) {
      if (node instanceof HtmlAnchor) {
        HtmlAnchor tmp = (HtmlAnchor) node;
        if (tmp.getHrefAttribute() != null) {
          String link = tmp.getHrefAttribute().trim();

          if (link.length() == 0)
            continue;
          if (link.equals("/"))
            continue;
          if (link.startsWith(".."))
            continue;
          if (link.startsWith("#"))
            continue;
          if (link.startsWith("mailto"))
            continue;
          if (link.startsWith("tel"))
            continue;

          //System.out.println(tmp + ": " + tmp.getHrefAttribute());
          //System.out.println(indent + tmp + ": " + tmp.getHrefAttribute());

          // example: http://www.w3.org/Consortium/Legal/ipr-notice#Copyright
          if (link.contains("#")) {
            //System.out.println(" &&&&&&&&& " + link);
            link = link.substring(0, link.indexOf("#"));
            //System.out.println(" &&&&&&&&& " + link);
          }

          boolean passes = true;
          for (String ext : m_extensionsToNotProcess) {
            if (link.endsWith(ext)) {
            	m_excludedURLs.add(link);
				m_excludedURLsCSV.add("\"" + link + "\",\"" + URLProcessor.excludedURLParent + "\"," + ext);
              passes = false;
            }
          }
          if (passes) {
            if (!urls.contains(link))
              urls.add(link);
          }
          else {
            debug("\tHREF attribute " + link + " ends with matching extension, skipping");
          }
        }
      }
      findLinks(node, indent + "\t", urls);
    }
  }

  // ==============================================================================================
  public void processResult(int urlNum, ScriptResult result, long total)
    throws IOException {
    if (DEBUG) {
      System.out.println(beginResults);
      System.out.print(result.getJavaScriptResult());
      System.out.println(endResults);
    }
    else {
      if (OUTPUT_DIRECTORY == null) {
        System.out.print(result.getJavaScriptResult());
        return;
      }
      String num = urlNum < 10 ? "000" + urlNum : urlNum < 100 ? "00" + urlNum : urlNum < 1000 ? "0" + urlNum : "" + urlNum;
      String suffix = ".txt";
      if (m_props != null && m_props.getProperty("exportExtension") != null)
        suffix = "." + m_props.getProperty("exportExtension");
      String basename = filePrefix + num + suffix;
      System.out.println("\t" + urlNum + ": Saving results file: " + basename + "(" + total + " msec)");
      String filename = OUTPUT_DIRECTORY + FILESEP + basename;
      FileUtil.writeStringToFile(result.getJavaScriptResult() == null ? "result.getJavaScriptResult() == null" : result.getJavaScriptResult().toString(), filename);
      if(result.getJavaScriptResult()==null)
    	  System.err.println("Script Error!");
    }
  }

  // ==============================================================================================
  public void displaySummary(String inputFile, String singleUrl, long elapsedTime) {
    // ------------------------------------------------------------------------
    // ------------------------------------------------------------------------
    System.out.println();
    if (inputFile != null) {
      System.out.print("Summary: Processed " + m_urlCount + " of " + m_urlsToProcess.size() + " URLs from " + inputFile);
    }
    else {
      System.out.print("Summary: Processed single URL " + singleUrl);
    }
    System.out.println(" in " + elapsedTime + " msec.");

    if (!DEBUG)
      System.out.println("and saved results " + (m_urlCount == 1 ? "file" : "files") + " in " + OUTPUT_DIRECTORY);

    // ------------------------------------------------------------------------
    // ------------------------------------------------------------------------
    try {
      Thread.sleep(2000);
    }
    catch (InterruptedException e1) {
      e1.printStackTrace();
    }

    // ------------------------------------------------------------------------
    // ------------------------------------------------------------------------
    try {
      File file = new File(OUTPUT_DIRECTORY + FILESEP + "processed_urls.txt");
      System.out.println("writting to " + file);
      FileWriter fstream = new FileWriter(file);
      BufferedWriter out = new BufferedWriter(fstream);

      out.write(m_urlsRead.size() + " total URL(s) processsed. All URL(s) processsed:" + NEWLINE);
      System.out.println(m_urlsRead.size() + " total URLs processsed. All URLs processsed:");
      int cnt = 0;
      for (String url : m_urlsRead) {
        out.write("\t" + cnt + ": " + url + NEWLINE);
        System.out.println("\t" + cnt + ": " + url);
        cnt++;
      }

      if (m_treeRepresentation.toString().length() > 0) {
        out.write(NEWLINE + "Tree representation of URL(s) processsed:" + NEWLINE);
        out.write(m_treeRepresentation.toString());
      }

      out.close();
    }
    catch (IOException e) {
      e.printStackTrace();
    }

    // ------------------------------------------------------------------------
    // ------------------------------------------------------------------------
    try {
      Thread.sleep(2000);
    }
    catch (InterruptedException e1) {
      e1.printStackTrace();
    }

    // ------------------------------------------------------------------------
    // ------------------------------------------------------------------------
    try {
      File file = new File(OUTPUT_DIRECTORY + FILESEP + "processed_urls.csv");
      System.out.println("writting to " + file);
      FileWriter fstream = new FileWriter(file);
      BufferedWriter out = new BufferedWriter(fstream);
      for (String csv : m_processedURLsCSV) {
        out.write(csv + NEWLINE);
      }
      out.close();
    }
    catch (IOException e) {
      e.printStackTrace();
    }

    // ------------------------------------------------------------------------
    // ------------------------------------------------------------------------
    if (m_filteredURLs.size() > 0) {
      try {
        Thread.sleep(2000);
      }
      catch (InterruptedException e1) {
        e1.printStackTrace();
      }
      if (OUTPUT_DIRECTORY != null) {
        try {
          File file = new File(OUTPUT_DIRECTORY + FILESEP + "filtered_urls.txt");
          System.out.println("writting to " + file);
          FileWriter fstream = new FileWriter(file);
          BufferedWriter out = new BufferedWriter(fstream);
          out.write("These URL(s) were filtered based on include, exclude, and span domains:" + NEWLINE);
          for (String url : m_filteredURLs) {
            out.write(url.toString() + NEWLINE);
          }
          out.close();
        }
        catch (IOException e) {
          e.printStackTrace();
          displayException(e);
        }
        try {
          File file = new File(OUTPUT_DIRECTORY + FILESEP + "filtered_urls.csv");
          System.out.println("writting to " + file);
          FileWriter fstream = new FileWriter(file);
          BufferedWriter out = new BufferedWriter(fstream);
          for (String csv : m_filteredURLsCSV) {
            out.write(csv + NEWLINE);
          }
          out.close();
        }
        catch (IOException e) {
          e.printStackTrace();
        }
      }
      System.out.println(NEWLINE);
    }

    // ------------------------------------------------------------------------
    // ------------------------------------------------------------------------
    if (m_unprocessedURLs.size() > 0) {
      try {
        Thread.sleep(2000);
      }
      catch (InterruptedException e1) {
        e1.printStackTrace();
      }
      if (OUTPUT_DIRECTORY == null) {
        for (URL url : m_unprocessedURLs) {
          System.err.println("COULD NOT PROCESS URL: " + url + ".");
        }
      }
      else {
        try {
          File file = new File(OUTPUT_DIRECTORY + FILESEP + "unprocessed_urls.txt");
          System.err.println("writting to " + file);
          FileWriter fstream = new FileWriter(file);
          BufferedWriter out = new BufferedWriter(fstream);
          out.write("These URL(s) either took too long to process, had an exception thrown during running of the scripts, or returned 403/404 status code:" + NEWLINE);
          for (URL url : m_unprocessedURLs) {
            System.err.println("COULD NOT PROCESS URL: " + url + ".");
            out.write(url.toString() + NEWLINE);
          }
          out.close();
        }
        catch (IOException e) {
          e.printStackTrace();
          displayException(e);
        }
        try {
          File file = new File(OUTPUT_DIRECTORY + FILESEP + "unprocessed_urls.csv");
          System.out.println("writting to " + file);
          FileWriter fstream = new FileWriter(file);
          BufferedWriter out = new BufferedWriter(fstream);
          for (String csv : m_unprocessedURLsCSV) {
            out.write(csv + NEWLINE);
          }
          out.close();
        }
        catch (IOException e) {
          e.printStackTrace();
        }
      }
      System.err.println(NEWLINE);
    }

    // ------------------------------------------------------------------------
    // ------------------------------------------------------------------------
    
    if (m_excludedURLs.size() > 0) {
        try {
          Thread.sleep(2000);
        }
        catch (InterruptedException e1) {
          e1.printStackTrace();
        }
        if (OUTPUT_DIRECTORY != null) {
          try {
            File file = new File(OUTPUT_DIRECTORY + FILESEP + "excluded_urls.txt");
            System.out.println("writting to " + file);
            FileWriter fstream = new FileWriter(file);
            BufferedWriter out = new BufferedWriter(fstream);
            out.write("These URL(s) were excluded based on the extensions to not process:" + NEWLINE);
            for (String url : m_excludedURLs) {
              out.write(url.toString() + NEWLINE);
            }
            out.close();
          }
          catch (IOException e) {
            e.printStackTrace();
            displayException(e);
          }
          try {
            File file = new File(OUTPUT_DIRECTORY + FILESEP + "excluded_urls.csv");
            System.out.println("writting to " + file);
            FileWriter fstream = new FileWriter(file);
            BufferedWriter out = new BufferedWriter(fstream);
            for (String csv : m_excludedURLsCSV) {
              out.write(csv + NEWLINE);
            }
            out.close();
          }
          catch (IOException e) {
            e.printStackTrace();
          }
        }
        System.out.println(NEWLINE);
      }

      // ------------------------------------------------------------------------
      // ------------------------------------------------------------------------
    System.out.println(m_treeRepresentation);

    //create authorization status file
    updateAuthorizationStatus();
  }

  // ==============================================================================================
  public void displayException(Exception e) {
    System.err.println(exceptionCaught);
    System.err.println(e);
  }

  // ==============================================================================================
  public void debug(String msg) {
    if (DEBUG)
      System.out.println(msg);
  }

  // ==============================================================================================
  public void verbose(String msg) {
    if (VERBOSE)
      System.out.println(msg);
  }

  // $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
  // $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
  public static class NoOpIncListener implements IncorrectnessListener {
    public void notify(String message, Object origin) {
    }
  }

  private static String[] m_args;
  public Properties m_props = null;
  public static Controller m_ctrl = new Controller("java org.fae.util.FaeUtil <options>");
  
  public static BrowserVersion BROWSER_VERSION = BrowserVersion.FIREFOX_78;
  public boolean DEBUG = false;
  public int DEPTH = 1;
  public String OUTPUT_DIRECTORY;
  public boolean VERBOSE = false;
  public long WAIT = 30000;

  public Hashtable<String, String> events = new Hashtable<String, String>();

  private long m_startTime;

  public Vector<String> m_urlsToNotTraverse = new Vector<String>();
  public Vector<String> m_extensionsToNotProcess = new Vector<String>();
  public Vector<String> m_javascriptUrlsToNotProcess = new Vector<String>();
  public String m_evaluationScript;
  public ArrayList<String> m_urlsToProcess;

  public int m_urlCount = 0;
  public Vector<String> m_urlsRead = new Vector<String>();
  public StringBuffer m_treeRepresentation = new StringBuffer();
  public Vector<String> m_processedURLsCSV = new Vector<String>();
  public Vector<String> m_filteredURLs = new Vector<String>();
  public Vector<String> m_filteredURLsCSV = new Vector<String>();
  public Vector<URL> m_unprocessedURLs = new Vector<URL>();
  public Vector<String> m_unprocessedURLsCSV = new Vector<String>();
  public Vector<String> m_excludedURLs = new Vector<String>();
  public Vector<String> m_excludedURLsCSV = new Vector<String>();

  // authorization variables
  public static Vector<String> m_authorizationURLs = new Vector<String>();
  public static Document m_authorizationDoc = null;
  public static XPath m_authorizationXpath = null;

  // miscellaneous class constants
  static final String beginResults = "************ BEGIN JAVASCRIPT RESULTS ************";
  static final String endResults = "************ END JAVASCRIPT RESULTS ************";
  static final String exceptionCaught = "************ EXCEPTION CAUGHT IN FAE-UTIL MAIN ************";
  static final String configError = "************ CONFIGURATION ERROR IN FAE-UTIL MAIN ************";
  static final String EXITING = "************ FAE-UTIL IS EXITING ************";
  static final String filePrefix = "faeUtil-";
  static final String FILESEP = System.getProperty("file.separator");
  static final String NEWLINE = System.getProperty("line.separator");
}
