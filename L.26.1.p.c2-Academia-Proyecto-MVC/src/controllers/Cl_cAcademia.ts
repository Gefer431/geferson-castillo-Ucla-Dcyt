import Cl_mAcademia from "../models/Cl_mAcademia.js";
import { I_vAcademia } from "../interfaces/I_vAcademia.js";
import { I_vInscrito } from "../interfaces/I_vInscrito.js";
import Cl_mInscrito from "../models/Cl_mInscrito.js";
import Cl_cInscrito from "./Cl_cInscrito.js";

export default class Cl_cAcademia {
    private academia: Cl_mAcademia;
    private vistaPrincipal: I_vAcademia;
    private vistaInscrito: I_vInscrito;
    private controladorInscrito: Cl_cInscrito;

    constructor(vistaAcademia: I_vAcademia, vistaInscrito: I_vInscrito) {
        this.academia = new Cl_mAcademia();
        this.vistaPrincipal = vistaAcademia;
        this.vistaInscrito = vistaInscrito;
        this.controladorInscrito = new Cl_cInscrito(vistaInscrito);

        this.vistaPrincipal.onNuevoInscrito(() => this.procesarInscrito());

        this.cargarDatosIniciales();
        this.actualizarVista();
    }

    private procesarInscrito(): void {
        this.controladorInscrito.solicitarInscrito((inscrito) => {
            if (inscrito !== null) {
                this.academia.procesarInscrito(inscrito);
                this.actualizarVista();
            }
        });
    }

    private actualizarVista(): void {
        this.vistaPrincipal.reportarEstadisticas(
            this.academia.totalRecaudado(),
            this.academia.cantIngles(),
            this.academia.cantComputacion(),
            this.academia.cantIA(),
            this.academia.porcIngles(),
            this.academia.porcComputacion(),
            this.academia.porcIA(),
            this.academia.cantMenorEdad(),
            this.academia.cantAdulto(),
            this.academia.cantTerceraEdad(),
            this.academia.porcMenorEdad(),
            this.academia.porcAdulto(),
            this.academia.porcTerceraEdad(),
            this.academia.cantMayoresEdad(),
            this.academia.promedioEdad()
        );
    }

    private cargarDatosIniciales(): void {
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
            const inscrito = new Cl_mInscrito(
                d[0] as string,
                d[1] as string,
                d[2] as string,
                d[3] as string,
                new Date(d[4] as string),
                d[5] as number
            );
            this.academia.procesarInscrito(inscrito);
            this.vistaInscrito.agregarAFila(inscrito.nombre, inscrito.apellido, inscrito.tipoCurso, inscrito.pagoFinal());
        }
    }
}