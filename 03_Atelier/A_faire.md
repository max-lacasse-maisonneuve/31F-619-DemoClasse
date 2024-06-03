# Exercice 2 - Instruments musicaux

## Consignes

L'objectif est de créer une fonction constructeur `Instrument` qui possède les attributs suivants : name, audioSrc, imageSrc.

Lors de la création de la fonction constructeur avec New, l'objet doit injecter un bouton sur la page et lui ajouter un écouteur d'événement.

Dans la fonction init, générer une instance pour chaque instrument dans le dossier Audio. Vous avez une image correspondant à chaque instrument dans le dossier Images.

Au clic sur chaque image, l'audio correspondant doit être joué.

Toutes les méthodes servant à injecter et à jouer l'instrument doivent être dans le prototype de la fonction constructeur.

Un exemple du code à injecter à été fournis pour que le CSS soit correctement appliqué.

Pour plus d'informations sur l'objet AudioHTMLElement :

-   [Élément HTML audio](https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement/Audio)
