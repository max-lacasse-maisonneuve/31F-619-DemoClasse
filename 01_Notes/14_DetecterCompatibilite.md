# Détecter la compatibilité des fonctionnalités d'un navigateur

Pour utiliser certaines fonctionnalités, il est nécessaire de vérifier quel est le navigateur utilisé par l'utilisateur. Par exemple, pour la reconnaissance vocale, on peut vérifier si le navigateur supporte l'API Web Speech ou pour accéder la batterie, on peut vérifier si le navigateur supporte l'API Battery Status.

Chaque navigateur a ses propres fonctionnalités et il est important de vérifier si ces fonctionnalités sont supportées par le navigateur avant de les utiliser.

## User Agent

Pour vérifier le navigateur, on peut utiliser la propriété `navigator.userAgent`. Cette propriété contient une chaîne de caractères qui identifie le navigateur, le moteur de rendu et la version du navigateur. Voici un exemple de code pour afficher le `User Agent` dans la console :

```javascript
console.log(navigator.userAgent);
```

En fonction du `User Agent`, on peut déterminer quelles fonctionnalités sont supportées par le navigateur et adapter le comportement de l'application en conséquence.

Les différents navigateurs sont identifiés par des chaînes spécifiques dans le `User Agent`. Par exemple, voici quelques exemples de chaînes pour différents navigateurs :

-   Chrome : `Chrome/83.0.4103.116`
-   Firefox : `Firefox/77.0`
-   Safari : `Version/13.1.1 Safari/605.1.15`
-   Edge : `Edg/83.0.478.58`
-   Opera : `OPR/69.0.3686.77`

### Fiabilité du User Agent

Il est important de noter que le `User Agent` peut être modifié par l'utilisateur ou par des extensions de navigateur. Par conséquent, il n'est pas toujours fiable pour déterminer les fonctionnalités supportées par le navigateur. Il est recommandé d'utiliser des méthodes de détection de fonctionnalités spécifiques pour vérifier si une fonctionnalité est supportée par le navigateur.

### Librairie Detect.js

Pour simplifier la détection des fonctionnalités supportées par le navigateur, il existe des librairies comme `Detect.js` qui permettent de vérifier si une fonctionnalité est supportée par le navigateur. Ces librairies utilisent des méthodes de détection de fonctionnalités plus fiables que le `User Agent` pour déterminer les fonctionnalités supportées par le navigateur.

[https://github.com/darcyclarke/Detect.js](https://github.com/darcyclarke/Detect.js)

## Tester si le navigateur supporte une fonctionnalité

La majorité des fonctionnalités du navigateur sont des propriétés de l'objet `window`. Pour tester si une fonctionnalité est supportée par le navigateur, on peut vérifier si la propriété correspondante est définie dans l'objet `window`. Par exemple, pour vérifier si le navigateur supporte l'API Web Speech pour la reconnaissance vocale, on peut utiliser le code suivant :

```javascript
if ("webkitSpeechRecognition" in window || "SpeechRecognition" in window) {
    // Le navigateur supporte l'API Web Speech
    new VoiceTask();
} else {
    console.log("La reconnaissance vocale n'est pas disponible sur votre navigateur");
    // On cache le bouton de reconnaissance vocale
    document.querySelector("[data-voice]").classList.add("invisible");
}
```

Même chose pour vérifier si le navigateur supporte l'API Battery Status pour accéder à l'état de la batterie :

```javascript
if ("getBattery" in navigator) {
    // Le navigateur supporte l'API Battery Status
    navigator.getBattery().then(function (battery) {
        console.log("Niveau de batterie : " + battery.level * 100 + "%");
    });
} else {
    console.log("L'API Battery Status n'est pas disponible sur votre navigateur");
}
```
