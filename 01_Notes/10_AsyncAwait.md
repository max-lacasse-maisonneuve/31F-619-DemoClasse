# Async / Await

Pour rendre le code asynchrone plus lisible et plus facile à écrire, JavaScript a introduit les mots-clés `async` et `await`. Les fonctions asynchrones sont des fonctions qui retournent une promesse.

Les fonctions asynchrones peuvent contenir des expressions `await`, qui mettent en pause l'exécution de la fonction asynchrone et attendent la résolution de la promesse passée, puis reprennent l'exécution de la fonction et retournent la valeur résolue.

Cela permet d'éviter d'imbriquer des fonction then() et catch() pour gérer les promesses, ce qui rend le code plus lisible et plus facile à comprendre.

## Exemple d'une fonction fetch avec then et catch sans fonction fléchée:

```js
function trouverDonnees() {
    fetch("https://test.com/api/data")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        })
        .catch(function (error) {
            console.log(error);
        });
}
```

## Exemple de la même fonction fetch avec async et await:

```js
async function trouverDonnees() {
    try {
        let response = await fetch("https://test.com/api/data"); //attendre la réponse
        let data = await response.json(); //attendre la conversion de la réponse en json
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
```

## Précision sur les fonctions async/await

-   Le mot async doit être placé devant la fonction qui englobe le mot-clé await.

-   La fonction ne peut pas être un constructeur, c'est-à-dire qu'elle ne peut pas être utilisée avec le mot-clé new.

-   Async/Await doit obligatoirement être utilisé dans une fonction. Il n'est pas possible de l'utiliser dans le code global.
