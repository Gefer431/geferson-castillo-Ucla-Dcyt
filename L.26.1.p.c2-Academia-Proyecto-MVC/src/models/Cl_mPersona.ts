export default class Cl_mPersona {
    private _nombre: string;
    private _apellido: string;
    private _cedula: string;
    private _sexo: string;
    private _fechaNacimiento: Date;

    constructor(nombre: string, apellido: string, cedula: string, sexo: string, fechaNacimiento: Date) {
        this._nombre = nombre;
        this._apellido = apellido;
        this._cedula = cedula;
        this._sexo = sexo;
        this._fechaNacimiento = fechaNacimiento;
    }

    get nombre(): string { return this._nombre; }
    set nombre(v: string) { this._nombre = v; }
    get apellido(): string { return this._apellido; }
    set apellido(v: string) { this._apellido = v; }
    get cedula(): string { return this._cedula; }
    set cedula(v: string) { this._cedula = v; }
    get sexo(): string { return this._sexo; }
    set sexo(v: string) { this._sexo = v; }
    get fechaNacimiento(): Date { return this._fechaNacimiento; }
    set fechaNacimiento(v: Date) { this._fechaNacimiento = v; }
}