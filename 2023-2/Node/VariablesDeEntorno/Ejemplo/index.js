//CommonJS
require('dotenv').config();

const host = process.env.HOST;
const user = process.env.USER;
const password = process.env.PASSWORD;

console.log(host,user,password);

//Recuerde ejecutar npm install antes de ejecutar el script
// Para ejecutar, la tarminal debe apuntar a la carpeta actual y ejecute node index.js

//  ES6:

// import * as dotenv from 'dotenv'
// dotenv.config()
//
// const host = process.env.HOST;
// const user = process.env.USER;
// const password = process.env.PASSWORD;
//
// console.log(host,user,password);