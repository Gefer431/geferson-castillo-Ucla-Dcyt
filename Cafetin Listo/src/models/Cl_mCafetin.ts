import Cl_mProducto from "./Cl_mProducto.js";
import Cl_mPedido from "./Cl_mPedido.js";

export default class Cl_mCafetin {
  private _productos: Cl_mProducto[] = [];
  private _pedidos: Cl_mPedido[] = [];

  setProductos(productos: Cl_mProducto[]): void {
    this._productos = [...productos];
  }

  getProductos(): Cl_mProducto[] {
    return [...this._productos];
  }

  getProductosPorCategoria(categoria: string): Cl_mProducto[] {
    const valor = categoria.trim().toLowerCase();
    return this._productos.filter(p => (p.categoria ?? "").toString().toLowerCase() === valor);
  }

  setPedidos(pedidos: Cl_mPedido[]): void {
    this._pedidos = [...pedidos];
  }

  getPedidos(): Cl_mPedido[] {
    return [...this._pedidos];
  }

  getPedidosNoProcesados(): Cl_mPedido[] {
    return this._pedidos.filter(p => !p.procesado);
  }

  getEstadisticasProductos(): { nombre: string; porcentaje: string }[] {
    const conteo: Map<string, number> = new Map();
    let totalItems = 0;

    this._pedidos.forEach(p => {
      p.productos.forEach(prod => {
        conteo.set(prod.nombre, (conteo.get(prod.nombre) || 0) + 1);
        totalItems++;
      });
    });

    return Array.from(conteo.entries()).map(([nombre, cantidad]) => ({
      nombre,
      porcentaje: totalItems > 0 ? ((cantidad / totalItems) * 100).toFixed(2) : "0"
    })).sort((a, b) => parseFloat(b.porcentaje) - parseFloat(a.porcentaje));
  }
}