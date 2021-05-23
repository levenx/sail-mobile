const fs = require('fs');
const path = require('path');

function replaceAll(str, find, replace) {
  var find = find.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
  return str.replace(new RegExp(find, 'g'), replace);
}

const sourcePath = path.join(__dirname, '../dist/index.html');
const destPath = path.join(__dirname, '../../index.html');

let sourceContent = fs.readFileSync(sourcePath).toString();
sourceContent = replaceAll(
  sourceContent,
  '/assets/',
  './sail-mobile-doc/dist/assets/',
);
fs.writeFileSync(destPath, sourceContent);
console.log('文档打包完毕');
