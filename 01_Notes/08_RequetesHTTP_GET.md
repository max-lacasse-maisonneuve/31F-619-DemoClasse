# Requête HTTP - GET avec Fetch

## Introduction

Les requêtes HTTP sont utilisées pour communiquer avec des serveurs web. Elles permettent d'envoyer des données et de recevoir des réponses. Il existe plusieurs méthodes pour envoyer des requêtes HTTP, dont la méthode GET. _Nous verrons au cours 13 comment utiliser la méthode POST._

Vous avez déjà utilisé la méthode GET pour récupérer des ressources à partir d'une URL. Lorsqu'on clique sur un lien hypertexte ou qu'on soumet un formulaire, une requête GET est envoyée au serveur pour récupérer la ressource demandée.

Le serveur renvoie ensuite la ressource demandée au client, qui l'affiche dans le navigateur.

## Parties d'une requête HTTP

Une requête HTTP est composée de plusieurs parties :

-   **Méthode** : La méthode GET est utilisée par défaut pour récupérer des ressources à partir d'une URL.
-   **URL** : L'URL de la ressource à récupérer.
-   **En-têtes** : Les en-têtes `(headers) `de la requête contiennent des informations supplémentaires sur la requête, comme le type de contenu accepté par le client.
-   **Corps** : Le corps `(body)` de la requête contient les données envoyées au serveur. La méthode GET n'a pas de corps de requête.

Une fois traitée par le serveur, la requête renvoie une réponse au client. La réponse contient:

-   **Code de statut** : Le code de statut de la réponse indique si la requête a été traitée avec succès ou s'il y a eu une erreur.
-   **En-têtes** : Les en-têtes de la réponse contiennent des informations supplémentaires sur la réponse, comme le type de contenu renvoyé par le serveur.
-   **Corps** : Le corps de la réponse contient le contenu de la ressource demandée.

## Différence entre GET et POST

La méthode GET est utilisée pour récupérer des ressources à partir d'une URL, tandis que la méthode POST est utilisée pour envoyer des données au serveur. Les paramètres de la méthode GET sont envoyés dans l'URL, tandis que les paramètres de la méthode POST sont envoyés dans le corps de la requête.

Généralement, les requêtes GET sont utilisées pour récupérer des données avec des paramètres non sensibles, tandis que les requêtes POST sont utilisées pour envoyer des données sensibles, comme des informations de connexion.

## Paramètres de requête (query parameters)

Les paramètres de requête `(query parameters)` ou `(query string)` sont utilisés pour envoyer des données à un serveur via une URL. Les paramètres de requête sont ajoutés à l'URL après le point d'interrogation `?` et séparés par des `&`.

Les paramètres de requête sont utilisés pour filtrer, trier ou paginer les données renvoyées par le serveur. Le serveur peut utiliser ces paramètres pour générer une réponse personnalisée en fonction des paramètres fournis.

Exemple d'URL avec des paramètres de requête :

```
https://api.example.com/users?name=Maxime&age=40
```

## API Externe

Une API externe est une interface de programmation qui permet à un programme d'interagir avec un service externe. Les API externes sont utilisées pour récupérer des données à partir de services tiers, comme des services de géolocalisation, de météo ou de traduction.

Nous récuperons des données à partir de l'API OpenWeatherMap. OpenWeatherMap est un service de prévisions météorologiques qui fournit des données météorologiques en temps réel pour des milliers de villes à travers le monde.

Nous utiliserons l'API OpenWeatherMap pour récupérer les données météorologiques d'une ville donnée. Pour accéder à l'API OpenWeatherMap, vous devez vous inscrire sur le site et obtenir une clé d'API.

### Clé d'API

La majorité des services de données en ligne nécessitent une clé d'API pour accéder à leurs services. La clé d'API est un identifiant unique qui permet au service de suivre l'utilisation de son API par les développeurs. Cela permet de limiter l'accès aux données et de contrôler l'utilisation de l'API.

Pour obtenir une clé d'API OpenWeatherMap, vous devez vous inscrire sur le site et créer un compte. Une fois votre compte créé, vous pouvez générer une clé d'API dans la section "API keys" de votre compte. Il est possible aussi que la clé d'API doivent être ajoutée aux entêtes de la requête. Nous verrons cela dans le cours 13.

### Récupération des données météorologiques

Pour récupérer les données météorologiques d'une ville donnée, vous devez envoyer une requête GET à l'API OpenWeatherMap en spécifiant la ville et la clé d'API dans l'URL de la requête. Vous devez évidemment remplacez `YOUR_API_KEY` par votre propre clé d'API.

```js
//Exemple de requête Fetch
//On indique la route à laquelle on veut envoyer la requête
fetch("https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=YOUR_API_KEY")
    .then(function (response) {
        //Traiter la réponse de la requête
        return response.json();
    })
    .then(function (data) {
        //Effectuer des opérations sur les données renvoyées
        // Afficher les données renvoyées
        console.log(data);
    })
    .catch(function (error) {
        //Gérer les erreurs
        console.error(error);
    });
```

Pour plus de détails sur l'API OpenWeatherMap, vous pouvez consulter la [documentation officielle](https://openweathermap.org/current).
