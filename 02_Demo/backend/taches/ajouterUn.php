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
    $data = json_decode(file_get_contents("php://input"));

    $nom = $data->nom;
    $date = $data->date;
    $description = $data->description;
    $estTerminee = $data->estTerminee;

    //Prepared statement
    $sql = "INSERT INTO taches (nom, date, description, estTerminee) VALUES (:nom, :date, :description, :estTerminee)";
    $query = $pdoConnexion->prepare($sql);
    $query->execute(
        array(
            ":nom" => $nom,
            ":date" => $date,
            ":description" => $description,
            ":estTerminee" => $estTerminee,
        )
    );

    // Récupérer l'id de l'élément ajouté
    $id = $pdoConnexion->lastInsertId();
    $message = ["message" => "L'élément a été ajouté avec succès", "id" => $id];

    //Retourne la réponse
    header("Content-Type: application/json");
    http_response_code(200);
    echo json_encode($message);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(["message" => $e->getMessage()]);
}