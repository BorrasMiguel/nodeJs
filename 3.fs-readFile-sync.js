
const fs = require('node:fs')

console.log('leyendo el primer archivo...');
const text = fs.readFile('./archivo.txt', 'utf-8') //ejecutas este callback
console.log('primer texto',text);


console.log('Hacer cosas mientras lee el archivo');

console.log('leyendo el segundo archivo...');
const secondText = fs.readFile('./archivo2.txt', 'utf-8')
console.log('segundo texto',secondText);

