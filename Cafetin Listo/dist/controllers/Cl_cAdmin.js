import Cl_mProducto from "../models/Cl_mProducto.js";
import sProducto from "../services/Cl_sProducto.js";
import sPedido from "../services/Cl_sPedido.js";
export default class Cl_cAdmin {
    modelo;
    vista;
    constructor({ modelo, vista }) {
        this.modelo = modelo;
        this.vista = vista;
        this.vista.onCargarProducto(() => this.cargarProducto());
        this.vista.onLimpiar(() => this.vista.limpiarFormulario());
        this.vista.onMarcarProcesado((id) => this.procesarPedido(id));
        this.vista.onEliminarPedido((id) => this.eliminarPedido(id));
        this.cargarDatos();
    }
    async cargarProducto() {
        const d = this.vista.datosProducto;
        if (!d.nombre || !d.categoria || d.precio <= 0) {
            this.vista.mostrarMensaje("Complete todos los campos", "warn");
            return;
        }
        const producto = new Cl_mProducto({
            nombre: d.nombre,
            categoria: d.categoria,
            precio: d.precio,
        });
        const resultado = await sProducto.agregar(producto);
        this.vista.mostrarMensaje(resultado.mensaje, resultado.ok ? "" : "warn");
        if (resultado.ok) {
            this.vista.limpiarFormulario();
            await this.cargarDatos();
        }
    }
    async procesarPedido(id) {
        const resultado = await sPedido.modificarEstado(id, true);
        this.vista.mostrarMensaje(resultado.mensaje, resultado.ok ? "" : "warn");
        if (resultado.ok)
            await this.cargarDatos();
    }
    async eliminarPedido(id) {
        const resultado = await sPedido.eliminar(id);
        this.vista.mostrarMensaje(resultado.mensaje, resultado.ok ? "" : "warn");
        if (resultado.ok)
            await this.cargarDatos();
    }
    async cargarDatos() {
        const productos = await sProducto.getProductos();
        if (!productos.ok) {
            this.vista.mostrarMensaje("Error al cargar productos", "warn");
            return;
        }
        this.modelo.setProductos(productos.tabla);
        this.vista.mostrarProductosCargados(productos.tabla);
        const pedidos = await sPedido.getPedidos();
        if (!pedidos.ok) {
            this.vista.mostrarMensaje("Error al cargar pedidos", "warn");
            return;
        }
        this.modelo.setPedidos(pedidos.tabla);
        this.vista.mostrarPedidos(pedidos.tabla);

        // Calcular y mostrar estadísticas dinámicamente
        const stats = this.modelo.getEstadisticasProductos();
        const container = document.getElementById("statsProductos");
        if (container) {
            if (stats.length === 0) {
                container.innerHTML = "<p>No hay suficientes pedidos para generar estadísticas.</p>";
            } else {
                let html = "<ul style='list-style: none; padding: 0;'>";
                stats.forEach(s => {
                    html += `<li style="margin-bottom: 8px; padding: 5px; border-left: 4px solid #7b5233; background: #fffaf3;"><strong>${s.nombre}:</strong> ${s.porcentaje}% de las ventas</li>`;
                });
                container.innerHTML = html + "</ul>";
            }
        }
    }
}
//# sourceMappingURL=Cl_cAdmin.js.map