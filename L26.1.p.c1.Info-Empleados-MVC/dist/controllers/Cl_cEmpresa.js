import Cl_mEmpresa from "../models/Cl_mEmpresa.js";
import Cl_vEmpresa from "../views/Cl_vEmpresa.js";
import Cl_cPersonal from "./Cl_cPersonal.js";
export default class Cl_cEmpresa {
    mEmpresa = new Cl_mEmpresa();
    vEmpresa = new Cl_vEmpresa();
    constructor() {
        this.vEmpresa.btNuevoMonto.onclick = () => this.procesar1Personal();
    }
    procesar1Personal() {
        new Cl_cPersonal({
            callback: (personal) => {
                if (personal !== null) {
                    this.mEmpresa.procesarPersonal(personal);
                    this.vEmpresa.reportar({ empresa: this.mEmpresa, personal });
                }
            },
        });
    }
}
//# sourceMappingURL=Cl_cEmpresa.js.map