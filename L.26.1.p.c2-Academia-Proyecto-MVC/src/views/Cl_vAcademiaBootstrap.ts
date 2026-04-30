import { I_vAcademia } from "../interfaces/I_vAcademia.js";

export default class Cl_vAcademiaBootstrap implements I_vAcademia {
    private btnNuevo: HTMLButtonElement;
    private lblTotal: HTMLElement;
    private lblCantIng: HTMLElement;
    private lblCantComp: HTMLElement;
    private lblCantIA: HTMLElement;
    private lblPorcIng: HTMLElement;
    private lblPorcComp: HTMLElement;
    private lblPorcIA: HTMLElement;
    private lblCantMenor: HTMLElement;
    private lblCantAdulto: HTMLElement;
    private lblCantTercera: HTMLElement;
    private lblPorcMenor: HTMLElement;
    private lblPorcAdulto: HTMLElement;
    private lblPorcTercera: HTMLElement;
    private lblCantMayores: HTMLElement;
    private lblPromEdad: HTMLElement;

    constructor() {
        this.btnNuevo = document.getElementById("academia_btnNuevoInscrito") as HTMLButtonElement;
        this.lblTotal = document.getElementById("academia_lblTotal") as HTMLElement;
        this.lblCantIng = document.getElementById("academia_cantIng") as HTMLElement;
        this.lblCantComp = document.getElementById("academia_cantComp") as HTMLElement;
        this.lblCantIA = document.getElementById("academia_cantIA") as HTMLElement;
        this.lblPorcIng = document.getElementById("academia_porcIng") as HTMLElement;
        this.lblPorcComp = document.getElementById("academia_porcComp") as HTMLElement;
        this.lblPorcIA = document.getElementById("academia_porcIA") as HTMLElement;
        this.lblCantMenor = document.getElementById("academia_cantMenor") as HTMLElement;
        this.lblCantAdulto = document.getElementById("academia_cantAdulto") as HTMLElement;
        this.lblCantTercera = document.getElementById("academia_cantTercera") as HTMLElement;
        this.lblPorcMenor = document.getElementById("academia_porcMenor") as HTMLElement;
        this.lblPorcAdulto = document.getElementById("academia_porcAdulto") as HTMLElement;
        this.lblPorcTercera = document.getElementById("academia_porcTercera") as HTMLElement;
        this.lblCantMayores = document.getElementById("academia_cantMayores") as HTMLElement;
        this.lblPromEdad = document.getElementById("academia_lblPromEdad") as HTMLElement;
    }

    onNuevoInscrito(callback: () => void): void {
        this.btnNuevo.onclick = callback;
    }

    reportarEstadisticas(
        total: number,
        cantIng: number, cantComp: number, cantIA: number,
        porcIng: number, porcComp: number, porcIA: number,
        cantMenor: number, cantAdulto: number, cantTercera: number,
        porcMenor: number, porcAdulto: number, porcTercera: number,
        cantMayores: number,
        promedioEdad: number
    ): void {
        this.lblTotal.textContent = `$${total.toFixed(2)}`;
        this.lblCantIng.textContent = `${cantIng}`;
        this.lblCantComp.textContent = `${cantComp}`;
        this.lblCantIA.textContent = `${cantIA}`;
        this.lblPorcIng.textContent = `${porcIng.toFixed(1)}%`;
        this.lblPorcComp.textContent = `${porcComp.toFixed(1)}%`;
        this.lblPorcIA.textContent = `${porcIA.toFixed(1)}%`;
        this.lblCantMenor.textContent = `${cantMenor}`;
        this.lblCantAdulto.textContent = `${cantAdulto}`;
        this.lblCantTercera.textContent = `${cantTercera}`;
        this.lblPorcMenor.textContent = `${porcMenor.toFixed(1)}%`;
        this.lblPorcAdulto.textContent = `${porcAdulto.toFixed(1)}%`;
        this.lblPorcTercera.textContent = `${porcTercera.toFixed(1)}%`;
        this.lblCantMayores.textContent = `${cantMayores}`;
        this.lblPromEdad.textContent = promedioEdad.toFixed(2);
    }
}