import museeInfos from "../data/museeInfos.js";
import Oeuvre from "../classes/Oeuvre.js";
import FiltresOeuvre from "../classes/FiltresOeuvre.js";

class GestionnaireMusee {
    constructor() {
        this.listeOeuvres = museeInfos.results;
        this.conteneurOeuvres = document.querySelector(".card-container");
        this.listeOeuvresInstanciees = [];

        this.instancierOeuvres(this.listeOeuvres);
        this.filtres = new FiltresOeuvre(this);
    }

    /**
     * Fonction qui instancie les oeuvres et les ajoute à la liste d'oeuvres instanciées
     */
    instancierOeuvres() {
        this.listeOeuvresInstanciees = this.listeOeuvres.map((oeuvre, index) => {
            return new Oeuvre(oeuvre, index, this.conteneurOeuvres);
        });
    }

    /**
     *
     * @param {*} oeuvres
     */
    afficherOeuvres(oeuvres) {
        this.viderListeHTML();
        oeuvres.forEach((oeuvre) => {
            this.conteneurOeuvres.insertAdjacentElement("beforeend", oeuvre);
        });
    }

    viderListeHTML() {
        this.conteneurOeuvres.innerHTML = "";
    }
}

export default GestionnaireMusee;
