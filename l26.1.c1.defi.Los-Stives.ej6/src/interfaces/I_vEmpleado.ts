export interface I_vEmpleado {
  get monto(): number;
  get tipo(): string;
  mostrar(): void;
  ocultar(): void;
  onAceptar(callback: () => void): void;
  onCancelar(callback: () => void): void;
}