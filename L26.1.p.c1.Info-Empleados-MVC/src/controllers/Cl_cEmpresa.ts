import Cl_mEmpresa from "../models/Cl_mEmpresa";
import Cl_vEmpresa from "../views/Cl_vEmpresa";
import Cl_cPersonal from "./Cl_cPersonal";


export default class Cl_cEmpresa {
  private mEmpresa: Cl_mEmpresa = new Cl_mEmpresa();
  private vEmpresa: Cl_vEmpresa = new Cl_vEmpresa();
  constructor() {
    this.vEmpresa.btNuevoMonto.onclick = () => this.procesar1Personal();
  }
  procesar1Personal() {
    new Cl_cPersonal({
      callback: (personal) => {
        if (personal !== null) {
          this.mEmpresa.procesarPersonal(personal);
          this.vEmpresa.reportar({empresa: this.mEmpresa, personal});
        }
      },
    });
  }
}