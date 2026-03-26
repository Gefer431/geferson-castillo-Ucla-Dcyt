export default class Cl_vEmpleado {
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
        this.mostrar();
    }
    get monto() {
        return +this.inMonto.value;
    }
    set monto(monto) {
        this.inMonto.value = monto.toString();
    }
    get tipo() {
        return this.inTipo.value; //Falta
    }
    set tipo(tipo) {
        this.inTipo.value = tipo.toString();
    }
    mostrar() {
        this.modal.show();
    }
    ocultar() {
        this.modal.hide();
    }
}
//# sourceMappingURL=Cl_vEmpleado.js.map