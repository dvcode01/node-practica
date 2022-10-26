// en node solo utilizaremos eventos que trabajen con datos
const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response', (data, second) => {
    console.log('recibido...');
    console.log(data);
    console.log(second);
});

customEmitter.emit('response', 'HELLO WORLD', {nombre: 'Fazt', saldo: 4000});