const fs = require('fs');

// const first = fs.readFileSync('./data/first.txt', 'utf-8');
// const second = fs.readFileSync('./data/second.txt', 'utf-8');
// console.log(first);
// console.log(second);

// const title = 'este es el contenido se ha añadido';
// fs.writeFileSync('./data/four.txt', title, {
//     flag: 'a'
// });

fs.readFile('./data/first.txt', 'utf-8', (err, data) => {
    if(err){
        console.log(err);
    }
    console.log(data);

    fs.readFile('./data/second.txt', 'utf-8', (err, data) => {
        if(err){
            console.log(err);
        }
        console.log(data);
        
        fs.writeFile('./data/newFile.txt', 'Este es un contenido nuevo', (error, data) => {
            console.log(data);
            console.log(error);
        })
    })
})
