# Persistances de données

Il existe plusieurs façons de stocker des données dans une application web. Nous avons vu comment stocker les données dans des fichiers locaux et une base de données SQL. Dans ce chapitre, nous allons explorer d'autres méthodes de stockage de données, telles que le stockage local.

## Stockage local

Les navigateurs modernes offrent la possibilité de stocker des données localement sur l'appareil de l'utilisateur. Cela peut être utile pour stocker des préférences utilisateur, des données de configuration, des données temporaires, etc.

Il est important de noter que le stockage local est limité en termes de capacité de stockage et que les données stockées localement ne sont pas sécurisées. Il est recommandé de ne pas stocker de données sensibles ou confidentielles localement. De plus, si l'utilisateur efface les données de navigation, les données stockées localement seront également effacées.

### LocalStorage

`LocalStorage` est une API JavaScript qui permet de stocker des données localement dans le navigateur de l'utilisateur. Les données sont stockées sous forme de paires clé-valeur et sont persistantes entre les sessions de navigation. Cela signifie que les données stockées dans `LocalStorage` restent disponibles même après la fermeture du navigateur et la réouverture de l'application.

### Ajouter des données à LocalStorage

Pour ajouter des données à l'objet `localStorage`, on passe la clé et la valeur comme arguments à la méthode `setItem`. Assurez-vous que la valeur est une chaîne de caractères, car `localStorage` ne peut stocker que des chaînes de caractères.

Au besoin, vous pouvez utiliser `JSON.stringify` pour convertir un objet en chaîne de caractères.

```javascript
const mesPreferences = { theme: "clair", langue: "français" };
const preferencesJSON = JSON.stringify(mesPreferences);
localStorage.setItem("preferences", preferencesJSON);
```

### Récupérer des données de LocalStorage

Pour récupérer des données de `localStorage`, on utilise la méthode `getItem` en passant la clé comme argument.

Si la valeur était un objet converti en chaîne de caractères, vous pouvez utiliser `JSON.parse` pour la reconvertir en objet.

```javascript
const preferencesJSON = localStorage.getItem("preferences");
const mesPreferences = JSON.parse(preferencesJSON);
```

### Supprimer des données de LocalStorage

Pour supprimer des données de `localStorage`, on utilise la méthode `removeItem` en passant la clé comme argument.

```javascript
localStorage.removeItem("preferences");
```

## SessionStorage

`SessionStorage` est similaire à `LocalStorage`, mais les données stockées dans `SessionStorage` ne sont disponibles que pour la durée de la session de navigation. Cela signifie que les données stockées dans `SessionStorage` sont effacées lorsque l'utilisateur ferme le navigateur ou l'onglet.

Cela peut être utile pour stocker des données temporaires qui ne doivent pas être persistantes entre les sessions de navigation comme des données de formulaire, des données de session, etc.

## Changer les préférences utilisateur

Vous pouvez en CSS changer le thème de votre site en fonction des préférences de l'utilisateur. Par exemple, si l'utilisateur préfère un thème sombre, vous pouvez appliquer une feuille de style différente pour afficher le site en mode sombre. Pour ce faire, vous pouvez ajouter un attribut data-theme à la balise html et changer la feuille de style en fonction de la valeur de cet attribut.

```javascript
const preferencesJSON = localStorage.getItem("preferences");
const mesPreferences = JSON.parse(preferencesJSON);

document.querySelector("html").dataset.theme = mesPreferences.theme;
// document.documentElement.dataset.theme = mesPreferences.theme; // Alternative
```

```css
/* Styles pour le thème clair, Styles par défaut */
:root {
    --background-color: #f0f0f0;
    --text-color: #333;
}

/* Styles pour le thème sombre, on écrase les styles par défaut */
[data-theme="sombre"] {
    --background-color: #333;
    --text-color: #f0f0f0;
}

body {
    background-color: var(--background-color);
    color: var(--text-color);
}
```
