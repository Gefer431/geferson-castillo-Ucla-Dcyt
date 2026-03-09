import Cl_persona from "./Cl_personas";

export default class Cl_grupo {
  private cntPersonas: number;
  private cntMayores: number;
  constructor() {
    this.cntPersonas = 0;
    this.cntMayores = 0;
  }
  procesarPersonas(personas: Cl_persona) {
    this.cntPersonas++;
    if (personas.edad >= 18) {
      this.cntMayores++;
    }
  }
  totalPersonas() {
    return this.cntPersonas;
  }
  totalMayores() {
    return this.cntMayores;
  }
  porcentajeMayores() {
    return (this.cntMayores / this.cntPersonas) * 100;
  }
}
