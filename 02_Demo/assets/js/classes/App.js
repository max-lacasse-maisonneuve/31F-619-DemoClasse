import Router from "./Router.js";
import FormulaireTache from "./FormulaireTache.js";
import Tache from "./Tache.js";
import ToastModale from "./ToastModale.js";
class App {
    #taches;
    #formulaire;
    #router;

    constructor() {
        this.#taches = [];

        this.#formulaire;

        this.darkModeNav = document.querySelector("[data-action='dark-mode']");
        this.panneauListeHTML = document.querySelector("[data-panneau='liste']");
        this.panneauDetailHTML = document.querySelector("[data-panneau='detail']");
        this.panneauFormulaireHTML = document.querySelector("[data-panneau='formulaire']");
        this.listeTachesHTML = this.panneauListeHTML.querySelector(".liste-taches");

        this.darkModeNav.addEventListener("click", this.switchMode.bind(this));

        this.router = new Router(this);
        this.#formulaire = new FormulaireTache(this);

        this.checkMode();
        localStorage.clear();
    }

    switchMode(evenement) {
        const bouton = evenement.target.closest("[data-mode]");
        if (bouton !== null) {
            const mode = bouton.dataset.mode;
            document.body.dataset.mode = mode;
            localStorage.setItem("todo-dark-mode", mode);
            this.checkMode();
        }
    }
    checkMode() {
        const selectedMode = localStorage.getItem("todo-dark-mode") || "light";
        document.body.dataset.mode = selectedMode;
        const boutons = this.darkModeNav.querySelectorAll("[data-mode]");
        boutons.forEach(function (bouton) {
            bouton.classList.toggle("invisible", bouton.dataset.mode == selectedMode);
        });
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

    async recupererUneTache(id) {
        const reponse = await fetch(`http://localhost:8888/backend/taches/lireUn.php?id=${id}`);
        const tache = await reponse.json();
        const tachesInfos = tache[0];
        const { nom, date, description, estTerminee } = tachesInfos;

        this.panneauDetailHTML.querySelector("[data-nom]").textContent = nom;
        this.panneauDetailHTML.querySelector("[data-date]").textContent = date;
        this.panneauDetailHTML.querySelector("[data-description]").textContent = description;
        this.panneauDetailHTML.querySelector("[data-est-terminee]").textContent = estTerminee
            ? "Terminée"
            : "Non terminée";
    }

    async supprimerUneTache(id) {
        //Supprimer une tâche
        const reponse = await fetch(`http://localhost:8888/backend/taches/supprimerUn.php?id=${id}`);
        const tache = await reponse.json();
        //Rediriger
        history.pushState({}, "", "/");
        this.recupererToutesLesTaches();

        //Afficher un toast
        new ToastModale("La tâche a été supprimée");
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
        console.log(id);
        //Récupérer le détail de l'exercice avec Fetch et le id
        console.log("panneauDetail");
        this.#cacherTout();
        this.panneauDetailHTML.classList.remove("invisible");
        //Récupérer le détail d'une tâche avec Fetch et le id
        this.recupererUneTache(id);
    }

    afficherPanneauFormulaire() {
        console.log("afficherPanneauFormulaire");
        this.#cacherTout();
        this.panneauFormulaireHTML.classList.remove("invisible");
        //Afficher le formulaire
    }
}

export default App;
