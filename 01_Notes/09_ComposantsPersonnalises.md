# Composants Web personnalisés

Les composants Web personnalisés sont des éléments HTML personnalisés que vous pouvez créer et réutiliser dans vos applications Web. Les composants Web personnalisés vous permettent de définir vos propres éléments HTML avec des fonctionnalités et des styles personnalisés.

Les composants Web personnalisés sont créés en utilisant la spécification Web Components, qui est une collection de technologies Web standardisées pour la création de composants réutilisables. Les composants Web personnalisés sont composés de trois parties principales : les éléments personnalisés, les ombres DOM et les modèles HTML.

## Éléments personnalisés

Les éléments personnalisés sont des éléments HTML personnalisés que vous pouvez créer en héritant de classes d'éléments HTML existants, comme `HTMLElement`, `HTMLInputElement`, `HTMLButtonElement`, etc

Les éléments personnalisés peuvent contenir des fonctionnalités et des styles personnalisés qui peuvent être réutilisés dans vos applications Web. Les éléments personnalisés sont créés ensuite en utilisant la méthode `customElements.define()`.

```js
//L'élément personnalisé hérite de la classe HTMLElement donc peut être utilisé comme une balise HTML et peut contenir du contenu
class CustomElement extends HTMLElement {
    constructor() {
        super(); //Appel du constructeur de la classe parente
        // Ajouter du contenu à l'élément personnalisé
        this.innerHTML = "<p>Contenu personnalisé</p>";
    }
}

customElements.define("custom-element", CustomElement); //Essentiel pour que l'élément soit reconnu par le navigateur
```

Il est possible ensuite d'utiliser ces éléments personnalisés dans le document HTML en utilisant la balise correspondante.

```html
<custom-element></custom-element>
```

## Ombres DOM

Les ombres DOM (shadowDom) sont des arbres DOM encapsulés qui permettent d'isoler le contenu et les styles d'un composant Web personnalisé. Les ombres DOM sont créés en utilisant la méthode `attachShadow()`.

Les ombres DOM permettent de créer des composants Web personnalisés avec des styles encapsulés qui ne sont pas affectés par les styles de la page principale.

```js
class CustomElement extends HTMLElement {
    constructor() {
        super();
        // Créer une ombre DOM pour l'élément personnalisé
        this.attachShadow({ mode: "open" });
        // Ajouter du contenu à l'ombre DOM
        this.shadowRoot.innerHTML = "<style>p { color: red; }</style>";
    }
}
```

## Modèles HTML

Les modèles HTML sont des éléments HTML qui permettent de définir des modèles de contenu réutilisables. Les modèles HTML sont créés en utilisant la balise `<template>`.
Les modèles HTML peuvent être clonés et insérés dans le document en utilisant la méthode `content.cloneNode(true)`.
Les modèles HTML sont souvent utilisés pour créer des composants Web personnalisés réutilisables.

```html
<template id="custom-template">
    <p>Contenu personnalisé</p>
</template>
```

```js
// Cloner et insérer le modèle dans le document
let template = document.querySelector("#custom-template");
let clone = template.content.cloneNode(true);
document.body.append(clone);
```

### Exemple complet utilisant les trois parties

```html

<template id="custom-template">
    <p>Contenu personnalisé</p>
</template>

<custom-element></custom-element>

<script>
    class CustomElement extends HTMLElement {
        constructor() {
            super();
            // Créer une ombre DOM pour l'élément personnalisé
            this.attachShadow({ mode: "open" });
            // Ajouter du contenu à l'ombre DOM
            this.shadowRoot.appendChild(document.querySelector("#custom-template").content.cloneNode(true));
        }
    }

    customElements.define("custom-element", CustomElement);
```

https://fr.javascript.info/web-components
