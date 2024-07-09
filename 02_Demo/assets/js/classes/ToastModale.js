class ToastModale {
    #message;
    #type;
    #conteneurHTML;
    #gabarit;
    #elementHTML;

    constructor(message, type = "info") {
        this.#message = message;
        this.#type = type;
        this.#conteneurHTML = document.body;
        this.#gabarit = document.querySelector("template#toast-modale");
        this.#elementHTML;
        this.#afficher();
    }

    /**
     * Méthode privée pour afficher le toast
     * Se détruit automatiquement après 2,65 secondes
     */
    #afficher() {
        let toast = this.#gabarit.content.cloneNode(true);
        toast.querySelector(".toast-message").textContent = this.#message;

        this.#conteneurHTML.prepend(toast);
        this.#elementHTML = this.#conteneurHTML.firstElementChild;
        this.#elementHTML.dataset.type = this.#type;

        setTimeout(() => {
            this.#elementHTML.remove();
        }, 2650);
    }
}

export default ToastModale;
