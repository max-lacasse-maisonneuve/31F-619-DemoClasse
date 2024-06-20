class Modale {
    constructor(gestionnaire, message, conteneurHTML) {
        this.gestionnaire = gestionnaire;
        this.message = message;
        this.conteneurHTML = conteneurHTML;
        this.elementHTML;
    }

    injecterHTML() {
        let gabarit = `<div class="modale__conteneur invisible">
            <div class="modale__carte">${this.message}</div>
        </div>`;
        this.conteneurHTML.insertAdjacentHTML("afterbegin", gabarit);
        this.elementHTML = this.conteneurHTML.firstElementChild;

        this.elementHTML.addEventListener("click", this.fermer.bind(this));
    }

    changerMessage(nouveauMessage) {
        this.message = nouveauMessage;
        this.elementHTML.querySelector(".modale__carte").textContent = this.message;
    }

    afficher() {
        this.elementHTML.classList.remove("invisible");
        document.body.classList.add("modale-verrou");
    }

    fermer() {
        this.elementHTML.classList.add("invisible");
        document.body.classList.remove("modale-verrou");
    }
}

export default Modale;
