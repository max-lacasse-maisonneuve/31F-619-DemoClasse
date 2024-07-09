# Promesses, then et catch

Dans les cours précédents, nous avons utilisés les promesses lors de requêtes fetch. Dans ce cours, nous allons approfondir les promesses, les méthodes `then` et `catch` et comment les utiliser pour gérer les opérations asynchrones en JavaScript.

Les promesses sont des objets JavaScript qui représentent l'état d'une opération asynchrone. Elles permettent de gérer les opérations asynchrones de manière plus propre et plus lisible.

Les promesses ont trois états possibles :

-   **Pending** : L'état initial de la promesse. Cela signifie que l'opération asynchrone est en cours d'exécution.
-   **Fulfilled** : L'état dans lequel la promesse est résolue avec succès. Cela signifie que l'opération asynchrone s'est terminée avec succès.
-   **Rejected** : L'état dans lequel la promesse est rejetée. Cela signifie que l'opération asynchrone a échoué.

Chaque fonction asynchrone qui renvoie une promesse peut être chaînée avec une ou plusieurs méthodes `then` et `catch` pour traiter les résultats de la promesse. Il est possible de remplacer cette étape par `async` et `await` enveloppée d'un bloc `try` et `catch`.

Les promesses prennent une fonction de rappel avec deux paramètres : `resolve` et `reject`. `resolve` est appelé lorsque la promesse est résolue avec succès, et `reject` est appelé lorsque la promesse est rejetée.

Dans cette fonction, on appelera les méthodes `resolve` ou `reject` en fonction du résultat de l'opération asynchrone.

**L'API Fetch renvoie une promesse qui est résolue lorsque la requête est terminée automatiquement, nous n'avons pas besoin de créer une nouvelle promesse.**

```js
//Exemple de promesse
//On crée une nouvelle promesse
const promesse = new Promise(function (resolve, reject) {
    //Effectuer des opérations asynchrones
    if (/* condition */) {
        //Rejeter la promesse
        reject("Erreur de promesse");
    }

    setTimeout(function () {
        //Résoudre la promesse
        resolve("Promesse résolue");
    }, 1000);
});

//On traite la promesse
promesse
    .then(function (resultat) {
        //Traiter le résultat de la promesse si elle est résolue
        console.log(resultat);
    })
    .catch(function (erreur) {
        //Gérer les erreurs si la promesse est rejetée
        console.error(erreur);
    });

// Ou avec async et await
// try{
//     let resultat = await promesse;
//     console.log(resultat);
// }catch(erreur){
//     console.error(erreur);
// }
```

## Résoudre plusieurs promesses

Il est parfois nécessaire de résoudre plusieurs promesses en parallèle et d'attendre que toutes les promesses soient résolues avant de continuer. Pour cela, on peut utiliser la méthode `Promise.all()`.

La méthode `Promise.all()` prend un tableau de promesses en paramètre et renvoie une nouvelle promesse qui est résolue lorsque toutes les promesses du tableau sont résolues. Si l'une des promesses est rejetée, la promesse renvoyée par `Promise.all()` est également rejetée.

On déclare les promesses à résoudre en parallèle, puis on utilise `Promise.all()` pour les résoudre et traiter les résultats une fois qu'elles sont toutes résolues.

```js
//Exemple de Promise.all

const promesse1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("Promesse 1 résolue");
    }, 1000);
});

const promesse2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("Promesse 2 résolue");
    }, 2000);
});

const promesse3 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("Promesse 3 résolue");
    }, 3000);
});

Promise.all([promesse1, promesse2, promesse3])
    .then(function (resultats) {
        console.log(resultats);
    })
    .catch(function (erreur) {
        console.error(erreur);
    });

// Ou avec async et await
// try{
//     let resultats = await Promise.all([promesse1, promesse2, promesse3])
//     console.log(resultats);
// }catch(erreur){
//     console.error(erreur);
// }
```

## Quand créer nos propres promesses ?

Il est souvent nécessaire de créer nos propres promesses lorsque nous devons effectuer des opérations asynchrones qui ne sont pas gérées par des API natives comme `fetch`. Ex: effectuer des opérations de calculs longues, lire des fichiers, écrire dans une base de données, envoyer des requêtes HTTP personnalisées, etc.

Les promesses nous permettent de gérer ces opérations de manière asynchrone et de traiter les résultats une fois qu'ils sont disponibles.

Ex: Créer une promesse pour effectuer transformer un tableau en fichier CSV et l'écrire sur le disque.
** Un fichier CSV est un fichier texte qui contient des données tabulaires sous forme de lignes et de colonnes. Chaque ligne du fichier CSV correspond à une ligne du tableau, et chaque colonne correspond à une valeur du tableau. Les valeurs sont séparées par des virgules. C'est une version simplifiée d'un fichier Excell**

```js
const fs = require("fs"); //FS est un module natif de Node.js pour gérer les fichiers, nous le verrons la session prochaine

function tableauVersCSV(tableau, chemin) {
    return new Promise(function (resolve, reject) {
        //Transformer le tableau en chaîne CSV
        const csv = tableau.map((ligne) => ligne.join(",")).join("\n");

        //Écrire un fichier CSV sur le disque est une opération asynchrone
        //La fonction writeFile prend un chemin de fichier, une chaîne de caractères à écrire et une fonction de rappel
        //Exemple de chemin : "fichier.csv". Le fichier sera créé dans le répertoire courant
        fs.writeFile(chemin, csv, function (erreur) {
            if (erreur) {
                reject(erreur);
            } else {
                resolve("Fichier CSV créé avec succès");
            }
        });
    });
}
```

Un autre exemple serait un enregistrement en lot (batch save) de données à la base de données. On peut créer une promesse pour enregistrer chaque élément du tableau dans la base de données et attendre que tous les enregistrements soient terminés avant de continuer.

```js
function enregistrerDonneesEnLot(donnees) {
    //Enregistrer chaque élément du tableau dans la base de données en parallèle
    const tableauPromesses = donnees.map(function (element) {
        return new Promise(function (resolve, reject) {
            //Enregistrer l'élément dans la base de données
            fetch("http://api.exemple.com/enregistrer", {
                method: "POST",
                body: JSON.stringify(element),
                headers: {
                    "Content-Type": "application/json",
                },
            })
                .then(function (reponse) {
                    if (reponse.ok) {
                        resolve(reponse.json());
                    } else {
                        reject("Erreur d'enregistrement");
                    }
                })
                .catch(function (erreur) {
                    reject(erreur);
                });
        });
    });

    //On continue l'exécution une fois que toutes les promesses sont résolues
    Promise.all(tableauPromesses)
        .then(function (resultats) {
            console.log(resultats); //Contient un tableau de résultats de chaque promesse
        })
        .catch(function (erreur) {
            console.error(erreur);
        });
}
```
