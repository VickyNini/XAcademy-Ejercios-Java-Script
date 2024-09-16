function Carrito(nombre, unidades, precio) {
    this.nombre = nombre;
    this.unidades = unidades;
    this.precio = precio;

    this.lista = function() {
        console.log(`- ${this.nombre} : ${this.unidades} un. $ ${this.precio} c/u`);
        console.log(`Subtotal: $${this.unidades * this.precio}`);    
        
        
    }
   
}

const producto = new Carrito('leche', 5, 2);
producto.lista();
const agregarProducto1 = new Carrito('arroz', 2, 4);
agregarProducto1.lista();
const agregarProducto2 = new Carrito('lentejas', 3, 5);
agregarProducto2.lista();