import museeInfos from "../data/museeInfos.js";
import GestionnaireOeuvre from "../classes/GestionnaireOeuvre.js";

// Variables et constantes
const conteneur = document.querySelector(".liste-oeuvres");

// =======================
//        À voir
// =======================
// 1. Transformer une fonction constructeur en classe
// 2. Ajouter des méthodes à une classe et des propriétés
// 3. Instancier la classe à plusieurs reprises
// 4. Attacher des événements à des éléments du DOM dans une classe
// 5. Changer le contexte d'une méthode avec la méthode bind

// ## Étapes de la démo

// 1. Créer un objet Oeuvres sous la forme d'une classe
// 2. Créer une classe Oeuvre dans son propre fichier
// 3. Ajouter des propriétés
// 4. Ajouter des méthodes
// 5. Instancier la classe et comparer les notions de constructeur et d'instanciation
// 6. Afficher le résultat dans la page Web.
// 7. Contexte, mot-clé this et fonctions fléchées
// 8. Boucler sur un tableau d'objet pour afficher une liste de oeuvres

function init() {
    let gest = new GestionnaireOeuvre(museeInfos.results);
}

// Exécution
init();
