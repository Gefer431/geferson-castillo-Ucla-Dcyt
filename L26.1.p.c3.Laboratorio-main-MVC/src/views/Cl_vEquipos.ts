import I_vUsuario, { FiltrosUsuario } from "../interfaces/I_vEquipos.js";
import Cl_mEquipo from "../models/Cl_mEquipos.js";

export default class Cl_vUsuario implements I_vUsuario {
  private selFiltroLab: HTMLSelectElement;
  private inFiltroProcesador: HTMLInputElement;
  private inFiltroMemoria: HTMLInputElement;
  private inIdReporte: HTMLInputElement;
  private inObservaciones: HTMLTextAreaElement;
  private btnReportar: HTMLButtonElement;
  private contenedor: HTMLElement;
  private toastEl: HTMLElement;
  private _toastTimer: ReturnType<typeof setTimeout> | null = null;

  constructor() {
    this.selFiltroLab = document.getElementById("filtroLab") as HTMLSelectElement;
    this.inFiltroProcesador = document.getElementById("filtroProcesador") as HTMLInputElement;
    this.inFiltroMemoria = document.getElementById("filtroMemoria") as HTMLInputElement;
    this.inIdReporte = document.getElementById("inIdReporte") as HTMLInputElement;
    this.inObservaciones = document.getElementById("inObservaciones") as HTMLTextAreaElement;
    this.btnReportar = document.getElementById("btnReportar") as HTMLButtonElement;
    this.contenedor = document.getElementById("gridEquipos") as HTMLElement;
    this.toastEl = document.getElementById("toast") as HTMLElement;
  }

  get filtros(): FiltrosUsuario {
    return {
      laboratorio: this.selFiltroLab.value,
      procesador: this.inFiltroProcesador.value.trim(),
      memoria: parseInt(this.inFiltroMemoria.value) || 0,
    };
  }
  get idReporte(): string {
    return this.inIdReporte.value.trim();
  }

  get observaciones(): string {
    return this.inObservaciones.value.trim();
  }

  onFiltrar(callback: () => void): void {
    this.selFiltroLab.onchange = callback;
    this.inFiltroProcesador.oninput = callback;
    this.inFiltroMemoria.oninput = callback;
  }

  onReportar(callback: () => void): void {
    this.btnReportar.onclick = callback;
  }
  mostrarEquipos(equipos: Cl_mEquipo[]): void {
    if (!equipos.length) {
      this.contenedor.innerHTML = '<p class="empty">No hay equipos disponibles para este laboratorio.</p>';
      return;
    }
    const claseEstado: Record<string, string> = {
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
  mostrarMensaje(msg: string, tipo: string = ""): void {
    this.toastEl.textContent = msg;
    this.toastEl.className = "show" + (tipo ? " " + tipo : "");
    if (this._toastTimer) clearTimeout(this._toastTimer);
    this._toastTimer = setTimeout(() => this.toastEl.className = "", 3000);
  }
}