# Patrons de conception - Facade

Le patron de conception `Facade` est un patron de conception structurel qui permet de simplifier l'interface d'un système complexe en fournissant une interface unifiée pour un ensemble d'interfaces existantes. Ce patron de conception permet de cacher la complexité du système et de fournir une interface plus simple et plus facile à utiliser. Voyez cela comme une télécommande pour un système complexe qui relie plusieurs appareils.

En JavaScript, on peut utiliser une classe pour créer une interface unifiée pour un ensemble de classes existantes. Les méthodes de la classe façade appellent les méthodes des classes existantes pour fournir une interface unifiée pour le système. Elles devraient être simples et faciles à utiliser.

Ex:
Pour créer un lecteurVidéo, on pourrait créer une classe `LecteurVideo` qui utilise les classes `Lecteur`, `BarreDeProgression`, `ListeVideo` et `Controles`pour fournir une interface unifiée pour le lecteur vidéo. Les classes ici sont fictives, elles n'appartiennent pas à JavaScript natif et servent à illustrer le concept de façade.

```js
class LecteurVideo {
    constructor() {
        this.lecteur = new Lecteur();
        this.listeVideo = new ListeVideo();
        this.barreDeProgression = new BarreDeProgression();
        this.controles = new Controles();
    }

    jouer() {
        let elementVideo = this.listeVideo.getElement(this.lecteur.index);
        this.lecteur.jouer(elementVideo);
        this.barreDeProgression.afficher();
        this.controles.afficher();
    }

    mettreEnPause() {
        this.lecteur.mettreEnPause();
        this.barreDeProgression.cacher();
        this.controles.cacher();
    }
}
```
