class FormulaireTache {
    constructor() {
        this.formulaireHTML = document.querySelector("form");
        this.formulaireHTML.addEventListener("submit", this.onSoumettre.bind(this));
    }

    async onSoumettre(evenement) {
        evenement.preventDefault();

        if (this.formulaireHTML.checkValidity()) {
        }
    }
}

export default FormulaireTache;
