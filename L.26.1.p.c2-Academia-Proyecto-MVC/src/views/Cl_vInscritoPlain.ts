import { I_vInscrito } from "../interfaces/I_vInscrito.js";

export default class Cl_vInscritoPlain implements I_vInscrito {
    private inNombre: HTMLInputElement;
    private inApellido: HTMLInputElement;
    private inCedula: HTMLInputElement;
    private inSexo: HTMLInputElement;
    private inFechaNac: HTMLInputElement;
    private inTipoCurso: HTMLInputElement;
    private btnAceptar: HTMLButtonElement;
    private btnCancelar: HTMLButtonElement;
    private vista: HTMLElement;
    private mensajeDiv: HTMLElement;
    private tablaBody: HTMLElement;

    constructor() {
        this.vista = document.getElementById("form-inscrito") as HTMLElement;
        this.inNombre = document.getElementById("inscrito_nombre") as HTMLInputElement;
        this.inApellido = document.getElementById("inscrito_apellido") as HTMLInputElement;
        this.inCedula = document.getElementById("inscrito_cedula") as HTMLInputElement;
        this.inSexo = document.getElementById("inscrito_sexo") as HTMLInputElement;
        this.inFechaNac = document.getElementById("inscrito_fechaNac") as HTMLInputElement;
        this.inTipoCurso = document.getElementById("inscrito_tipoCurso") as HTMLInputElement;
        this.btnAceptar = document.getElementById("inscrito_btnAceptar") as HTMLButtonElement;
        this.btnCancelar = document.getElementById("inscrito_btnCancelar") as HTMLButtonElement;
        this.mensajeDiv = document.getElementById("mensaje") as HTMLElement;
        this.tablaBody = document.getElementById("tabla-inscritos-body") as HTMLElement;
        this.ocultar();
    }

    get nombre(): string { return this.inNombre.value.trim(); }
    get apellido(): string { return this.inApellido.value.trim(); }
    get cedula(): string { return this.inCedula.value.trim(); }
    get sexo(): string { return this.inSexo.value.trim().toUpperCase(); }
    get fechaNacimiento(): string { return this.inFechaNac.value; }
    get tipoCurso(): number { return +this.inTipoCurso.value || 0; }

    onAceptar(callback: () => void): void { this.btnAceptar.onclick = callback; }
    onCancelar(callback: () => void): void { this.btnCancelar.onclick = callback; }

    mostrar(): void {
        this.limpiarFormulario();
        if (this.vista) this.vista.hidden = false;
    }
    ocultar(): void {
        if (this.vista) this.vista.hidden = true;
        this.limpiarFormulario();
    }

    limpiarFormulario(): void {
        this.inNombre.value = "";
        this.inApellido.value = "";
        this.inCedula.value = "";
        this.inSexo.value = "";
        this.inFechaNac.value = "";
        this.inTipoCurso.value = "";
        this.mostrarMensaje("");
    }

    mostrarMensaje(texto: string): void {
        if (this.mensajeDiv) this.mensajeDiv.textContent = texto;
    }

    agregarAFila(nombre: string, apellido: string, tipoCurso: number, pago: number): void {
        const fila = document.createElement("tr");
        let cursoTexto = "";
        if (tipoCurso === 1) cursoTexto = "Inglés";
        else if (tipoCurso === 2) cursoTexto = "Computación";
        else cursoTexto = "I.A.";
        fila.innerHTML = `
            <td>${nombre}</td>
            <td>${apellido}</td>
            <td>${cursoTexto}</td>
            <td>$${pago.toFixed(2)}</td>
        `;
        this.tablaBody.appendChild(fila);
    }
}