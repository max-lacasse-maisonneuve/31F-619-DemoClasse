import museeInfos from "../data/museeInfos.js";
import Oeuvre from "../classes/Oeuvre.js";
import FiltresOeuvre from "../classes/FiltresOeuvre.js";
import Modale from "./Modale.js";
class GestionnaireMusee {
    //TODO: Ajouter les propriétés privées de l'instance
    #listeOeuvres;
    #conteneurOeuvres;
    #listeOeuvresInstanciees;
    #filtres;

    constructor() {
        // TODO: Patron singleton pour l'instance de la classe

        //Propriétés de la classe
        this.#listeOeuvres = museeInfos.results;
        this.#conteneurOeuvres = document.querySelector(".card-container");
        this.#listeOeuvresInstanciees = [];

        // Placer l'écouteur d'événement avant l'exécution
        // TODO: Evenement personnalisé pour filtrer les oeuvres

        this.#instancierOeuvres(this.#listeOeuvres);
        this.#filtres = new FiltresOeuvre(this);
        this.modale = new Modale(this, "Ceci est un message de test", document.body);
    }

    // Méthode statique pour obtenir l'instance de la classe
    // Permet d'obtenir l'instance de la classe sans avoir à instancier la classe
    //TODO: Ajouter un accesseur statique pour l'instance

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
