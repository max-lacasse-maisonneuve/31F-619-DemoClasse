import Convertisseur from "../classes/Convertisseur.js";

(function () {
    function init() {
        const conteneurs = document.querySelectorAll("[data-convertisseur]");
        conteneurs.forEach((conteneur) => {
            new Convertisseur(conteneur);
        });
    }

    init();
})();
