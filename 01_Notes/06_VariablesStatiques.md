# Variables statiques

Les variables statiques sont des variables qui appartiennent à la classe plutôt qu'à une instance de la classe. Cela signifie que chaque instance de la classe partage exactement la même variable statique.

Cela est utile pour stocker des valeurs qui sont communes à toutes les instances de la classe, comme des constantes ou des compteurs. En changeant la valeur de la variable statique, toutes les instances de la classe auront accès à la nouvelle valeur.

## Déclaration

Pour déclarer une variable statique, on utilise le mot-clé `static` suivi du nom de la variable. On peut initialiser la variable statique lors de sa déclaration ou dans le constructeur de la classe.

Pour utiliser une variable statique, on indique le nom de la classe suivi du nom de la variable statique.

```js
class VerificateurConnexion {
    static nbPersonnesConnectees = 0;

    static ajouterPersonneConnectee() {
        VerificateurConnexion.nbPersonnesConnectees++;
    }

    static supprimerPersonneConnectee() {
        VerificateurConnexion.nbPersonnesConnectees--;
    }
}

class gestionLocalStorage {
    static ajouterAuLocalStorage(cle, valeur) {
        localStorage.setItem(cle, JSON.stringify(valeur));
    }

    static recupererDuLocalStorage(cle) {
        return JSON.parse(localStorage.getItem(cle));
    }

    static supprimerDuLocalStorage(cle) {
        localStorage.removeItem(cle);
    }
}
```

## Utilisation

Pour accéder à une variable statique, on utilise le nom de la classe suivi du nom de la variable statique. Nous n'avons pas besoin d'instancier la classe pour accéder à la variable statique. C'est le principal avantage des variables statiques. Cependant, il est important de noter que les variables statiques ne sont pas accessibles depuis les instances de la classe et la variable statique ne peut pas accéder aux propriétés de l'instance.

```js
VerificateurConnexion.ajouterPersonneConnectee();
console.log(VerificateurConnexion.nbPersonnesConnectees); // 1

VerificateurConnexion.supprimerPersonneConnectee();
console.log(VerificateurConnexion.nbPersonnesConnectees); // 0

gestionLocalStorage.ajouterAuLocalStorage("nom", "Alice");
console.log(gestionLocalStorage.recupererDuLocalStorage("nom")); // Alice
```

## Patron de conception - Singleton

Souvent considéré comme un anti-patron, le Singleton est un patron de conception qui garantit qu'une classe n'a qu'une seule instance et fournit un point d'accès global à cette instance.

Cela est particulièrement utile pour les classes qui gèrent d'autres classes comme le gestionnaire de configuration, le gestionnaire de connexion à la base de données, le fichier principal de l'application, etc.

Pour implémenter un Singleton, on utilise une variable statique privée pour stocker l'instance unique de la classe et une méthode statique pour récupérer cette instance. Cela permet d'accéder à l'instance unique de la classe partout dans l'application et les autres classes.

```js
class App {
    static #instance = null;

    constructor() {
        // Si une instance de la classe existe déjà, on renvoie cette instance au lieu d'en créer une nouvelle.
        if (App.#instance !== null) {
            return App.#instance;
        }

        // On enregistre cette instance dans la variable statique.
        App.#instance = this;
    }

    static get instance() {
        // Si aucune instance de la classe n'existe, on en crée une et on la stocke dans la variable statique.
        if (!App.#instance) {
            new App();
        }

        return App.#instance;
    }
}
```
