export default class Cl_mPersonal {
    _monto = 0;
    _tipo = "";
    constructor({ monto, tipo } = { monto: 0, tipo: "" }) {
        this.monto = monto;
        this.tipo = tipo;
    }
    set monto(monto) {
        this._monto = +monto;
    }
    get monto() {
        return this._monto;
    }
    set tipo(tipo) {
        this._tipo = tipo.trim();
    }
    get tipo() {
        return this._tipo;
    }
}
//# sourceMappingURL=Cl_mPersonal.js.map