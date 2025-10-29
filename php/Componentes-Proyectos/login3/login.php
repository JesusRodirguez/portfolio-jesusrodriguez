<?php
require_once "db.php";

if($_SERVER["REQUEST_METHOD"] === 'POST'
&& isset ($_POST['nom_usario']) 
&& isset ($_POST['contra_usu'])){

    $nom_usario = ($_POST['nom_usario']);
    $contra_usu = ($_POST['contra_usu']);

    $sql("SELECT users FROM Contraseña WHERE Nom_usuario :? ");
    $consulta=$conect->prepare($sql);
    $consulta->bind_param('s',$nom_usario);
    $consulta->execute();
    $resultado->get_result($consulta);
    if($resultado->num_rows===1){
        $row = $resultado->fetch_assoc();
        $contraseña_bd = $row['Contraseña'];
        if($contraseña_bd===$contra_usu){
            echo "Bienvenido $nom_usario";
        }
        else{
            echo "Contraseña incorrecta";
        }
    }
    else{
        echo "El usuario no existe o La clave es incorrecta";
    }
}
else{
    header("Location:index.html");
}
$conect->close();
$sql->close();
?>