declare var bootstrap: any;
export default class Cl_vEmpleado {
    inMonto: HTMLInputElement;
    inTipo: HTMLInputElement;
    btCancelar: HTMLButtonElement;
    btAceptar: HTMLButtonElement;
    modal: any;
    constructor() {
        this.inMonto = document.getElementById("empleado_inMonto") as HTMLInputElement;
        this.inTipo = document.getElementById("empleado_inTipo") as HTMLInputElement;
        this.btCancelar = document.getElementById("empleado_btCancelar") as HTMLButtonElement;
        this.btAceptar = document.getElementById("empleado_btAceptar") as HTMLButtonElement;
        const elementoModal = document.getElementById("empleado");
        this.modal = new bootstrap.Modal(elementoModal);
        this.mostrar();
    }
    get monto(): number {
        return +this.inMonto.value;
    }
    set monto(monto: number) {
        this.inMonto.value = monto.toString();
    }
    get tipo(): string {
        return this.inTipo.value; //Falta
    }
    set tipo(tipo: string) {
        this.inTipo.value = tipo.toString();
    }
    mostrar(): void {
        this.modal.show();
    }
    ocultar(): void {
        this.modal.hide();
    }
}
