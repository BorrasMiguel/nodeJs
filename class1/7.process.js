const { log } = require("console");

// argumentos de entrada
console.log(process.argv);

// controlar el proceso y su salida
process.on(1)

// podemos controlar eventos del proceso
process.on('exit', () => {
    //limpiar recursos
})

// current working directory
console.log(process.cwd());

// platform
console.log(process.env.PEPITO);