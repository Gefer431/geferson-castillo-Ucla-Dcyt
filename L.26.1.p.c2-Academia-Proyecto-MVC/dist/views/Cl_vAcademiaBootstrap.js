export default class Cl_vAcademiaBootstrap {
    constructor() {
        this.btnNuevo = document.getElementById("academia_btnNuevoInscrito");
        this.lblTotal = document.getElementById("academia_lblTotal");
        this.lblCantIng = document.getElementById("academia_cantIng");
        this.lblCantComp = document.getElementById("academia_cantComp");
        this.lblCantIA = document.getElementById("academia_cantIA");
        this.lblPorcIng = document.getElementById("academia_porcIng");
        this.lblPorcComp = document.getElementById("academia_porcComp");
        this.lblPorcIA = document.getElementById("academia_porcIA");
        this.lblCantMenor = document.getElementById("academia_cantMenor");
        this.lblCantAdulto = document.getElementById("academia_cantAdulto");
        this.lblCantTercera = document.getElementById("academia_cantTercera");
        this.lblPorcMenor = document.getElementById("academia_porcMenor");
        this.lblPorcAdulto = document.getElementById("academia_porcAdulto");
        this.lblPorcTercera = document.getElementById("academia_porcTercera");
        this.lblCantMayores = document.getElementById("academia_cantMayores");
        this.lblPromEdad = document.getElementById("academia_lblPromEdad");
    }
    onNuevoInscrito(callback) {
        this.btnNuevo.onclick = callback;
    }
    reportarEstadisticas(total, cantIng, cantComp, cantIA, porcIng, porcComp, porcIA, cantMenor, cantAdulto, cantTercera, porcMenor, porcAdulto, porcTercera, cantMayores, promedioEdad) {
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
