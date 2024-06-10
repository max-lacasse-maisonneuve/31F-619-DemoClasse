# Démo cours 4 - Convertisseur d'unités

## Tâches

L’exercice consiste créer un composant qui convertit des unités de mesure de pouces à centimètres (1po = 2.54cm). Le composant doit être encapsulé dans une classe et doit être auto-exécutable. Le composant doit être ajouté à chaque endroit avec l'attribut `data-convertisseur`.

Vous devez créer une classe `Convertisseur` qui contient les méthodes suivantes :

-   injecterHTML
-   convertir

Les propriétés et méthodes de la classe **doivent être toutes privées**.

Le **code principal doit être enveloppé dans une fonction anonyme auto-exécutable** pour éviter les collisions et la pollution de l'espace global.

### HTML

Pour éviter d'avoir à gérer le CSS, vous pouvez utiliser le code HTML suivant lors de l'instanciation du composant :

```html
<div data-convertisseur-element>
    <input type="text" data-unite="po" />
    <label>pouces</label>
    =
    <input type="text" data-unite="cm" readonly disabled />
    <label>centimètres</label>
</div>
```

### Gestion des erreurs

Assurez-vous de bien convertir les unités en nombres avant de les manipuler. Si la valeur n'est pas un nombre, laissez le 2e champ vide.

## Élément de difficulté - Bonus

Si vous voulez vous donner un défi supplémentaire, vous pouvez ajouter la possibilité intervertir les unités de mesure ou de convertir les centimètres en pouces si on écrit dans le 2e champ.

## Note importante

Cet exercice n'est pas à remettre.
