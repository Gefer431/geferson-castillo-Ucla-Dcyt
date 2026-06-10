import Cl_mEquipo from "../models/Cl_mEquipos.js";
import sEquipo from "../services/Cl_sEquipo.js";
export default class Cl_cTecnico {
    modelo;
    vista;
    constructor({ modelo, vista }) {
        this.modelo = modelo;
        this.vista = vista;
        this.vista.onRegistrar(() => this.registrar());
        this.vista.onLimpiar(() => this.vista.limpiarFormulario());
        this.vista.onFiltrar(() => this.refrescar());
        this.vista.onAccionTabla((id, accion) => this.cambiarEstado(id, accion));
        this.cargarEquipos();
        this.timing();
    }
    timing() {
        setInterval(() => window.location.reload(), 60000);
    }
    async registrar() {
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
    async cambiarEstado(id, accion) {
        const nuevoEstado = accion === "activar" ? "activo" : "mantenimiento";
        const resultado = await sEquipo.modificarEstado(id, nuevoEstado, nuevoEstado === "activo" ? "" : undefined);
        this.vista.mostrarMensaje(resultado.mensaje, resultado.ok ? "" : "warn");
        if (resultado.ok)
            this.cargarEquipos();
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
    refrescar() {
        const f = this.vista.filtros;
        const equiposFiltrados = this.modelo.filtrar(f.laboratorio || undefined, f.estado || undefined, f.procesador || undefined, f.memoria || undefined);
        this.vista.mostrarInventario(equiposFiltrados);
        const stats = this.modelo.getStats();
        const porcentaje = Cl_mEquipo.porcentajeDaniados(this.modelo.getEquipos(), f.laboratorio || undefined);
        this.vista.actualizarStats({ ...stats, porcentajeDaniados: porcentaje });
    }
}
//# sourceMappingURL=Cl_cLaboratorios.js.map