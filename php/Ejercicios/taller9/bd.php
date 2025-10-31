<?php
// nombramiento de la base de datos
$db ='productos';
$clave = "";
$usuario = "root";
$servidor = "localhost";

// conection con mysql
$conect = new mysqli($servidor, $usuario, $clave, $db);


// validación si se conecto bien
if ($conect->connect_error){
    die ("conection fallida");
}
else{
    echo "conection exitosa";
}
?>