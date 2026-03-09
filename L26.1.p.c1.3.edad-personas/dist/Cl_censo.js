export default class Cl_censo {
    constructor() {
        this.cntPersonas = 0;
        this.cntMayores = 0;
    }
    procesarPersonas(personas) {
        this.cntPersonas++;

        if (personas.edad >= 18) {
            this.cntMayores++;
        }
    }
    totalPersonas() {
        return this.cntPersonas;
    }
    totalMayores() {
        return this.cntMayores;
    }
    porcentajeMayores() {
        return (this.cntMayores / this.cntPersonas) * 100;
    }
}