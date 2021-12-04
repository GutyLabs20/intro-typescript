import { Producto, calcularIGV } from './ejercicios/06-desestructuración-funcion';
/*
    ===== Código de TypeScript =====
*/

const carritoCompras: Producto[] = [
    {
        desc: 'Telefono 1',
        precio: 100
    },
    {
        desc: 'Telefono 2',
        precio: 150
    }
];

const [total, igv] = calcularIGV(carritoCompras);

console.log('Importando y exportando funciones');
console.log('Total: ', total);
console.log('IGV', igv);