export default class Cl_vEmpresaBootstrap {
    lblPromMontoObr;
    lblPromMontoAdm;
    lblMontoObr;
    lblMontoAdm;
    lblPorcentaje;
    btNuevoEmpleado;
    vista;
    constructor() {
        this.vista = document.getElementById("app-bootstrap");
        this.btNuevoEmpleado = document.getElementById("body_btNuevoEmpleado");
        this.lblPromMontoAdm = document.getElementById("body_lblPromMontoAdm");
        this.lblPromMontoObr = document.getElementById("body_lblPromMontoObr");
        this.lblMontoAdm = document.getElementById("body_lblMontoAdm");
        this.lblMontoObr = document.getElementById("body_lblMontoObr");
        this.lblPorcentaje = document.getElementById("body_lblPorcentaje");
    }
    onNuevoEmpleado(callback) {
        this.btNuevoEmpleado.onclick = callback;
    }
    reportar(empresa) {
        this.lblPromMontoAdm.innerHTML = empresa.promedioMontAdm().toString();
        this.lblPromMontoObr.innerHTML = empresa.promedioMontObr().toString();
        this.lblMontoAdm.innerHTML = empresa.montoAdm().toString();
        this.lblMontoObr.innerHTML = empresa.montoObr().toString();
        this.lblPorcentaje.innerHTML = empresa.porcentaje().toString();
    }
}
//# sourceMappingURL=Cl_vEmpresaBootstrap.js.map