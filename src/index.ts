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


//  funciones con objetos como argumentos

interface PersonajeLOR{
    nombre: string;
    pv: number;
    //agregando nuevo atributo a la interfaza
    mostrarHp: () => void;
}


function curar( personaje: PersonajeLOR, curarX ): void {
    personaje.pv += curarX;
    
    // console.log(personaje);
}

const nuevoPersonaje: PersonajeLOR = {
    nombre: 'Guazon',
    pv: 80,
    // agregando nuevo atributo void
    mostrarHp () {
        console.log('Puntos de vida: ', this.pv);
    }
}




curar( nuevoPersonaje, 20);

nuevoPersonaje.mostrarHp();

// const resultado = sumar(12, 56);
// // sumar('Beto', 'Vuela muchos');
// const multi = multiplicar(5,0,20);
// console.log(multi);

// console.log(resultado);
