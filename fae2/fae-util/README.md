# FAE Utility Project
This utility is used to analyze web pages using the OpenAjax Evaluation library by:
* Providing a server based browser to load a web page
* Execute the OpenAjax evaluation library scripts
* Serial evaluation results to a JSON file.
* Spider the links of a website

## Dependencies

The following libraries must be in the CLASSPATH:

* HTMLUnit version 2.39 (https://sourceforge.net/projects/htmlunit/)
* Apache Commons CLI 1.2 (https://commons.apache.org/cli/)

## Build Information

You can use the build script in the main project directory (i.e. trunk) to build the project:

```
  $ ./build
```

## Run Information

You can use the run script in the main project directory (i.e. trunk) to run the project:

```
$ . run -u https://msn.com/
```

Examples use of a config file:

```
$ ./run -c test.properties
```

### Command Line Options

```
 -a,--authorization <arg>                 Optional: filename of authorization information
 -browserVersion,--browserVersion <arg>   Optional: browserVersion to use; chrome, firefox (default), ie
 -c,--config <arg>                        Optional: filename of configuration parameters
 -D,--debug                               Optional: turn on debugging output
 -d,--depth <arg>                         Optional: maximium depth to traverse (number: 1 | 2 | 3, default = 1, which means no traversing)
 -e,--excludeDomains <arg>                Optional: do not traverse these domains (comma-separated list; valid only if -s is specified; each domain must be a subdomain of an entry in spanDomains)
 -i,--includeDomains <arg>                Optional: traverse these domains (comma-separated list) in addition to the domain specified by the URL
 -l,--evaluationLevels <arg>              Optional: Rule levels to include in the evaluation ('A' | 'A_AA', default='A_AA')
 -m,--multipleUrls <arg>                  Required (unless -u, --url is specified): filename containing URLs to evaluate
 -o,--outputDirectory <arg>               Required: directory for results files
 -r,--ruleset <arg>                       Optional: OAA ruleset ID ('ARIA_TRANS' | 'ARIA_STRICT', default = 'ARIA_TRANS')
 -s,--spanDomains <arg>                   Optional: traverse the subdomains of these domains (comma-separated list), in addition to the domain specified by the URL
 -scripts,--scripts <arg>                 Required: file with names of script files
 -testMode,--testMode                     Optional: testmode; will not find events or evaluate scripts
 -u,--url <arg>                           Required (unless -m, --multipleUrls is specified): starting URL
 -V,--verbose                             Optional: turn on HtmlUnit logging output
 -w,--wait <arg>                          Optional: maximium time in milliseconds to wait when processing a page, default = 30000 msec. (30 seconds)
 ```


### Notes
* The --outputDirectory directory must not already exist.
* The --scripts and --multipleUrls files must have one filename or URL per line; blank lines are ignored.
* Lines in the --multipleUrls file that begin with # are considered comments and are ignored.
* When --debug is specified, all results are printed to the console and the --outputDirectory directory is not created.

## Source Files

* org/fae/util/FaeUtil.java
* org/fae/util/URLProcessor.java
* org/fae/util/Controller.java
* org/fae/util/FileUtil.java

## Other Files

* README.MD (this file)
* build
* run
* org/fae/util/classpath


