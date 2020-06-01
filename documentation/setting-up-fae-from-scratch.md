# Setting Up FAE for the First Time, from Scratch

WARNING: While I am trying to be very through with this documentation, it is a work in progress and I am editing it and revising it as I work through it while deploying it on my own server (May 2020).

I'm primarily a marketer (and a web accessibility practitioner), not a developer, and so I sometimes struggle with details which are omitted from typical developer documentation.

This document is my own guide to setting up FAE on a new(ish) server.

For the sake of keeping things simple, this document assumes you use git, a logged in as root, and will omit `$` and/or `#` from code that is meant as a shell command to make it easy to copy and paste.

If you don't understand the above statements, you are unlikely to succeed in getting this application working because it is not simple.

## Start with Ubuntu 18.04.4 LTS "Bionic Beaver"

To avoid conflicts between versions, we are going to:
- Update the software sources available via `apt`, 
- Then remove software that we will install newer versions of
- Then install new **apt sources**
- Then update `apt` again
- Then install the latest versions of Apache, Nginx, and Postgres

### Here we go:

This assumes you are logged in as 'root'

Remove old versions of software that we will use more recent versions of to avoid conflicts:

```
apt-get update
apt remove -y apache2 postgresql postgresql-10
```

Install dependencies:

```
apt-get install -y build-essential libbz2-dev libgdbm-dev liblzma-dev libncurses5-dev libreadline-dev libsqlite3-dev libssl-dev software-properties-common sqlite3 zlib1g-dev

```

#### Update apt sources lists
Install apt source list for current version of Postgres
```
echo "deb http://apt.postgresql.org/pub/repos/apt/ bionic-pgdg main" >> "/etc/apt/sources.list.d/pgdg.list"

# Add Postgres key to verify
wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | apt-key add -
```

Install PPA apt source lists for Apache and Nginx
```
# Add latest Apache
add-apt-repository ppa:ondrej/apache2

# Add latest Nginx
add-apt-repository ppa:nginx/mainline

# If planning to use Certbot for SSL certificates
add-apt-repository universe
add-apt-repository ppa:certbot/certbot
```

#### Install Apache, Nginx, Postgres, OpenJDK8, Pip, Psycopg2, Certbot,etc.

```
# Updated to reflect the newly added sources
apt-get update

# Install desired versions of software
apt-get install -y apache2 apache2-dev aptitude certbot libapache2-mod-wsgi-py3 libpq-dev nginx openjdk-8-dbg openjdk-8-source postgresql-12 postgresql-contrib postgresql-server-dev-12 python3-certbot-nginx python3-pip python3-postgresql python3-psycopg2 python3-psycopg2-dbg sqlite3 tk-dev unzip

```

**You are likely to get errors about Nginx failing to start after running this command and that is to be expected because both Apache and Nginx are configured to listen on Port 80** by default. Ignore then for now as they will be fixed once both are configured.

If you want to upgrade all software installed via `apt` (typically good idea, is done in the `Vagrantfile` but it risks unexpected incompatibilities).
```
apt-get upgrade
```

Check the version of pip `python3 -m pip --version` and make sure it's current (as of May 2020 it's version 20.1.1) and if you need to upgrade use:
```
python3 -m pip install --upgrade pip
```

Install `virtualenv`
```
python3 -m pip install virtualenv
```

If you're using Vagrant and you get and error message like:
> WARNING: The script virtualenv is installed in '/home/vagrant/.local/bin'
> which is not on PATH. Consider adding this directory to PATH or,
> if you prefer to suppress this warning, use --no-warn-script-location.

You can solve it with: `source ~/.profile`

### Install FAE2 Using Git

If you're using the same directory structure:
```
cd /opt
git clone https://github.com/ADA-First/fae2.git
cd fae2
```

Typing `pwd` should now return `/opt/fae2`

### Create your virtual environment

Double check where Python 3.6 is installed with `which python3.6` then take that path and add it to the `virtualenv` command below after the `-p`

```
virtualenv -p /usr/bin/python3.6 venv
```

This creates a virtual environment, using Python 3.6, named `venv`, 
in whatever directory you were in, which should have been `/opt/fae2`.

#### Activate your virtual environment

```
source venv/bin/activate
```

Your shell prompt will now show you a notation, probably in parentheses, to let you know you are working in the virtual environment, like `(venv)`

### Install the Python Apps listed in `requirements.txt` via Pip

From within the `/opt/fae2` directory:
```
python3 -m pip install -r requirements.txt
```

### Configure Apache

```
cd /etc/apache2/sites-available
nano fae2.conf
```

In the file fae2.conf put the following:
```
<VirtualHost 127.0.0.1:8080>

  ServerName 127.0.0.1
  ServerAlias localhost
  DocumentRoot /opt/fae2/public_html
  
  # The aliases below are only used if you aren't using Nginx for static files
  #Alias /robots.txt /opt/fae2/public_html/static/robots.txt
  #Alias /humans.txt /opt/fae2/public_html/static/humans.txt
  #Alias /favicon.ico /opt/fae2/public_html/static/favicons/favicon.ico
  #Alias /static/ /opt/fae2/public_html/static/
  
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
  LogLevel debug

  ErrorLog ${APACHE_LOG_DIR}/error.log
  CustomLog ${APACHE_LOG_DIR}/access.log combined

   # For most configuration files from conf-available/, which are
   # enabled or disabled at a global level, it is possible to
   # include a line for only one particular virtual host. For example the
   # following line enables the CGI configuration for this host only
   # after it has been globally disabled with "a2disconf".
   #Include conf-available/serve-cgi-bin.conf

   EnableSendfile Off 
   # while in development using VirtualBox due to a bug

</VirtualHost>
```

Save the file and enable `mod_remoteip` with 
```
a2enmod remoteip
```

Now we will disable the "default" site and enable "fae2" with:
```
a2dissite 000-default
a2ensite fae2
```

Make sure that the `remoteip_module` and the `wsgi_module` are listed as enabled when you type (then follow that with a couple other checks):
```
apachectl -M
apachectl -t
apachectl -S
```

Next edit Apache's `ports.conf` via:
```
nano /etc/apache2/ports.conf
```

Edit or replace the line that reads `Listen 80` with `Listen 8080`

Save that file and run the `apachectl` tests listed above.

Do not restart Apache yet, we need to get Nginx configured...

### Configure Nginx

```
cd /etc/nginx/sites-available
nano fae2.conf
```

The contents of `/etc/nginx/sites-available/fae2.conf` should be:

```
upstream apache {
    server 127.0.0.1:8080;
    #server unix:/opt/fae2/fae2.sock fail_timeout=0;
    keepalive 32;
}

server {
    listen 80;
    listen [::]:80;

    #server_name fae2.example.com;
    server_name compliance.adafirst.test;

    root /opt/fae2/public_html;

    location /static/ {
        root /opt/fae2/public_html;
        expires 1M;
        #autoindex on;
        add_header Cache-Control "public";
        proxy_ignore_headers "Set-Cookie";
        # access_log off;
    }

    location @proxy_to_apache {
        proxy_pass   http://apache;
        include /etc/nginx/fae2/reverse-proxy.conf;
    }

    location / {
        try_files $uri @proxy_to_apache;
    }
    access_log /var/log/nginx/fae2.access_log main;
    error_log /var/log/nginx/fae2.error_log info;
}

server {
    listen 443 ssl;
    listen [::]:443 ssl;

    #server_name fae2.example.com;
    server_name compliance.adafirst.test;

    ssl on;
    ssl_certificate /etc/ssl/certs/fae2.crt;
    ssl_certificate_key   /etc/ssl/private/fae2.key;

    # Likely paths for certbot
    ssl_certificate /etc/letsencrypt/live/fae2/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/fae2/privkey.pem;
    #ssl_trusted_certificate /etc/letsencrypt/live/fae2/chain.pem;

    root /opt/fae2/public_html

    location /static/ {
        root /opt/fae2/public_html;
        expires 1M;
        #autoindex on;
        add_header Cache-Control "public";
        proxy_ignore_headers "Set-Cookie";
        # access_log off;
    }

    location @proxy_to_apache {
        proxy_pass   http://apache;
        include /etc/nginx/fae2/reverse-proxy.conf;
        proxy_set_header X-Forwarded-Ssl on;
    }

    location / {
        try_files $uri @proxy_to_apache;
    }

    access_log /var/log/nginx/fae2.access_log main;
    error_log /var/log/nginx/fae2.error_log info;
}
sendfile off; # while in development using VirtualBox due to a bug
```

Create a directory in `/etc/nginx` called `fae2` with the following:

```
mkdir /etc/nginx/fae2
```

Then `cd` into that directory with `cd /etc/nginx/fae2`

Now create a file named `reverse-proxy.conf` (I prefer nano to vim so I use):

```
nano reverse-proxy.conf
```

The contents of `/etc/nginx/fae2/reverse-proxy.conf`

```
    proxy_redirect off;
    proxy_http_version 1.1;
    proxy_set_header Host $host;
    proxy_set_header Connection "";
    proxy_set_header X-Client-IP $remote_addr;
    proxy_set_header X-Forwarded-Port $server_port;
    proxy_set_header X-Forwarded-Host $host:$server_port;

    ## In /etc/nginx/proxy_params
    #include /etc/nginx/proxy_params;
    ## Or
    #proxy_set_header Host $http_host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;

    ## Needed for websockets proxying
    #proxy_set_header Connection "upgrade";
    #proxy_cache_bypass  $http_upgrade;
    #proxy_set_header Upgrade $http_upgrade;
```


https://certbot.eff.org/lets-encrypt/ubuntubionic-nginx
Certbot:
```
sudo apt-get update
sudo apt-get install software-properties-common
sudo add-apt-repository universe
sudo add-apt-repository ppa:certbot/certbot
sudo apt-get update
```

```
sudo apt-get install certbot python3-certbot-nginx
```

```
sudo certbot --nginx
```

```
sudo certbot renew --dry-run
```

---------------

## Database(s)

For development, I'm using SQLite3, but for production I'm using Postgres.

As such there will be some duplication in the next few steps.

Because you should always test things in a development settings before switching to a production setting, let's dive right in:

### Steps Needed For SQLite3:
1. Make sure you have SQLite3 and related libraries installed (if you followed the steps above, they'll already be installed, if not you can install them with `apt install sqlite3 libsqlite3-dev`)
2. Create the directories and log file:
```
cd /opt/fae2/fae2
mkdir data
chown www-data:www-data /opt/fae2/data 
mkdir logs
touch logs/fae2_log
chown -R www-data:www-data /opt/fae2/logs 
```

As a reminder, your virtual environment should already be activate so the above commands will probably be prefixed by `(venv)` in your shell.

We are also assuming you are doing this as `root` so your shell prompt will probably be indicated by a `#`.

It is easiest to do this as `root` so in a local development environment, that's what we're doing...but it's always better to use a less privledged user (even a user that can `sudo` is still less privledged as `root`).

So when we do this again in production we will have create a less privledged user/group with `sudo` capabilities and we will switch to that user (typically the shell prompt for non-root users will be indicated by `$`) and prefix the commands with `sudo`.

The last block of code doesn't actually matter if your python virtual environment is active or not because it isn't using any python; the next steps do so make sure you have activated your virtual environment.

### Getting Django Up and Running:
```
(venv) cd /opt/fae2/fae2
(venv) python manage.py collectstatic
(venv) python manage.py makemigrations
(venv) python manage.py migrate
```

The above sets up the basic Django apps, not the apps specific to this application so next you'll need to execute the code in `/opt/fae2/init_apps`.

I'm sure there is some easy way to do that in one simple command but it didn't work for me so I manually copied the text in the file and pasted it into my shell and that was:
```
python manage.py makemigrations abouts
python manage.py makemigrations accounts
python manage.py makemigrations contact
python manage.py makemigrations markup
python manage.py makemigrations markupInfo
python manage.py makemigrations pageResults
python manage.py makemigrations reports
python manage.py makemigrations ruleCategories
python manage.py makemigrations rules
python manage.py makemigrations rulesets
python manage.py makemigrations stats
python manage.py makemigrations subscriptions
python manage.py makemigrations userProfiles
python manage.py makemigrations wcag20
python manage.py makemigrations websiteResultGroups
python manage.py makemigrations websiteResults
python manage.py migrate
```

You won't see that whole block because each line will execute one after another, with an additional "ENTER" keypress needed after the last line (when all the others are done).

The next step is probably not needed, unless you have "static" assets in your apps but just to be safe you might want to `python manage.py collectstatic`

Just to be thorough, I then `chown -R www-data:www-data /opt/fae2/public_html` (this apparently has no effect in Vagrant ... moving on). On Ubuntu, recent versions of Apache (and often Nginx) frequently run as `www-data` but this can easily be changed and varies from distro to distro so to check what user Apache runs as you can use: `ps aux | egrep '(apache|httpd)'` you can do the same for Nginx with `ps aux | egrep nginx`

By having the "user" that both Apache and Nginx run as both be `www-data`, and having that user also be the owner of `/opt/fae2/public_html` (which is the only directory that is publicly exposed) you should avoid problems with permissions and enhance the security of the application.

Now, to populate the database tables:
```
python manage.py populate/pop_all.py
```




