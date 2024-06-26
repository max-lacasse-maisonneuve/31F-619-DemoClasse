import Bouton from "./Bouton.js";
class BoutonDanger extends Bouton {
    constructor(conteneurHTML, texte) {
        super(conteneurHTML, texte);

        this.#injecterHTML();
        this.onClic();
    }

    #injecterHTML() {
        super.injecterHTML();
        let elementTemporaire = super.elementHTML;

        let gabarit = `
            <div class="bouton">${this.texte}</div>
        `;

        elementTemporaire.insertAdjacentHTML("beforeend", gabarit);
        this.elementHTML = elementTemporaire.lastElementChild;
        elementTemporaire.dataset.etat = "danger";
    }
    onClic() {
        console.log("patate danger");
    }
}
export default BoutonDanger;
