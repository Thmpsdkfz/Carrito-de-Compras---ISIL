<?php
$server = "localhost";
$username = "root";
$password = "";
$database = "empresa";

header('Access-Control-Allow-Origin: *');

$cn = mysqli_connect($server, $username, $password, $database) or die("No se ha pododido establecer conexión");
//conectar a la base de datos

$cod = $_POST["codigoProducto"];

$rs = mysqli_query($cn,"delete from productoscarrito where productoscarrito.idcarrito =".$cod);

echo mysqli_insert_id($cn);

mysqli_close($cn);
?>
