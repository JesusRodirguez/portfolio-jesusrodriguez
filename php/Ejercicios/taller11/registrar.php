<?php
require "conexion.php";

if ($_SERVER["REQUEST_METHOD"] === "POST") {

    // SANITIZAR
    $nombre = trim(filter_input(INPUT_POST, "nombre", FILTER_SANITIZE_SPECIAL_CHARS));
    $correo = filter_input(INPUT_POST, "correo", FILTER_SANITIZE_EMAIL);
    $password = $_POST["password"] ?? "";
    $confirmar = $_POST["confirmar"] ?? "";

    // VALIDACIONES
    if (strlen($nombre) < 3) {
        die("Nombre inválido");
    }

    if (!filter_var($correo, FILTER_VALIDATE_EMAIL)) {
        die("Correo inválido");
    }

    if (strlen($password) < 8) {
        die("Contraseña muy corta");
    }

    if ($password !== $confirmar) {
        die("Las contraseñas no coinciden");
    }

    // ENCRIPTAR PASSWORD
    $passwordHash = password_hash($password, PASSWORD_DEFAULT);

    // INSERTAR (ANTI SQL INJECTION)
    $sql = "INSERT INTO usuarios (nombre, correo, password)
            VALUES (:nombre, :correo, :password)";

    $stmt = $pdo->prepare($sql);
    $stmt->execute([
        ":nombre" => $nombre,
        ":correo" => $correo,
        ":password" => $passwordHash
    ]);

    echo " Usuario registrado correctamente";
}
