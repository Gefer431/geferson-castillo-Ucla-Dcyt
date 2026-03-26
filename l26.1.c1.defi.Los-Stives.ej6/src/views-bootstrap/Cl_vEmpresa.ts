import Cl_mEmpresa from "../models/Cl_mEmpresa.js";

export default class Cl_vEmpresa {
  lblPromMontoObr: HTMLInputElement;
  lblPromMontoAdm: HTMLInputElement;
  lblMontoObr: HTMLInputElement;
  lblMontoAdm: HTMLInputElement;
  lblPorcentaje: HTMLInputElement;
  btNuevoMonto: HTMLButtonElement;
  constructor() {
    this.btNuevoMonto = document.getElementById(
      "body_btNuevoMonto",
    ) as HTMLButtonElement;
    this.lblMontoObr = document.getElementById(
      "body_lblMontoObr",
    ) as HTMLInputElement;
    this.lblMontoAdm = document.getElementById(
      "body_lblMontoAdm",
    ) as HTMLInputElement;
    this.lblPromMontoObr = document.getElementById(
      "body_lblPromMontoObr",
    ) as HTMLInputElement;
    this.lblPromMontoAdm = document.getElementById(
      "body_lblPromMontoAdm",
    ) as HTMLInputElement;
    this.lblPorcentaje = document.getElementById(
      "body_lblPorcentaje",
    ) as HTMLInputElement;
  }
  reportar({ empresa }: { empresa: Cl_mEmpresa }): void {
    this.lblMontoObr!.innerHTML = `${empresa.montoObr()}`;
    this.lblMontoAdm!.innerHTML = `${empresa.montoAdm()}`;
    this.lblPromMontoObr!.innerHTML = `${empresa.promedioMontObr()}`;
    this.lblPromMontoAdm!.innerHTML = `${empresa.promedioMontAdm()}`;
    this.lblPorcentaje!.innerHTML = `${empresa.porcentaje().toFixed(2)}`;
  }
}