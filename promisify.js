const {readFile} = require('fs/promises');

// const {promisify} = require('util');

// const readFilePromise = promisify(readFile);

async function resultadoNuevo(){
    try {
        const dato = await readFile('./data/first.txt', 'utf-8');
        const dato2 = await readFile('./data/second.txt', 'utf-8');
        const dato3 = await readFile('./data/newFile.txt', 'utf-8');
        console.log(dato);
        console.log(dato2);
        console.log(dato3);
    } catch (error) {
        console.log(error);
    }
}

resultadoNuevo();