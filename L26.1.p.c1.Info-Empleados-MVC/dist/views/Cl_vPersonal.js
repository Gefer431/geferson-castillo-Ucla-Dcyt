export default class Cl_vPersonal {
    inMonto;
    inTipo;
    btCancelar;
    btAceptar;
    vista;
    constructor() {
        this.vista = document.getElementById("personal");
        this.inMonto = document.getElementById("personal_inMonto");
        this.inTipo = document.getElementById("personal_inTipo");
        this.btCancelar = document.getElementById("personal_btCancelar");
        this.btAceptar = document.getElementById("personal_btAceptar");
        this.mostrar();
    }
    get monto() {
        return +this.inMonto.value;
    }
    get tipo() {
        return this.inTipo.value;
    }
    mostrar() {
        if (this.vista === null)
            return;
        this.vista.hidden = false;
    }
    ocultar() {
        if (this.vista === null)
            return;
        this.vista.hidden = true;
    }
}
//# sourceMappingURL=Cl_vPersonal.js.map