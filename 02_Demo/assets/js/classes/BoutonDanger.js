import Bouton from "./Bouton.js";
class BoutonDanger extends Bouton {
    constructor(conteneurHTML, texte) {
        super(conteneurHTML, texte);

        this.#injecterHTML();
        this.onClic();
    }

    #injecterHTML() {
        let gabarit = `
            <div class="bouton">${this.texte}</div>
        `;

        this.conteneurHTML.insertAdjacentHTML("beforeend", gabarit);
        this.elementHTML = this.conteneurHTML.lastElementChild;
        this.elementHTML.dataset.etat = "danger";
    }
    onClic() {
        console.log("patate danger");
    }
}
export default BoutonDanger;
