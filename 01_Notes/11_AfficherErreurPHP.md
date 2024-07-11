# Afficher les erreurs PHP

Au début de votre script PHP, ajoutez les lignes suivantes pour afficher les erreurs PHP :

```php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
```

Cela vous permettra de voir les erreurs PHP directement dans votre navigateur.

**Ne pas oublier de les retirer en production.**
