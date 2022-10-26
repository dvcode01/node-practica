const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.write('Welcome to the server');
        return res.end();
    }

    if(req.url === '/about'){
        // Blocking code
        /* Este codigo bloquea el hilo de ejecucion de node */
        for (let i = 0; i < 1000; i++) {
            console.log(Math.random() * i);
        }

        res.write('Welcome to the about');
        return res.end();
    }

    res.end('Not found Page');
});

server.listen(3600);
console.log('Server on port 3600');