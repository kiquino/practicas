<?php
$carrier = $_POST['N_carrier'];
$mes = 1;

    
try {
   $conn = new PDO('mysql:host=localhost; dbname=mla', 'root', '');
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $conn ->exec("SET CHARACTER SET utf8");
    $consul_carrier = "SELECT * FROM carrier LEFT JOIN costos ON carrier.CarrierID = costos.CarrierID WHERE carrier.CarrierID = ?";
    
    $consul_cde = "SELECT * FROM c_d_e WHERE Zona = ?";

   $result = $conn -> prepare($consul_carrier);
  

    
   $result->execute(array("$carrier"));

  
 
 
   
   
  
   
   while ($registro = $result->fetch(PDO::FETCH_ASSOC)){
    $zona = $registro['Zona'];
    $result2 = $conn -> prepare($consul_cde);
    $result2->execute(array("$zona"));
    $cantidadEnvio = $result2->fetch(PDO::FETCH_ASSOC)['Cantidad_De_Envios'];
    echo $cantidadEnvio . " Cantidad de Envios para la zona: " . $registro['Zona'] ."<br>";
    $suma = $registro['Costo'] * $cantidadEnvio;
   
    echo '$'.$registro['Costo'] . " x ".$cantidadEnvio. ' = {$' .$suma. " Es el total en el mes }<br> <hr>";
   

   }
   
   
  
   
  

} catch (Exception $e) {

    die("Error: ". $e ->getMessage());
}

?>