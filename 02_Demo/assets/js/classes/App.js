import Router from "./Router.js";
import FormulaireTache from "./FormulaireTache.js";

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

        this.gabaritTaches = this.panneauListeHTML.querySelector("template#tache");
        this.listeTachesHTML = this.panneauListeHTML.querySelector(".liste-taches");
        
        this.#router = new Router(this);
        this.#formulaire = new FormulaireTache(this);
    }

    async recupererToutesLesTaches() {
        const reponse = await fetch("http://localhost:8888/backend/taches/lireTout.php");
        const taches = await reponse.json();

        this.#taches = [];
        this.listeTachesHTML.innerHTML = "";

        taches.forEach((element) => {
            this.#taches.push(element);
            let clone = this.gabaritTaches.content.cloneNode(true);

            this.listeTachesHTML.appendChild(clone);
            let elementHTML = this.listeTachesHTML.lastElementChild;

            elementHTML.innerHTML = elementHTML.innerHTML.replace(/{{id}}/g, element.id);
            elementHTML.innerHTML = elementHTML.innerHTML.replace(/{{nom}}/g, element.nom);

            elementHTML.addEventListener(
                "click",
                function () {
                    console.log("click");
                    history.pushState(null, null, `/detail/${element.id}`);
                    this.#router.miseAJourURL();
                }.bind(this)
            );
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
