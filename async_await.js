const {readFile} = require('fs');

function mostrarArchivo(pathFile){
    return new Promise((resolve, reject) => {
        readFile(pathFile, 'utf-8', (error, data) => {
            if(error){
                reject(error);
            }
        
            resolve(data);
        })
    })
}

async function resultadoNuevo(){
    try {
        const dato = await mostrarArchivo('./data/first.txt');
        const dato2 = await mostrarArchivo('./data/second.txt');
        const dato3 = await mostrarArchivo('./data/newFile.txt');
        console.log(dato);
        console.log(dato2);
        console.log(dato3);
    } catch (error) {
        console.log(error);
    }
}

resultadoNuevo();
