# Préparation à la mise en ligne d'une application

Pour mettre en ligne, vous aurez besoin d'un service d'hébergement web. Il existe de nombreux services d'hébergement web gratuits et payants qui vous permettent de mettre en ligne votre application web.

Voici une liste de choses à prendre en compte lors du choix d'un service d'hébergement web :

-   **Espace disque** : Assurez-vous que l'espace disque fourni par le service d'hébergement est suffisant pour votre application. Certains services d'hébergement offrent un espace disque limité, tandis que d'autres offrent un espace disque illimité.
-   **Serveur Php** et sa version : Assurez-vous que le service d'hébergement web prend en charge PHP et la version de PHP dont votre application a besoin. (Si vous en avez besoin)
-   **Base de données** : Si votre application nécessite une base de données, assurez-vous que le service d'hébergement web prend en charge la base de données dont vous avez besoin (MySQL, PostgreSQL, etc.). Certains services d'hébergement offrent des bases de données gratuites, tandis que d'autres facturent des frais supplémentaires pour les bases de données.
-   **Trafic mensuel** : Certains services d'hébergement web limitent le trafic mensuel, ce qui signifie que votre application peut être mise hors ligne si elle dépasse la limite

## Options pour démarrer

Voici quelques-uns des services d'hébergement web les plus populaires :

-   [Github Pages](https://pages.github.com/): Un service d'hébergement web gratuit fourni par GitHub qui vous permet de mettre en ligne des sites web statiques. Il prend en charge les sites web statiques construits avec des technologies comme HTML, CSS et JavaScript mais ne prend pas en charge les applications web dynamiques avec Php, Node.js, etc. Utile pour les portfolio en design/front-end.

-   [PlanetHoster - World lite](https://www.planethoster.com/fr/Hebergement-web-gratuit) : Un service d'hébergement web gratuit qui vous permet de mettre en ligne des sites web dynamiques construits avec Php, etc. Il offre un espace disque illimité, un trafic mensuel illimité et une base de données MySQL gratuite. Il est idéal pour les prototypes et les petites applications web. 

-   [InfinityFree](https://infinityfree.net/) : Un service d'hébergement web gratuit qui vous permet de mettre en ligne des sites web dynamiques construits avec Php, etc. Il offre un espace disque illimité, un trafic mensuel illimité et une base de données MySQL gratuite. Il est idéal pour les prototypes et les petites applications web.

-   [Render](https://render.com): Un service d'hébergement web gratuit et payant qui prend en charge les applications web dynamiques construites avec Node.js, etc. Il offre un espace disque limité, un trafic mensuel limité et des bases de données gratuites. Il est idéal pour les applications web en production. Parfait pour simuler un environnement de production en intégration continue pour un projet Node.js.

## Préparation à la mise en ligne

1. Nettoyez votre code : Assurez-vous que votre code est propre et bien organisé avant de le mettre en ligne. Supprimez tout code inutile, corrigez les erreurs de syntaxe et assurez-vous que votre code est bien commenté. Mettez en commentaire les `console.log()` et autres `alert()` qui ne sont plus utiles.

2. Testez votre application : Avant de mettre en ligne votre application, assurez-vous de la tester sur différents navigateurs et appareils pour vous assurer qu'elle fonctionne correctement. Corrigez les erreurs et les bogues que vous trouvez pendant les tests.

3. Optimisez votre application : Assurez-vous que votre application est optimisée pour les performances avant de la mettre en ligne. Réduisez la taille des images, minifiez les fichiers CSS et JavaScript, et utilisez des outils comme Lighthouse pour améliorer les performances de votre application.

4. Créez un fichier `.env` : Si votre application utilise des variables d'environnement, créez un fichier `.env` pour stocker ces variables. Assurez-vous de ne pas inclure ce fichier dans votre dépôt Git pour des raisons de sécurité. Chaque service utilise les variables d'environnement de manière différente, assurez-vous de bien lire la documentation du service que vous utilisez.

5. Configurez votre base de données : Si votre application utilise une base de données, assurez-vous de configurer correctement la base de données sur le service d'hébergement web que vous utilisez. Assurez-vous que les informations de connexion à la base de données sont correctes et que la base de données est accessible depuis votre application.

6. Connectez-vous via FTP (avec un outil de connexion comme WinScp, filezilla ou cyberduck) ou SSH (en ligne de commande) : Pour mettre en ligne votre application, vous devrez vous connecter au serveur d'hébergement web via FTP ou SSH. Assurez-vous d'avoir les informations de connexion nécessaires (nom d'utilisateur, mot de passe, adresse du serveur, etc.) pour vous connecter au serveur.

7. Mettez en ligne votre application : Une fois que vous êtes connecté au serveur d'hébergement web, vous pouvez mettre en ligne votre application en transférant les fichiers de votre application

8. Testez votre application en ligne : Une fois que votre application est en ligne, assurez-vous de la tester pour vous assurer qu'elle fonctionne correctement. Corrigez les erreurs et les bogues que vous trouvez pendant les tests.

9. Configurez votre nom de domaine : Si vous avez un nom de domaine personnalisé, assurez-vous de le configurer correctement pour qu'il pointe vers votre application en ligne. Vous devrez configurer les enregistrements DNS de votre nom de domaine pour qu'il pointe vers l'adresse IP de votre serveur d'hébergement web.
