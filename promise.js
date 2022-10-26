const {readFile, read} = require('fs');

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


mostrarArchivo('./data/first.txt')
    .then(res => console.log(res))
    .then(() => mostrarArchivo('./data/second.txt') )
    .then(res => console.log(res))
    .then(() => mostrarArchivo('./data/newFile.txt') )
    .then(res => console.log(res))
    .catch(error => console.log(error))

