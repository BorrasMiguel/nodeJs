//.js -> por defecto utiliza  CommonJS
//.mjs -> para utilizar ES Modules
//.cjs -> para utilizar CommonJS

import { sum, mul, sub } from './sum.mjs' //ES Las extensiones son obligatorias

console.log(sum(1, 2));
console.log(mul(1, 2));
console.log(sub(1, 2));