<<<<<<< HEAD
import museeInfos from "../data/museeInfos.js";
import Oeuvre from "../classes/Oeuvre.js";
import FiltresOeuvre from "./FiltresOeuvre.js";
class GestionnaireMusee {
    #listeOeuvres;
    #conteneur;
    listeOeuvresInstanciees;

    constructor() {
        this.#listeOeuvres = museeInfos.results;
        this.#conteneur = document.querySelector(".card-container");
        this.listeOeuvresInstanciees = [];
        this.afficherListeOeuvres();

        this.filtres = new FiltresOeuvre(this);
    }

    afficherListeOeuvres() {
        this.#listeOeuvres.forEach((oeuvre, index) => {
            const nouvelleOeuvre = new Oeuvre(this, oeuvre, index, this.#conteneur);
            this.listeOeuvresInstanciees.push(nouvelleOeuvre);
        });
    }
    patate() {
        console.log("patate");
    }
}
export default GestionnaireMusee;
=======
class GestionnaireMusee {
    constructor() {}
}
>>>>>>> e519eaa (Modifi)
