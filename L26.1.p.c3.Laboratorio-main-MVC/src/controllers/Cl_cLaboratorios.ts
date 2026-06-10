import I_vTecnico from "../interfaces/I_vLaboratorios.js";
import Cl_mLaboratorio from "../models/Cl_mLaboratorios.js";
import Cl_mEquipo from "../models/Cl_mEquipos.js";
import sEquipo from "../services/Cl_sEquipo.js";

export default class Cl_cTecnico {
  private modelo: Cl_mLaboratorio;
  private vista: I_vTecnico;

  constructor({ modelo, vista }: { modelo: Cl_mLaboratorio; vista: I_vTecnico }) {
    this.modelo = modelo;
    this.vista = vista;
    this.vista.onRegistrar(() => this.registrar());
    this.vista.onLimpiar(() => this.vista.limpiarFormulario());
    this.vista.onFiltrar(() => this.refrescar());
    this.vista.onAccionTabla((id, accion) => this.cambiarEstado(id, accion));
    this.cargarEquipos();
    this.timing();
  }

  private timing(): void {
    setInterval(() => window.location.reload(), 60000);
  }

  private async registrar(): Promise<void> {
    const d = this.vista.datosEquipo;
    if (!d.marca || !d.procesador || !d.memoria || !d.laboratorio || !d.meson || !d.puesto) {
      this.vista.mostrarMensaje("Completa todos los campos", "warn");
      return;
    }
    const equipo = new Cl_mEquipo(d);
    const resultado = await sEquipo.agregar(equipo);
    this.vista.mostrarMensaje(resultado.mensaje, resultado.ok ? "" : "warn");
    if (resultado.ok) {
      this.vista.limpiarFormulario();
      this.cargarEquipos();
    }
  }

  private async cambiarEstado(id: string, accion: string): Promise<void> {
    const nuevoEstado = accion === "activar" ? "activo" : "mantenimiento";
    const resultado = await sEquipo.modificarEstado(
      id,
      nuevoEstado,
      nuevoEstado === "activo" ? "" : undefined,
    );
    this.vista.mostrarMensaje(resultado.mensaje, resultado.ok ? "" : "warn");
    if (resultado.ok) this.cargarEquipos();
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

  private refrescar(): void {
    const f = this.vista.filtros;
    const equiposFiltrados = this.modelo.filtrar(
      f.laboratorio || undefined,
      f.estado || undefined,
      f.procesador || undefined,
      f.memoria || undefined,
    );
    this.vista.mostrarInventario(equiposFiltrados);
    const stats = this.modelo.getStats();
    const porcentaje = Cl_mEquipo.porcentajeDaniados(this.modelo.getEquipos(), f.laboratorio || undefined);
    this.vista.actualizarStats({ ...stats, porcentajeDaniados: porcentaje });
  }
}