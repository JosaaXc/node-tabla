const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('./config/yargs')
const colors = require('colors')
console.clear();

// const base = 3
crearArchivo( argv.b, argv.l , argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow))
    .catch(err => console.log(err))


// fs.writeFile('tabla-5.txt', salida.slice(0,-1), (err)=>{
//     if(err) throw err;
//     console.log('tabla-5.tx creado')
// })