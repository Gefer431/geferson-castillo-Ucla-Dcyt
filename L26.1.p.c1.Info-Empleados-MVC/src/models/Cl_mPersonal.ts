export default class Cl_mPersonal {
    private _monto: number = 0;
    private _tipo: string = "";

    constructor({monto,tipo}: {monto: number, tipo: string} = {monto: 0, tipo: ""}) {
        this.monto = monto;
        this.tipo = tipo;
    }
    set monto(monto: number) {
        this._monto = +monto;
    }
    get monto(): number {
        return this._monto;
    }
    set tipo(tipo: string) {
        this._tipo = tipo.trim();
    }
    get tipo(): string {
        return this._tipo;
    }
}
