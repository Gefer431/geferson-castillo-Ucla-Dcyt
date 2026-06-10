export default class Cl_vTecnico {
    inMarca;
    inProcesador;
    inMemoria;
    inLaboratorio;
    inMeson;
    inPuesto;
    inEstado;
    btnRegistrar;
    btnLimpiar;
    selFiltroLab;
    selFiltroEstado;
    inFiltroProcesador;
    inFiltroMemoria;
    tbody;
    toastEl;
    cntActivo;
    cntReportado;
    cntMant;
    cntTotal;
    cntDaniados;
    _toastTimer = null;
    constructor() {
        this.inMarca = document.getElementById("inMarca");
        this.inProcesador = document.getElementById("inProcesador");
        this.inMemoria = document.getElementById("inMemoria");
        this.inLaboratorio = document.getElementById("inLaboratorio");
        this.inMeson = document.getElementById("inMeson");
        this.inPuesto = document.getElementById("inPuesto");
        this.inEstado = document.getElementById("inEstado");
        this.btnRegistrar = document.getElementById("btnRegistrar");
        this.btnLimpiar = document.getElementById("btnLimpiar");
        this.selFiltroLab = document.getElementById("filtroLab");
        this.selFiltroEstado = document.getElementById("filtroEstado");
        this.inFiltroProcesador = document.getElementById("filtroProcesador");
        this.inFiltroMemoria = document.getElementById("filtroMemoria");
        this.tbody = document.getElementById("tbodyInventario");
        this.toastEl = document.getElementById("toast");
        this.cntActivo = document.getElementById("cntActivo");
        this.cntReportado = document.getElementById("cntReportado");
        this.cntMant = document.getElementById("cntMant");
        this.cntTotal = document.getElementById("cntTotal");
        this.cntDaniados = document.getElementById("cntDaniados");
    }
    get datosEquipo() {
        return {
            marca: this.inMarca.value.trim(),
            procesador: this.inProcesador.value.trim(),
            memoria: parseInt(this.inMemoria.value) || 0,
            estado: this.inEstado.value,
            laboratorio: this.inLaboratorio.value,
            meson: this.inMeson.value.trim(),
            puesto: this.inPuesto.value.trim(),
        };
    }
    get filtros() {
        return {
            laboratorio: this.selFiltroLab.value,
            estado: this.selFiltroEstado.value,
            procesador: this.inFiltroProcesador.value.trim(),
            memoria: parseInt(this.inFiltroMemoria.value) || 0,
        };
    }
    onRegistrar(callback) { this.btnRegistrar.onclick = callback; }
    onLimpiar(callback) { this.btnLimpiar.onclick = callback; }
    onFiltrar(callback) {
        this.selFiltroLab.onchange = callback;
        this.selFiltroEstado.onchange = callback;
        this.inFiltroProcesador.oninput = callback;
        this.inFiltroMemoria.oninput = callback;
    }
    onAccionTabla(callback) {
        this.tbody.addEventListener("click", (e) => {
            const btn = e.target.closest("[data-id]");
            if (!btn)
                return;
            const id = btn.dataset["id"] ?? "";
            const accion = btn.dataset["accion"] ?? "";
            callback(id, accion);
        });
    }
    limpiarFormulario() {
        this.inMarca.value = "";
        this.inProcesador.value = "";
        this.inMemoria.value = "";
        this.inLaboratorio.value = "";
        this.inMeson.value = "";
        this.inPuesto.value = "";
        this.inEstado.value = "activo";
        this.inMarca.focus();
    }
    mostrarInventario(equipos) {
        if (!equipos.length) {
            this.tbody.innerHTML = '<tr><td colspan="10" class="empty">Sin equipos para los filtros seleccionados</td></tr>';
            return;
        }
        const claseEstado = {
            activo: "est-activo",
            reportado: "est-reportado",
            mantenimiento: "est-mantenimiento",
        };
        this.tbody.innerHTML = equipos.map(e => {
            const cls = claseEstado[e.estado] ?? "";
            const btnActivar = e.estado !== "activo"
                ? `<button class="action-btn" data-id="${e.id}" data-accion="activar">✓ Activar</button>`
                : "";
            const btnMant = e.estado !== "mantenimiento"
                ? `<button class="action-btn" data-id="${e.id}" data-accion="mantenimiento">⚙ Mant.</button>`
                : "";
            return `<tr>
        <td>${e.id}</td>
        <td>${e.marca}</td>
        <td>${e.procesador}</td>
        <td>${e.memoria} GB</td>
        <td>${e.laboratorio}</td>
        <td>${e.meson}</td>
        <td>${e.puesto}</td>
        <td>${e.observaciones || "-"}</td>
        <td><span class="estado-badge ${cls}">${e.estado}</span></td>
        <td>${btnActivar}${btnMant}</td>
      </tr>`;
        }).join("");
    }
    actualizarStats(stats) {
        this.cntActivo.textContent = String(stats.activo);
        this.cntReportado.textContent = String(stats.reportado);
        this.cntMant.textContent = String(stats.mantenimiento);
        this.cntTotal.textContent = String(stats.total);
        this.cntDaniados.textContent = String(stats.porcentajeDaniados) + "%";
    }
    mostrarMensaje(msg, tipo = "") {
        this.toastEl.textContent = msg;
        this.toastEl.className = "show" + (tipo ? " " + tipo : "");
        if (this._toastTimer)
            clearTimeout(this._toastTimer);
        this._toastTimer = setTimeout(() => this.toastEl.className = "", 3000);
    }
}
//# sourceMappingURL=Cl_vLaboratorios.js.map