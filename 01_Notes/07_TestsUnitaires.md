# Introduction aux tests unitaires en Javascript

Les tests unitaires sont une pratique de programmation qui consiste à écrire des tests pour chaque fonction ou méthode d'un programme. Ces tests permettent de vérifier que chaque fonction ou méthode fonctionne correctement et de détecter les erreurs ou les bogues dans le code.

Comme nous avons commencé à travailler avec les classes et les méthodes en Javascript, il est important de savoir comment écrire des tests unitaires pour ces classes et méthodes. Dans ce tutoriel, nous allons vous montrer comment écrire des tests unitaires en Javascript sans utiliser de bibliothèques de test.

## Pourquoi écrire des tests unitaires ?

Les tests unitaires sont une pratique de programmation qui permet de vérifier que chaque fonction ou méthode d'un programme fonctionne correctement. Au fil du temps, votre code peut devenir de plus en plus complexe et difficile à maintenir. Les tests unitaires vous permettent de vérifier que chaque fonction ou méthode fonctionne correctement et de détecter si l'ajout de code à un impact sur le reste du code fait par nous ou des collègues.

## Parties d'un test unitaire

Un test unitaire est composé de trois parties principales :

-   **Arrange** : Dans cette partie, vous configurez les données d'entrée et les conditions préalables pour le test.
-   **Act** : Dans cette partie, vous appelez la fonction
-   **Assert** : Dans cette partie, vous vérifiez que la fonction a renvoyé le résultat attendu. Si le résultat est correct, le test est réussi. Sinon, le test a échoué.

## Écrire un test unitaire en Javascript

Voici un exemple de test unitaire en Javascript :

```javascript
function it(description, callback) {
    try {
        callback(); //
        console.log(`\t✅ ${description}`);
    } catch (error) {
        console.error(`\n\t❌ ${description}`);
        console.error(error);
    }
}

function assert(condition, messageErreur) {
    if (!condition) {
        throw new Error(messageErreur);
    }
}

//Arrange
let gestionnaire = new GestionnaireMusee();

it("devrait avoir des oeuvres injectées", () => {
    //Act
    let liste = document.querySelector(".card-container");

    //Assert
    assert(liste.children.length > 0, "Il n'y a pas de livres injectés");
});
```

## Faits importants à retenir

-   Nommez vos tests en utilisant des noms descriptifs qui indiquent ce que le test vérifie. Par exemple, si vous testez une fonction `add`, nommez votre test `addTest` ou `addShouldReturnTheSumOfTwoNumbers` si vous avez plusieurs tests pour la même fonction.

-   Tester uniquement une seule fonction ou méthode à la fois. Cela vous permet de savoir exactement quelle fonction ou méthode a échoué si un test échoue.

-   Écrivez des tests pour les cas limites et les cas d'erreur. Cela vous permet de vérifier que votre fonction ou méthode gère correctement les cas limites et les cas d'erreur. Ex: division par zéro, valeurs négatives, etc.

## Quoi tester ?

Il est important de tester toutes les fonctions et méthodes de votre programme, en particulier celles qui effectuent des calculs ou des opérations complexes. Voici quelques exemples de fonctions et méthodes que vous devriez tester :

-   toutes les méthodes de vos classes qui retournent une valeur
-   toutes les méthodes de vos classes qui modifient l'état interne de la classe
-   toutes les fonctions qui effectuent des calculs ou des opérations complexes
-   les erreurs possibles de vos fonctions et méthodes
-   les cas limites. Ex: les valeurs maximales et minimales que votre fonction peut prendre, les valeurs nulles,etc

## Librairie de test

Bien que nous ayons montré comment écrire des tests unitaires sans utiliser de bibliothèques de test, il est recommandé d'utiliser une bibliothèque de test pour écrire des tests unitaires en Javascript. Les bibliothèques de test comme `Jest`, `Mocha`, `Chai` et `Jasmine` facilitent l'écriture et l'exécution de tests unitaires en Javascript car elles contiennent déjà des méthodes pour comparer les valeurs, lancer des erreurs, etc.

Il existe également d'autres sortes de tests comme les tests d'intégration, les tests de bout en bout, les tests de performance, les tests de sécurité, etc. Ces tests sont importants pour garantir la qualité de votre code et la stabilité de votre application.

Les test d'intégration permettent de tester l'interaction entre les différentes parties de votre application. Cypress est un outil populaire pour les tests d'intégration en Javascript.

Les tests de bout en bout permettent de tester l'application dans son ensemble, en simulant le comportement de l'utilisateur. Selenium est un outil populaire pour les tests de bout en bout en Javascript.

Les tests de performance permettent de vérifier que votre application répond rapidement aux demandes des utilisateurs. Lighthouse est un outil populaire pour les tests de performance en Javascript.

Les tests de sécurité permettent de vérifier que votre application est sécurisée contre les attaques. OWASP ZAP est un outil populaire pour les tests de sécurité en Javascript.
