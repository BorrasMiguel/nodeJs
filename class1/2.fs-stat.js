//Uno de los modulos mas importantes de node js
const fs = require('node:fs')  //A partir de node 16 se recomienda poner 'node:'

const stats = fs.statSync('./archivo.txt')

console.log(
    stats.isFile(), // si es un fichero
    stats. isDirectory(), //si es un directorio
    stats.isSymbolicLink(),
    stats.size //tamoño en bytes
);