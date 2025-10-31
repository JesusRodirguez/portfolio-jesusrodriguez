<?php
// conction con base de datos y claseproducto-crud
require_once("bd.php");
require_once("producto.php");

$producto = new Producto($conect);
//  validación con metodo post y action para mirar cual tiene que desarrollarse
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $accion = $_POST["accion"] ?? '';
    
    switch ($accion) {
        // registrar producto
        case "registrar":
            $cod_producto = intval($_POST["cod_producto"]);
            $nombre_producto = htmlspecialchars($_POST["nombre_producto"]);
            $precio = floatval($_POST["precio"]);
            $stock  = intval($_POST["stock"]);

            echo $producto->registrar($cod_producto, $nombre_producto, $precio, $stock)
                ? " Producto registrado exitosamente."
                : " Error,no se pudo registrar.";
            break;
            // editar producto
        case "editar":
            $cod_producto = intval($_POST["cod_producto"]);
            $nombre_producto = htmlspecialchars($_POST["nombre_producto"]);
            $precio = floatval($_POST["precio"]);
            $stock  = intval($_POST["stock"]);

            echo $producto->editar($cod_producto, $nombre_producto, $precio, $stock)
                ? " Producto actualizado exitosamnete."
                : "Error al modificar producto.";
            break;
            // eliminar producto
        case "eliminar":
            $cod_producto = intval($_POST["cod_producto"]);

            echo $producto->eliminar($cod_producto)
                ? " Producto eliminado."
                : " Error,no se pudo  eliminar el producto.";
            break;
            // from ver la tabla,aqui se crea la tabla
        case "listar":
            $result = $producto->listar();
            if ($result->num_rows > 0) {
                echo "<table border='1'>
                        <tr>
                            <th>Código</th>
                            <th>Nombre</th>
                            <th>Precio</th>
                            <th>Stock</th>
                        </tr>";
                while ($fila = $result->fetch_assoc()) {
                    echo "<tr>
                            <td>{$fila['cod_producto']}</td>
                            <td>{$fila['nombre_producto']}</td>
                            <td>{$fila['precio']}</td>
                            <td>{$fila['stock']}</td>
                          </tr>";
                }
                echo "</table>";
            } else {
                echo " No hay ningun productos registrados hasta el momento.";
            }
            break;
    }
}
?>
