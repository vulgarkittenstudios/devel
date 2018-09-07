var fs = require('fs');

var file = process.env.HOME+'/devel/node_modules/resolve/lib/node-modules-paths.js';
var str = 'process.env.NODE_PATH';
fs.readFile(file, 'utf8', function (err,data) {

  if (err) {
    return console.log(err);
  }
 
 var result = data.replace(/\'node_modules\'/g, str);

  fs.writeFile(file, result, 'utf8', function (err) {
     if (err) return console.log(err);
  });
});
