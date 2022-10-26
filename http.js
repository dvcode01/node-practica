const http = require('http');

const server = http.createServer((req, res) =>{
    console.log(req.url);

    if(req.url === '/'){
        res.write('<h1>Bienvenido al servidor</h1>');
        return res.end();
    }

    if(req.url === '/about'){
        res.write(`<h1>Nosotros</h1>`);
        return res.end();
    }
    
    res.write(`
    <h1>Hello World</h1>
    <p>No se encontro tu pagina amigo</p>
    <a href="/">Volver</a>
    `);
    res.end();
});

server.listen(3600);

console.log('Servidor escuchando en el puerto 3600');