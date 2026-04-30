export default class Cl_vInscritoBootstrap {
    constructor() {
        this.inNombre = document.getElementById("inscrito_nombre");
        this.inApellido = document.getElementById("inscrito_apellido");
        this.inCedula = document.getElementById("inscrito_cedula");
        this.inSexo = document.getElementById("inscrito_sexo");
        this.inFechaNac = document.getElementById("inscrito_fechaNac");
        this.inTipoCurso = document.getElementById("inscrito_tipoCurso");
        this.btnAceptar = document.getElementById("inscrito_btnAceptar");
        this.btnCancelar = document.getElementById("inscrito_btnCancelar");
        this.mensajeDiv = document.getElementById("mensaje");
        this.tablaBody = document.getElementById("tabla-inscritos-body");
        const modalElem = document.getElementById("modal-inscrito");
        this.modal = new bootstrap.Modal(modalElem);
    }
    get nombre() { return this.inNombre.value.trim(); }
    get apellido() { return this.inApellido.value.trim(); }
    get cedula() { return this.inCedula.value.trim(); }
    get sexo() { return this.inSexo.value.trim().toUpperCase(); }
    get fechaNacimiento() { return this.inFechaNac.value; }
    get tipoCurso() { return +this.inTipoCurso.value || 0; }
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
        this.inTipoCurso.value = "";
        this.mostrarMensaje("");
    }
    mostrarMensaje(texto) {
        if (this.mensajeDiv)
            this.mensajeDiv.textContent = texto;
    }
    agregarAFila(nombre, apellido, tipoCurso, pago) {
        const fila = document.createElement("tr");
        let cursoTexto = "";
        if (tipoCurso === 1)
            cursoTexto = "Inglés";
        else if (tipoCurso === 2)
            cursoTexto = "Computación";
        else
            cursoTexto = "I.A.";
        fila.innerHTML = `
            <td>${nombre}</td>
            <td>${apellido}</td>
            <td>${cursoTexto}</td>
            <td>$${pago.toFixed(2)}</td>
        `;
        this.tablaBody.appendChild(fila);
    }
}
