import { I_vEmpresa } from "../interfaces/I_vEmpresa.js";
import Cl_mEmpresa from "../models/Cl_mEmpresa.js";

export default class Cl_vEmpresaBootstrap implements I_vEmpresa {
    private lblPromMontoObr: HTMLElement;
    private lblPromMontoAdm: HTMLElement;
    private lblMontoObr: HTMLElement;
    private lblMontoAdm: HTMLElement;
    private lblPorcentaje: HTMLElement;
    private btNuevoEmpleado: HTMLButtonElement;
    private vista: HTMLElement;
    constructor() {
        this.vista = document.getElementById("app-bootstrap") as HTMLElement;
        this.btNuevoEmpleado = document.getElementById("body_btNuevoEmpleado") as HTMLButtonElement;
        this.lblPromMontoAdm = document.getElementById("body_lblPromMontoAdm") as HTMLElement;
        this.lblPromMontoObr = document.getElementById("body_lblPromMontoObr") as HTMLElement;
        this.lblMontoAdm = document.getElementById("body_lblMontoAdm") as HTMLElement;
        this.lblMontoObr = document.getElementById("body_lblMontoObr") as HTMLElement;
        this.lblPorcentaje = document.getElementById("body_lblPorcentaje") as HTMLElement;
    }
    onNuevoEmpleado(callback: () => void): void {
        this.btNuevoEmpleado.onclick = callback;
    }
    reportar(empresa: Cl_mEmpresa): void {
        this.lblPromMontoAdm.innerHTML = empresa.promedioMontAdm().toString();
        this.lblPromMontoObr.innerHTML = empresa.promedioMontObr().toString();
        this.lblMontoAdm.innerHTML = empresa.montoAdm().toString();
        this.lblMontoObr.innerHTML = empresa.montoObr().toString();
        this.lblPorcentaje.innerHTML = empresa.porcentaje().toString();
    }
}
