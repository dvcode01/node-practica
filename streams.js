// const {writeFile} = require('fs/promises');

// async function createBigFile(){
//     await writeFile('./data/bigFile.txt', 'hello world'.repeat(100));
//     console.log('Se creo archivo..');
// }

// createBigFile();

const {createReadStream} = require('fs')

const stream = createReadStream('./data/bigFile.txt', 'utf-8');

stream.on('data', (chunk) => {
    console.log(chunk)
})

stream.on('end', () => {
    console.log('se acabo la lectura del archivo');
})

stream.on('error', (error) => {
    console.log('Hubo un error')
    console.log(error)
})