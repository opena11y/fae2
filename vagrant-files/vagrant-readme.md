# Using Vagrant for a localhost Development Virtual Machine

The files in the directory, the `Vagrantfile` and `bootstrap.sh` need to be moved 2 directories up to work as configured.

Therefore, from the "fae2 root" directory (the one containing the `.gitignore` file) you'd want to:
```
cp vagrant-files/Vagrantfile ../../
cp vagrant-files/bootstrap.sh ../../
```

Assuming that the Vagrant root is `~/vagrant-local` and within that is a directory `opt` which contains the "fae2 root" (`fae2`)so that the path to the `Vagrantfile` and `bootstrap.sh` would be: 

```
~/vagrant-local/opt/fae2/vagrant-files/Vagrantfile`
```
and
```
~/vagrant-local/opt/fae2/vagrant-files/bootstrap.sh
```

You could move them to the correct location with
```
mv ~/vagrant-local/opt/fae2/vagrant-files/Vagrantfile ~/vagrant-local/opt/
mv ~/vagrant-local/opt/fae2/vagrant-files/bootstrap.sh ~/vagrant-local/opt/
```

After doing so Vagrant should then work as intended.
