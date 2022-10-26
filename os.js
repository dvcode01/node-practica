const os = require('os');

console.log(os.userInfo());
console.log('Cantidad de tiempo que he estado en la computadora desde que la encendi: ' + os.uptime());

console.table({
    os: os.platform(),
    version: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem()
})