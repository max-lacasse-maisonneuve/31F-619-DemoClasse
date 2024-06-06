# Exercice 1 - Liste vidéo

## Démarrage

Créer un dépôt Github à partir du lien suivant: https://classroom.github.com/a/PGMPItr4.

## Tâches

Lors du design d'un site de ressources Web, vous avez la tâche de créer une liste de visionnement Youtube en utilisant Javascript.

Normalement, nous utiliserons les données depuis un tableau d’objets littéraux statique dans le fichier youTubeVideos.js.

L’exercice consiste à injecter un composant affichant le titre, la chaîne et la vidéo [via l’API Share > Embed de YouTube](https://developers.google.com/youtube/player_parameters?hl=fr#Manual_IFrame_Embeds) à partir de ce tableau.

Vous avez une maquette pour vous aider.

_Vous ne devez pas modifier le code HTML (et CSS) fourni, sauf pour ajouter vos fichiers JS_

### Exigences

-   Pour chaque objet du tableau youTubeVideos, vous devez faire l’instance de la classe **YouTubeVideo** qui s’acquitte de la création du composant Web puis son injection à l’intérieur du parent identifié par l’attribut **data-youtube-videos**.

-   Vous devez utiliser les classes pour cet exercice.

## Étapes

1.  Analyser la page HTML
2.  Analyser le fichier tableauVideosYoutube.js
3.  Créer une classe de VideoYoutube comprenant un constructeur avec les propriétés (infos de la video et le conteneur parent) et une méthode pour injecter le code HTML.
4.  Pour chaque élément du tableau youTubeVideos, instancier la classe dans le fichier principal et injecter le code HTML dans la page Web.
5.  Commentez votre code.

## Remise

Cet exercice est à remettre et compte pour 5% de la note finale. Vous devez remettre avant 18 juin à 23h59. Les travaux remis après cette date ne seront pas acceptés car nous reviendrons sur le sujet en classe.

Lorsque vous avez terminé l'exercice, faire un push de votre code sur votre dépôt GitHub avec un pull request.
