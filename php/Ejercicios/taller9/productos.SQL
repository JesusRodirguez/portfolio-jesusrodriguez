CREATE DATABASE productos;
USE productos;

# Tabla de productos
CREATE TABLE producto (
    cod_producto INT(12)  PRIMARY KEY,
    nombre_producto VARCHAR(100) NOT NULL,
    precio DECIMAL(10,2) CHECK (precio > 0),
    stock INT CHECK (stock >= 0)
);