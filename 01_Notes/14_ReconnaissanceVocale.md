# Reconnaissance vocale (Speech Recognition)

En JavaScript, il est possible de faire de la reconnaissance vocale. Pour cela, il faut utiliser l'API Web Speech. Cette API permet de convertir la parole en texte et vice versa.

## Reconnaissance vocale

Pour utiliser la reconnaissance vocale, il faut d'abord vérifier si le navigateur supporte l'API Web Speech. Pour cela, on peut utiliser le code suivant :

```javascript
if ("webkitSpeechRecognition" in window || "SpeechRecognition" in window) {
    new VoiceTask();
} else {
    console.log("La reconnaissance vocale n'est pas disponible sur votre navigateur");
    //On cache le bouton de reconnaissance vocale
    document.querySelector("[data-voice]").classList.add("invisible");
}
```

Ensuite, on peut créer un objet `SpeechRecognition` pour faire de la reconnaissance vocale.

Pour déclencher l'objet `SpeechRecognition`, il faut d'abord le configurer avec la langue et une fonction de rappel pour récupérer le résultat. Ensuite, on peut démarrer la reconnaissance vocale sur demande avec un clic sur un bouton par exemple et la méthode start.

Il faut finalement traiter le résultat obtenu dans la fonction de rappel. Le résultat est un tableau de résultats, chaque résultat contient un tableau de transcriptions. On peut récupérer la transcription avec `event.results[0][0].transcript`.

### Objet `SpeechRecognition`

L'objet `SpeechRecognition` permet de faire de la reconnaissance vocale. Voici quelques propriétés et méthodes de cet objet :

-   `lang` : la langue utilisée pour la reconnaissance vocale.
-   `start()` : démarre la reconnaissance vocale.
-   `stop()` : arrête la reconnaissance vocale.
-   `addEventListener("result", callback)` : ajoute un écouteur d'événement pour récupérer les résultats de la reconnaissance vocale.
-   `addEventListener("error", callback)` : ajoute un écouteur d'événement pour gérer les erreurs de reconnaissance vocale.

## Exemple de code

```javascript
class VoiceTask {
    constructor(declencheurHTML, conteneurResultatHTML) {
        this.declencheur = declencheurHTML;
        this.conteneurResultat = conteneurResultatHTML;

        this.recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
        this.recognition.lang = "fr-FR";
        this.button = document.querySelector("#voice-button");

        this.recognition.addEventListener("result", this.onResult.bind(this));
        this.recognition.addEventListener("error", this.onError.bind(this));

        this.declencheur.addEventListener("click", this.start.bind(this));
    }

    start() {
        this.recognition.start();
    }

    onResult(event) {
        const result = event.results[0][0].transcript;

        //On affiche le résultat dans la console
        this.conteneurResultat.textContent = result;
    }

    onError(event) {
        console.error("Erreur de reconnaissance vocale : ", event.error);
    }
}
```
