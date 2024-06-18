# Exercice 2 - Boites modales spécialisée

## Tâches

Vous devez créer votre travail à part de ce lien : [https://classroom.github.com/a/ifj1SsM-](https://classroom.github.com/a/ifj1SsM-).

Vous devez utiliser le polymorphisme pour créer une boîte modale spécialisée pour les alertes, les messages de succès.

-   Les boites doivent hériter de la classe `Modale` et doivent redéfinir les méthodes `injecterHTML`.

-   Les `modales` doivent avoir toutes avoir un bouton de fermeture.

-   Les `alertes` et les `boites de succès` doivent afficher un message qui est formaté différemment. Exemple : les alertes sont rouges et les messages de succès sont verts.

-   La `boite de succès` se ferme automatiquement après 3 secondes, vous devez donc redéfinir la méthode `afficher` pour qu'elle se ferme automatiquement après 3 secondes.

Vous devez créer le CSS pour les boites modales. Si vous prenez du code CSS d'internet, vous devez le citer dans votre code.

Voir le schéma UML pour plus de détails.

## Bonus

Si vous voulez vous donner un défi supplémentaire, créez une classe confirmation qui hérite de la classe `Modale` et qui contient un bouton pour annuler et un bouton pour confirmer. La boite de confirmation contient une fonction de rappel qui est appelée lorsque l'utilisateur clique sur le bouton de confirmation.

Si la classe est correctement réalisée, je vous ajouterai 1% à votre note finale.

## Remise

Vous devez réaliser plusieurs commits pour montrer l'évolution de votre travail.

## Note importante

Cet exercice compte pour 5% de la note finale.
