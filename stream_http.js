const http = require('http');
const {createReadStream} = require('fs');

const server = http.createServer((req, res) => {
    const fileStream = createReadStream('./data/bigFile.txt', 'utf-8');

    fileStream.on('data', (chunk) => {
        fileStream.pipe(res);
    })

    fileStream.on('error', (error) => {
        console.log(error);
    })
})

server.listen(3600);
console.log('server on port 3600');