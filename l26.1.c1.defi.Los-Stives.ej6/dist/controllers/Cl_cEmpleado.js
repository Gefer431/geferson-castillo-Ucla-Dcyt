import Cl_mEmpleado from "../models/Cl_mEmpleado.js";
export default class Cl_cEmpleado {
    vista;
    callback;
    constructor(vista, callback) {
        this.vista = vista;
        this.callback = callback;
        // El controlador se suscribe a los eventos de la interfaz
        this.vista.onCancelar(() => this.btCancelarOnClick());
        this.vista.onAceptar(() => this.btAceptarOnClick());
    }
    solicitarEmpleado(callback) {
        this.callback = callback;
        this.vista.mostrar();
    }
    btCancelarOnClick() {
        this.callback(null);
        this.vista.ocultar();
    }
    btAceptarOnClick() {
        this.callback(new Cl_mEmpleado({ monto: this.vista.monto, tipo: this.vista.tipo }));
        this.vista.ocultar();
    }
}
//# sourceMappingURL=Cl_cEmpleado.js.map