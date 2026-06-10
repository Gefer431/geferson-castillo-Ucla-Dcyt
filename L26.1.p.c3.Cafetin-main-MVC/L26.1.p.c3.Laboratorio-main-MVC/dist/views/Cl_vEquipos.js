export default class Cl_vUsuario {
    selFiltroLab;
    inFiltroProcesador;
    inFiltroMemoria;
    inIdReporte;
    inObservaciones;
    btnReportar;
    contenedor;
    toastEl;
    _toastTimer = null;
    constructor() {
        this.selFiltroLab = document.getElementById("filtroLab");
        this.inFiltroProcesador = document.getElementById("filtroProcesador");
        this.inFiltroMemoria = document.getElementById("filtroMemoria");
        this.inIdReporte = document.getElementById("inIdReporte");
        this.inObservaciones = document.getElementById("inObservaciones");
        this.btnReportar = document.getElementById("btnReportar");
        this.contenedor = document.getElementById("gridEquipos");
        this.toastEl = document.getElementById("toast");
    }
    get filtros() {
        return {
            laboratorio: this.selFiltroLab.value,
            procesador: this.inFiltroProcesador.value.trim(),
            memoria: parseInt(this.inFiltroMemoria.value) || 0,
        };
    }
    get idReporte() {
        return this.inIdReporte.value.trim();
    }
    get observaciones() {
        return this.inObservaciones.value.trim();
    }
    onFiltrar(callback) {
        this.selFiltroLab.onchange = callback;
        this.inFiltroProcesador.oninput = callback;
        this.inFiltroMemoria.oninput = callback;
    }
    onReportar(callback) {
        this.btnReportar.onclick = callback;
    }
    mostrarEquipos(equipos) {
        if (!equipos.length) {
            this.contenedor.innerHTML = '<p class="empty">No hay equipos disponibles para este laboratorio.</p>';
            return;
        }
        const claseEstado = {
            activo: "est-activo",
            reportado: "est-reportado",
            mantenimiento: "est-mantenimiento",
        };
        this.contenedor.innerHTML = equipos.map(e => {
            const cls = claseEstado[e.estado] ?? "";
            return `<div class="equipo-card ${e.estado === "activo" ? "card-activo" : "card-inactivo"}">
        <div class="card-header">
          <span class="card-id">${e.id}</span>
          <span class="estado-badge ${cls}">${e.estado}</span>
        </div>
        <div class="card-body">
          <div class="card-row"><span class="card-lbl">Marca</span><span>${e.marca}</span></div>
          <div class="card-row"><span class="card-lbl">CPU</span><span>${e.procesador}</span></div>
          <div class="card-row"><span class="card-lbl">RAM</span><span>${e.memoria} GB</span></div>
          <div class="card-row"><span class="card-lbl">Ubicación</span><span>${e.laboratorio} · ${e.meson} · ${e.puesto}</span></div>
        </div>
      </div>`;
        }).join("");
    }
    mostrarMensaje(msg, tipo = "") {
        this.toastEl.textContent = msg;
        this.toastEl.className = "show" + (tipo ? " " + tipo : "");
        if (this._toastTimer)
            clearTimeout(this._toastTimer);
        this._toastTimer = setTimeout(() => this.toastEl.className = "", 3000);
    }
}
//# sourceMappingURL=Cl_vEquipos.js.map