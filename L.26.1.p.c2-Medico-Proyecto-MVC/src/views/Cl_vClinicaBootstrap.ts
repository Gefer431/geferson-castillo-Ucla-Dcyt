import { I_vClinica } from "../interfaces/I_vClinica.js";

export default class Cl_vClinicaBootstrap implements I_vClinica {
    private btNuevo: HTMLButtonElement;
    private lblTotal: HTMLElement;
    private lblCantProc: HTMLElement;
    private lblCantCons: HTMLElement;
    private lblCantCtrl: HTMLElement;
    private lblPorcProc: HTMLElement;
    private lblPorcCons: HTMLElement;
    private lblPorcCtrl: HTMLElement;
    private lblPorcDesc: HTMLElement;
    private lblPromPeso: HTMLElement;

    constructor() {
        this.btNuevo = document.getElementById("clinica_btnNuevoPaciente") as HTMLButtonElement;
        this.lblTotal = document.getElementById("clinica_lblTotal") as HTMLElement;
        this.lblCantProc = document.getElementById("clinica_cantProc") as HTMLElement;
        this.lblCantCons = document.getElementById("clinica_cantCons") as HTMLElement;
        this.lblCantCtrl = document.getElementById("clinica_cantCtrl") as HTMLElement;
        this.lblPorcProc = document.getElementById("clinica_porcProc") as HTMLElement;
        this.lblPorcCons = document.getElementById("clinica_porcCons") as HTMLElement;
        this.lblPorcCtrl = document.getElementById("clinica_porcCtrl") as HTMLElement;
        this.lblPorcDesc = document.getElementById("clinica_porcDesc") as HTMLElement;
        this.lblPromPeso = document.getElementById("clinica_lblPromPeso") as HTMLElement;
    }

    onNuevoPaciente(callback: () => void): void {
        this.btNuevo.onclick = callback;
    }

    reportarEstadisticas(
        total: number,
        totProc: number, totCons: number, totCtrl: number,
        porcProc: number, porcCons: number, porcCtrl: number,
        porcDesc: number, promedioPeso: number
    ): void {
        this.lblTotal.textContent = `$${total.toFixed(2)}`;
        this.lblCantProc.textContent = `${totProc}`;
        this.lblCantCons.textContent = `${totCons}`;
        this.lblCantCtrl.textContent = `${totCtrl}`;
        this.lblPorcProc.textContent = `${porcProc.toFixed(1)}%`;
        this.lblPorcCons.textContent = `${porcCons.toFixed(1)}%`;
        this.lblPorcCtrl.textContent = `${porcCtrl.toFixed(1)}%`;
        this.lblPorcDesc.textContent = `${porcDesc.toFixed(1)}%`;
        this.lblPromPeso.textContent = promedioPeso.toFixed(2);
    }
}