const fs = require('fs');
//const fs = require('express');
//const fs = require('../fs'); --> Archivos propios

let crearArchivo = async(base) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('No es número');
            return;
        }

        let data = '';

        for (let i = 1; i <= 10; i++) {
            let res = base * i;
            data += (`${base} * ${i} = ${res}\n`);
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err);
            else
                resolve(`tabla-${base}.txt`);
            console.log('Archivo creado');
        });
    })
}

module.exports = {
    crearArchivo
}