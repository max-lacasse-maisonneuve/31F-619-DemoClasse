class App {
    #taches;
    #formulaire;
    #router;

    constructor() {
        this.#taches = [];

        this.#formulaire;
        this.#router;

        this.panneauListeHTML = this.conteneur.querySelector("[data-panneau='liste']");
        this.panneauDetailHTML = this.conteneur.querySelector("[data-panneau='detail']");
        this.panneauFormulaireHTML = this.conteneur.querySelector("[data-panneau='formulaire']");

        this.#cacherTout();
    }

    async recupererToutesLesTaches() {
        const reponse = await fetch("http://localhost/backend/taches/lireTout.php");
        const taches = await reponse.json();
        console.log(taches);
    }

    #cacherTout() {
        this.panneauListeHTML.classList.add("invisible");
        this.panneauDetailHTML.classList.add("invisible");
        this.panneauFormulaireHTML.classList.add("invisible");
    }

    afficherPanneauListe() {
        console.log("afficherPanneauListe");
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
