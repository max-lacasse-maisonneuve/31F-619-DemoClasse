# Création d'un moteur de gabarit en JavaScript

Un moteur de gabarit est un outil qui permet de générer du contenu HTML dynamiquement en utilisant des modèles. Les moteurs de gabarit sont couramment utilisés dans les applications web pour générer des pages HTML à partir de données dynamiques.

La séparation du contenu et de la présentation est une bonne pratique de développement web. Les moteurs de gabarit permettent de séparer le contenu HTML de la logique de présentation, ce qui facilite la maintenance et la mise à jour du code.

## Exemple d'importation de gabarit HTML avec la fonction `fetch()`

Pour créer un moteur de gabarit en JavaScript, nous allons utiliser la fonction `fetch()` pour importer un fichier HTML contenant le modèle de la page.

```js
// Importer le fichier HTML contenant le modèle de la page
let header = document.querySelector("header");
fetch("navigation.html")
    .then((response) => response.text())
    .then((nav) => {
        header.insertAdjacentHTML("beforeend", gabarit);
    })
    .catch((error) => {
        // Gérer les erreurs
        console.error(error);
    });
```

# Création d'un moteur de gabarit en JavaScript

Un moteur de gabarit est un outil qui permet de générer du contenu HTML dynamiquement en utilisant des modèles. Les moteurs de gabarit sont couramment utilisés dans les applications web pour générer des pages HTML à partir de données dynamiques.

La séparation du contenu et de la présentation est une bonne pratique de développement web. Les moteurs de gabarit permettent de séparer le contenu HTML de la logique de présentation, ce qui facilite la maintenance et la mise à jour du code.

Un moteur de gabarit en JavaScript peut être créé en utilisant la balise `<template>` pour définir le modèle de la page et la méthode `content.cloneNode(true)` pour cloner et insérer le contenu du gabarit dans le document.

Pour remplacer le contenu, généralement, on laisse des identifiants (placeholders) qui seront remplacés par les données dynamiques et la méthode de chaine replace en js. Ex:

```html
//Dans article.html
<template id="gabarit">
    <div class="article">
        <h1 id="titre">{{titre}}</h1>
        <p id="contenu">{{contenu}}</p>
    </div>
</template>
```

```js
// Récupérer le gabarit
fetch("gabarits/article.html")
    .then((response) => response.text())
    .then((article) => {
        // Remplacer les placeholders par les données dynamiques
        article = article.replace("{{titre}}", "Titre de l'article");
        article = article.replace("{{contenu}}", "Contenu de l'article");

        // Parser le gabarit en tant que document HTML
        const parser = new DOMParser();
        let doc = parser.parseFromString(article, "text/html"); //Retourne un document HTML

        // Cloner
        let elementAAjouter = doc.querySelector("template").content.cloneNode(true);

        // Insérer l'article dans le document
        document.body.append(elementAAjouter);
    })
    .catch((error) => {
        // Gérer les erreurs
        console.error(error);
    });
```

## Révision de la balise `<template>`

La balise `<template>` est une balise HTML qui permet de définir un modèle de contenu qui peut être cloné et inséré dans le document. Les éléments à l'intérieur de la balise `<template>` ne sont pas affichés dans le document, mais peuvent être clonés et insérés dynamiquement à l'aide de JavaScript.

Il est possible de cloner et d'insérer le contenu d'un gabarit en utilisant la méthode `content.cloneNode(true)`. Le paramètre `true` indique que le contenu de la balise `<template>` doit être cloné en profondeur, c'est-à-dire que tous les éléments enfants sont également clonés.

On l'ajoute ensuite au document en utilisant la méthode `append()`.

Pour ajouter un écouteur d'événement à un élément cloné, il faut d'abord l'ajouter au document, puis ajouter l'écouteur d'événement à l'élément cloné.

```html
<template id="gabarit">
    <div class="patate">
        <h1>Titre:<span class="patate__titre"></span></h1>
        <p>Contenu</p>
    </div>
</template>
```

```js
// Cloner et insérer le gabarit dans le document
let gabarit = document.querySelector("#gabarit");
let clone = gabarit.content.cloneNode(true);
document.body.append(clone);

// Ajouter un écouteur d'événement à l'élément cloné
let patate = document.querySelector(".patate");
let titre = document.querySelector(".patate__titre");
titre.textContent = "Patate";
patate.addEventListener("click", () => {
    console.log("Cliqué !");
});
```

## Exemple complet d'un moteur de gabarit en JavaScript

```js
class TemplateEngine {
    /**
     *
     * @param {String} template Une chaine comprenant le HTML du gabarit
     * @param {Object} data Un objet dans lequel passer pour remplacer les éléments
     * @returns
     */
    static render(template, data) {
        Object.keys(data).forEach(function (key) {
            const replacement = data[key];

            const regex = new RegExp(`\{\{(${key})\}\}`, "g");
            template = template.replaceAll(regex, replacement);
        });
        return template;
    }

    /**
     *
     * @param {String} html Un chaine comprenant le HTML à injecter dans une balise template.
     * @param {HTMLElement} container
     * @returns
     */
    static injectFromTemplateTag(html, container) {
        let parser = new DOMParser();

        let doc = parser.parseFromString(html, "text/html");
        let template = doc.querySelector("template");
        let clone = template.content.cloneNode(true);
        container.append(clone);

        const elementHTML = container.lastElementChild;

        return elementHTML;
    }

    /**
     *
     * @param {String} html Un chaine comprenant le HTML à injecter sans balise template.
     * @param {HTMLElement} container
     * @returns
     */
    static injectFromString(html, container) {
        container.insertAdjacentHTML("beforeend", html);
        const elementHTML = container.lastElementChild;

        return elementHTML;
    }
}

export default TemplateEngine;
```

