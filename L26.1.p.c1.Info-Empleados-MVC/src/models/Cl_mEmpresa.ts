import Cl_mPersonal from "./Cl_mPersonal.js";

export default class Cl_mEmpresa {
  private acMontoObr: number;
  private acMontoAdm: number;
  private contMontoObr: number;
  private contMontoAdm: number;
  constructor() {
    this.acMontoObr = 0;
    this.acMontoAdm = 0;
    this.contMontoObr = 0;
    this.contMontoAdm = 0;
  }
  procesarPersonal(a: Cl_mPersonal): void {
    if (a.tipo == "obrero") {
      this.acMontoObr += a.monto;
      this.contMontoObr++;
    }
    if (a.tipo == "administrativo") {
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
