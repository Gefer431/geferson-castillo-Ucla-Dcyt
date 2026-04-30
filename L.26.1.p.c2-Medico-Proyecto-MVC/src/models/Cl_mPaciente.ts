import Cl_mPersona from "./Cl_mPersona.js";

export default class Cl_mPaciente extends Cl_mPersona {
    private _tipoAtencion: number;
    private _peso: number;   // nuevo

    constructor(nombre: string, apellido: string, cedula: string, sexo: string, fechaNacimiento: Date, tipoAtencion: number, peso: number) {
        super(nombre, apellido, cedula, sexo, fechaNacimiento);
        this._tipoAtencion = tipoAtencion;
        this._peso = peso;
    }

    get tipoAtencion(): number { return this._tipoAtencion; }
    set tipoAtencion(v: number) { this._tipoAtencion = v; }
    get peso(): number { return this._peso; }
    set peso(v: number) { this._peso = v; }

    calcularEdad(fechaRef: Date = new Date(2024, 5, 1)): number {
        let edad = fechaRef.getFullYear() - this.fechaNacimiento.getFullYear();
        const mesDiff = fechaRef.getMonth() - this.fechaNacimiento.getMonth();
        if (mesDiff < 0 || (mesDiff === 0 && fechaRef.getDate() < this.fechaNacimiento.getDate())) edad--;
        return edad;
    }

    costoBase(): number {
        if (this._tipoAtencion === 1) return 30;
        if (this._tipoAtencion === 2) return 10;
        return 0;
    }

    descuento(): number {
        const edad = this.calcularEdad();
        if (this.sexo === "F" && edad >= 25 && edad <= 50) return 0.4;
        return 0;
    }

    pagoFinal(): number {
        return this.costoBase() * (1 - this.descuento());
    }
}