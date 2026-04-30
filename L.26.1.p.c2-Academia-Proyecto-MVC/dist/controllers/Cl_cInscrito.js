import Cl_mInscrito from "../models/Cl_mInscrito.js";
export default class Cl_cInscrito {
    constructor(vista) {
        this.vista = vista;
        this.vista.onAceptar(() => this.aceptar());
        this.vista.onCancelar(() => this.cancelar());
    }
    solicitarInscrito(callback) {
        this.callback = callback;
        this.vista.mostrar();
    }
    aceptar() {
        if (!this.vista.nombre || !this.vista.apellido || !this.vista.cedula || !this.vista.sexo || !this.vista.fechaNacimiento) {
            this.vista.mostrarMensaje("Complete todos los campos.");
            return;
        }
        const sexo = this.vista.sexo;
        if (sexo !== "M" && sexo !== "F") {
            this.vista.mostrarMensaje("Sexo debe ser M o F.");
            return;
        }
        const tipo = this.vista.tipoCurso;
        if (tipo !== 1 && tipo !== 2 && tipo !== 3) {
            this.vista.mostrarMensaje("Tipo de curso debe ser 1, 2 o 3.");
            return;
        }
        const fecha = new Date(this.vista.fechaNacimiento);
        if (isNaN(fecha.getTime())) {
            this.vista.mostrarMensaje("Fecha inválida.");
            return;
        }
        const inscrito = new Cl_mInscrito(this.vista.nombre, this.vista.apellido, this.vista.cedula, sexo, fecha, tipo);
        this.callback(inscrito);
        this.vista.agregarAFila(inscrito.nombre, inscrito.apellido, inscrito.tipoCurso, inscrito.pagoFinal());
        this.vista.ocultar();
    }
    cancelar() {
        this.callback(null);
        this.vista.ocultar();
    }
}
