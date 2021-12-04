/*
    ===== Código de TypeScript =====
*/

function sumar(a:number, b:number): number
{
    return a + b;
}

const sumarFlecha = (a:number, b:number): number => {
    return a + b;
}

function multiplicar(num: number, otroNum?: number, base: number = 2): number{
    return num * base;
}

const resultado = sumar(12, 56);
// sumar('Beto', 'Vuela muchos');
const multi = multiplicar(5,0,20);
console.log(multi);

console.log(resultado);
