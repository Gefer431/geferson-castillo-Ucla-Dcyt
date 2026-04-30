import Cl_mAcademia from "../models/Cl_mAcademia.js";
import Cl_mInscrito from "../models/Cl_mInscrito.js";
import Cl_cInscrito from "./Cl_cInscrito.js";
export default class Cl_cAcademia {
    constructor(vistaAcademia, vistaInscrito) {
        this.academia = new Cl_mAcademia();
        this.vistaPrincipal = vistaAcademia;
        this.vistaInscrito = vistaInscrito;
        this.controladorInscrito = new Cl_cInscrito(vistaInscrito);
        this.vistaPrincipal.onNuevoInscrito(() => this.procesarInscrito());
        this.cargarDatosIniciales();
        this.actualizarVista();
    }
    procesarInscrito() {
        this.controladorInscrito.solicitarInscrito((inscrito) => {
            if (inscrito !== null) {
                this.academia.procesarInscrito(inscrito);
                this.actualizarVista();
            }
        });
    }
    actualizarVista() {
        this.vistaPrincipal.reportarEstadisticas(this.academia.totalRecaudado(), this.academia.cantIngles(), this.academia.cantComputacion(), this.academia.cantIA(), this.academia.porcIngles(), this.academia.porcComputacion(), this.academia.porcIA(), this.academia.cantMenorEdad(), this.academia.cantAdulto(), this.academia.cantTerceraEdad(), this.academia.porcMenorEdad(), this.academia.porcAdulto(), this.academia.porcTerceraEdad(), this.academia.cantMayoresEdad(), this.academia.promedioEdad());
    }
    cargarDatosIniciales() {
        const datos = [
            ["Ana", "López", "111", "F", "1990-03-15", 1],
            ["Luis", "Pérez", "222", "M", "2000-07-22", 2],
            ["María", "García", "333", "F", "1985-11-02", 3],
            ["Carlos", "Sánchez", "444", "M", "1995-01-10", 1],
            ["Laura", "Ramírez", "555", "F", "1980-06-18", 2],
            ["Pedro", "Gómez", "666", "M", "2005-12-05", 3],
            ["Sofía", "Torres", "777", "F", "1998-09-25", 1],
            ["Javier", "Castro", "888", "M", "1975-04-12", 2],
            ["Valentina", "Ortiz", "999", "F", "2002-08-30", 1],
            ["Diego", "Ruiz", "000", "M", "1992-12-14", 2],
            ["Camila", "Méndez", "123", "F", "1988-07-19", 1],
            ["Andrés", "Herrera", "456", "M", "1996-02-28", 2]
        ];
        for (const d of datos) {
            const inscrito = new Cl_mInscrito(d[0], d[1], d[2], d[3], new Date(d[4]), d[5]);
            this.academia.procesarInscrito(inscrito);
            this.vistaInscrito.agregarAFila(inscrito.nombre, inscrito.apellido, inscrito.tipoCurso, inscrito.pagoFinal());
        }
    }
}
