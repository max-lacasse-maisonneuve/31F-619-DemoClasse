<?php
try {//Afficher les erreurs
    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);

    $host = "localhost";
    $port = "8889";
    $dbname = "to-do-list";
    $username = "root";
    $password = "root";

    //Connexion
    $pdoConnexion = new PDO("mysql:host=$host;dbname=$dbname;port=$port", $username, $password);

    //Requête à la base de données
    $id = $_GET["id"];
    $sql = "SELECT * FROM taches WHERE id = :id";
    $query = $pdoConnexion->prepare($sql);
    $query->execute(
        array(
            ":id" => $id
        )
    );
    $taches = $query->fetchAll(PDO::FETCH_ASSOC);

    //Retourne la réponse
    header("Content-Type: application/json");
    http_response_code(200);
    echo json_encode($taches);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(["message" => $e->getMessage()]);
}