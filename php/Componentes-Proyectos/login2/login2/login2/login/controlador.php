<?php
require_once 'sql.php';
if(['REQUEST_METHOD']===['POST']){
    $nombre_usu = $_POST['nombre'];
    $contraseña = $_POST['contraseña'];

    $sql = ("SELECT Contraseña FROM users WHERE Nom_usuario = ? ");
    $consulta = $cont->prepare($sql);
    $consulta->bind_param('s',$nombre_usu);
    $consulta->execute();
    $resultado=$consulta->get_result();
    if($resultado->num_rows===1){
        $row=$resultado->fetch_assoc();
        $contraseña_bd = $row['Contraseña'];
    }
    if($contraseña===$contraseña_bd){
        echo "Bienvenido, ",$nombre_usu;
    }else{
        echo "Contraseña incorrecta";
    }

$cont ->close();
$consulta-> close();
}
// }else{
//     header('location:index.html');
//     exit;
// }
?>


