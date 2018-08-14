# Termux devel-modules

This repo includes multiple useful 
libraries in it's `package.json` file for 
npm, and it's `composer.json` file for 
composer.

In termux run the following command

`mkdir ~/devel|cd ~/devel`

create a link to your global .bashrc file 
with this command

`ln -s $PREFIX/etc/bash.bashrc ~/.bashrc`

In the `~/.bashrc` file add this..

`export NODE_PATH=~/devel/node_modules`

Now modify the `package.json` and 
`composer.json` files to reflect your 
vendor 
needs.

now to get webpack to play nice with this 
setup run the fix-sync script

`node ~/devel/fix-sync.js`

now just install your packages

`npm i`
`composer install`

To make use of composer globally you will 
need to be familliar with the config 
commands.

cd into tour project directory and point 
the vendor-dir option to the global 
directory.

`composer config vendor-dir ~/devel/vendor`

to change it back ... "useful for 
generating `autoload.php` files" just 
replace 
`~/devel/vendor` with `vendor`
