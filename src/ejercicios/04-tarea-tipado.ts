/*
    ===== Código de TypeScript =====
*/

interface SuperHeroe {
    nombre: string;
    edad: number;
    direccion: Direccion;
    mostrarDireccion: () => string;
}

// Se genera una nueva interface (sub interface)  para
// colocarlo en una interface principal
interface Direccion {
    calle: string;
    pais: string;
    ciudad: string;
}

const SuperHeroe: SuperHeroe = {
    nombre: 'Spiderman',
    edad: 30,
    direccion: {
        calle: 'Main st',
        pais: 'USA',
        ciudad: 'NY',
    },
    mostrarDireccion() {
        return this.nombre + ', '+
                this.direccion.ciudad + ', '+
                this.direccion.pais;
    }
}

const direccion = SuperHeroe.mostrarDireccion();

console.log( direccion );