

<?php 
$userID = $_POST['id'];
$siteID = $_POST['MLA'];
if ($userID == "" || $siteID == "") {
   echo "no se especificó id. <br>";
   echo "<a href='index-ejer1.php'>Volver</a>";
    die();
}
try {
    //code...

   $conn = new PDO('mysql:host=localhost; dbname=usuarios', 'root', '');
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $conn ->exec("SET CHARACTER SET utf8");

$sql = "SELECT * FROM usuarios WHERE seller_id = ? AND site_id = ?";
  $result = $conn -> prepare($sql);
  
    
   $result->execute(array($userID,$siteID));
$log = fopen("user_log[$userID].txt","wb");  
   while ($registro = $result->fetch(PDO::FETCH_ASSOC)){
  

$txt = "ID: ".$registro['item_id']. PHP_EOL ." Nombre: ".$registro['nombre']. PHP_EOL ."id de categoria: ".$registro['categoria_id']. PHP_EOL ."Categoría: ".$registro['categoria']. PHP_EOL ;
fwrite($log, $txt);






   }
   fclose($log);
   echo "archivo txt creado.<br>";
   echo "<a href='index-ejer1.php'>Volver</a>";
} catch (Exception $e) {
    die("Error: ". $e ->getMessage());
}

?>