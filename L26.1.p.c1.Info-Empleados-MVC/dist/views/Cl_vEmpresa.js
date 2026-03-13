export default class Cl_vEmpresa {
    lblPromMontoObr;
    lblPromMontoAdm;
    lblMontoObr;
    lblMontoAdm;
    btNuevoMonto;
    vista;
    constructor() {
        this.vista = document.getElementById("body");
        this.btNuevoMonto = document.getElementById("body_btNuevoMonto");
        this.lblMontoObr = document.getElementById("body_lblMontoObr");
        this.lblMontoAdm = document.getElementById("body_lblMontoAdm");
        this.lblPromMontoObr = document.getElementById("body_lblPromMontoObr");
        this.lblPromMontoAdm = document.getElementById("body_lblPromMontoAdm");
    }
    reportar({ empresa, personal }) {
        this.lblMontoObr.innerHTML = `${empresa.montoObr()}`;
        this.lblMontoAdm.innerHTML = `${empresa.montoAbm()}`;
        this.lblPromMontoObr.innerHTML = `${empresa.promedioMontObr()}`;
        this.lblPromMontoAdm.innerHTML = `${empresa.promedioMontAdm()}`;
    }
    mostrar() {
        if (this.vista === null)
            return;
        this.vista.hidden = false;
    }
    ocultar() {
        if (this.vista === null)
            return;
        this.vista.hidden = true;
    }
}
//# sourceMappingURL=Cl_vEmpresa.js.map