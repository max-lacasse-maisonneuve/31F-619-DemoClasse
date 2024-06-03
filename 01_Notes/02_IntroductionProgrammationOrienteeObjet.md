# Introduction à la programmation orientée objet - JavaScript

La programmation orientée objet (POO) est un concept de programmation qui permet de structurer son code en utilisant des objets. Un objet est une entité qui regroupe des données et des fonctions qui agissent sur ces données, un peu comme un robot qui contient des informations et des actions.

JavaScript est un langage de programmation orienté objet, mais il est également un langage de programmation fonctionnel. Cela signifie que vous pouvez utiliser les deux paradigmes de programmation pour écrire votre code.

## Concepts de base

La programmation orientée objet repose sur plusieurs concepts de base :

-   Héritage : un objet peut hériter des propriétés et des méthodes d'un autre objet. Donc, il est possible de créer des objets qui partagent des caractéristiques communes pour éviter de dupliquer du code.
-   Encapsulation : les données et les méthodes d'un objet sont encapsulées dans celui-ci. Cela signifie que l'objet est responsable de son propre état et de son comportement. Il est possible de définir des méthodes pour accéder et modifier les données d'un objet, sans que l'extérieur puisse les manipuler directement.
-   Polymorphisme : un même objet peut avoir plusieurs formes, c'est-à-dire qu'il peut être utilisé de différentes manières. Il est possible de faire des objets plus spécialisés qui héritent des propriétés et des méthodes d'un objet plus général.Ex: Un objet `Chien` peut hériter des propriétés et des méthodes d'un objet `Animal`.

## Héritage

En JavaScript, il est possible de créer des objets qui héritent des propriétés et des méthodes d'un autre objet. Cela permet de réutiliser du code.

Avant que les classes soient introduites en JavaScript, l'héritage se faisait en utilisant des fonctions constructeurs et des prototypes.

## Prototype

En JavaScript, les objets sont basés sur un système de prototype. Chaque objet possède un prototype qui contient les propriétés et les méthodes de l'objet. Voyez le prototype comme un plan de construction pour l'objet.

Lorsqu'on accède à une propriété ou une méthode d'un objet, JavaScript va chercher dans le prototype de l'objet pour trouver la propriété ou la méthode.

Tout ce qui est ajouté au prototype d'un objet est partagé par toutes les instances de cet objet. Cela permet de ne pas dupliquer du code pour chaque instance de l'objet.

### Visualisation du prototype

Pour visualiser le prototype d'une instance d'un objet, on peut utiliser la propriété `__proto__` de l'objet. Tous les objets en JavaScript ont une propriété `__proto__` qui pointe vers le prototype de celui-ci.

Par exemple, si on crée un objet `personne` :

```js
const personne = {
    nom: "Jean",
    age: 30,
};

console.log(personne.__proto__);
```

Un autre exemple est le type Array. Le prototype d'un tableau contient les méthodes de tableau comme `push`, `pop`, `shift`, `unshift`, etc mais hérite également des méthodes de l'objet `Object`, comme `toString`, `hasOwnProperty`, etc.

```js
const tableau = [1, 2, 3];
tableau.push(4); // Méthode push du prototype du tableau
tableau.toString(); // Méthode toString du prototype de l'objet
console.log(tableau.__proto__); // Affiche le prototype du tableau
console.log(tableau.__proto__.__proto__); // Affiche le prototype de l'objet
```

### Modifier le prototype d'un type d'objet

Il est généralement déconseillé de modifier le prototype d'un type d'objet natif (comme Array, Object, etc) car cela peut entraîner des effets de bord inattendus dans votre code ou bloquer les fonctionnalités natives du langage.

On accède au protype d'un type d'objet natif en utilisant `Object.prototype`.

```js
// Ici, on ajoute une méthode doubler à tous les tableaux
Array.prototype.doubler = function () {
    return this.map((element) => element * 2);
};

const nombres = [1, 2, 3];
console.log(nombres.doubler()); // [2, 4, 6]
```

## Fonctions constructeurs

Les fonctions en JavaScript hérite du prototype des objets. Cela signifie que les fonctions peuvent être utilisées pour créer des objets.

La fonction constructeur est une fonction qui est utilisée pour créer des objets. Elle est appelée avec l'opérateur `new` pour créer une nouvelle instance de l'objet.

Avant l'introduction des classes en JavaScript, les fonctions constructeurs étaient utilisées pour créer des objets.

### Opérateur `new`

L'opérateur `new` est utilisé pour créer une nouvelle instance d'un objet en utilisant une fonction constructeur. Lorsqu'on utilise l'opérateur `new`, une nouvelle instance de l'objet est créée et le mot-clé `this` fait référence à cette instance.

Il est souvent utilise de stocker l'intance ainsi créée dans une variable pour pouvoir l'utiliser par la suite.

### This

Dans une fonction constructeur, le mot-clé `this` fait référence à l'objet qui est créé par la fonction constructeur. Cela signifie que `this` fait référence à l'instance de l'objet.

```js
function Personne(nom, age) {
    this.nom = nom;
    this.age = age;
}

const jean = new Personne("Jean", 30);
console.log(jean.nom); // Jean

const maxime = new Personne("Maxime", 25);
console.log(maxime.nom); // Maxime
```

### Ajouter une méthode à un objet

Dans la fonction précédente, nous avons créé un objet `Personne` avec uniquement des propriétés `nom` et `age. Il est possible d'ajouter des méthodes à un objet en utilisant le prototype de la fonction constructeur.

Voyez les propriétés comme des variables spécifiques à une instance de l'objet et les méthodes comme des fonctions partagées par toutes les instances de l'objet.

Pour ajouter une action qui est partagée par toutes les instances de l'objet, on peut ajouter une méthode au prototype de la fonction constructeur. Cela permet de ne pas dupliquer la méthode pour chaque instance de l'objet.

Si nous avions ajouté la méthode `sePresenter` à la fonction `Personne`, chaque instance de `Personne` aurait eu sa propre copie de la méthode `sePresenter`. En ajoutant la méthode au prototype de `Personne`, chaque instance de `Personne` partage la même méthode `sePresenter`. C'est plus efficace en termes de mémoire et de performances.

```js
function Personne(nom, age) {
    this.nom = nom;
    this.age = age;
}

//La fonction n'est pas ajoutée à l'objet mais à son prototype
Personne.prototype.sePresenter = function () {
    return `Bonjour, je m'appelle ${this.nom} et j'ai ${this.age} ans.`;
};

const jean = new Personne("Jean", 30);
```

Bien qu'aujourd'hui, les classes soient largement utilisées pour créer des objets en JavaScript, il est important de comprendre comment les fonctions constructeurs et les prototypes fonctionnent, car cela vous aidera à mieux comprendre le fonctionnement des classes en JavaScript.
