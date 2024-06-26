import museeInfos from "../data/museeInfos.js";
import Oeuvre from "../classes/Oeuvre.js";
import FiltresOeuvre from "../classes/FiltresOeuvre.js";
import Modale from "./Modale.js";
class GestionnaireMusee {
    //TODO: Ajouter les propriétés privées de l'instance
    static instance;
    #listeOeuvres;
    #conteneurOeuvres;
    #listeOeuvresInstanciees;
    #filtres;

    constructor() {
        // Patron singleton pour l'instance de la classe
        if (!GestionnaireMusee.instance) {
            GestionnaireMusee.instance = this;
        } else {
            return GestionnaireMusee.instance;
        }

        //Propriétés de la classe
        this.#listeOeuvres = museeInfos.results;
        this.#conteneurOeuvres = document.querySelector(".card-container");
        this.#listeOeuvresInstanciees = [];

        // Placer l'écouteur d'événement avant l'exécution
        this.#instancierOeuvres(this.#listeOeuvres);
        this.#filtres = new FiltresOeuvre(this);
        this.modale = new Modale(this, "Ceci est un message de test", document.body);
    }

    // Méthode statique pour obtenir l'instance de la classe
    // Permet d'obtenir l'instance de la classe sans avoir à instancier la classe

    /**
     * Getter pour la liste d'oeuvres instanciées
     */
    get listeOeuvresInstanciees() {
        return this.#listeOeuvresInstanciees;
    }

    /**
     * Fonction qui instancie les oeuvres et les ajoute à la liste d'oeuvres instanciées
     */
    #instancierOeuvres() {
        this.#listeOeuvresInstanciees = this.#listeOeuvres.map((oeuvre, index) => {
            return new Oeuvre(this, oeuvre, index, this.#conteneurOeuvres);
        });
    }

    /**
     *
     * @param {*} oeuvres
     */
    afficherOeuvres(oeuvres) {
        this.#viderListeHTML();
        oeuvres.forEach((oeuvre) => {
            this.#conteneurOeuvres.insertAdjacentElement("beforeend", oeuvre);
        });
    }

    #viderListeHTML() {
        this.#conteneurOeuvres.innerHTML = "";
    }
}

export default GestionnaireMusee;
