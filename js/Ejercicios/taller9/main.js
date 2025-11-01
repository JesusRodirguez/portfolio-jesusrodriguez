class Producto {
  constructor(nomProducto, precio, Descuprecio) {
    this.nomProducto = nomProducto;
    this.precio = precio;
    this.Descuprecio = Descuprecio;
  }

  calcularDescuento() {
    let DescuentoPrecio = (this.precio / 100) * this.Descuprecio;
    let precioFinal = this.precio - DescuentoPrecio;

    const RESULTADO = `
      <div style="
        border: 2px solid white;
        background: linear-gradient(0deg, rgb(6, 137, 245),rgb(220, 3, 248));
        padding: 20px;
        margin: 20px auto;
        width: 300px;
        text-align: center;
        border-radius: 12px;
        color: #fff;
        box-shadow: 0 0 10px rgba(255,255,255,0.5);
      ">
        <h1>Nombre del Producto: ${this.nomProducto}</h1>
        <h1>Precio Original: $${this.precio}</h1>
        <h1>Descuento: ${this.Descuprecio}%</h1>
        <h1>Precio Final: $${precioFinal.toFixed(2)}</h1>
      </div>
    `;
    return RESULTADO;
  }
}


function resibirDatos() {
  const soloLetras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
  const soloNumeros = /^[0-9]+(\.[0-9]+)?$/;

  const nomProducto = document.getElementById('nomProducto').value.trim();
  const precio = document.getElementById('precio').value.trim();
  const Descuprecio = document.getElementById('Descuprecio').value.trim();

  if (!nomProducto || !precio || !Descuprecio) {
    alert("Todos los campos son obligatorios.");
    return false;
  }

  if (!soloLetras.test(nomProducto)) {
    alert("El nombre del producto solo debe contener letras.");
    return false;
  }

  if (!soloNumeros.test(precio) || !soloNumeros.test(Descuprecio)) {
    alert("El precio y el descuento solo deben contener números.");
    return false;
  }

  const produc1 = new Producto(nomProducto, parseFloat(precio), parseFloat(Descuprecio));
  document.getElementById('resultado').innerHTML = produc1.calcularDescuento();
  return true;
}
