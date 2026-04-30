import Cl_mPersona from "./Cl_mPersona.js";
export default class Cl_mInscrito extends Cl_mPersona {
    constructor(nombre, apellido, cedula, sexo, fechaNacimiento, tipoCurso) {
        super(nombre, apellido, cedula, sexo, fechaNacimiento);
        this._tipoCurso = tipoCurso;
    }
    get tipoCurso() { return this._tipoCurso; }
    set tipoCurso(v) { this._tipoCurso = v; }
    calcularEdad(fechaRef = new Date(2024, 5, 1)) {
        let edad = fechaRef.getFullYear() - this.fechaNacimiento.getFullYear();
        const mesDiff = fechaRef.getMonth() - this.fechaNacimiento.getMonth();
        if (mesDiff < 0 || (mesDiff === 0 && fechaRef.getDate() < this.fechaNacimiento.getDate()))
            edad--;
        return edad;
    }
    costoBase() {
        if (this._tipoCurso === 1)
            return 20;
        if (this._tipoCurso === 2)
            return 25;
        return 30;
    }
    descuento() {
        const edad = this.calcularEdad();
        if (edad < 18)
            return 0.2;
        if (this.sexo === "F" && edad > 50)
            return 0.4;
        if (this.sexo === "M" && edad > 60)
            return 0.4;
        return 0;
    }
    pagoFinal() {
        return this.costoBase() * (1 - this.descuento());
    }
}
