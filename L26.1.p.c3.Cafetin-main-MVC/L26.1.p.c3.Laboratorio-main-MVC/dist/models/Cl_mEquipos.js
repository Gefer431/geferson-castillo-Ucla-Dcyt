export default class Cl_mEquipo {
    _id = "";
    _marca = "";
    _procesador = "";
    _memoria = 0;
    _estado = "activo";
    _laboratorio = "";
    _meson = "";
    _puesto = "";
    _observaciones = "";
    constructor({ id, marca, procesador, memoria, estado = "activo", laboratorio, meson, puesto, observaciones = "", }) {
        if (id)
            this._id = id;
        this.marca = marca;
        this.procesador = procesador;
        this.memoria = memoria;
        this.estado = estado;
        this.laboratorio = laboratorio;
        this.meson = meson;
        this.puesto = puesto;
        this.observaciones = observaciones;
    }
    get id() { return this._id; }
    get marca() { return this._marca; }
    set marca(v) { this._marca = v; }
    get procesador() { return this._procesador; }
    set procesador(v) { this._procesador = v; }
    get memoria() { return this._memoria; }
    set memoria(v) { this._memoria = v; }
    get estado() { return this._estado; }
    set estado(v) { this._estado = v; }
    get laboratorio() { return this._laboratorio; }
    set laboratorio(v) { this._laboratorio = v; }
    get meson() { return this._meson; }
    set meson(v) { this._meson = v; }
    get puesto() { return this._puesto; }
    set puesto(v) { this._puesto = v; }
    get observaciones() { return this._observaciones; }
    set observaciones(v) { this._observaciones = v; }
    reportar(observaciones) {
        this.estado = "reportado";
        this.observaciones = observaciones;
    }
    activar() {
        this.estado = "activo";
        this.observaciones = "";
    }
    mantenimiento() {
        this.estado = "mantenimiento";
    }
    toJSON() {
        return {
            marca: this._marca,
            procesador: this._procesador,
            memoria: this._memoria,
            estado: this._estado,
            laboratorio: this._laboratorio,
            meson: this._meson,
            puesto: this._puesto,
            observaciones: this._observaciones,
        };
    }
    static porcentajeDaniados(equipos, laboratorio) {
        const lista = laboratorio ? equipos.filter(e => e.laboratorio === laboratorio) : equipos;
        if (!lista.length)
            return 0;
        const dañados = lista.filter(e => e.estado === "reportado" || e.estado === "mantenimiento").length;
        const pct = (dañados / lista.length) * 100;
        return Math.round(pct * 100) / 100;
    }
}
//# sourceMappingURL=Cl_mEquipos.js.map