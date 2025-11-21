<?php
session_start();
require_once 'cuentas.php';


if (!isset($_SESSION['corriente'])) $_SESSION['corriente'] = serialize(new CuentaCorriente(200, 300));
if (!isset($_SESSION['ahorro'])) $_SESSION['ahorro'] = serialize(new CuentaAhorro(500, 0.05));

$corriente = unserialize($_SESSION['corriente']);
$ahorro    = unserialize($_SESSION['ahorro']);
$cajero    = new Cajero();

// Variables de control de flujo
$estado = $_SESSION['estado'] ?? 'inicio'; // inicio, seleccion_accion, monto, recibo
$cuentaSeleccionada = $_SESSION['cuentaSeleccionada'] ?? '';
$accionSeleccionada = $_SESSION['accionSeleccionada'] ?? '';
$mensaje = "";

// Procesamos los botones
if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    // Reiniciar flujo
    if (isset($_POST['reiniciar'])) {
        session_destroy();
        header("Location: ".$_SERVER['PHP_SELF']);
        exit;
    }

    // Elegir cuenta
    if (isset($_POST['cuenta'])) {
        $cuentaSeleccionada = $_POST['cuenta'];
        $estado = 'seleccion_accion';
    }

    // Elegir acción
    if (isset($_POST['accionSeleccionada'])) {
        $accionSeleccionada = $_POST['accionSeleccionada'];
        $cuentaObj = ($cuentaSeleccionada === 'corriente') ? $corriente : $ahorro;

        if ($accionSeleccionada === 'saldo') {
            $_SESSION['recibo'] = [
                'cuenta' => $cuentaSeleccionada,
                'accion' => 'Mirar Saldo',
                'monto' => 0,
                'saldo' => $cuentaObj->getSaldo()
            ];
            $estado = 'recibo';
        } else {
            $estado = 'monto';
        }
    }

    // Procesar monto
    if (isset($_POST['monto']) && $estado === 'monto') {
        $monto = floatval($_POST['monto']);
        try {
            $cuentaObj = ($cuentaSeleccionada === 'corriente') ? $corriente : $ahorro;
            if ($accionSeleccionada === 'depositar') $cajero->operar($cuentaObj, 'depositar', $monto);
            if ($accionSeleccionada === 'retirar') $cajero->operar($cuentaObj, 'retirar', $monto);

            $_SESSION['recibo'] = [
                'cuenta' => $cuentaSeleccionada,
                'accion' => $accionSeleccionada,
                'monto' => $monto,
                'saldo' => $cuentaObj->getSaldo()
            ];
        } catch (Exception $e) {
            $_SESSION['recibo'] = ['error' => $e->getMessage()];
        }
        $estado = 'recibo';
    }
}


$_SESSION['estado'] = $estado;
$_SESSION['cuentaSeleccionada'] = $cuentaSeleccionada;
$_SESSION['accionSeleccionada'] = $accionSeleccionada;
$_SESSION['corriente'] = serialize($corriente);
$_SESSION['ahorro'] = serialize($ahorro);
?>

<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<title>Cajero ATM POO</title>
<link rel="stylesheet" href="./style.css">
</head>
<body>
<div class="cajero-container">
    <h1>ATM POO</h1>
    <div class="pantalla">
        <?php
        
        if (isset($_SESSION['recibo']['error'])) {
            echo "Error: " . $_SESSION['recibo']['error'];
        } else {
            if ($estado === 'inicio') echo "Seleccione tipo de cuenta:";
            if ($estado === 'seleccion_accion') echo "Cuenta $cuentaSeleccionada seleccionada.\nSeleccione acción:";
            if ($estado === 'monto') echo "Acción: $accionSeleccionada\nSeleccione monto o ingrese uno personalizado:";
            if ($estado === 'recibo' && isset($_SESSION['recibo'])) {
                echo "Recibo:\n";
                echo "Cuenta: " . $_SESSION['recibo']['cuenta'] . "\n";
                echo "Acción: " . $_SESSION['recibo']['accion'] . "\n";
                echo "Monto: $" . $_SESSION['recibo']['monto'] . "\n";
                echo "Saldo actual: $" . $_SESSION['recibo']['saldo'] . "\n";
            }
        }
        ?>
    </div>

    <form method="post">
    <?php if ($estado === 'inicio'): ?>
        <button class="boton" name="cuenta" value="corriente">Cuenta Corriente</button>
        <button class="boton" name="cuenta" value="ahorro">Cuenta Ahorro</button>
    <?php elseif ($estado === 'seleccion_accion'): ?>
        <button class="boton" name="accionSeleccionada" value="depositar">Depositar</button>
        <button class="boton" name="accionSeleccionada" value="retirar">Retirar</button>
        <button class="boton" name="accionSeleccionada" value="saldo">Mirar Saldo</button>
    <?php elseif ($estado === 'monto'): ?>
        <button class="boton" name="monto" value="50">$50</button>
        <button class="boton" name="monto" value="100">$100</button>
        <br><br>
        Ingrese monto personalizado: <br>
        <input type="number" name="monto" placeholder="Monto">
        <br><br>
        <button class="boton" type="submit">Continuar</button>
    <?php elseif ($estado === 'recibo'): ?>
        <button class="boton" name="reiniciar" value="1">Nueva Operación</button>
    <?php endif; ?>
    </form>
</div>
<script>
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('formMonto');
    const input = document.getElementById('inputMonto');

    form.addEventListener('submit', (e) => {
        const valor = input.value.trim();

        // Validaciones
        if (valor === "") {
            alert("Por favor, ingrese un monto.");
            e.preventDefault();
            return;
        }
        if (isNaN(valor)) {
            alert("El valor ingresado no es un número válido.");
            e.preventDefault();
            return;
        }
        if (parseFloat(valor) <= 0) {
            alert("El monto debe ser mayor a cero.");
            e.preventDefault();
            return;
        }
    });
});
</script>
</body>
</html>
