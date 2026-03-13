export default class Cl_vPersonal {
  inMonto: HTMLInputElement;
  inTipo: HTMLInputElement;
  btCancelar: HTMLButtonElement;
  btAceptar: HTMLButtonElement;
  vista: HTMLElement;
  constructor() {
    this.vista = document.getElementById("personal") as HTMLElement;
    this.inMonto = document.getElementById(
      "personal_inMonto",
    ) as HTMLInputElement;
    this.inTipo = document.getElementById(
      "personal_inTipo",
    ) as HTMLInputElement;
    this.btCancelar = document.getElementById(
      "personal_btCancelar",
    ) as HTMLButtonElement;
    this.btAceptar = document.getElementById(
      "personal_btAceptar",
    ) as HTMLButtonElement;
    this.mostrar();
  }
  get monto(): number {
    return +this.inMonto.value;
  }
  get tipo(): string {
    return this.inTipo.value;
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