import Cl_mEmpresa from "../models/Cl_mEmpresa";
import Cl_mPersonal from "../models/Cl_mPersonal";

export default class Cl_vEmpresa {
  lblPromMontoObr: HTMLElement;
  lblPromMontoAdm: HTMLElement;
  lblMontoObr: HTMLElement;
  lblMontoAdm: HTMLElement;
  btNuevoMonto: HTMLButtonElement;
  vista: HTMLElement | null;
  constructor() {
    this.vista = document.getElementById("body");
    this.btNuevoMonto = document.getElementById(
      "body_btNuevoMonto",
    ) as HTMLButtonElement;
    this.lblMontoObr = document.getElementById(
      "body_lblMontoObr",
    ) as HTMLElement;
    this.lblMontoAdm = document.getElementById(
      "body_lblMontoAdm",
    ) as HTMLElement;
    this.lblPromMontoObr = document.getElementById(
      "body_lblPromMontoObr",
    ) as HTMLElement;
    this.lblPromMontoAdm = document.getElementById(
      "body_lblPromMontoAdm",
    ) as HTMLElement;
  }
  reportar({ empresa, personal }: { empresa: Cl_mEmpresa, personal: Cl_mPersonal }): void {
    this.lblMontoObr!.innerHTML = `${empresa.montoObr()}`;
    this.lblMontoAdm!.innerHTML = `${empresa.montoAbm()}`;
    this.lblPromMontoObr!.innerHTML = `${empresa.promedioMontObr()}`;
    this.lblPromMontoAdm!.innerHTML = `${empresa.promedioMontAdm()}`;
  }
  mostrar(): void {
    if (this.vista === null) return;
    this.vista.hidden = false;
  }
  ocultar(): void {
    if (this.vista === null) return;
    this.vista.hidden = true;
  }
}