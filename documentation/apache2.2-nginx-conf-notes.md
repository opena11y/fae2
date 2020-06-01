# Configuring Apache with `mod_wsgi` and Nginx as a Reverse Proxy

These notes, which deal with setting up Apache 2.2 (updates to some Apache conf rules are required for 2.4, which you should definitely be using), have been taken *almost* verbatim from a book about [Django for Ecommerce which is available online](https://doc.lagout.org/programmation/Django/Beginning%20Django%20E-Commerce%20%5BMcGaw%202009-10-28%5D.pdf) in the book it starts on page 326 but in the online version it actually starts on page 350.

I have only copied the parts useful to me (and my skill level and set up)...still it's one of the best explantions I have come across on how to setup Apache 2.x with mod_wsgi and then add Nginx as a reverse proxy to serve static files, and therefore improve performance and security because only Nginx is publicly exposed).

Questions and issues are probably best directed at the [original creators of the application](https://github.com/opena11y/fae2). I'm not a developer, I just play one on TV.

Everything below is taken from that book with only minor customizations; these notes are more for me than for anyone else as I am figuring it out as I go.

*******************************

Once you have your database created and a database user account set up with credentials that match those in settings.py, you just need to run the `manage.py syncdb` utility in order to create all of your database tables and their indexes on the new machine.

## Apache 2.2 Configuration

Apache 2.2 is configured by creating a file in `/etc/apache2/sites-available/` named after your project or domain like `fae2.conf` containing:

```
NameVirtualHost *:80
<VirtualHost *:80>
    ServerAdmin admin@your-domain.com

    # ServerName is required for a virtual host
    ServerName www.your-domain.com
    ServerAlias your-domain.com

    Alias /static /opt/fae2/app/fae2/staticroot

    # DocumentRoot is required for a virtual host
    DocumentRoot /opt/fae2/app/fae2

    WSGIScriptAlias / /opt/fae2/app/fae2/fae2/fae2/wsgi.py
    ErrorLog /var/log/apache2/error.log

    LogLevel debug
    CustomLog /var/log/apache2/access.log combined 

    EnableSendfile Off # while in development using VirtualBox due to a bug
</VirtualHost>
```

If you are still in development (not in production) `LogLevel debug` is or `info` is likely to be what you want. 

Possible `LogLevel` values include: `debug`, `info`, `notice`, `warn`, `error`, `crit`, `alert`, `emerg`.

Create the symlink via `sudo a2ensite fae2`

Disable the default site via `sudo a2dissite default`

Double check ports in `/etc/apache2/ports.conf`

Comment out code in `urls.py` that is serving static files (while this is part of the book, I don't think this code is in use in FAE2)
```
#(r'^static/(?P<path>.*)$', 'django.views.static.serve',
#    { 'document_root' : os.path.join(settings.CURRENT_PATH, 'static') }), 
```

Restart Apache via `sudo apache2ctl restart`

## Nginx Configuration

`cd /etc/nginx/sites-available` then create a file named `fae2.conf` containing:
```
server {
    listen 80;
    server_name compliance.adafirst.test;
    location / {
        access_log /var/log/nginx/fae2.log;
        proxy_pass http://127.0.0.1:8080;
        proxy_set_header X-Client-IP $remote_addr;
        proxy_set_header Host $host;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
    location /static/ {
        root /opt/fae2/public_html/;
    }
    sendfile off; # while in development using VirtualBox due to a bug
}
```

To ensure the client IP address are recorded in Apache/Django logs (not 127.0.0.1 of the reverse proxy) install `mod_rpaf` via `sudo apt-get install libapache2-mod-rpaf`

Enable with
```
sudo ln -s /etc/nginx/sites-available/fae2 /etc/nginx/sites-enabled/fae2
```

Edit Apache config `fae2.conf` to replace 

```
<VirtualHost *:80>
```

with

```
<VirtualHost 127.0.0.1:8080>
```

and replace the `NameVirtualHost` directive with

```
NameVirtualHost 127.0.0.1:8080
```

And configure `mod_rpaf` via editing `/etc/apache/fae2.conf` to include the following:

```
...
    RPAFenable On
    RPAFsethostname On
    RPAFproxy_ips 127.0.0.1
</VirtualHost>
```

Modify `/etc/apache2/ports.conf` from `Listen 80` to `Listen 8080`

When finished, restart Apache and restart Nginx

## HTTPS Configuration

It's now time to configure HTTPS settings in Nginx (assuming you have installed an SSL cert) so edit `/etc/nginx/sites-available/fae2.conf` by appending the following code:

```
server {
    listen 443;
    ssl   on;
    ssl_certificate /etc/ssl/certs/fae2.crt;
    ssl_certificate_key   /etc/ssl/private/fae2.key;

    server_name www.your-domain.com your-domain.com;

    location / {
        access_log /var/log/nginx/fae2.log;
        proxy_pass http://127.0.0.1:8080;
        proxy_set_header X-Client-IP $remote_addr;
        proxy_set_header Host $host;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;       proxy_set_header X-Forwarded-Ssl on;
    }

    location /static {
        root /opt/fae2/app/fae2;
    }
}
```

There are a few key differences between this and the other server entry in the file. The first is the port number on which we’re listening for incoming requests. Right after that, there are three new entries that enable SSL on our site. These three lines configure the ssl setting to on, and then point the virtual host to the locations of the certificate and private key files on our machine.

**NOTE:** I don't think any of the code below here is currently in use in FAE2.

The final key difference of which you should be aware if the additional `proxy_set_header` entry we’ve added to our code. This is because of a small bug that arises in the `SSLRedirect` class due to our server configuration.

Right now, our Django application has its pages served by Apache, which is currently ignorant of any of the SSL settings we’ve set up in Nginx. A secure request that comes into the site at an HTTPS URL will be forwarded from Nginx to Apache, which will send the request to our Django project.

The `SSLMiddleware` will catch the request and check if it is secure by using the `request.is_secure()` method. However, because the request coming into Apache from Nginx is notsecure, the `SSLRedirect` will assume that the request should be insecure and attempt to redirect our request to an insecure URL.

However, when this happens, the `SSLRedirect` will catch the redirect, find that the SSL parameter in the URL entry is set to True, and attempt to redirect to a secure page. What we have here is an infinite loop that will redirect back and forth between secure and insecure until your web server or browser gets fed up and stops trying to serve the request. This is fixed by adding the header to all requests from Nginx to Apache. If you open the `SSLMiddleware.py` file and scroll down to the `_is_secure()` method, you should see the following two lines:

```
if 'HTTP_X_FORWARDED_SSL' in request.META:
    return request.META['HTTP_X_FORWARDED_SSL'] == 'on' 
```

This checks each request for an HTTP header called `HTTP_X_FORWARDED_SSL`.

As long as we add this header to each request that is proxied from Nginx to Apache, the `_is_secure()` method will return `True`, our pages will be served securely, and the infinite loop can be safely avoided. Now that you have this configured in your virtual host files, go into `settings.py` and set the `ENABLE_SSL` configuration variable to `True`. After restarting both Apache and Nginx, you should now be able to see your secure pages served over HTTPS in the browser instead of HTTP.
