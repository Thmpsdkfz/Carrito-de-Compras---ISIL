<?php
$server = "localhost";
$username = "root";
$password = "";
$database = "empresa";

header('Access-Control-Allow-Origin: *');

$cn = mysqli_connect($server, $username, $password, $database) or die("No se ha pododido establecer conexión");

//conectar a la base de datos
$rs = mysqli_query($cn,"select * from productoscarrito order by idcarrito");

while($row = mysqli_fetch_assoc($rs)){
    $res[] = array_map("utf8_encode",$row);
    //cada fila consultada se coloca dentro de un arreglo
}

echo json_encode($res);//devuelve el arreglo en formato json
mysqli_close($cn);

?>