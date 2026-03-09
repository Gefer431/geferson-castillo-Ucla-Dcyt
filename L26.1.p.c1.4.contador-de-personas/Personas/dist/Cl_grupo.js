export default class Cl_grupo {
    constructor() {
        this.cntPersonas = 0;
        this.cntHombres = 0;
        this.cntMujeres = 0;
    }
    procesarPersonas(personas) {
        this.cntPersonas++;
        if (personas.sexo === 'M') {
            this.cntHombres++;
        } else if (personas.sexo === 'F') {
            this.cntMujeres++;
        }
    }
    totalPersonas() {
        return this.cntPersonas;
    }
    totalHombres() {
        return this.cntHombres;
    }
    totalMujeres() {
        return this.cntMujeres;
    }
}