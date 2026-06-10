export default class Cl_mLaboratorio {
    _equipos = [];
    setEquipos(equipos) {
        this._equipos = [...equipos];
    }
    getEquipos() {
        return this._equipos;
    }
    getStats() {
        const activo = this._equipos.filter(e => e.estado === "activo").length;
        const reportado = this._equipos.filter(e => e.estado === "reportado").length;
        const mantenimiento = this._equipos.filter(e => e.estado === "mantenimiento").length;
        return { activo, reportado, mantenimiento, total: this._equipos.length };
    }
    filtrar(laboratorio, estado, procesador, memoria) {
        return this._equipos.filter(e => {
            const okLab = !laboratorio || e.laboratorio === laboratorio;
            const okEst = !estado || e.estado === estado;
            const okCpu = !procesador || e.procesador.toLowerCase().includes(procesador.toLowerCase());
            const okMem = !memoria || e.memoria === memoria;
            return okLab && okEst && okCpu && okMem;
        });
    }
}
//# sourceMappingURL=Cl_mLaboratorios.js.map