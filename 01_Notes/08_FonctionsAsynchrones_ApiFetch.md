# Fonctions asynchrones et API Fetch

## Principes de base des fonctions asynchrones

Les fonctions asynchrones sont des fonctions qui ne `bloquent pas l'exécution du programme` lorsqu'elles sont appelées. Elles sont utilisées pour effectuer des opérations qui prennent du temps, comme les appels réseau, les accès à la base de données, etc.

Dans la session précédente, nous avons vu la fonction setTimeout qui est une fonction asynchrone car elle ne bloque pas l'exécution du programme et permet de définir un délai avant d'exécuter une fonction.

Si nous n'utilisons pas de fonctions asynchrones pour les opérations qui prennent du temps, notre programme risque de se bloquer et de ne pas répondre aux interactions de l'utilisateur.

Cela implique que l'interface utilisateur ne sera pas réactive et que l'expérience utilisateur sera mauvaise, les éléments ne s'afficheraient pas correctement, les animations ne se dérouleraient pas correctement, etc.

## Fonction de rappel (Callback)

Les fonctions de rappel sont des fonctions qui sont passées en tant que paramètre à une autre fonction et qui sont exécutées lorsque la fonction principale a terminé son exécution. Cela permet de changer le comportement de la fonction principale en fonction des besoins de l'application. On appelle la fonction principale et on passe une fonction de rappel différente en fonction des besoins.

Dans l'exemple suivant, la fonction `operationAsynchrone` contient une opération asynchrone (setTimeout) qui appelle la fonction de rappel `apresAsynchrone` lorsque les opérations sont terminées. Les opérations asynchrones utilisent généralement des fonctions de rappel pour traiter les résultats des opérations.

```js
//Exemple de fonction de rappel
function operationAsynchrone(callback) {
    //Effectuer des opérations asynchrones
    setTimeout(function () {
        //Appeler la fonction de rappel
        callback();
    }, 1000);
}

function apresAsynchrone() {
    console.log("Après l'opération asynchrone");
}

//Appeler la fonction de rappel
operationAsynchrone(apresAsynchrone);
```

## Autres exemples de fonctions asynchrones

Les fonctions asynchrones sont également utilisées pour effectuer des opérations qui prennent du temps, comme l'accès à la base de données, la lecture de fichiers, etc.

```js
//Exemple de lecture de fichier
//On indique le chemin du fichier à lire
const file = document.querySelector("input[file]").files[0];
const reader = new FileReader(); // FileReader est une API JavaScript qui permet de lire des fichiers

//On indique le type de fichier à lire
reader.onload = function () {
    //Traiter le contenu du fichier
    //La fonction est asynchrone car elle ne bloque pas l'exécution du programme, l'exécution se poursuit après le chargement du fichier ici
    console.log(reader.result);
};
//On lit le fichier
reader.readAsText(file);
```

```js
//Exemple d'accès à la base de données
// La variable connection est fictive. Elle n'existe pas en JavaScript natif. Ce serait une instance d'une classe Connection qui représenterait une connexion à la base de données
connection.query("SELECT * FROM users", function (err, results) {
    if (err) {
        console.error(err);
    } else {
        console.log(results);
    }
});
```

## Requêtes HTTP asynchrones

Les requêtes HTTP sont la base du développement web moderne. Elles permettent de récupérer des données à partir d'un serveur et de les afficher dans une page web.

Les fonctions asynchrones sont utilisées pour effectuer des opérations qui prennent du temps, comme les appels réseau.

Depuis le début de la formation, vous avez envoyé des requêtes HTTP à (GET, POST) via un formulaire HTML ou via un lien hypertexte. La page devait être rechargée pour afficher les données renvoyées par le serveur.

Avec JavaScript, vous pouvez envoyer des requêtes HTTP sans recharger la page en utilisant l'API Fetch. L'API Fetch est une API JavaScript qui permet d'envoyer des requêtes HTTP asynchrones et de traiter les réponses.

### Syntaxe de base

Pour démarrer une requête Fetch, on utilise la fonction `fetch` en lui passant l'URL de la ressource à récupérer. La fonction `fetch` renvoie une promesse qui est résolue lorsque la requête est terminée.

Étapes pour effectuer une requête Fetch :

1. On écrit la fonction `fetch` en indiquant l'URL de la ressource à récupérer. La demande est envoyée au serveur et une promesse est renvoyée.

2. Ensuite, il faut chaîner un première méthode `then` pour traiter la réponse de la requête. La méthode `then` prend une fonction de rappel qui traite la réponse de la requête. Dans l'exemple ci-dessus, on utilise la méthode `json()` pour extraire les données de la réponse. On pourrait également utiliser les méthodes `text()`, `blob()`, `arrayBuffer()`, `formData()` pour traiter la réponse renvoyée par le serveur.

    **N'oubliez pas de retourner la réponse de la requête pour pouvoir l'utiliser dans la prochaine méthode `then`.**

3. Ensuite, on chaîne un deuxième `then` pour effectuer des opérations sur les données renvoyées. Dans l'exemple ci-dessus, on utilise la méthode `console.log` pour afficher les données renvoyées.

4. Enfin, on utilise la méthode `catch` pour gérer les erreurs qui peuvent survenir lors de la requête. Dans l'exemple ci-dessus, on utilise la méthode `console.error` pour afficher les erreurs.

_Par défaut, la fonction `fetch` envoie une requête GET. Pour envoyer une requête POST, PUT, DELETE, on peut passer un objet de configuration en deuxième paramètre (nous verrons cela au cours 13)_

```js
function init() {
    //Exemple de requête Fetch
    //On indique la route à laquelle on veut envoyer la requête
    fetch("https://api.example.com/data")
        .then(function (response) {
            //Traiter la réponse de la requête sous forme de JSON
            return response.json();
        })
        .then(function (data) {
            //Effectuer des opérations sur les données renvoyées
            //Appelez une fonction pour afficher les données renvoyées
            afficherDonnees(data);
        })
        .catch(function (error) {
            //Gérer les erreurs
            console.error(error);
        });
}

function afficherDonnees(data) {
    //...Logique pour afficher les données renvoyées
}
```

### Rétrocompatibilité avec XMLHttpRequest

À noter que précédemment, il était possible d'envoyer des requêtes HTTP avec l'objet XMLHttpRequest (aussi appelé requête Ajax), mais Fetch est plus simple à utiliser et plus puissant. L'avantage de XMLHttpRequest est qu'il est compatible avec les anciens navigateurs et il permet de suivre le progrès de la requête. Elle est toujours utilisée dans certains cas, mais Fetch est recommandée pour les nouvelles applications.

```js
//Exemple de requête XMLHttpRequest
//On crée une nouvelle instance de l'objet XMLHttpRequest
const xhr = new XMLHttpRequest();

//On indique la méthode et l'URL de la requête
xhr.open("GET", "https://api.example.com/data", true);

//On indique ce qu'il faut faire lorsque la requête est terminée
xhr.onload = function () {
    //Traiter la réponse de la requête
    if (xhr.status >= 200 && xhr.status < 300) {
        //Effectuer des opérations sur les données renvoyées
        console.log(JSON.parse(xhr.responseText));
    } else {
        //Gérer les erreurs
        console.error(xhr.statusText);
    }
};

//On envoie la requête
xhr.send();
```

## Ressources

[ColorCode - Requêtes asynchrones](https://www.youtube.com/watch?v=QSqc6MMS6Fk&list=PL1PqvM2UQiMoGNTaxFMSK2cih633lpFKP&index=11)
[ColorCode - Promessees](https://www.youtube.com/watch?v=TnhCX0KkPqs&list=PL1PqvM2UQiMoGNTaxFMSK2cih633lpFKP&index=12)
[ColorCode - API Fetch](https://www.youtube.com/watch?v=ubw2hdQIl4E&list=RDCMUCHa8J-xnRYOg5VuudfWpBgg&index=1)

[Promesses - Fireship](https://www.youtube.com/watch?v=RvYYCGs45L4)

[MDN - Fetch API](https://developer.mozilla.org/fr/docs/Web/API/Fetch_API)
[MDN - Promesses](https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Utiliser_les_promesses)
[MDN - Intro aux requêtes asynchrones](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing)
