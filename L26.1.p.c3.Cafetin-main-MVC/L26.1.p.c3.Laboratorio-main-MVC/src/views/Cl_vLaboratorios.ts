import I_vTecnico, { DatosFormulario, FiltrosTecnico } from "../interfaces/I_vLaboratorios.js";
import Cl_mEquipo from "../models/Cl_mEquipos.js";

export default class Cl_vTecnico implements I_vTecnico {
  private inMarca: HTMLInputElement;
  private inProcesador: HTMLInputElement;
  private inMemoria: HTMLInputElement;
  private inLaboratorio: HTMLSelectElement;
  private inMeson: HTMLInputElement;
  private inPuesto: HTMLInputElement;
  private inEstado: HTMLSelectElement;
  private btnRegistrar: HTMLButtonElement;
  private btnLimpiar: HTMLButtonElement;
  private selFiltroLab: HTMLSelectElement;
  private selFiltroEstado: HTMLSelectElement;
  private inFiltroProcesador: HTMLInputElement;
  private inFiltroMemoria: HTMLInputElement;
  private tbody: HTMLTableSectionElement;
  private toastEl: HTMLElement;
  private cntActivo: HTMLElement;
  private cntReportado: HTMLElement;
  private cntMant: HTMLElement;
  private cntTotal: HTMLElement;
  private cntDaniados: HTMLElement;
  private _toastTimer: ReturnType<typeof setTimeout> | null = null;

  constructor() {
    this.inMarca = document.getElementById("inMarca") as HTMLInputElement;
    this.inProcesador = document.getElementById("inProcesador") as HTMLInputElement;
    this.inMemoria = document.getElementById("inMemoria") as HTMLInputElement;
    this.inLaboratorio = document.getElementById("inLaboratorio") as HTMLSelectElement;
    this.inMeson = document.getElementById("inMeson") as HTMLInputElement;
    this.inPuesto = document.getElementById("inPuesto") as HTMLInputElement;
    this.inEstado = document.getElementById("inEstado") as HTMLSelectElement;
    this.btnRegistrar = document.getElementById("btnRegistrar") as HTMLButtonElement;
    this.btnLimpiar = document.getElementById("btnLimpiar") as HTMLButtonElement;
    this.selFiltroLab = document.getElementById("filtroLab") as HTMLSelectElement;
    this.selFiltroEstado = document.getElementById("filtroEstado") as HTMLSelectElement;
    this.inFiltroProcesador = document.getElementById("filtroProcesador") as HTMLInputElement;
    this.inFiltroMemoria = document.getElementById("filtroMemoria") as HTMLInputElement;
    this.tbody = document.getElementById("tbodyInventario") as HTMLTableSectionElement;
    this.toastEl = document.getElementById("toast") as HTMLElement;
    this.cntActivo = document.getElementById("cntActivo") as HTMLElement;
    this.cntReportado = document.getElementById("cntReportado") as HTMLElement;
    this.cntMant = document.getElementById("cntMant") as HTMLElement;
    this.cntTotal = document.getElementById("cntTotal") as HTMLElement;
    this.cntDaniados = document.getElementById("cntDaniados") as HTMLElement;
  }

  get datosEquipo(): DatosFormulario {
    return {
      marca: this.inMarca.value.trim(),
      procesador: this.inProcesador.value.trim(),
      memoria: parseInt(this.inMemoria.value) || 0,
      estado: this.inEstado.value as any,
      laboratorio: this.inLaboratorio.value,
      meson: this.inMeson.value.trim(),
      puesto: this.inPuesto.value.trim(),
    };
  }

  get filtros(): FiltrosTecnico {
    return {
      laboratorio: this.selFiltroLab.value,
      estado: this.selFiltroEstado.value,
      procesador: this.inFiltroProcesador.value.trim(),
      memoria: parseInt(this.inFiltroMemoria.value) || 0,
    };
  }

  onRegistrar(callback: () => void): void { this.btnRegistrar.onclick = callback; }
  onLimpiar(callback: () => void): void { this.btnLimpiar.onclick = callback; }
  onFiltrar(callback: () => void): void {
    this.selFiltroLab.onchange = callback;
    this.selFiltroEstado.onchange = callback;
    this.inFiltroProcesador.oninput = callback;
    this.inFiltroMemoria.oninput = callback;
  }
  onAccionTabla(callback: (id: string, accion: string) => void): void {
    this.tbody.addEventListener("click", (e) => {
      const btn = (e.target as HTMLElement).closest("[data-id]") as HTMLElement | null;
      if (!btn) return;
      const id = btn.dataset["id"] ?? "";
      const accion = btn.dataset["accion"] ?? "";
      callback(id, accion);
    });
  }
  limpiarFormulario(): void {
    this.inMarca.value = "";
    this.inProcesador.value = "";
    this.inMemoria.value = "";
    this.inLaboratorio.value = "";
    this.inMeson.value = "";
    this.inPuesto.value = "";
    this.inEstado.value = "activo";
    this.inMarca.focus();
  }
  mostrarInventario(equipos: Cl_mEquipo[]): void {
    if (!equipos.length) {
      this.tbody.innerHTML = '<tr><td colspan="10" class="empty">Sin equipos para los filtros seleccionados</td></tr>';
      return;
    }
    const claseEstado: Record<string, string> = {
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
  actualizarStats(stats: { activo: number; reportado: number; mantenimiento: number; total: number; porcentajeDaniados: number }): void {
    this.cntActivo.textContent = String(stats.activo);
    this.cntReportado.textContent = String(stats.reportado);
    this.cntMant.textContent = String(stats.mantenimiento);
    this.cntTotal.textContent = String(stats.total);
    this.cntDaniados.textContent = String(stats.porcentajeDaniados) + "%";
  }
  mostrarMensaje(msg: string, tipo: string = ""): void {
    this.toastEl.textContent = msg;
    this.toastEl.className = "show" + (tipo ? " " + tipo : "");
    if (this._toastTimer) clearTimeout(this._toastTimer);
    this._toastTimer = setTimeout(() => this.toastEl.className = "", 3000);
  }
}