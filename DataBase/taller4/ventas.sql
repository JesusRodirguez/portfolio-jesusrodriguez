#creación de basededatos gestionventas
CREATE DATABASE GestionVentas;
USE GestionVentas;

#Tabla de clientes
CREATE TABLE clientes (
    documento INT(12)  PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    correo VARCHAR(100) UNIQUE,
    telefono VARCHAR(15),
    ciudad VARCHAR(50)
);

# Tabla de productos
CREATE TABLE productos (
    cod_producto INT(12)  PRIMARY KEY,
    nombre_producto VARCHAR(100) NOT NULL,
    precio DECIMAL(10,2) CHECK (precio > 0),
    stock INT CHECK (stock >= 0)
);

# Tabla de ventas
CREATE TABLE ventas (
    cod_venta INT(12) PRIMARY KEY,
    documento INT(12),
    fecha DATE DEFAULT CURRENT_DATE,
    total DECIMAL(10,2),
    FOREIGN KEY (cod_cliente) REFERENCES clientes(cod_cliente)
);

# Detalle de venta
CREATE TABLE detalle_venta (
    cod_detalle INT AUTO_INCREMENT PRIMARY KEY,
    cod_venta INT(12),
    cod_producto INT(12),
    cantidad INT CHECK (cantidad > 0),
    subtotal DECIMAL(10,2),
    FOREIGN KEY (cod_venta) REFERENCES ventas(cod_venta),
    FOREIGN KEY (cod_producto) REFERENCES productos(cod_producto)
);

-- Insertar clientes
INSERT INTO clientes (documento, nombre, correo, telefono, ciudad) VALUES
(100112345678, 'Juan Pérez', 'juanperez@gmail.com', '3204567890', 'Bogotá'),
(100234567890, 'María López', 'marialopez@hotmail.com', '3109876543', 'Medellín'),
(100312121212, 'Carlos Díaz', 'cdiaz@yahoo.com', '3112233445', 'Cali');

-- Insertar productos
INSERT INTO productos (cod_producto, nombre_producto, precio, stock) VALUES
(101010101010, 'Portátil Lenovo', 2500000, 10),
(202020202020, 'Mouse Logitech', 85000, 30),
(303030303030, 'Teclado Redragon', 120000, 25),
(404040404040, 'Monitor Samsung 24"', 780000, 12);

-- Insertar ventas
INSERT INTO ventas (cod_venta, documento, total) VALUES
(101101101101, 100112345678, 2585000),
(102102102102, 100234567890, 900000),
(103103103103,100234567890,6000000),
(104104104104,100312121212,7000000);

-- Insertar detalle de ventas
INSERT INTO detalle_venta (cod_venta, cod_producto, cantidad, subtotal) VALUES
(101101101101, 101010101010, 1, 2500000),
(101101101101, 202020202020, 1, 85000),
(102102102102, 404040404040, 1, 780000),
(102102102102, 303030303030, 1, 120000);

USE GestionVentas;

-- TRIGGER: Actualiza automáticamente el total de la venta al insertar un detalle
DELIMITER //
CREATE TRIGGER actualizar_total_venta
AFTER INSERT ON detalle_venta
FOR EACH ROW
BEGIN
    UPDATE ventas
    SET total = (
        SELECT SUM(subtotal)
        FROM detalle_venta
        WHERE cod_venta = NEW.cod_venta
    )
    WHERE cod_venta = NEW.cod_venta;
END;
//
DELIMITER ;

--  Mostrar  ventas= nombre del cliente
SELECT v.cod_venta, c.nombre AS cliente, v.fecha, v.total
FROM ventas v
JOIN clientes c ON v.documento = c.documento
ORDER BY v.cod_venta;

--  Mostrar  productos vendidos 
SELECT v.cod_venta, p.nombre_producto, d.cantidad, d.subtotal
FROM detalle_venta d
JOIN ventas v ON d.cod_venta = v.cod_venta
JOIN productos p ON d.cod_producto = p.cod_producto
WHERE v.cod_venta = 101; -- puedes cambiar el número según la venta

--  Mostrar  clientes= total de la compra
SELECT c.nombre AS cliente, SUM(v.total) AS total_compras
FROM ventas v
JOIN clientes c ON v.documento = c.documento
GROUP BY c.nombre
ORDER BY total_compras DESC;

--  Mostrar  productos = más vendidos
SELECT p.nombre_producto, SUM(d.cantidad) AS unidades_vendidas
FROM detalle_venta d
JOIN productos p ON d.cod_producto = p.cod_producto
GROUP BY p.nombre_producto
ORDER BY unidades_vendidas DESC;

-- vista de las ventas
CREATE VIEW vista_resumen_ventas AS
SELECT c.nombre AS cliente, v.cod_venta, v.fecha, v.total
FROM ventas v
JOIN clientes c ON v.documento = c.documento;
