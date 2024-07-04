class IconeMeteo extends HTMLElement {
    static observedAttributes = ["data-type"];

    constructor() {
        super();
        this.type;

        this.shadowDom = this.attachShadow({ mode: "open" });

        const feuilleStyles = new CSSStyleSheet();
        feuilleStyles.replaceSync(`
            img{
                width:100%;
                heigth:100%;
                max-height:40vh;
                aspect-ratio:1;
            }
            `);

        this.classList.add("patate");
    }

    genererHTML() {
        let gabarit = `<img src="assets/img/icones/${this.type}.svg">`;
        this.shadowDom.innerHTML = gabarit;
        this.shadowDom.lastElementChild.style.backgroundColor = "tomato";
    }

    attributeChangedCallback(nom, ancienneValeur, nouvelleValeur) {
        if (nouvelleValeur !== null) {
            this.type = this.dataset.type;
            this.genererHTML();
        }
    }
}

customElements.define("icone-meteo", IconeMeteo);
export default IconeMeteo;
