export default class GestionnaireSondage {
    #sondageListe;
    #sondages;
    #form;

    constructor() {
        this.#sondageListe = document.querySelector("[data-sondages]");
        this.#form = document.querySelector("[data-sondages-form]");

        this.#sondages = [];
        this.init();
    }

    /**
     * Initialisation de l'application
     */
    init() {
        this.getSondages();

        //Lors de l'envoi du formulaire, on bloque le comportement par défaut et on ajoute le sondage
        this.#form.addEventListener("submit", (e) => {
            e.preventDefault();

            const sondage = {
                niveau: this.#form.niveau.value,
            };

            this.ajouterSondage(sondage);
        });
    }

    /**
     * Mets à jour la liste des sondages dans le HTML
     * Vide préalablement la liste
     */
    mettreAJourLesSondagesHTML() {
        this.#sondageListe.innerHTML = "";

        this.#sondages.forEach((sondage, index) => {
            this.injecterSondageHTML(sondage, index);
        });
    }

    /**
     * Injecte un nouveau sondage à la fin de la liste des sondages
     */
    injecterSondageHTML(sondage, index) {
        const html = `
        <div class="item" data-id="${sondage.id}">ID Vote ${sondage.id} | Choix :${sondage.niveau}<i data-btn-supprimer class="fa fa-trash"></i></div>
        `;
        this.#sondageListe.insertAdjacentHTML("beforeend", html);

        const elementAjoute = this.#sondageListe.lastElementChild;

        const boutonSupprimer = elementAjoute.querySelector("[data-btn-supprimer]");
        boutonSupprimer.addEventListener("click", () => {
            this.supprimerSondage(sondage.id, elementAjoute);
        });
    }

    /**
     * Récupère les sondages depuis le serveur avec une requête HTTP GET (via FETCH)
     */
    getSondages() {}

    /**
     * Ajoute un nouveau sondage au serveur avec une requête HTTP POST (via FETCH)
     */
    ajouterSondage(sondage) {}

    /**
     * Supprime un sondage du serveur avec une requête HTTP DELETE (via FETCH)
     * Trouve et supprime l'élément dans la liste des sondages et mets la liste à jour avec la méthode mettreAJourLesSondagesHTML()
     */
    supprimerSondage(id, elementHTML) {}
}
