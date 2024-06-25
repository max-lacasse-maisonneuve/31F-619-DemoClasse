# Événements personnalisés

En JavaScript, on peut créer des événements personnalisés pour déclencher des actions spécifiques dans une application sans avoir à relier les classes entre elles.

Voyez cela comme un moyen de communication entre les différentes parties de votre application sans qu'elles aient à se connaître.

## Créer un événement personnalisé

Pour créer un événement personnalisé, on utilise la méthode `new CustomEvent()` en lui passant le nom de l'événement et un objet de configuration.

Cet objet de configuration peut contenir des propriétés supplémentaires pour personnaliser l'événement dans une propriété `detail`.

Voici un exemple de création d'un événement personnalisé `monEvenement` :

```js
const monEvenement = new CustomEvent("monEvenement", {
    detail: {
        message: "Ceci est un message personnalisé.",
        nombre: 42,
    },
});
```

## Écouter un événement personnalisé

Pour écouter un événement personnalisé, on utilise la méthode `addEventListener()` sur l'élément qui déclenche l'événement.

On peut ensuite définir une fonction de rappel qui sera exécutée lorsque l'événement est déclenché. On accède aux données personnalisées de l'événement via la propriété `detail` de la paramètre `evenement`.

Voici un exemple d'écoute d'un événement personnalisé `monEvenement`.

```js
document.addEventListener("monEvenement", (evenement) => {
    console.log(evenement.detail.message); // "Ceci est un message personnalisé."
    console.log(evenement.detail.nombre); // 42
});
```

## Déclencher un événement personnalisé

Pour déclencher un événement personnalisé, on utilise la méthode `dispatchEvent()` sur l'élément qui déclenche l'événement.

On passe en paramètre l'événement personnalisé que l'on a créé précédemment.

Voici un exemple de déclenchement de l'événement personnalisé `monEvenement`.

```js
document.dispatchEvent(monEvenement);
```

## Exemple concret

Voici un exemple concret d'utilisation d'un événement personnalisé pour communiquer entre deux parties d'une application.

Nous aurons une classe pour un panier d'achat et une classe pour un bouton d'ajout au panier. Les deux ne sont pas reliés directement, mais communiquent via un événement personnalisé.

```js
class Panier {
    #total;
    #listeProduits;
    constructor() {
        this.#total = 0;
        this.#listeProduits = [];

        document.addEventListener(
            "ajouterAuPanier",
            function (evenement) {
                this.ajouter(evenement.detail.produit);
            }.bind(this)
        );
    }

    ajouter(produit) {
        this.#total += produit.prix;
        this.#listeProduits.push(produit);
        console.log(`Total du panier : ${this.#total} $`);
    }
}

class BoutonAjoutPanier {
    constructor() {
        this.bouton = document.querySelector("#boutonAjoutPanier");
        this.bouton.addEventListener("click", this.ajouterAuPanier.bind(this));
    }

    ajouterAuPanier() {
        const produit = {
            nom: "T-shirt",
            prix: 20,
        };

        const evenement = new CustomEvent("ajouterAuPanier", {
            detail: {
                produit: produit,
            },
        });

        document.dispatchEvent(evenement);
    }
}
```

## Patrons de conception - Observer

Les événements personnalisés sont un exemple du patron de conception **Observer**.

Le patron de conception **Observer** est un patron de conception comportemental qui permet de définir un mécanisme de souscription pour informer plusieurs objets d'un changement d'état.

En JavaScript, les événements personnalisés permettent de créer un système d'observateurs qui réagissent à des événements spécifiques.

Cela a l'avantage de ne pas à avoir à relier directement les classes entre elles et de les rendre plus modulaires et réutilisables.
