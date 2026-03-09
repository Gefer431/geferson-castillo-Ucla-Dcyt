export default class Cl_personas {
  private _nombre: string;
  private _edad: number;

  constructor(n: string, e: number) {
    this._nombre = n;
    this._edad = e;
  }
  set nombre(n: string) {
    this._nombre = n;
  }
  get nombre(): string {
    return this._nombre;
  }
  set edad(e: number) {
    this._edad = +e;
  }
  get edad(): number {
    return this._edad;
  }
}
