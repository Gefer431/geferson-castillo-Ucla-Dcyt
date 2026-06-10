import Cl_mEquipo from "./Cl_mEquipos.js";

export default class Cl_mLaboratorio {
  private _equipos: Cl_mEquipo[] = [];

  setEquipos(equipos: Cl_mEquipo[]): void {
    this._equipos = [...equipos];
  }

  getEquipos(): Cl_mEquipo[] {
    return this._equipos;
  }

  getStats(): { activo: number; reportado: number; mantenimiento: number; total: number } {
    const activo = this._equipos.filter(e => e.estado === "activo").length;
    const reportado = this._equipos.filter(e => e.estado === "reportado").length;
    const mantenimiento = this._equipos.filter(e => e.estado === "mantenimiento").length;
    return { activo, reportado, mantenimiento, total: this._equipos.length };
  }

  filtrar(laboratorio?: string, estado?: string, procesador?: string, memoria?: number): Cl_mEquipo[] {
    return this._equipos.filter(e => {
      const okLab = !laboratorio || e.laboratorio === laboratorio;
      const okEst = !estado || e.estado === estado;
      const okCpu = !procesador || e.procesador.toLowerCase().includes(procesador.toLowerCase());
      const okMem = !memoria || e.memoria === memoria;
      return okLab && okEst && okCpu && okMem;
    });
  }
}
