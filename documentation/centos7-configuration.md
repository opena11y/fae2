# Setting up FAE 2.1 on CENTOS7 Linux

All commands are assume you are logged in as `root` or are using `sudo`.

## Disable Selinux

Disabiling SELinux will make it much easier to install and configure FAE 2.1

Edit the `/etc/sysconfig/selinux` file and change the `SELINUX=enforcing` to `SELINUX=disabled`.

```
$ nano /etc/sysconfig/selinux
```

Example of updated file:

```
# This file controls the state of SELinux on the system.
# SELINUX= can take one of these three values:
#       enforcing - SELinux security policy is enforced.
#       permissive - SELinux prints warnings instead of enforcing.
#       disabled - SELinux is fully disabled.
SELINUX=disabled
# SELINUXTYPE= type of policy in use. Possible values are:
#       targeted - Only targeted network daemons are protected.
#       strict - Full SELinux protection.
SELINUXTYPE=targeted
```

Restart the server

```
$ reboot
```

Based on the resource [Enable or Disable SELinux](https://www.centos.org/docs/5/html/5.1/Deployment_Guide/sec-sel-enable-disable.html)

## Make sure yum has updated packages

First, clean-up yum:

```
sudo yum clean all
```

As a matter of best practice we’ll update our packages:

```
sudo yum -y update
```

## Check version of Python

```
~ python -V
```

You want to have at least Python 2.7 installed as the default python version

### Check if python PIP installed

```
$ pip
```

If pip is not installed, you can install it with the following command:

```
$ curl "https://bootstrap.pypa.io/get-pip.py" -o "get-pip.py"
$ python get-pip.py
```

## Install Git

If git is not installed, install git

```
$ yum -y install git
```

Test git version

```
$ git --version
```

## Install Apache

If Apache web server is not installed. install using the following instructions

### Apache Step 1: Install Apache

Installing Apache is as simple as running just one command:

```
$ sudo yum -y install httpd
```

### Apache Step 2: Allow Apache Through the Firewall

Allow the default HTTP and HTTPS port, ports 80 and 443, through firewalld:

```
$ sudo firewall-cmd --permanent --add-port=80/tcp

$ sudo firewall-cmd --permanent --add-port=443/tcp
```

And reload the firewall:

```
$ sudo firewall-cmd --reload
```

### Apache Step 3: Configure Apache to Start on Boot

And then start Apache:

```
$ sudo systemctl start httpd
```

Be sure that Apache starts at boot:

```
$ sudo systemctl enable httpd
```

To check the status of Apache:

```
$ sudo systemctl status httpd
```

To stop Apache:

```
$ sudo systemctl stop httpd
```

Based on [How to Install Apache on CentOS 7](https://www.liquidweb.com/kb/how-to-install-apache-on-centos-7/)

## Install mod_wsgi

This is a python package needed for Apache to run FAE 2.1

```
$ yum -y install mod_wsgi
```

## Install Postgres database

If postggres is not installed, installusing the following instrutions

Install the postgresql-server package and the "contrib" package, that adds some additional utilities and functionality:

```
$ yum install postgresql-server postgresql-contrib
```
Accept the prompt, by responding with a y.

Now that our software is installed, we have to perform a few steps before we can use it.

Create a new PostgreSQL database cluster:

```
$ postgresql-setup initdb
```

By default, PostgreSQL does not allow password authentication. We will change that by editing its host-based authentication (HBA) configuration.

Open the HBA configuration with your favorite text editor. We will use vi:

```
$ nano /var/lib/pgsql/data/pg_hba.conf
```
Find the lines that looks like this, near the bottom of the file:
pg_hba.conf excerpt (original)

```
host    all             all             127.0.0.1/32            ident
host    all             all             ::1/128                 ident
```
Then replace "ident" with "md5", so they look like this:
pg_hba.conf excerpt (updated)

```
host    all             all             127.0.0.1/32            md5
host    all             all             ::1/128                 md5
```

Save and exit. PostgreSQL is now configured to allow password authentication.

Now start and enable PostgreSQL:

```
    sudo systemctl start postgresql
    sudo systemctl enable postgresql
```

PostgreSQL is now ready to be used. We can go over how it works and how it may be different from similar database management systems you may have used.


Instructions based on [How To Install and Use PostgreSQL on CentOS 7](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-postgresql-on-centos-7)

### Install `psycopg2`

The `psycogp2` package is used by python to connect to the postgres database server

```
$ yum -y install python-psycopg2
```

### Create a database user

Use the createuser command to create a database user for FAE 2.1

```
$ sudo -i -u postgres
$ createuser --interactive -P fae2DBuser
```

### Create database

Use psql shell to create a database

```
$ createdb fae2DB -O fae2DBuser
```

## Install Java

If Java is not installed, install the latest version of java

```
$ sudo yum install java-1.8.0-openjdk
```

If javac is not installed, install latest version:

```
$ sudo yum install java-1.8.0-openjdk-devel
```

## Create a place to put FAE 2.1 code and clone git repository 

Create a directory to put FAE 2.1 related files, in this example `/var/www/fae2`.

```
$ cd \var\www
$ mkdir fae2
$ cd fae2
$ git clone https://github.com/opena11y/fae2.git
```

## Setup and Configure Virtual Environment for Python

* FAE 2.1 need Python 2.7.x to run
* The virtual environment is need for Apache configuration

[Hitchhicker's Guide to Virtual Environments](https://python-guide-cn.readthedocs.io/en/latest/dev/virtualenvs.html)

Install virtualenv via pip:

```
$ pip install virtualenv
```

Test your virtual environment installation

```
$ virtualenv --version
```


Create a virtual environment for FAE 2.1

```
$ virtualenv fae2env
```

Change directory to virtual env

```
$ cd fae2env
```

Activate virtual environment

```
$ source bin/activate
```

Install required pyton packages using requirement.txt file

```
$ (fae2env) cp ../fae2/requirements.txt .
$ (fae2env) pip install -r requirements.txt
```

Install shibboleth modue using git

```
$ (fae2env) pip install git+https://github.com/Brown-University-Library/django-shibboleth-remoteuser.git
```

## Configure FAE django settings

### Create a secrets.json file for configuring local version of FAE

```
$ (fae2env) cd /var/www/fae2/fae2/fae2/fae2
$ (fae2env) cp secrets_template.json secrets.json
$ (fae2env) nano secrets.json
```

Edit the `secrets.json` file for your specific installation

The `secrets.json` file is a JSON formatted file that contains configuration information for your local version of FAE 2.1.
A template of the contents of the file is in `secrets_template.json`.  You can copy this file to `secrets.json` and then edit the file for you local configuration with the `nano` or other text editor.

### Create and set file permissions for log and data directories
* The `data` directory is where `fae-util` stores evaluation results
* The evaluation results are copied to the database at the event of an evaluation request
* The `logs` directory contins log files related to the use of fae2

```
$ (fae2env) cd /var/www/fae2/fae2
$ (fae2env) mkdir data
$ (fae2env) chown apache data 
$ (fae2env) mkdir logs
$ (fae2env) chown apache logs 
```

### Setup static files for CSS, Javascript and images

```
$ (fae2env) cd /var/www/fae2/fae2/fae2/
$ (fae2env) python manage.py collectstatic
```
### Setup database tables

```
$ (fae2env) python manage.py migrate
```

### Populate database

```
$ (fae2env) python populate/pop_all.py
```

### Test configuration

To test the configuration you will need to know the IP address of the computer or server, or use local host (e.g. 127.0.0.1).

```
$ (fae2env) python manage.py runserver  127.0.0.1:8000
```
You should be able to open and browser and go to the 127.0.0.1:8000, or if you used the computers actual IP address IP:8000, and FAE 2.1 login screen should apprear.   

## Configure `fae-util` service

* The `fae-util` service is used to load and analyze the pages using the Openajax evaluation library for websites.
* The `fae-util` service runs in the backgound waiting for an evaluation request.  
* In centos7 service scripts go in the `/etc/init.d` directory.
* A sample `fae-util` service script is in the `fae2/scripts` directory
* You may need to edit the sample `fae-util` script for the directories associated with your virtual environment and fae2 files

NOTE: You do not need to be in the virtual python environment for the next steps, but you need to be `root` or `sudo`.

```
$ cd /etc/initd/
$ cp /var/www/fae2/fae2/scripts/fae-util .
$ chmod 744 fae-util
$ service fae-util start
```
### Start `fae-util` service whenever the server restarts

```
$ systemctl enable fae-util
```

## Configure Apache to serve FAE 2.1 web interface

Add a `fae2.conf` to the `/etc/httpd/conf.d'

```
$ cd /etc/httpd/conf.d
$ nano fae2.conf
```
The following is a sample `fae2.conf` file:

```
<VirtualHost *:80 >
	     Servername  [domain name]
	     ServerAlias [domain name]

  Alias /static /var/www/fae2/fae2/fae2/fae2/static/

  <Directory /var/www/fae2/fae2/fae2/fae2/static>
    Require all granted
  </Directory>

  <Directory /var/www/fae2/fae2/fae2>
    <Files wsgi.py>
     Require all granted
    </Files>
  </Directory>

  WSGIDaemonProcess fae2 python-path=/var/www/fae2/fae2/fae:/var/www/fae2/fae2env/lib/python2.7/site-packages/
  WSGIProcessGroup  fae2
  WSGIScriptAlias / /var/www/fae2/fae2/fae2/fae2/wsgi.py process-group=fae2
</VirtualHost>
```

Restart apache

```
service httpd restart
```

## Setting up a `cron` job to cleanup reports

* In centos cron scripts are configures `/etc/crontab` files
* Add the following line to `crontab` file
* You may need to edit the paths bases on your location of the virtual environment and fae2 files

```
# at 1:30AM in the file /tmp/meminfo 
30 1 * * /var/www/fae2/fae2/scripts/fae-util-report-cleanup.sh
``` 
```

```
```
