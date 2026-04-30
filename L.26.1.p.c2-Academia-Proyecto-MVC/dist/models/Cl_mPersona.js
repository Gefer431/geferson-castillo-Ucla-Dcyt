export default class Cl_mPersona {
    constructor(nombre, apellido, cedula, sexo, fechaNacimiento) {
        this._nombre = nombre;
        this._apellido = apellido;
        this._cedula = cedula;
        this._sexo = sexo;
        this._fechaNacimiento = fechaNacimiento;
    }
    get nombre() { return this._nombre; }
    set nombre(v) { this._nombre = v; }
    get apellido() { return this._apellido; }
    set apellido(v) { this._apellido = v; }
    get cedula() { return this._cedula; }
    set cedula(v) { this._cedula = v; }
    get sexo() { return this._sexo; }
    set sexo(v) { this._sexo = v; }
    get fechaNacimiento() { return this._fechaNacimiento; }
    set fechaNacimiento(v) { this._fechaNacimiento = v; }
}
