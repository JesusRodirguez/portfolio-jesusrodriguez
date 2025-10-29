CREATE DATABASE usuario;
USE usuario;

CREATE TABLE modulo_user(
    cod_usua int(12) PRIMARY KEY UNIQUE,
    Nom_usua varchar(50),
    Usuar_usua varchar(100) UNIQUE,
    contraseña_usua varchar(100)
);
INSERT INTO modulo_user(Usuar_usua,contraseña_usua) VALUES ('admin','123456');