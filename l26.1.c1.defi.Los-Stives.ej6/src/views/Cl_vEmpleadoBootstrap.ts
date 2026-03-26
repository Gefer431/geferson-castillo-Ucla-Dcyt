import {I_vEmpleado} from "../interfaces/I_vEmpleado.js";
declare var bootstrap: any;

export default class Cl_vEmpleadoBootstrap implements I_vEmpleado {
    private inMonto: HTMLInputElement;
    private inTipo: HTMLInputElement;
    private btCancelar: HTMLButtonElement;
    private btAceptar: HTMLButtonElement;
    private modal: any;
    constructor() {
        this.inMonto = document.getElementById("empleado_inMonto") as HTMLInputElement;
        this.inTipo = document.getElementById("empleado_inTipo") as HTMLInputElement;
        this.btCancelar = document.getElementById("empleado_btCancelar") as HTMLButtonElement;
        this.btAceptar = document.getElementById("empleado_btAceptar") as HTMLButtonElement;
        const elementoModal = document.getElementById("empleado");
        this.modal = new bootstrap.Modal(elementoModal);
    }
    get monto(): number {
        return +this.inMonto.value;
    }
    get tipo(): string {
        return this.inTipo.value; //Falta
    }
    onAceptar(callback: () => void): void {
        this.btAceptar.onclick = callback;
    }
    onCancelar(callback: () => void): void {
        this.btCancelar.onclick = callback;
    }
    mostrar(): void {
        this.inMonto.value = ""; // Limpiamos al abrir
        this.inTipo.value = ""; // Limpiamos al abrir
        this.modal.show();
    }
    ocultar(): void {
        this.modal.hide();
    }
}
