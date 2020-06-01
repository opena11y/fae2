This folder has been named `public_html` to make it clear that the files in it are intended to be served public over the internet.

One of the things that pache requires when using a virtual host based setup (as we will) is that it have a `DocumentRoot` configured (and that directory will effectively be the home folder of that vhost.)

Thus, if your domain is `example.com`, your public facing website root would be `http(s)://example.com/` the final `/` is the root of your virtual host.

The branch/fork of FAE is configured to serve the application from:
```
mydomain.com/
```
which on the actual filesystem of the server will be
```
/opt/fae2/public_html/
```

Accordingly, `/opt/fae2/public_html/static` will be the `STATIC_ROOT` (where all the static files from all the various apps and from the `staticfiles` directory will be copied to be served) and will be mapped to `/static/` by the `STATIC_URL` setting.
