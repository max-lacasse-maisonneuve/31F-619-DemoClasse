class Convertisseur {
    #RATIO = 2.54;
    #conteneurHTML;
    #elementHTML;
    constructor(conteneurHTML) {
        this.#conteneurHTML = conteneurHTML;
        this.#elementHTML;

        this.#injecterHTML();
    }

    #injecterHTML() {
        let gabarit = `
           <div data-convertisseur-element>
                <input type="text" data-unite="po"/>
                <label>pouces</label>
                =
                <input type="text" data-unite="cm" readonly disabled/>
                <label>centimètres</label>
           </div>
        `;
        this.#conteneurHTML.insertAdjacentHTML("beforeend", gabarit);
        this.#elementHTML = this.#conteneurHTML.lastElementChild;
        this.#elementHTML.addEventListener("keyup", this.#convertir.bind(this));
    }

    #convertir() {
        let input1 = this.#elementHTML.querySelector("input");
        let input2 = this.#elementHTML.querySelector("input[readonly]");

        let valeur1 = parseFloat(input1.value);
        if (isNaN(valeur1)) {
            input2.value = "";
        } else {
            input2.value = Math.round(valeur1 * this.#RATIO * 100) / 100;
        }
    }
}

export default Convertisseur;
