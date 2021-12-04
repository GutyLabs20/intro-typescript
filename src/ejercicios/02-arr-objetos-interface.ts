/*
    ===== Código de TypeScript =====
*/

// arreglos con tipado string
let habilidades: string[] = ['Bash', 'Counter', 'Healing'];

// Objetos e interface
interface Personaje {
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string;
}

const personaje: Personaje = {
    nombre: 'El Capi',
    hp: 100,
    habilidades: ['Inmortal', 'Escudos', 'Fuerza']
}

personaje.puebloNatal = 'Refugio de los inmortales';

console.log(habilidades);
console.table(personaje);