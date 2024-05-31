# Fonctions spécialisées pour les tableaux et optimisation de code

## Déstructuration

La déstructuration permet de décomposer un objet ou un tableau en plusieurs variables. Cela permet de simplifier l'accès aux propriétés d'un objet ou aux éléments d'un tableau. On extrait les valeurs d'un objet ou d'un tableau pour les stocker dans des variables ainsi plus facilement.

### Tableau

```js
const tableau = [1, 2, 3];
const [premier, deuxieme, troisieme] = tableau;
console.log(premier); // 1

const objet = { nom: "Alice", age: 30 };
const { nom, age } = objet;
console.log(nom); // Alice
```

## Spread operator

Le spread operator permet de décomposer un objet ou un tableau pour les passer en argument d'une fonction ou pour les fusionner avec un autre objet ou tableau. À la différence de la déstructuration, le spread operator permet de passer un nombre variable d'arguments.

Il permet entre de couper la référence entre deux tableaux.

```js
const tableau1 = [1, 2, 3];
const tableau2 = [4, 5, 6];
const tableau3 = [...tableau1, ...tableau2];
console.log(tableau3); // [1, 2, 3, 4, 5, 6]

// Mélange de spread operator et de déstructuration
const tableau = [1, 2, 3];
const [premier, ...reste] = tableau;
console.log(reste); // [2, 3]
```

## ForEach

La méthode `forEach` permet d'appliquer une fonction à chaque élément d'un tableau. Elle prend en paramètre une fonction qui sera appelée pour chaque élément du tableau.

Cette fonction prend en paramètre l'élément du tableau, son index et le tableau lui-même.

```js
const nombres = [1, 2, 3, 4, 5];

nombres.forEach((nombre, index, tableau) => {
    console.log(`Nombre à l'index ${index} : ${nombre}`);
});
```

## Map

La méthode `map` permet de transformer un tableau en un autre tableau. Elle prend en paramètre une fonction qui sera appelée pour chaque élément du tableau. Cela est pratique pour effectuer des opérations sur chaque élément du tableau.

Cette fonction prend en paramètre l'élément du tableau, son index et le tableau lui-même. La valeur retournée par cette fonction sera ajoutée au nouveau tableau.

```js
const noms = ["Alice", "Bob", "Charlie"];

const nomsEnMajuscules = noms.map((nom) => {
    return nom.toUpperCase();
});
```

## Filter

La méthode `filter` permet de filtrer un tableau en ne gardant que les éléments qui respectent une condition. Elle prend en paramètre une fonction qui sera appelée pour chaque élément du tableau.

Si cette fonction retourne `true`, l'élément sera gardé, sinon il sera retiré du tableau.

```js
const nombres = [1, 2, 3, 4, 5];

const nombresPairs = nombres.filter((nombre) => {
    if (nombre % 2 === 0) {
        return true;
    } else {
        return false;
    }
    // ou plus simplement : return nombre % 2 === 0;
});
```

## Every

La méthode `every` permet de vérifier si tous les éléments d'un tableau respectent une condition. Elle prend en paramètre une fonction qui sera appelée pour chaque élément du tableau.

Si cette fonction retourne `true` pour tous les éléments, la méthode retournera `true`, sinon elle retournera `false`.

```js
const nombres = [2, 4, 6, 8, 10];

const tousPairs = nombres.every((nombre) => {
    return nombre % 2 === 0;
});

console.log(tousPairs); // true
```

## Some

La méthode `some` permet de vérifier si au moins un élément d'un tableau respecte une condition. Elle prend en paramètre une fonction qui sera appelée pour chaque élément du tableau.

Si cette fonction retourne `true` pour au moins un élément, la méthode retournera `true`, sinon elle retournera `false`.

```js
const nombres = [1, 2, 3, 4, 5];

const auMoinsUnPair = nombres.some((nombre) => {
    return nombre % 2 === 0;
});

console.log(auMoinsUnPair); // true
```

## Reduce

La méthode `reduce` permet de réduire un tableau à une seule valeur. Elle prend en paramètre une fonction qui sera appelée pour chaque élément du tableau et la valeur initiale de l'accumulateur.

La fonction passée en paramètre prend elle-même en paramètre un accumulateur et l'élément du tableau. La valeur retournée par cette fonction sera l'accumulateur pour l'élément suivant.

Cette fonction est plus complexe mais permet de faire des calculs ou des opérations plus avancées sur un tableau.

```js
const nombres = [1, 2, 3, 4, 5];

const somme = nombres.reduce((accumulateur, nombre) => {
    return accumulateur + nombre;
}, 0);

console.log(somme); // 15
```

## Bonus : Chaining

Il est possible de chaîner les méthodes de tableau pour effectuer plusieurs opérations en une seule ligne. Cela permet d'écrire du code plus concis et plus lisible.

```js
const nombres = [1, 2, 3, 4, 5];

const sommeNombresPairs = nombres
    .filter((nombre) => nombre % 2 === 0)
    .reduce((accumulateur, nombre) => accumulateur + nombre, 0);

console.log(sommeNombresPairs); // 6
```

## À noter

À noter, qu'il peut être utile d'utiliser les fonctions fléchées pour simplifier la syntaxe des fonctions passées en paramètre des méthodes de tableau. L'objectif de ces fonctions est de rendre le code plus lisible et plus court.
