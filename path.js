const path = require('path');

const filePath = path.join('/public', 'dist', '/styles', 'main.css');
console.log(path.sep);
console.log(path.basename(filePath))
console.log(path.dirname(filePath))
console.log(path.parse(filePath))