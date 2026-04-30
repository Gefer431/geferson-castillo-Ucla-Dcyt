import Cl_mPersona from "./Cl_mPersona.js";
export default class Cl_mPaciente extends Cl_mPersona {
    constructor(nombre, apellido, cedula, sexo, fechaNacimiento, tipoAtencion, peso) {
        super(nombre, apellido, cedula, sexo, fechaNacimiento);
        this._tipoAtencion = tipoAtencion;
        this._peso = peso;
    }
    get tipoAtencion() { return this._tipoAtencion; }
    set tipoAtencion(v) { this._tipoAtencion = v; }
    get peso() { return this._peso; }
    set peso(v) { this._peso = v; }
    calcularEdad(fechaRef = new Date(2024, 5, 1)) {
        let edad = fechaRef.getFullYear() - this.fechaNacimiento.getFullYear();
        const mesDiff = fechaRef.getMonth() - this.fechaNacimiento.getMonth();
        if (mesDiff < 0 || (mesDiff === 0 && fechaRef.getDate() < this.fechaNacimiento.getDate()))
            edad--;
        return edad;
    }
    costoBase() {
        if (this._tipoAtencion === 1)
            return 30;
        if (this._tipoAtencion === 2)
            return 10;
        return 0;
    }
    descuento() {
        const edad = this.calcularEdad();
        if (this.sexo === "F" && edad >= 25 && edad <= 50)
            return 0.4;
        return 0;
    }
    pagoFinal() {
        return this.costoBase() * (1 - this.descuento());
    }
}
