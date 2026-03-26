export default class Cl_vEmpleadoBootstrap {
    inMonto;
    inTipo;
    btCancelar;
    btAceptar;
    modal;
    constructor() {
        this.inMonto = document.getElementById("empleado_inMonto");
        this.inTipo = document.getElementById("empleado_inTipo");
        this.btCancelar = document.getElementById("empleado_btCancelar");
        this.btAceptar = document.getElementById("empleado_btAceptar");
        const elementoModal = document.getElementById("empleado");
        this.modal = new bootstrap.Modal(elementoModal);
    }
    get monto() {
        return +this.inMonto.value;
    }
    get tipo() {
        return this.inTipo.value; //Falta
    }
    onAceptar(callback) {
        this.btAceptar.onclick = callback;
    }
    onCancelar(callback) {
        this.btCancelar.onclick = callback;
    }
    mostrar() {
        this.inMonto.value = ""; // Limpiamos al abrir
        this.inTipo.value = ""; // Limpiamos al abrir
        this.modal.show();
    }
    ocultar() {
        this.modal.hide();
    }
}
//# sourceMappingURL=Cl_vEmpleadoBootstrap.js.map