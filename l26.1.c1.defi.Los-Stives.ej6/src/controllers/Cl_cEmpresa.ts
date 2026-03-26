//*INFO EMPLEADOS 
// En una empresa se tiene personal obrero y personal administrativo. La empresa necesita *
// determinar cuál es el monto promedio que paga por cada tipo de personal. Al ser consultada *
// por la forma como desean que se presente la salida, la empresa suministra el siguiente *
// formato, informando que Juan (obrero) actualmente gana $100, Ana (obrero) gana $120, *
// Lin (administrativo) gana $200, Mary (obrero) gana $50 y Carlos (administrativo) gana $150: *
// Monto total pagado a obreros: $270 *
// Promedio pagado a 3 obreros: $90 *
// Monto total pagado a administrativos: $350 *
// Promedio pagado a 2 administrativos: $175
import Cl_mEmpresa from "../models/Cl_mEmpresa.js";
import { I_vEmpresa } from "../interfaces/I_vEmpresa.js";
import Cl_cEmpleado from "./Cl_cEmpleado.js";

export default class Cl_cEmpresa {
    private mEmpresa: Cl_mEmpresa;
    private vEmpresa: I_vEmpresa;
    private cEmpleado: Cl_cEmpleado;

    constructor(vistaEmpresa: I_vEmpresa, controladorEmpleado: Cl_cEmpleado) {
        this.mEmpresa = new Cl_mEmpresa();
        this.vEmpresa = vistaEmpresa;
        this.cEmpleado = controladorEmpleado;
        this.vEmpresa.onNuevoEmpleado(() => this.procesar1Empleado());
    }
    private procesar1Empleado() {
        this.cEmpleado.solicitarEmpleado((empleado) => {
            if(empleado !== null) {
                this.mEmpresa.procesarPersonal(empleado);
                this.vEmpresa.reportar(this.mEmpresa);
            }
        });
    }
}
