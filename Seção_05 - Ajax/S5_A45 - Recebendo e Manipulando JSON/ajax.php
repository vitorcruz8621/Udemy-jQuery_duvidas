<?php
$p = $_POST; //passa todos os elementos enviados via POST(nome:NOME&senha:SENHA) para $p
echo json_encode($p);
// echo $p; <-- não funciona desse jeito
?>