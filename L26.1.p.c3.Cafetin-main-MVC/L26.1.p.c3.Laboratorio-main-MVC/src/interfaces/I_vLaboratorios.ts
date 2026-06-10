import Cl_mEquipo from "../models/Cl_mEquipos.js";

export interface DatosFormulario {
  marca: string;
  procesador: string;
  memoria: number;
  estado: "activo" | "reportado" | "mantenimiento";
  laboratorio: string;
  meson: string;
  puesto: string;
}

export interface FiltrosTecnico {
  laboratorio: string;
  estado: string;
  procesador: string;
  memoria: number;
}

export default interface I_vTecnico {
  datosEquipo: DatosFormulario;
  filtros: FiltrosTecnico;
  onRegistrar(callback: () => void): void;
  onLimpiar(callback: () => void): void;
  onFiltrar(callback: () => void): void;
  onAccionTabla(callback: (id: string, accion: string) => void): void;
  limpiarFormulario(): void;
  mostrarInventario(equipos: Cl_mEquipo[]): void;
  actualizarStats(stats: { activo: number; reportado: number; mantenimiento: number; total: number; porcentajeDaniados: number }): void;
  mostrarMensaje(msg: string, tipo?: string): void;
}