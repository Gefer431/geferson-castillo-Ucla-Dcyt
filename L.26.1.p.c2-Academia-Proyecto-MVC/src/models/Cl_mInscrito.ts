import Cl_mPersona from "./Cl_mPersona.js";

export default class Cl_mInscrito extends Cl_mPersona {
    private _tipoCurso: number;

    constructor(nombre: string, apellido: string, cedula: string, sexo: string, fechaNacimiento: Date, tipoCurso: number) {
        super(nombre, apellido, cedula, sexo, fechaNacimiento);
        this._tipoCurso = tipoCurso;
    }

    get tipoCurso(): number { return this._tipoCurso; }
    set tipoCurso(v: number) { this._tipoCurso = v; }

    calcularEdad(fechaRef: Date = new Date(2024, 5, 1)): number {
        let edad = fechaRef.getFullYear() - this.fechaNacimiento.getFullYear();
        const mesDiff = fechaRef.getMonth() - this.fechaNacimiento.getMonth();
        if (mesDiff < 0 || (mesDiff === 0 && fechaRef.getDate() < this.fechaNacimiento.getDate())) edad--;
        return edad;
    }

    costoBase(): number {
        if (this._tipoCurso === 1) return 20;
        if (this._tipoCurso === 2) return 25;
        return 30;
    }

    descuento(): number {
        const edad = this.calcularEdad();
        if (edad < 18) return 0.2;
        if (this.sexo === "F" && edad > 50) return 0.4;
        if (this.sexo === "M" && edad > 60) return 0.4;
        return 0;
    }

    pagoFinal(): number {
        return this.costoBase() * (1 - this.descuento());
    }
}