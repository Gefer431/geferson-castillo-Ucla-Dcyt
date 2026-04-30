import { I_vPaciente } from "../interfaces/I_vPaciente.js";

export default class Cl_vPacientePlain implements I_vPaciente {
    private inNombre: HTMLInputElement;
    private inApellido: HTMLInputElement;
    private inCedula: HTMLInputElement;
    private inSexo: HTMLInputElement;
    private inFechaNac: HTMLInputElement;
    private inPeso: HTMLInputElement;
    private inTipo: HTMLInputElement;
    private btnAceptar: HTMLButtonElement;
    private btnCancelar: HTMLButtonElement;
    private vista: HTMLElement;
    private mensajeDiv: HTMLElement;
    private tablaBody: HTMLElement;

    constructor() {
        this.vista = document.getElementById("form-paciente") as HTMLElement;
        this.inNombre = document.getElementById("paciente_nombre") as HTMLInputElement;
        this.inApellido = document.getElementById("paciente_apellido") as HTMLInputElement;
        this.inCedula = document.getElementById("paciente_cedula") as HTMLInputElement;
        this.inSexo = document.getElementById("paciente_sexo") as HTMLInputElement;
        this.inFechaNac = document.getElementById("paciente_fechaNac") as HTMLInputElement;
        this.inPeso = document.getElementById("paciente_peso") as HTMLInputElement;
        this.inTipo = document.getElementById("paciente_tipo") as HTMLInputElement;
        this.btnAceptar = document.getElementById("paciente_btnAceptar") as HTMLButtonElement;
        this.btnCancelar = document.getElementById("paciente_btnCancelar") as HTMLButtonElement;
        this.mensajeDiv = document.getElementById("mensaje") as HTMLElement;
        this.tablaBody = document.getElementById("tabla-pacientes-body") as HTMLElement;
        this.ocultar();
    }

    get nombre(): string { return this.inNombre.value.trim(); }
    get apellido(): string { return this.inApellido.value.trim(); }
    get cedula(): string { return this.inCedula.value.trim(); }
    get sexo(): string { return this.inSexo.value.trim().toUpperCase(); }
    get fechaNacimiento(): string { return this.inFechaNac.value; }
    get peso(): number { return +this.inPeso.value || 0; }
    get tipoAtencion(): number { return +this.inTipo.value || 0; }

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
        this.inPeso.value = "";
        this.inTipo.value = "";
        this.mostrarMensaje("");
    }

    mostrarMensaje(texto: string): void {
        if (this.mensajeDiv) this.mensajeDiv.textContent = texto;
    }

    agregarAFila(nombre: string, apellido: string, tipo: number, pago: number): void {
        const fila = document.createElement("tr");
        let tipoTexto = "";
        if (tipo === 1) tipoTexto = "Procedimiento";
        else if (tipo === 2) tipoTexto = "Consulta";
        else tipoTexto = "Control";
        fila.innerHTML = `
            <td>${nombre}</td>
            <td>${apellido}</td>
            <td>${tipoTexto}</td>
            <td>$${pago.toFixed(2)}</td>
        `;
        this.tablaBody.appendChild(fila);
    }
}