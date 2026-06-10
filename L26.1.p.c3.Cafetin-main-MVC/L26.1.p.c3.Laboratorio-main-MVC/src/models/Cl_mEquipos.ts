export default class Cl_mEquipo {
  private _id = "";
  private _marca = "";
  private _procesador = "";
  private _memoria = 0;
  private _estado: "activo" | "reportado" | "mantenimiento" = "activo";
  private _laboratorio = "";
  private _meson = "";
  private _puesto = "";
  private _observaciones = "";

  constructor({
    id,
    marca,
    procesador,
    memoria,
    estado = "activo",
    laboratorio,
    meson,
    puesto,
    observaciones = "",
  }: {
    id?: string;
    marca: string;
    procesador: string;
    memoria: number;
    estado?: "activo" | "reportado" | "mantenimiento";
    laboratorio: string;
    meson: string;
    puesto: string;
    observaciones?: string;
  }) {
    if (id) this._id = id;
    this.marca = marca;
    this.procesador = procesador;
    this.memoria = memoria;
    this.estado = estado;
    this.laboratorio = laboratorio;
    this.meson = meson;
    this.puesto = puesto;
    this.observaciones = observaciones;
  }

  get id(): string { return this._id; }
  get marca(): string { return this._marca; }
  set marca(v: string) { this._marca = v; }
  get procesador(): string { return this._procesador; }
  set procesador(v: string) { this._procesador = v; }
  get memoria(): number { return this._memoria; }
  set memoria(v: number) { this._memoria = v; }
  get estado(): "activo" | "reportado" | "mantenimiento" { return this._estado; }
  set estado(v) { this._estado = v; }
  get laboratorio(): string { return this._laboratorio; }
  set laboratorio(v: string) { this._laboratorio = v; }
  get meson(): string { return this._meson; }
  set meson(v: string) { this._meson = v; }
  get puesto(): string { return this._puesto; }
  set puesto(v: string) { this._puesto = v; }
  get observaciones(): string { return this._observaciones; }
  set observaciones(v: string) { this._observaciones = v; }

  public reportar(observaciones: string): void {
    this.estado = "reportado";
    this.observaciones = observaciones;
  }

  public activar(): void {
    this.estado = "activo";
    this.observaciones = "";
  }

  public mantenimiento(): void {
    this.estado = "mantenimiento";
  }

  toJSON() {
    return {
      marca: this._marca,
      procesador: this._procesador,
      memoria: this._memoria,
      estado: this._estado,
      laboratorio: this._laboratorio,
      meson: this._meson,
      puesto: this._puesto,
      observaciones: this._observaciones,
    };
  }

  public static porcentajeDaniados(equipos: Cl_mEquipo[], laboratorio?: string): number {
    const lista = laboratorio ? equipos.filter(e => e.laboratorio === laboratorio) : equipos;
    if (!lista.length) return 0;
    const dañados = lista.filter(e => e.estado === "reportado" || e.estado === "mantenimiento").length;
    const pct = (dañados / lista.length) * 100;
    return Math.round(pct * 100) / 100;
  }
}