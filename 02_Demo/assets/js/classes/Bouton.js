class Bouton {
    #conteneurHTML;
    #elementHTML;
    #action;
    #texte;
    constructor(conteneurHTML, texte) {
        this.#conteneurHTML = conteneurHTML;
        this.#texte = texte;
    }
    get conteneurHTML() {
        return this.#conteneurHTML;
    }
    set conteneurHTML(nouveauConteneur) {
        this.#conteneurHTML = nouveauConteneur;
    }

    get elementHTML() {
        return this.#elementHTML;
    }
    set elementHTML(nouvelElement) {
        this.#elementHTML = nouvelElement;
    }
    get texte() {
        return this.#texte;
    }
    set texte(nouveauTexte) {
        this.#texte = nouveauTexte;
    }
    #injecterHTML() {
        let gabarit = `
            <div class="bouton">${this.#texte}</div>
        `;

        this.#conteneurHTML.insertAdjacentHTML("beforeend", gabarit);
        this.#elementHTML = this.#conteneurHTML.lastElementChild;
        this.#elementHTML.dataset.etat = "regulier";
    }

    onClic() {
        console.log("patate");
    }
}

export default Bouton;
