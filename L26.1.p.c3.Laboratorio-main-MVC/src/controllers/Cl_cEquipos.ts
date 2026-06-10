import I_vUsuario from "../interfaces/I_vEquipos.js";
import Cl_mLaboratorio from "../models/Cl_mLaboratorios.js";
import sEquipo from "../services/Cl_sEquipo.js";

export default class Cl_cUsuario {
  private modelo: Cl_mLaboratorio;
  private vista: I_vUsuario;

  constructor({ modelo, vista }: { modelo: Cl_mLaboratorio; vista: I_vUsuario }) {
    this.modelo = modelo;
    this.vista = vista;
    this.vista.onFiltrar(() => this.refrescar());
    this.vista.onReportar(() => this.reportar());
    this.cargarEquipos();
    this.timing();
  }

  private timing(): void {
    setInterval(() => window.location.reload(), 60000);
  }

  private async cargarEquipos(): Promise<void> {
    const resultado = await sEquipo.getEquipos();
    if (!resultado.ok) {
      this.vista.mostrarMensaje("Error al cargar equipos", "warn");
      return;
    }
    this.modelo.setEquipos(resultado.tabla);
    this.refrescar();
  }

  private async reportar(): Promise<void> {
    const id = this.vista.idReporte;
    const observaciones = this.vista.observaciones;
    if (!id) {
      this.vista.mostrarMensaje("Ingresa el ID del equipo", "warn");
      return;
    }
    if (!observaciones) {
      this.vista.mostrarMensaje("Describe la falla en observaciones", "warn");
      return;
    }
    const confirmacion = window.confirm("¿Confirmas el reporte de este equipo?");
    if (!confirmacion) return;
    const resultado = await sEquipo.reportarFalla(id, observaciones);
    this.vista.mostrarMensaje(resultado.mensaje, resultado.ok ? "" : "warn");
    if (resultado.ok) this.cargarEquipos();
  }

  private refrescar(): void {
    const filtros = this.vista.filtros;
    const todos = this.modelo.getEquipos();
    const filtrados = todos.filter(e => {
      if (filtros.laboratorio && e.laboratorio !== filtros.laboratorio) return false;
      if (filtros.procesador && !e.procesador.toLowerCase().includes(filtros.procesador.toLowerCase())) return false;
      if (filtros.memoria && e.memoria !== filtros.memoria) return false;
      return e.estado === "activo";
    });
    this.vista.mostrarEquipos(filtrados);
  }
}