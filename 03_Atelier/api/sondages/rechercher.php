<?php
try {//Afficher les erreurs
    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);

    $host = "localhost";
    $port = "3306";
    $dbname = "satisfactionapp";
    $username = "root";
    $password = "root";

    //Connexion
    $pdoConnexion = new PDO("mysql:host=$host;dbname=$dbname;port=$port", $username, $password);

    //Requête à la base de données
    $sql = "SELECT * FROM sondages";
    $query = $pdoConnexion->query($sql);
    $taches = $query->fetchAll(PDO::FETCH_ASSOC);

    //Retourne la réponse
    header("Content-Type: application/json");
    http_response_code(200);
    echo json_encode($taches);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(["message" => $e->getMessage()]);
}