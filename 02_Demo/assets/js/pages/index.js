import Bouton from "../classes/Bouton.js";
import BoutonDanger from "../classes/BoutonDanger.js";
import GestionnaireMusee from "../classes/GestionnaireMusee.js";
import Modale from "../classes/Modale.js";
(function () {
    // Variables et constantes

    /* =======================
//        À voir
// =======================
// ## Contenu à maîtriser à la fin du cours
* Ménage du projet
* Polymorphisme
* Exemple avec des boutons
* Création d'une classe factory
* Révision des boites modales
*/

    function init() {
        new GestionnaireMusee();
        let modale = new Modale(this, "Patate Test", document.body);
        modale.injecterHTML();
        modale.changerMessage("Bonjour");

        modale.afficher();
    }
    // Exécution
    init();
})();
