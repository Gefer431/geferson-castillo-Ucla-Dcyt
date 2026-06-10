import Cl_mEquipo from "../models/Cl_mEquipos.js";

export interface FiltrosUsuario {
  laboratorio: string;
  procesador: string;
  memoria: number;
}

export default interface I_vUsuario {
  filtros: FiltrosUsuario;
  idReporte: string;
  observaciones: string;
  onFiltrar(callback: () => void): void;
  onReportar(callback: () => void): void;
  mostrarEquipos(equipos: Cl_mEquipo[]): void;
  mostrarMensaje(msg: string, tipo?: string): void;
}