export default class Cl_mCafetin {
    _productos = [];
    _pedidos = [];
    setProductos(productos) {
        this._productos = [...productos];
    }
    getProductos() {
        return [...this._productos];
    }
    getProductosPorCategoria(categoria) {
        const valor = categoria.trim().toLowerCase();
        return this._productos.filter(p => (p.categoria ?? "").toString().toLowerCase() === valor);
    }
    setPedidos(pedidos) {
        this._pedidos = [...pedidos];
    }
    getPedidos() {
        return [...this._pedidos];
    }
    getPedidosNoProcesados() {
        return this._pedidos.filter(p => !p.procesado);
    }
    getEstadisticasProductos() {
        const conteo = new Map();
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
//# sourceMappingURL=Cl_mCafetin.js.map