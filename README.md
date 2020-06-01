# Functional Accessibility Evaluator, version 2.1

Development is primarily supported by the [University of Illinois at Urbana-Champaign](https://illinois.edu).  The development is lead by [Accessible IT Group](https://disability.illinois.edu/academic-support/aitg) which is a unit of [Disability Resources and Educational Servcies](https://www.disability.illinois.edu) which is part fo the [College of Applied Health Sciences](https://www.ahs.illinois.edu).  Additional contributions for the [HTMLUnit](https://htmlunit.sourceforge.net/) based web site analysis engine are provided by [Administrative Information Technology Services (ATIS)](https://www.aits.uillinois.edu/) of University Administration.


## Important major changes from Version 2.0
* Updated to support Python 3.6
* Updated to support Django 2.2.x
* Removed migration files from app directories

## What is Functional Accessibility Evaluator (FAE)?
* FAE analyzes a website based on the requirements of the W3C Web Content Accessibility Guidelines 2.0 Single A and AA Success Criteria.
* Every rule used in FAE 2.1 references at primary WCAG 2.0 Success Criterion requirement it is based on.
* The rules support not only accessibility, but also usable web design for people with disabilities.
* The rules support accessible and usable design by enforcing the accessible coding practices and techniques of the Accessible Rich Internet Application (ARIA) 1.0 and W3C HTML5 specifications.

## Apache 2.0 License
FAE may be used and distributed based on the terms and conditions of the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).

## Server requirements for Linux

* Apache2 Web Server
* Python 3.6
* Java 1.8
* Python development package (`python3-dev` in Debian/Ubuntu)
* postgresql-devel (`libpq-dev` in Debian/Ubuntu)
* `python3-psycopg2` package for python to talk to postgres

### Python modules

Here is the [requirements.txt] file to use with pip

```
confusable-homoglyphs==3.2.0
Django~=2.2.12
django-password-reset==2.0
django-registration==3.1
django-timezone-field==4.0
future==0.18.2
Markdown==3.2.2
psycopg2~=2.8.5
pytz==2020.1
requests==2.23.0
sqlparse==0.3.1
django-google-tag-manager==0.0.5
django-extensions==2.2.9
django-debug-toolbar==2.2
Werkzeug==1.0.1
mod-wsgi~=4.7.1
django-logentry-admin==1.0.6
django-fake-bot-detector==0.2
```

### Creating a <code>secrets.json</code> file

The "secrets.json" file must be created and provides:
* Security information for Django
* Information for Django to access and manage the database
* Information on on e-mail commmunications for registration and announcements.
* Copy the text in `secrets_template.json` (or the file itself is you'd rather replace it) and paste it into `./fae2/fae2/secrets_placeholder.json` then rename that file **secrets.json**

```
{
    "FILENAME": "secrets.json",
    "PROCESSING_THREADS": [number, typically 4, depending on how much processing power is available],
    "SITE_URL": "site url with protocol, like https://fae.somedomain.org",
    "SITE_NAME": "[Name that appears in banner of FAE]",
    "DEBUG": false,
    "LOGGER_LEVEL": "INFO",
    "SELF_REGISTRATION_ENABLED": true,
    "ANONYMOUS_ENABLED": true,
    "SECRET_KEY": "[random string of 50 characters, used by Django framework]",
    "DATABASE_HOST": "[domain or localhost]",
    "DATABASE_PORT": "[port, typically 5432 for postgres]",
    "DATABASE_NAME": "[name of database]",
    "DATABASE_USER": "[database user account name]",
    "DATABASE_PASSWORD": "[password for database user]",
    "ALLOWED_HOSTS": ["fae.disability.illinois.edu"],
    "EMAIL_HOST": "[domain of host, localhost can be used if e-mail address is on same server]",
    "EMAIL_PORT": [port number, typically 25],
    "EMAIL_USE_TLS": false,
    "EMAIL_HOST_USER": "[registration e-mail address]",
    "EMAIL_HOST_USER_PASSWORD": "[password for registration e-mail]",
    "ACCOUNT_ACTIVATION_DAYS" : 3,
    "CONTACT_EMAIL" : "[email for sending contact messages, typically admin]",
    "ADMIN_USER_NAME" : "[admin user name]",
    "ADMIN_FIRST_NAME" : "[first name of admin]",
    "ADMIN_LAST_NAME" : "[last name of admin]",
    "ADMIN_PASSWORD": "[password for admin account]",
    "ADMIN_EMAIL": "[email address for admin]",
    "ANONYMOUS_PASSWORD" : "[random password]",
    "DEFAULT_ACCOUNT_TYPE" : 2,
    "GOOGLE_TAG_ID" : "[GTM-_______]"
}
```

*Make sure the last 'key : value' pair doesn't have a trailing comma.*


### Apache 2.x configuration notes

If using Ubuntu (or Debian), please read `ubuntu-18-04-conf.md` for distro specific instructions.

* MOD_WSGI (which is installed by the `requirements.txt` file as `mod-wsgi`)must be installed and support Python 3.6 (as long as your virtual environment uses Python 3.6, this is supposed to work).
* Ubuntu 18.04 ships with Python 3.6 and readily installs Java 8 via `apt` and is highly recommended (Centos doesn't ship with Python at all, which makes it easy to install 3.6 and avoid conflicts and Centos 8 [or maybe it was 7] readily installs Java 8 via `yum` but as that is a Red Hat-based distro if you want to use that you should read `centos7-configuration.md`...actually, regardless of what OS you use, you should read that too, it includes some details that this one doesn't about getting things set up correctly).
* The Django documentation suggests using another server for serving static files than the server (presumably Apache) that serves the application and suggests Nginx so that is worth keeping in mind (due to the complexity of this application, I suggest getting it up and running on Apache before trying to add the additional complexity of Nginx as a reverse proxy).

While much of the original FAE2 documentation and examples use the traditional `/var/www` paths that are standard for Apache serving websites, it is apparently also customary to put applications in `/opt` so this fork of FAE2 is configured to use a directory structure as follows:

`/opt/fae2` (everything is contained within this folder)

The virtual environment is `/opt/fae2/venv/...`
The application itself is in `/opt/fae2` so the full path to `wsgi.py` (for example) is `/opt/fae2/fae2/fae2/wsgi.py`

There are a few places that this path needs updated and I often forget to update the documentation so anyone using this fork should search in the entire code base for ` var/www ` and  ` opt/fae2 ` (and replace it with the path that's correct for them), then search for  ` fae2env ` and ` venv ` and correct the paths to their virtual environment.

#### Sample Apache configuration file (if not using Nginx as a Reverse Proxy)

```
<VirtualHost *:80 >

  Servername  [fae.somedomain.org]
  ServerAlias [fae.somedomain.org]

  DocumentRoot /opt/fae2/public_html
  
  Alias /robots.txt /opt/fae2/public_html/static/robots.txt
  Alias /humans.txt /opt/fae2/public_html/static/humans.txt
  Alias /favicon.ico /opt/fae2/public_html/static/favicon.ico

  Alias /static /opt/fae2/public_html/static
  
  <Directory /opt/fae2/public_html>
    <IfVersion < 2.4>
      Order allow,deny
      Allow from all
    </IfVersion>
    <IfVersion >= 2.4>
      Require all granted
    </IfVersion>
  </Directory>

  WSGIDaemonProcess fae2 processes=4 python-home=/opt/fae2/venv python-path=/opt/fae2/fae2/fae2 display-name=%{GROUP}

  WSGIScriptAlias / /opt/fae2/fae2/fae2/wsgi.py process-group=fae2

  WSGIProcessGroup  fae2
  WSGIApplicationGroup %{GLOBAL}

  <Directory /opt/fae2/fae2/fae2>
    <IfVersion < 2.4>
      <Files wsgi.py>
        Order allow,deny
        Allow from all
      </Files>
    </IfVersion>
    <IfVersion >= 2.4>
      <Files wsgi.py>
        Require all granted
      </Files>
    </IfVersion>
  </Directory>

</VirtualHost>
```

#### Sample Apache 2.4 Config File with Nginx Reverse Proxy

```
<VirtualHost 127.0.0.1:8000>

  ServerName  127.0.0.1:8000
  ServerAlias localhost localhost:8000
  DocumentRoot /opt/fae2/public_html
  
  Alias /robots.txt /opt/fae2/public_html/static/robots.txt
  Alias /humans.txt /opt/fae2/public_html/static/humans.txt
  Alias /favicon.ico /opt/fae2/public_html/static/favicon.ico
  Alias /static/ /opt/fae2/public_html/static/
  
  <Directory /opt/fae2/public_html>
    <IfVersion < 2.4>
      Order allow,deny
      Allow from all
    </IfVersion>
    <IfVersion >= 2.4>
      Require all granted
    </IfVersion>
  </Directory>

  WSGIDaemonProcess fae2 processes=4 python-home=/opt/fae2/venv python-path=/opt/fae2/fae2/fae2 lang='en_US.UTF-8' locale='en_US.UTF-8' queue-timeout=45 socket-timeout=60 connect-timeout=15 request-timeout=600 startup-timeout=15 deadlock-timeout=60 graceful-timeout=15 restart-interval=86400 shutdown-timeout=5 maximum-requests=10000 display-name=%{GROUP}

  WSGIScriptAlias / /opt/fae2/fae2/fae2/wsgi.py process-group=fae2

  WSGIProcessGroup fae2
  WSGIApplicationGroup %{GLOBAL}

  <Directory /opt/fae2/fae2/fae2>
    <IfVersion < 2.4>
      <Files wsgi.py>
        Order allow,deny
        Allow from all
      </Files>
    </IfVersion>
    <IfVersion >= 2.4>
      <Files wsgi.py>
        Require all granted
      </Files>
    </IfVersion>
   </Directory>

  RemoteIPHeader X-Client-IP
  RemoteIPInternalProxy 127.0.0.1
  RemoteIPInternalProxy localhost

  # The ServerName directive sets the request scheme, hostname and port that
  # the server uses to identify itself. This is used when creating
  # redirection URLs. In the context of virtual hosts, the ServerName
  # specifies what hostname must appear in the request's Host: header to
  # match this virtual host. For the default virtual host (this file) this
  # value is not decisive as it is used as a last resort host regardless.
  # However, you must set it for any further virtual host explicitly.
  #ServerName www.example.com

  # Available loglevels: trace8, ..., trace1, debug, info, notice, warn,
  # error, crit, alert, emerg.
  # It is also possible to configure the loglevel for particular
  # modules, e.g.
  #LogLevel info ssl:warn

  ErrorLog ${APACHE_LOG_DIR}/error.log
  CustomLog ${APACHE_LOG_DIR}/access.log combined

   # For most configuration files from conf-available/, which are
   # enabled or disabled at a global level, it is possible to
   # include a line for only one particular virtual host. For example the
   # following line enables the CGI configuration for this host only
   # after it has been globally disabled with "a2disconf".
   #Include conf-available/serve-cgi-bin.conf

</VirtualHost>

```

### See the `documentation` directory for more info on how to set up Apache 2.2 vs 2.4, Nginx (as a Reverse Proxy) and how to install, set up and configure Postgres, Python 3.6, a virtual environment and more.

------------------------ 

### Initializing and updating the database tables
* You will need to run django `makemigrations` and `migrate` commands to update any changes (or to create the initial database) for the django apps used in FAE.
* This needs to be done after updating to a new version of FAE.
* For your convience there is a script `init_apps` that can be used to setup the initial migrations and run migrate


```
python manage.py makemigrations
python manage.py migrate

```

### Setting up fae directories for read/write access
* Need to create `data` directory with write permissions for `apache` user and group `root` user
* Need to create `logs` directory with write permissions for `apache` user and group `root` user
* * Note: the `www-data` user seems to be the default user Apache runs as on recent Ubuntu and Debian distros--it's not hard to change, just make sure the user that Apache runs as matches the user that owns the `data` and `logs` directories.


### Multiple Django Apps and mod_wsgi
* [Configuring wsgi.py for multiple Django apps](https://docs.djangoproject.com/en/2.2/howto/deployment/wsgi/modwsgi/)

### Setup Static Files
* Enable the virtual environment for fae so it is available from the command prompt:<br/>`source [path to virtual environment]/bin/activate`.
* Change directory to the fae directory with the file `manage.py'.
* You will need to run the following command to copy static files to the static directory:<br/><code>python manage.py collectstatic</code>

### Initialize database tables
* If not already enabled, enable the virtual environment for fae so it is available from the command prompt:<br/>`source [path to virtual environment]/bin/activate`.
* Change directory to the fae directory with the file `manage.py'.
* Run the following command to create the tables in the database:<br/><code>python manage.py migrate</code>
* After the tables in the database are created, go to the "populate" directory.
* In the populate directory initialize the tables using the following command:<br/><code>python pop_all.py</code>

### fae-util configuration and testing
* Purpose of fae-util
  * fae-util is a server based browser emulator based on HTMLUnit
  * It monitors the database waiting for evaluation requests
  * When it identifes a request it will then load web pages and analyze them using the OpenAjax Evaluation Library
  * Each page evaluation results in a JSON file being crerated with the results
  * After all pages are analyzed the information in the JSON files is moved to the database
* Testing fae-util
  * Go to the "fae-util" directory
  * Use "./build" function to build the java classes
  * Use <code>./run -c test.properties</code> to test if the utility is properly installed and configured
  * It will output URL processing information to the console
  * It will create a directory called "test" that contains *.json files of evaluaiton results
  * NOTE: You must delete the "test" directory to rerun this test (e.g. directory exists error will occur)
* Creating a service to run evaluation requests
  * IMPORTANT: Must run <code>fae-util/python process_evaluation_requests.py</code> to process website evaluations in the background
  * There are a number of ways to make this program run in parallel with django application depending on your operating system
    * Linux: How to write a System V init script to start, stop, and restart my own application or service(https://www.cyberciti.biz/tips/linux-write-sys-v-init-script-to-start-stop-service.html)


### Utility to clean up reports and update summary statistics
* IMPORTANT: Must run <code>fae-util/process_achive_reports.py</code> to process remove reports and update summary statistics
* Create cron job to run a shell script once a day
* The shell script contains the following command lines:
<pre>
#!/usr/bin/env bash
<path to virtual environment>/python <path to fae-util>/fae-util/process_achive_reports.py
</pre>

## InCommon (Shibboleth) Configuration

To enable shibboleth support through [InCommon](https://www.incommon.org) for your institution or organization you need your service manager to enable the following attributes to the entityID identifying the installation of FAE with Shibboleth Support (e.g. "https://fae.illinois.edu/shibboleth" for the University of Illinois campus):
* eppn
* giveName
* sn
* mail

Enityt IDs: [https://www.incommon.org/federation/info/all-entities.html#IdPs]

## Testing e-mail on localhost development
* Use a python utitlity to simulate an SMTP server: <code>python -m smtpd -n -c DebuggingServer localhost:1025</code>
* Configure e-mail in "secretes.json" with the following values:
```
    ....
    "EMAIL_HOST": "localhost",
    "EMAIL_PORT": 1025,
    "EMAIL_USE_TLS": false,
    "EMAIL_HOST_USER": "None",
    "EMAIL_HOST_USER_PASSWORD": "None",
    ....

```

## Development Resources

### Django Shibboleth Resources
* [How to (not) use Shibboleth with the Django web framework](https://5chub3r7.wordpress.com/2014/12/05/how-to-not-use-shibboleth-with-the-django-web-framework/)

### Incommon Resources (Multi-Institution Shibboleth)
* [InCommon: Embedded Discovery Service](https://wiki.shibboleth.net/confluence/display/EDS10/Embedded+Discovery+Service)
* [Technology Services: Shibboleth, Multi-university configuration](https://answers.uillinois.edu/illinois/48456)
* [InCommon: Federation Entities](https://www.incommon.org/federation/info/all-entities.html)
