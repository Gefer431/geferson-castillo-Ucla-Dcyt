export default class Cl_vPacienteBootstrap {
    constructor() {
        this.inNombre = document.getElementById("paciente_nombre");
        this.inApellido = document.getElementById("paciente_apellido");
        this.inCedula = document.getElementById("paciente_cedula");
        this.inSexo = document.getElementById("paciente_sexo");
        this.inFechaNac = document.getElementById("paciente_fechaNac");
        this.inPeso = document.getElementById("paciente_peso");
        this.inTipo = document.getElementById("paciente_tipo");
        this.btnAceptar = document.getElementById("paciente_btnAceptar");
        this.btnCancelar = document.getElementById("paciente_btnCancelar");
        this.mensajeDiv = document.getElementById("mensaje");
        this.tablaBody = document.getElementById("tabla-pacientes-body");
        const modalElem = document.getElementById("modal-paciente");
        this.modal = new bootstrap.Modal(modalElem);
    }
    get nombre() { return this.inNombre.value.trim(); }
    get apellido() { return this.inApellido.value.trim(); }
    get cedula() { return this.inCedula.value.trim(); }
    get sexo() { return this.inSexo.value.trim().toUpperCase(); }
    get fechaNacimiento() { return this.inFechaNac.value; }
    get peso() { return +this.inPeso.value || 0; }
    get tipoAtencion() { return +this.inTipo.value || 0; }
    onAceptar(callback) { this.btnAceptar.onclick = callback; }
    onCancelar(callback) { this.btnCancelar.onclick = callback; }
    mostrar() {
        this.limpiarFormulario();
        this.modal.show();
    }
    ocultar() { this.modal.hide(); }
    limpiarFormulario() {
        this.inNombre.value = "";
        this.inApellido.value = "";
        this.inCedula.value = "";
        this.inSexo.value = "";
        this.inFechaNac.value = "";
        this.inPeso.value = "";
        this.inTipo.value = "";
        this.mostrarMensaje("");
    }
    mostrarMensaje(texto) {
        if (this.mensajeDiv)
            this.mensajeDiv.textContent = texto;
    }
    agregarAFila(nombre, apellido, tipo, pago) {
        const fila = document.createElement("tr");
        let tipoTexto = "";
        if (tipo === 1)
            tipoTexto = "Procedimiento";
        else if (tipo === 2)
            tipoTexto = "Consulta";
        else
            tipoTexto = "Control";
        fila.innerHTML = `
            <td>${nombre}</td>
            <td>${apellido}</td>
            <td>${tipoTexto}</td>
            <td>$${pago.toFixed(2)}</td>
        `;
        this.tablaBody.appendChild(fila);
    }
}
