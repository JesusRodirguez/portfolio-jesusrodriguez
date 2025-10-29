<?php

$db ='migthnigth';
$clave = "";
$usuario = "root";
$servidor = "localhost";

$conect = new mysqli($servidor, $usuario, $clave, $db);


if ($conect->connect_error){
    die ("conection fallida");
}
else{
    echo "conection exitosa";
}
?>