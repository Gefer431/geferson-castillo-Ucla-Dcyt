export default class Cl_vClinicaPlain {
    constructor() {
        this.btNuevo = document.getElementById("clinica_btnNuevoPaciente");
        this.lblTotal = document.getElementById("clinica_lblTotal");
        this.lblCantProc = document.getElementById("clinica_cantProc");
        this.lblCantCons = document.getElementById("clinica_cantCons");
        this.lblCantCtrl = document.getElementById("clinica_cantCtrl");
        this.lblPorcProc = document.getElementById("clinica_porcProc");
        this.lblPorcCons = document.getElementById("clinica_porcCons");
        this.lblPorcCtrl = document.getElementById("clinica_porcCtrl");
        this.lblPorcDesc = document.getElementById("clinica_porcDesc");
        this.lblPromPeso = document.getElementById("clinica_lblPromPeso");
    }
    onNuevoPaciente(callback) {
        this.btNuevo.onclick = callback;
    }
    reportarEstadisticas(total, totProc, totCons, totCtrl, porcProc, porcCons, porcCtrl, porcDesc, promedioPeso) {
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
