#!/usr/bin/env bash

# Start by updating and removing software we will replace with newer versions
apt-get update
apt-get remove -y apache2 postgresql postgresql-10

# Install libraries we are likely to need
apt-get install -y build-essential libbz2-dev libgdbm-dev liblzma-dev libncurses5-dev libreadline-dev libsqlite3-dev libssl-dev software-properties-common sqlite3 zlib1g-dev


# Install latest stable Postgres (by updating apt sources lists)
#touch "/etc/apt/sources.list.d/pgdg.list"
echo "deb http://apt.postgresql.org/pub/repos/apt/ bionic-pgdg main" >> "/etc/apt/sources.list.d/pgdg.list"
# echo "deb http://apt.postgresql.org/pub/repos/apt/ bionic-pgdg main" | sudo tee -a "/etc/apt/sources.list.d/pgdg.list" > /dev/null

# Add Postgres key to verify
wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -

# Add latest Apache
add-apt-repository ppa:ondrej/apache2

# Add latest Nginx
add-apt-repository ppa:nginx/mainline

# Updated to reflect the newly added sources
apt-get update

apt-get install -y apache2 apache2-dev aptitude libapache2-mod-wsgi-py3 libpq-dev nginx openjdk-8-dbg openjdk-8-source postgresql-12 postgresql-contrib postgresql-server-dev-12 python3-pip python3-postgresql python3-psycopg2 python3-psycopg2-dbg tk-dev unzip
#if ! [ -L /opt ]; then
#  rm -rf /opt
#  ln -fs /vagrant /opt
#fi
apt-get upgrade -y
ln -fs /vagrant /opt
