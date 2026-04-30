import Cl_mPaciente from "../models/Cl_mPaciente.js";
export default class Cl_cPaciente {
    constructor(vista) {
        this.vista = vista;
        this.vista.onAceptar(() => this.aceptar());
        this.vista.onCancelar(() => this.cancelar());
    }
    solicitarPaciente(callback) {
        this.callback = callback;
        this.vista.mostrar();
    }
    aceptar() {
        if (!this.vista.nombre || !this.vista.apellido || !this.vista.cedula || !this.vista.sexo || !this.vista.fechaNacimiento) {
            this.vista.mostrarMensaje("Complete todos los campos.");
            return;
        }
        if (this.vista.sexo !== "M" && this.vista.sexo !== "F") {
            this.vista.mostrarMensaje("Sexo debe ser M o F.");
            return;
        }
        const tipo = this.vista.tipoAtencion;
        if (tipo !== 1 && tipo !== 2 && tipo !== 3) {
            this.vista.mostrarMensaje("Tipo de atención debe ser 1, 2 o 3.");
            return;
        }
        const fecha = new Date(this.vista.fechaNacimiento);
        if (isNaN(fecha.getTime())) {
            this.vista.mostrarMensaje("Fecha inválida.");
            return;
        }
        const paciente = new Cl_mPaciente(this.vista.nombre, this.vista.apellido, this.vista.cedula, this.vista.sexo, fecha, tipo, this.vista.peso);
        this.callback(paciente);
        this.vista.agregarAFila(paciente.nombre, paciente.apellido, paciente.tipoAtencion, paciente.pagoFinal());
        this.vista.ocultar();
    }
    cancelar() {
        this.callback(null);
        this.vista.ocultar();
    }
}
