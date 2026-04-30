import Cl_mClinica from "../models/Cl_mClinica.js";
import Cl_mPaciente from "../models/Cl_mPaciente.js";
import Cl_cPaciente from "./Cl_cPaciente.js";
export default class Cl_cClinica {
    constructor(vistaClinica, vistaPaciente) {
        this.clinica = new Cl_mClinica();
        this.vistaPrincipal = vistaClinica;
        this.vistaPaciente = vistaPaciente;
        this.controladorPaciente = new Cl_cPaciente(vistaPaciente);
        this.vistaPrincipal.onNuevoPaciente(() => this.procesarPaciente());
        this.cargarDatosIniciales();
        this.actualizarVista();
    }
    procesarPaciente() {
        this.controladorPaciente.solicitarPaciente((paciente) => {
            if (paciente !== null) {
                this.clinica.procesarPaciente(paciente);
                this.actualizarVista();
            }
        });
    }
    actualizarVista() {
        const total = this.clinica.totalRecaudado();
        const totProc = this.clinica.cantProcedimiento();
        const totCons = this.clinica.cantConsulta();
        const totCtrl = this.clinica.cantControl();
        const porcProc = this.clinica.porcProcedimiento();
        const porcCons = this.clinica.porcConsulta();
        const porcCtrl = this.clinica.porcControl();
        const porcDesc = this.clinica.porcDescuento();
        const promPeso = this.clinica.promedioPeso();
        this.vistaPrincipal.reportarEstadisticas(total, totProc, totCons, totCtrl, porcProc, porcCons, porcCtrl, porcDesc, promPeso);
    }
    cargarDatosIniciales() {
        const datos = [
            ["Ana", "López", "111", "F", "1990-03-15", 1, 65],
            ["Luis", "Pérez", "222", "M", "2000-07-22", 2, 70],
            ["María", "García", "333", "F", "1985-11-02", 3, 58],
            ["Carlos", "Sánchez", "444", "M", "1995-01-10", 1, 80],
            ["Laura", "Ramírez", "555", "F", "1980-06-18", 2, 62],
            ["Pedro", "Gómez", "666", "M", "2005-12-05", 3, 50],
            ["Sofía", "Torres", "777", "F", "1998-09-25", 1, 55],
            ["Javier", "Castro", "888", "M", "1975-04-12", 2, 85],
            ["Valentina", "Ortiz", "999", "F", "2002-08-30", 1, 48],
            ["Diego", "Ruiz", "000", "M", "1992-12-14", 2, 75],
            ["Camila", "Méndez", "123", "F", "1988-07-19", 1, 60],
            ["Andrés", "Herrera", "456", "M", "1996-02-28", 2, 72]
        ];
        for (const d of datos) {
            const paciente = new Cl_mPaciente(d[0], d[1], d[2], d[3], new Date(d[4]), d[5], d[6]);
            this.clinica.procesarPaciente(paciente);
            this.vistaPaciente.agregarAFila(paciente.nombre, paciente.apellido, paciente.tipoAtencion, paciente.pagoFinal());
        }
    }
}
