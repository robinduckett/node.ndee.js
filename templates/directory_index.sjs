<?sjs var fs = require('fs'), sys = require('sys'); ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN"
  "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <title>Index of <?sjs puts(dir); ?></title>
  </head>
  <body>
    <h1>Index of <?sjs puts(dir); ?></h1>
    <ul>
      <li><a href="." title="Current Directory">.</a></li>
      <li><a href=".." title="Up One Level">..</a></li>
      <?sjs
        var files = fs.readdirSync(dir);
        var dar = dir.substring(-1, 1) == '/' ? '/' : '';
        
        files.forEach(function(file) {
          var stats = fs.statSync(dir + dar + file);          
          puts('<li><a href="' + file + (stats.isDirectory() ? '/' : '') + '" title="'+file+'">'+file+'</a></li>\n');
        });
      ?>
    </ul>
  </body>
</html>