import sEquipo from "../services/Cl_sEquipo.js";
export default class Cl_cUsuario {
    modelo;
    vista;
    constructor({ modelo, vista }) {
        this.modelo = modelo;
        this.vista = vista;
        this.vista.onFiltrar(() => this.refrescar());
        this.vista.onReportar(() => this.reportar());
        this.cargarEquipos();
        this.timing();
    }
    timing() {
        setInterval(() => window.location.reload(), 60000);
    }
    async cargarEquipos() {
        const resultado = await sEquipo.getEquipos();
        if (!resultado.ok) {
            this.vista.mostrarMensaje("Error al cargar equipos", "warn");
            return;
        }
        this.modelo.setEquipos(resultado.tabla);
        this.refrescar();
    }
    async reportar() {
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
        if (!confirmacion)
            return;
        const resultado = await sEquipo.reportarFalla(id, observaciones);
        this.vista.mostrarMensaje(resultado.mensaje, resultado.ok ? "" : "warn");
        if (resultado.ok)
            this.cargarEquipos();
    }
    refrescar() {
        const filtros = this.vista.filtros;
        const todos = this.modelo.getEquipos();
        const filtrados = todos.filter(e => {
            if (filtros.laboratorio && e.laboratorio !== filtros.laboratorio)
                return false;
            if (filtros.procesador && !e.procesador.toLowerCase().includes(filtros.procesador.toLowerCase()))
                return false;
            if (filtros.memoria && e.memoria !== filtros.memoria)
                return false;
            return e.estado === "activo";
        });
        this.vista.mostrarEquipos(filtrados);
    }
}
//# sourceMappingURL=Cl_cEquipos.js.map