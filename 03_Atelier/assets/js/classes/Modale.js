class Modale {

    #message;
    #conteneurHTML;
    #elementHTML;

    constructor( message, conteneurHTML) {
        this.#message = message;
        this.#conteneurHTML = conteneurHTML;
        this.#elementHTML;

        this.#injecterHTML();
    }

    /**
     * Fonction pour injecter le HTML de la modale dans le DOM
     * Crée un élément HTML pour la modale et l'ajoute au conteneur HTML
     * Ajoute un écouteur d'événement pour fermer la modale lorsqu'on clique dessus
     */
    #injecterHTML() {
        let gabarit = `<div class="modale__conteneur invisible">
            <div class="modale__carte">${this.#message}</div>
        </div>`;
        this.#conteneurHTML.insertAdjacentHTML("afterbegin", gabarit);
        this.#elementHTML = this.#conteneurHTML.firstElementChild;

        this.#elementHTML.addEventListener("click", this.fermer.bind(this));
    }

    /**
     * Fonction pour changer le message affiché dans la modale
     * @param {String} nouveauMessage le nouveau message à afficher dans la modale
     */
    changerMessage(nouveauMessage) {
        this.#message = nouveauMessage;
        this.#elementHTML.querySelector(".modale__carte").textContent = this.#message;
    }

    /**
     * Fonction pour afficher la modale
     */
    afficher() {
        this.#elementHTML.classList.remove("invisible");
        document.body.classList.add("modale-verrou");
    }

    /**
     * Fonction pour fermer la modale
     */
    fermer() {
        this.#elementHTML.classList.add("invisible");
        document.body.classList.remove("modale-verrou");
    }
}

export default Modale;
