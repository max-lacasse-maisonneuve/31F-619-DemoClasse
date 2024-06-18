# Polymorphisme en JavaScript

Le polymorphisme est un concept de la programmation orientée objet qui permet de définir des méthodes dans une classe parente et de les redéfinir dans les classes enfants.

Cela permet de créer des objets qui partagent une interface commune, mais qui ont des comportements différents.

Dans les classes en JavaScript, le polymorphisme est possible grâce à l'héritage et à la redéfinition de méthodes.

## Classes parentes et classes enfants

Une classe parente est une classe qui définit des méthodes que les classes enfants peuvent redéfinir.

Une classe enfant est une classe qui hérite des méthodes de la classe parente et qui peut les redéfinir.

Une classe enfant hérite d'une classe parente en utilisant le mot-clé `extends`. C'est-à-dire que la classe enfant a accès aux propriétés et aux méthodes de la classe parente mais pas l'inverse.

```js
class Utilisateur {
    constructor(courriel) {
        this.courriel = courriel;
    }
    connecter() {
        console.log("Connecté en tant qu'utilisateur.");
    }
}

class Admin extends Utilisateur {
    constructor(nom) {
        super(nom);
        this.role = "admin";
    }

    retournerRole() {
        console.log(`Le rôle de l'admin ${this.nom} est ${this.role}.`);
    }
}

const admin = new Admin("Jean");
admin.connecter(); // Connecté en tant qu'utilisateur.
admin.retournerRole(); // Le rôle de l'admin Jean est admin.
```

## Redéfinition de méthodes

Il est possible pour une classe enfant de redéfinir une méthode de la classe parente en utilisant le même nom de méthode. C'est-à-dire que la classe enfant peut remplacer la méthode de la classe parente par une nouvelle méthode ou ajouter du code supplémentaire à la méthode existante.

On utilise le mot-clé `super` pour appeler la méthode de la classe parente. Dans l'exemple plus haut, on utilise `super(nom)` pour appeler le constructeur de la classe parente.

Dans l'exemple ci-dessous, la méthode `connecter` de la classe `Admin` redéfinit la méthode `connecter` de la classe `Utilisateur` et ajoute du code supplémentaire pour afficher un message supplémentaire.

```js
class Utilisateur {
    constructor(courriel) {
        this.courriel = courriel;
    }
    connecter() {
        console.log("Connecté en tant qu'utilisateur.");
    }
}

class Admin extends Utilisateur {
    constructor(nom) {
        super(nom);
        this.role = "admin";
    }

    connecter() {
        super.connecter();
        console.log("Connecté en tant qu'admin.");
    }
}

const admin = new Admin("Jean");
admin.connecter(); // Connecté en tant qu'utilisateur. Connecté en tant qu'admin.
```

## Exemple concret

Dans l'exemple suivant, nous allons créer une classe pour les boutons de base du site et un bouton personnalisée pour déclencher une boîte modale d'erreur.

On utilisera l'héritage, l'encapsulation et le polymorphisme et la redéfinition de méthodes.

1. Créer une classe parente `Bouton` et définir les proprétés communes à tous les boutons.
2. Créer une classe enfant `BoutonErreur` qui hérite de la classe `Bouton` et qui redéfinit la méthode `onClic` pour afficher une boîte modale d'erreur et ajouter une classe CSS pour styliser le bouton.

```js
class Bouton {
    #elementHTML;
    #conteneurHTML;
    #callback;
    #texte;

    constructor(texte, conteneurHTML, callback) {
        this.#texte = texte;
        this.#conteneurHTML = conteneurHTML;
        this.#elementHTML;
        this.#callback = callback;
        this.injecterHTML();
    }

    get elementHTML() {
        return this.#elementHTML;
    }

    onClic() {
        this.#callback.call(this);
    }

    injecterHTML() {
        let gabarit = `<button class="bouton">${this.#texte}</button>`;
        this.#conteneurHTML.insertAdjacentHTML("beforeend", gabarit);
        this.#elementHTML = this.#conteneurHTML.lastElementChild;

        this.#elementHTML.addEventListener("click", this.onClic.bind(this));
    }
}

class BoutonErreur extends Bouton {
    #messageErreur;

    constructor(texte, conteneurHTML, callback, messageErreur) {
        super(texte, conteneurHTML, callback);
        this.#messageErreur = messageErreur;
        this.elementHTML.classList.add("erreur");
    }

    onClic() {
        super.onClic();
        alert(this.#messageErreur);
    }
}
```

## Patron de conception factory

Le patron de conception `factory` est un patron de conception qui permet de créer des objets sans avoir à spécifier la classe exacte de l'objet qui sera créé.

Dans l'exemple suivant, nous allons créer une classe `BoutonFactory` qui permet de créer des boutons de différents types en fonction des paramètres passés à la méthode `creerBouton`.

L'instruction `static` permet de définir une méthode statique qui peut être appelée sans avoir à instancier la classe. Nous verrons en détail les méthodes statiques dans au prochain cours.

```js
class BoutonFactory {
    static creerBouton(type, texte, conteneurHTML, callback, messageErreur) {
        switch (type) {
            case "erreur":
                return new BoutonErreur(texte, conteneurHTML, callback, messageErreur);
            default:
                return new Bouton(texte, conteneurHTML, callback);
        }
    }
}

const conteneur = document.querySelector(".conteneur");
const bouton = BoutonFactory.creerBouton(
    "erreur",
    "Cliquez ici",
    conteneur,
    () => {
        console.log("Bouton cliqué");
    },
    "Une erreur s'est produite."
);
```
