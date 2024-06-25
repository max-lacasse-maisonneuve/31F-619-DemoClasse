# Atelier cours 6 - Minuteur

## Tâches

Vous devez refactoriser (améliorer) le code de façon à respecter les normes de la programmation orientée objet.

Il ne peut y avoir qu'une seule instance de la classe `Minuteur` sur la page, vous devez donc utiliser le design pattern Singleton. Encapsulez les variables et les méthodes de la classe `Minuteur` pour qu'elles soient privées et permettez l'accès à les variables `instance`, `tempsRestant` et à la méthode `demarrer` via des méthodes publiques ou statiques et des accesseurs.

Lorsque le minuteur est terminé, déclenchez une modale qui affiche le message "Le temps est écoulé!" via un événement personnalisé.
