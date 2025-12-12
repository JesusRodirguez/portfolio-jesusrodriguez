
<?php
$servidor = "localhost";
$clave = "";
$usuario = "root";
$base = "migthnigth";

$cont = new mysqli($servidor, $usuario, $clave, $base);

if ($cont->connect_error){
    die("Error de conexión: " . $cont->connect_error);
}
    else{
    echo "Conectado con éxito";
}

?>
