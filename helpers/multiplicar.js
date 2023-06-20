const fs = require('fs')
const colors = require('colors')
const crearArchivo = async(base=5, listar, hasta)=>{
    console.log(hasta)
    try{
        let salida = ''
        for(let i=1; i<=hasta ; i++){
            salida+=`${base} * ${i} = ${base*i}\n`
        }
        if(listar){
            console.log(`===============\n Tabla del ${base} hasta ${hasta}\n ===========`)
            console.log(salida.slice(0,-1))
        } 
        //con este método si ocupas un try y carch
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida.slice(0,-1))
        return `tabla-${base}.txt creada`
    }catch(err){
        throw err
    }
}
module.exports = {
    crearArchivo
}