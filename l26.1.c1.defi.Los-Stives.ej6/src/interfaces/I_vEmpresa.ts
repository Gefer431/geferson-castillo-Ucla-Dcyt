import Cl_mEmpresa from "../models/Cl_mEmpresa.js";

export interface I_vEmpresa {
  // En lugar de exponer el botón HTML, exponemos una acción
  onNuevoEmpleado(callback: () => void): void;
  reportar(empresa: Cl_mEmpresa): void;
}
