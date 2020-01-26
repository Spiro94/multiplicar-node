//Destructuración -- se puede manejar con const multiplicar
const { crearArchivo } = require('./multiplicar/multiplicar');
const colors = require('colors');
const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    }).help().argv;
let base = 'ab';

// let argv2 = process.argv;
// let parametro = argv[3];


console.log(argv);

// console.log(parametro);

// crearArchivo(parametro).then((r) => {
//     console.log(r);
// }).catch(e => {
//     console.log(e);
// });