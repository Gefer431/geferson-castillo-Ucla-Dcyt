export default class Cl_mEmpresa {
    acMontoObr;
    acMontoAdm;
    contMontoObr;
    contMontoAdm;
    constructor() {
        this.acMontoObr = 0;
        this.acMontoAdm = 0;
        this.contMontoObr = 0;
        this.contMontoAdm = 0;
    }
    procesarPersonal(a) {
        if (a.tipo == 'obrero') {
            this.acMontoObr += a.monto;
            this.contMontoObr++;
        }
        if (a.tipo == 'administrativo') {
            this.acMontoAdm += a.monto;
            this.contMontoAdm++;
        }
    }
    montoObr() {
        return this.acMontoObr;
    }
    montoAdm() {
        return this.acMontoAdm;
    }
    promedioMontObr() {
        return this.acMontoObr / this.contMontoObr;
    }
    promedioMontAdm() {
        return this.acMontoAdm / this.contMontoAdm;
    }
}
//# sourceMappingURL=Cl_mEmpresa.js.map