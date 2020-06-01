# Setting Up FAE 2.1 on Ubuntu 18.04

After significant effort and frustration trying to get this working on Debian 8, 9 or 10, I was surprised to find that **Ubuntu 18.04** LTS, code named Bionic Beaver, was ideal.

**Ubuntu 18.04** ships with **Python 3.6** and readily installs **Java8** via the built-in package manager, `apt`. (**Debian 9** ships with Python 3.5 and easily installs Java8 while **Debian 10** ships with 3.7 or 3.8 but was difficult to install Java8).

I'm currently using Ubuntu 18.04 and recommend it.

Ubuntu 20.04 LTS has recently been released but I have not had a chance to use it. I did see on their website that the default Java that is installed via `apt` is OpenJDK 11 (i.e. Java 11) so it sounds like it could be a headache to install OpenJDK8 as required by this application.

## Security and Configuration Considerations

To keep things simple and consistent I have named almost everything **fae2** (this is different from the original repo).

The database is fae2, the database user is fae2, the process-group that Apache runs as is fae2.

This is fine and dandy for testing on a localhost server (in DEBUG mode, nonetheless), and might be acceptable in production if your not very security conscious but in general you don't want to have usernames, database names or passwords that are easy to guess.

### Examples of things you DO NOT want to do:
- Remove the `.gitignore` entries that exclude `secrets.json` from version control so you'd end up commiting a file with all your credentials and secrets (especially if you're using a public repository service like Github).
- Don't use 'postgres' for the database user and 'password' as the databse password.
- Don't use 'admin' as the username of your administrator account.
- Don't use a password for your administartor account that you have used elsewhere for anything.

### Things you DO want to do:
- Genrate a random, unique SECRET_KEY that is long (50 characters).
- Use a password manager and generate a unique password for your admin account.

### Configuration settings to double check:

There are a couple of files that contain paths to the virtual environment and absolute server paths so make sure to read the full `README.md` for the strings to find and replace to make sure everything matches your setup.

## Software Libraries to Install (Overkill Warning)

Because of all that, by the time I tried to install FAE on an Ubuntu VM, I was pretty burnt out and under the gun to finish. So when I tried to install something and it complained about an unmet dependency, I got a little carried away and installed everything I thought I might need, even if I wasn't sure...dev libraries, debug symbols, everything:

```
sudo apt install apache2 apache2-dev aptitude build-essential ca-certificates curl gnupg2 libapache2-mod-wsgi-py3 libbz2-dev libgdbm-dev liblzma-dev libncurses5-dev libpq-dev libreadline-dev libsqlite3-dev libssl-dev lsb-release openjdk-8-dbg openjdk-8-source postgresql postgresql-all postgresql-contrib python3-dev python3-pip python3-postgresql python3-psycopg2 python3-psycopg2-dbg software-properties-common tk-dev unzip zlib1g-dev  
```


As of this writing (May 2020) Ubuntu 18.04.4 includes (or defaults to installing via `apt`):
- Apache 2.4.29 (but `apache2-dev` has to be installed via `apt`)
- Postgres 10.12
- Java 8 (`openjdk-8-jdk` version `8u252-b09-1~18.04`) also called 1.8
- Python 3.6.9
- Pip 18.x

Because Ubuntu 18.04.4 ships with `apache` you can probably skip installing that

### Upgrading Installed Software

**Pip 18.x** won't be able to find Django **2.2.12** so make sure you update pip via `python3 -m pip install --upgrade pip` that brought me up to **pip 20.1**, which will be able to find Django 2.2.12, as well as the other updated python app versions in use in the current `requirements.txt` 

Without a doubt, there's a lot of bloat, those packages install a bunch of other packages (because I didn't use the `--no-install-recommends` flag with `apt install`) but at the moment I'm only trying to get everything up an working on a VM on my local machine so I can use the debug settings and apps to make sure everything works right.

Ubuntu 18.04.4 also ships with quite a bit of software that isn't critical so keep that in mind as there are performance and security considerations.

That said, it's good to keep software up-to-date (within reason but when setting up an application it's good to start with the latest compatible version of any software in use).

Therefore, in addition to using the latest and updated version of Ubuntu that is easy to install the dependencies we need on (again 18.04.4 is the best I've found), we're also going to update the sources lists for `apt` so we can install more recent version of software.

### `mod_wsgi`, Nginx Reverse Proxy and Postgres (latest) 

I have always installed `mod_wsgi` via `apt` (listed above as `libapache2-mod-wsgi-py3`) but apparently it is simpler to install it via pip so while it is included above, it isn't needed because it is installed by pip because as is listed in `requirements.txt`.

The [Django docs recommend Nginx for serving static files](https://docs.djangoproject.com/en/2.2/howto/deployment/wsgi/modwsgi/) but the version that `apt search nginx` returns is 1.14.0

Similarly, the current version of Postgres is 12.2.

To upgrade to more recent versions of Apache, Nginx and Postgres, you'd need to edit the "apt sources lists" and here's how to do that:

#### For Apache
```
sudo add-apt-repository ppa:ondrej/apache2
sudo apt-get update
```

#### For Nginx

If you would like to use mainline nginx packages, run the following command:
```
echo "deb https://nginx.org/packages/mainline/ubuntu `lsb_release -cs` nginx" \
   | sudo tee /etc/apt/sources.list.d/nginx.list
```
Next, import an official nginx signing key so apt could verify the packages authenticity:
```
curl -fsSL https://nginx.org/keys/nginx_signing.key | sudo apt-key add -
```
Verify that you now have the proper key:
```
sudo apt-key fingerprint ABF5BD827BD9BF62
```
The output should contain the full fingerprint 573B FD6B 3D8F BC64 1079 A6AB ABF5 BD82 7BD9 BF62 as follows:
```
pub   rsa2048 2011-08-19 [SC] [expires: 2024-06-14]
      573B FD6B 3D8F BC64 1079  A6AB ABF5 BD82 7BD9 BF62
uid   [ unknown] nginx signing key <signing-key@nginx.com>
```

Install with:
```
sudo apt update
sudo apt install nginx
```

#### Postgres

Create the file `/etc/apt/sources.list.d/pgdg.list` and add a line for the repository:
`deb https://apt.postgresql.org/pub/repos/apt/ bionic-pgdg main`

```
wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -
sudo apt-get update
apt-get install postgresql-12
```

Installing this on Ubuntu include the ability to readily install any of the following packages via apt:

`postgresql-client-12`
`postgresql-12`
`postgresql-contrib-9.x`
`libpq-dev`
`postgresql-server-dev-12`
`pgadmin4`

I could be wrong but of all that software we installed with `apt` originally, it looks like what we really need (given the software installed by Postgres) for development is:

```
sudo apt install apache2-dev build-essential ca-certificates curl gnupg2 libbz2-dev libgdbm-dev liblzma-dev libncurses5-dev libreadline-dev libsqlite3-dev libssl-dev lsb-release openjdk-8-dbg openjdk-8-source python3-dev python3-pip python3-psycopg2 python3-psycopg2-dbg software-properties-common tk-dev unzip zlib1g-dev  
```

For production, we should probably get rid of any software ending in `-dbg` (debug) so that list probably gets whittled down to:

```
sudo apt install apache2-dev build-essential ca-certificates curl gnupg2 libbz2-dev libgdbm-dev liblzma-dev libncurses5-dev libreadline-dev libsqlite3-dev libssl-dev lsb-release openjdk-8-source python3-dev python3-pip python3-psycopg2 software-properties-common tk-dev unzip zlib1g-dev
```

If my Vagrant VM is loading a standard version of Ubuntu (I think it is), you can probably omit `ca-certificates` and `curl` and `lsb-release` from that list...a C compiler (I think either `gcc` or `g++` is sufficient) is required to build `psycopg2` but that aready comes installed, too. 

I also think that `openjdk-8-jdk` might be adequate, instead of `openjdk-8-source` but that's untested thus far.

## Setting Up Your Virtual Environment

At this point, I installed *virtualenv* with `pip3 install virtualenv`

While the original FAE2 repo names their virtual environment `fae2env`, this repo simply uses a virtual environment called `venv`.

Additionally, while the original repo uses the traditional Apache directory for public facing websites `/var/www/html`, this fork uses `/opt/fae2/public_html`.

The directory `/opt` should already exist on Ubuntu so you'll need to:

### Method 1 - Using Git

```
cd /opt
git clone https://github.com/ADA-First/fae2.git
cd fae2
```

-OR-

### Method 2 - Downloaded a .zip archive from Github

If you have downloaded the repo (and presumably aren't using git), you'd `cd` to the location where you downloaded the zip archive and then:
```
(venv) unzip fae2-master.zip
(venv) mv ./fae2-master /opt/fae2
(venv) cd /opt/fae2
```

Regardless of which method you chose to use...

Just to be safe type `which python3.6` it should return `/usr/bin/python3.6`.
Then type `pwd` and make sure it returns `/opt/fae2`.

If it does you're good to go and you'll type:
```
virtualenv --python /usr/bin/python3.6 venv
source venv/bin/activate
```

This will create a virtual environment named "venv" using Python 3.6 with the path of `/opt/fae2/venv` and activate that environment for that shell.

You should then see something in your shell prompt, usually at the start of the command prompt line, like `(venv)`

The directory `venv` is excluded from version control in `.gitignore` so it won't be checked into your repo.
From there, it's time to install Django and the other Python apps into your virtual environment and you'd do that with:
```
(venv) pip install -r requirements.txt
```

Now check everything that was installed with:
```
(venv) python --version
(venv) pip --version
(venv) pip list installed
```

If everything is correct you should get at least 3.6.9 for Python, at least 20.1 for Pip and the installed software should match what's listed in `requirements.txt`

The original **README.md** file should be sufficient to explain what to do from there, however the Apache Configuration file I use is modified to match the paths described above.

## Configuring Apache

Currently testing:
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

```
<VirtualHost *:80>

  ServerName  fae2.example.com  # Replace with your domain
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
  
## The lines below redirect HTTP to HTTPS
## so you'll need to have that set up before uncommenting
## If using Nginx as a reverse proxy, it handles SSL/HTTPS
# RewriteEngine on
# RewriteCond %{SERVER_NAME}=fae2.example.com
# RewriteRule ^https://%{SERVER_NAME}%{REQUEST_URI} [END,NE,R=permanent]

</VirtualHost>
```

## Handling Static Files

I found the static files settings and functionality quite confusing and apparently so do a lot of people but I found a [good explanation here](https://rahmonov.me/posts/django-static-files/), so I renamed things to be more obvious and added a couple new directories.

The `STATIC_ROOT` (which is located at `./public_html/static`) should be empty!

The static files (i.e. CSS and JS assets) from your apps and those that are contained in the `STATICFILES_DIRS` will be gathered and copied into that directory when you run `python manage.py collectstatic`.

Regardless of the actual path to (and name of) that directory, setting the `STATIC_ROOT` to "/static/" ensures that when the assets are served they are served as if they were in `example.com/static/...`.

This is also why the Apache config file above has a line setting the `Alias` for `/static/` to the actual path to the `STATIC_ROOT`. The settings are arbitrary but they need to match so if you change one, you'll need almost certainly need to change another.

## Considerations for Google Cloud and Similar Service Providers

I'm not new to managing Linux servers but my first attempts to get this application running were using Docker on **Google Kubernetes Engine** (that was overkill and I couldn't get costs lower than about $150/mo), which is why I started off with Debian.

I then tried to switch to **Google Cloud Run** only to realize this application isn't a good fit for that because `fae-util` needs to run as a background process until this application calls it.

After weeks struggling with Google Cloud, I realized it just wasn't ideal: I want logs to be where I expect them; I want changes I make to persist; I want to be able to use `sudo`, etc.

Then I finally realized that I could just use a regular old cloud computing provider and get exactly what I wanted at a much lower cost so I abandoned Google Cloud (I'll use Kubernetes again when I need to scale but I had no clue what I was getting into when I started using it).


-------------------------------

Blog about Nginx Postgres and Gunicorn on Ubunut 18.04 published June 2018
https://linuxconfig.org/how-to-host-django-with-nginx-on-ubuntu-18-04-bionic-beaver-linux

```
$ sudo su postgres
```

```
psql
```

```
postgres=# ALTER USER postgres WITH ENCRYPTED PASSWORD 'yourpassword';
```

```
postgres=# CREATE DATABASE your_db;
```

```
postgres=# CREATE ROLE django_user WITH ENCRYPTED PASSWORD 'yourpassword';
```

```
postgres=# GRANT ALL PRIVILEGES ON DATABASE your_db TO django_user;
```

```
\q
```

Upgrade Pip to latest with:
`python3 -m pip install --upgrade pip`

Install `virtualenv`, with `pip3 install virtualenv`

Check where Python 3.6 is with `which python3.6`

Include that location after the `-p` in the command below:
Create virtual environment with `virtualenv -p /usr/bin/python3.6 venv`

Activate virtual environment with `source venv/bin/activate`

Install requirements into virtual environment with 
```
pip install -r requirements.txt
```

Change directories to the Nginx configs with `cd /etc/nginx/sites-available`

then `sudo nano fae2.conf` and put this in the file you just created

```
upstream apache {
  server unix:/opt/fae2/fae2.sock fail_timeout=0;
}

server {
  listen 80;
  server_name compliance.adafirst.test;

  client_max_body_size 4G;
  keepalive_timeout 70;

  access_log /var/log/nginx/fae2.access_log main;
  error_log /var/log/nginx/fae2.error_log info;

  root /opt/fae2/public_html

  location /static/ {
    autoindex on;
    alias /opt/fae2/public_html/static/;
    expires 1M;
    # access_log off;
    add_header Cache-Control "public";
    proxy_ignore_headers "Set-Cookie";
  }
  location @proxy_to_apache {
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header Host $http_host;
    # or is it: 
    # proxy_set_header Host $host;

    proxy_redirect off; # not sure about this

    proxy_pass   https://apache;
    # or if not using a unix socket:
    # proxy_pass http://127.0.0.1:8080;
  }
  location / {
    try_files $uri @proxy_to_apache;
  }
}
```

Code used in other tutorial that could possibly be integrated:
```
  access_log /var/log/nginx/fae2.log;
  proxy_pass http://127.0.0.1:8080;
  proxy_set_header X-Client-IP $remote_addr;
  proxy_set_header Host $host;
  proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
```

TODO:
Look into a WAF, like the one for Nginx as explained here:
https://webdock.io/en/docs/how-guides/how-secure-nginx-naxsi-firewall-ubuntu-1804-vps

How to generate an SSL cert using Let's Encrypt:
https://linuxize.com/post/secure-nginx-with-let-s-encrypt-on-ubuntu-18-04/
https://haydenjames.io/how-to-set-up-an-nginx-certbot/

-------------------

## Default Ubuntu 18.04.4 Nginx Configuration

This is the default `/etc/nginx/nginx.conf` in Ubuntu 18.04.4 Bionic Beaver
```
# nginx.conf
user www-data;
worker_processes auto;
pid /run/nginx.pid;
include /etc/nginx/modules-enabled/*.conf;

events {
  worker_connections 768;
  # multi_accept on;
}

http {

  ##
  # Basic Settings
  ##

  sendfile on;
  tcp_nopush on;
  tcp_nodelay on;
  keepalive_timeout 65;
  types_hash_max_size 2048;
  # server_tokens off;

  # server_names_hash_bucket_size 64;
  # server_name_in_redirect off;

  include /etc/nginx/mime.types;
  default_type application/octet-stream;

  ##
  # SSL Settings
  ##

  ssl_protocols TLSv1 TLSv1.1 TLSv1.2; # Dropping SSLv3, ref: POODLE
  ssl_prefer_server_ciphers on;

  ##
  # Logging Settings
  ##

  access_log /var/log/nginx/access.log;
  error_log /var/log/nginx/error.log;

  ##
  # Gzip Settings
  ##

  gzip on;

  # gzip_vary on;
  # gzip_proxied any;
  # gzip_comp_level 6;
  # gzip_buffers 16 8k;
  # gzip_http_version 1.1;
  # gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;

  ##
  # Virtual Host Configs
  ##

  include /etc/nginx/conf.d/*.conf;
  include /etc/nginx/sites-enabled/*;
}


#mail {
# # See sample authentication script at:
# # http://wiki.nginx.org/ImapAuthenticateWithApachePhpScript
# 
# # auth_http localhost/auth.php;
# # pop3_capabilities "TOP" "USER";
# # imap_capabilities "IMAP4rev1" "UIDPLUS";
# 
# server {
#   listen     localhost:110;
#   protocol   pop3;
#   proxy      on;
# }
# 
# server {
#   listen     localhost:143;
#   protocol   imap;
#   proxy      on;
# }
#}
```


This file is `/etc/nginx/sites-available/default` (it's included in the main configuration file, detailed above, which is found at `/etc/nginx/nginx.conf` by the line that reads `include /etc/nginx/sites-enabled/*`):

```
##
# You should look at the following URL's in order to grasp a solid understanding
# of Nginx configuration files in order to fully unleash the power of Nginx.
# https://www.nginx.com/resources/wiki/start/
# https://www.nginx.com/resources/wiki/start/topics/tutorials/config_pitfalls/
# https://wiki.debian.org/Nginx/DirectoryStructure
#
# In most cases, administrators will remove this file from sites-enabled/ and
# leave it as reference inside of sites-available where it will continue to be
# updated by the nginx packaging team.
#
# This file will automatically load configuration files provided by other
# applications, such as Drupal or Wordpress. These applications will be made
# available underneath a path with that package name, such as /drupal8.
#
# Please see /usr/share/doc/nginx-doc/examples/ for more detailed examples.
##

# Default server configuration
#
server {
  listen 80 default_server;
  listen [::]:80 default_server;

  # SSL configuration
  #
  # listen 443 ssl default_server;
  # listen [::]:443 ssl default_server;
  #
  # Note: You should disable gzip for SSL traffic.
  # See: https://bugs.debian.org/773332
  #
  # Read up on ssl_ciphers to ensure a secure configuration.
  # See: https://bugs.debian.org/765782
  #
  # Self signed certs generated by the ssl-cert package
  # Don't use them in a production server!
  #
  # include snippets/snakeoil.conf;

  root /var/www/html;

  # Add index.php to the list if you are using PHP
  index index.html index.htm index.nginx-debian.html;

  server_name _;

  location / {
    # First attempt to serve request as file, then
    # as directory, then fall back to displaying a 404.
    try_files $uri $uri/ =404;
  }

  # pass PHP scripts to FastCGI server
  #
  #location ~ \.php$ {
  # include snippets/fastcgi-php.conf;
  #
  # # With php-fpm (or other unix sockets):
  # fastcgi_pass unix:/var/run/php/php7.0-fpm.sock;
  # # With php-cgi (or other tcp sockets):
  # fastcgi_pass 127.0.0.1:9000;
  #}

  # deny access to .htaccess files, if Apache's document root
  # concurs with nginx's one
  #
  #location ~ /\.ht {
  # deny all;
  #}
}


# Virtual Host configuration for example.com
#
# You can move that to a different file under sites-available/ and symlink that
# to sites-enabled/ to enable it.
#
#server {
# listen 80;
# listen [::]:80;
#
# server_name example.com;
#
# root /var/www/example.com;
# index index.html;
#
# location / {
#   try_files $uri $uri/ =404;
# }
#}
```
