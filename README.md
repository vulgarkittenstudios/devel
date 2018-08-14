# Termux devel-modules

This repo includes multiple useful 
libraries in it's `package.json` file for 
npm.

In termux run the following command

`mkdir ~/devel|cd ~/devel`

create a link to your global .bashrc file 
with this command

`ln -s $PREFIX/etc/bash.bashrc ~/.bashrc`

In the `~/.bashrc` file add this..

`export NODE_PATH=~/devel/node_modules`

Now modify the `package.json` file to reflect your 
project dependancy needs.

now to get webpack to play nice with this 
setup run the fix-sync script

`node ~/devel/fix-sync.js`

now just install your packages

`npm i`
