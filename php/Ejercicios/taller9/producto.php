<?php
class Producto {
    private $conexion;

    public function __construct($conexion) {
        $this->conexion = $conexion;
    }

    // insert into
    public function registrar($cod_producto, $nombre_producto, $precio, $stock) {
        $stmt = $this->conexion->prepare(
            "INSERT INTO producto (cod_producto, nombre_producto, precio, stock)
             VALUES (?, ?, ?, ?)"
        );
        $stmt->bind_param("isdi", $cod_producto, $nombre_producto, $precio, $stock);
        return $stmt->execute();
    }

    // from
    public function listar() {
        $sql = "SELECT * FROM producto";
        return $this->conexion->query($sql);
    }

    // update
    public function editar($cod_producto, $nombre_producto, $precio, $stock) {
        $stmt = $this->conexion->prepare(
            "UPDATE producto SET nombre_producto=?, precio=?, stock=? WHERE cod_producto=?"
        );
        $stmt->bind_param("sdii", $nombre_producto, $precio, $stock, $cod_producto);
        return $stmt->execute();
    }

    // delete
    public function eliminar($cod_producto) {
        $stmt = $this->conexion->prepare("DELETE FROM producto WHERE cod_producto=?");
        $stmt->bind_param("i", $cod_producto);
        return $stmt->execute();
    }
}
?>
