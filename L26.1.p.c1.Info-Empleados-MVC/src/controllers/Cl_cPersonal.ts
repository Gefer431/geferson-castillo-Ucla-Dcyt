import Cl_vPersonal from "../views/Cl_vPersonal.js";
import Cl_mPersonal from "../models/Cl_mPersonal.js";

export default class Cl_cPersonal {
  private vista = new Cl_vPersonal();
  callback: (personal: Cl_mPersonal | null) => void;

  constructor({
    callback,
  }: {
    callback: (personal: Cl_mPersonal | null) => void;
  }) {
    this.callback = callback;
    this.vista.btCancelar.onclick = () => this.btCancelarOnClick();
    this.vista.btAceptar.onclick = () => this.btAceptarOnClick();
  }
  btCancelarOnClick() {
    this.callback(null);
    this.vista.ocultar();
  }
  btAceptarOnClick() {
    this.callback(new Cl_mPersonal({ monto: this.vista.monto, tipo: this.vista.tipo }));
    this.vista.ocultar();
  }
}