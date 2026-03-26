export default class Cl_vEmpresa {
    lblPromMontoObr;
    lblPromMontoAdm;
    lblMontoObr;
    lblMontoAdm;
    lblPorcentaje;
    btNuevoMonto;
    constructor() {
        this.btNuevoMonto = document.getElementById("body_btNuevoMonto");
        this.lblMontoObr = document.getElementById("body_lblMontoObr");
        this.lblMontoAdm = document.getElementById("body_lblMontoAdm");
        this.lblPromMontoObr = document.getElementById("body_lblPromMontoObr");
        this.lblPromMontoAdm = document.getElementById("body_lblPromMontoAdm");
        this.lblPorcentaje = document.getElementById("body_lblPorcentaje");
    }
    reportar({ empresa }) {
        this.lblMontoObr.innerHTML = `${empresa.montoObr()}`;
        this.lblMontoAdm.innerHTML = `${empresa.montoAdm()}`;
        this.lblPromMontoObr.innerHTML = `${empresa.promedioMontObr()}`;
        this.lblPromMontoAdm.innerHTML = `${empresa.promedioMontAdm()}`;
        this.lblPorcentaje.innerHTML = `${empresa.porcentaje().toFixed(2)}`;
    }
}
//# sourceMappingURL=Cl_vEmpresa.js.map