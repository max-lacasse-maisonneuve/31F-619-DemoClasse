import Router from "./Router.js";
import FormulaireTache from "./FormulaireTache.js";
import Tache from "./Tache.js";

class App {
    #taches;
    #formulaire;
    #router;

    constructor() {
        this.#taches = [];

        this.#formulaire;

        this.panneauListeHTML = document.querySelector("[data-panneau='liste']");
        this.panneauDetailHTML = document.querySelector("[data-panneau='detail']");
        this.panneauFormulaireHTML = document.querySelector("[data-panneau='formulaire']");
        this.listeTachesHTML = this.panneauListeHTML.querySelector(".liste-taches");

        this.router = new Router(this);
        this.#formulaire = new FormulaireTache(this);
    }

    async recupererToutesLesTaches() {
        const reponse = await fetch("http://localhost:8888/backend/taches/lireTout.php");
        const taches = await reponse.json();

        this.#taches = [];
        this.listeTachesHTML.innerHTML = "";

        taches.forEach((tache) => {
            this.#taches.push(tache);
            new Tache(tache, this.listeTachesHTML, this);
        });
    }

    #cacherTout() {
        this.panneauListeHTML.classList.add("invisible");
        this.panneauDetailHTML.classList.add("invisible");
        this.panneauFormulaireHTML.classList.add("invisible");
    }

    afficherPanneauListe() {
        this.#cacherTout();
        this.panneauListeHTML.classList.remove("invisible");
        this.recupererToutesLesTaches();
    }

    afficherPanneauDetail(id) {
        //Récupérer le détail de l'exercice avec Fetch et le id
        console.log("panneauDetail");
        this.#cacherTout();
        this.panneauDetailHTML.classList.remove("invisible");
        //Récupérer le détail d'une tâche avec Fetch et le id
    }

    afficherPanneauFormulaire() {
        console.log("afficherPanneauFormulaire");
        this.#cacherTout();
        this.panneauFormulaireHTML.classList.remove("invisible");
        //Afficher le formulaire
    }
}

export default App;
