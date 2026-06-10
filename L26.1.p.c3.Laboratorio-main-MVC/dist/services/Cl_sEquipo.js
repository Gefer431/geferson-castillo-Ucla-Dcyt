import Cl_mEquipo from "../models/Cl_mEquipos.js";
import Cl_sProyecto from "./Cl_sProyecto.js";
export default class Cl_sEquipo extends Cl_sProyecto {
    static async existe(id) {
        return super.existeId(id);
    }
    static async agregar(equipo) {
        if (!equipo.marca)
            return { ok: false, mensaje: "Marca es obligatoria" };
        if (!equipo.procesador)
            return { ok: false, mensaje: "Procesador es obligatorio" };
        if (equipo.memoria <= 0)
            return { ok: false, mensaje: "Memoria debe ser > 0" };
        if (!equipo.laboratorio)
            return { ok: false, mensaje: "Laboratorio es obligatorio" };
        if (!equipo.meson)
            return { ok: false, mensaje: "Mesón es obligatorio" };
        if (!equipo.puesto)
            return { ok: false, mensaje: "Puesto es obligatorio" };
        return super.agregar(equipo.toJSON());
    }
    static async modificarEstado(id, nuevoEstado, observaciones) {
        const existe = await this.existe(id);
        if (!existe.ok)
            return { ok: false, mensaje: "Error de conexión" };
        if (!existe.existe)
            return { ok: false, mensaje: `No existe equipo con ID "${id}"` };
        const equipoActual = await this.getEquipoPorId(id);
        if (!equipoActual)
            return { ok: false, mensaje: "Error al obtener datos" };
        if (nuevoEstado === "activo") {
            equipoActual.activar();
        }
        else if (nuevoEstado === "mantenimiento") {
            equipoActual.mantenimiento();
        }
        else if (nuevoEstado === "reportado") {
            equipoActual.reportar(observaciones ?? equipoActual.observaciones);
        }
        return super.modificar(id, equipoActual.toJSON());
    }
    static async reportarFalla(id, observaciones) {
        const existe = await this.existe(id);
        if (!existe.ok)
            return { ok: false, mensaje: "Error de conexión" };
        if (!existe.existe)
            return { ok: false, mensaje: `No existe equipo con ID "${id}"` };
        const equipo = await this.getEquipoPorId(id);
        if (equipo?.estado !== "activo")
            return { ok: false, mensaje: "Solo se pueden reportar equipos en estado activo" };
        equipo.reportar(observaciones);
        return super.modificar(id, equipo.toJSON());
    }
    static async getEquipos() {
        const respuesta = await super.getTabla();
        if (!respuesta.ok)
            return { ok: false, tabla: [] };
        const equipos = respuesta.tabla.map((d) => new Cl_mEquipo(d));
        return { ok: true, tabla: equipos };
    }
    static async getEquipoPorId(id) {
        const respuesta = await this.getEquipos();
        if (!respuesta.ok)
            return null;
        const encontrado = respuesta.tabla.find(e => e.id === id);
        return encontrado || null;
    }
}
//# sourceMappingURL=Cl_sEquipo.js.map