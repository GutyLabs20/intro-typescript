/*
    ===== Código de TypeScript =====
*/

//Desestructuración de Objetos

interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles {
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 60,
    cancion: 'Mess',
    detalles: {
        autor: 'Ed SHeeran',
        anio: 2015
    }
}

//Aqui realizando al desestructuracion de objetos
const {volumen, segundo, cancion, detalles} = reproductor;
const {autor} = detalles;

// console.log('Volumen actual de: ', volumen);
// console.log('Segundo actual de: ', segundo);
// console.log('Canción actual de: ', cancion);
// console.log('Autor actual es: ', autor);


//Desestructuración de Arreglos
const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
const [ , , p3] = dbz;

console.log('Personaje 3: ', p3);

