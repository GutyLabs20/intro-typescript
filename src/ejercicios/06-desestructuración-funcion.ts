/*
    ===== Código de TypeScript =====
*/

export interface Producto {
    desc: string;
    precio: number;
}


const telefono: Producto = {
    desc: 'Nokia A1',
    precio: 135
}

const tableta: Producto = {
    desc: 'Lenovo',
    precio: 245
}


export function calcularIGV( productos: Producto[] ):[number, number]{

    let total = 0;

    productos.forEach( ({precio}) => {
        total += precio;
    })

    return [total, total * 0.18];
}

const articulos = [telefono, tableta];

const [total, igv] = calcularIGV(articulos);

// console.log('Total: ', total);
// console.log('IGV', igv);