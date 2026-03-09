export default class Cl_personas {
  private _nombre: string;
  private _sexo: string;

  constructor(n: string, s: string) {
    this._nombre = n;
    this._sexo = s;
  }
  set nombre(n: string) {
    this._nombre = n;
  }
  get nombre(): string {
    return this._nombre;
  }
  set sexo(s: string) {
    this._sexo = s;
  }
  get sexo(): string {
    return this._sexo;
  }
}
