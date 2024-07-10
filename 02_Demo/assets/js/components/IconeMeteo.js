/**
 * @class IconeMeteo
 * @extends HTMLElement
 * Classe pour afficher une icône météo, est une balise HTML <icone-meteo>
 */
class IconeMeteo extends HTMLElement {
    static observedAttributes = ["data-type"];

    constructor() {
        super();
        this.type;

        //ICI this correspond à l'instance de la classe IconeMeteo donc à l'élément HTML <icone-meteo>
        //On peut donc accéder aux attributs de l'élément HTML <icone-meteo> avec this.dataset
        //On peut aussi aux classes CSS de l'élément HTML <icone-meteo> avec this.classList

        //Shadow DOM permet de créer un DOM isolé pour le composant donc le CSS ne sera pas affecté par le CSS global
        this.shadowDom = this.attachShadow({ mode: "open" });

        //Permet de styliser le composant avec du CSS
        const feuilleStyles = new CSSStyleSheet();
        feuilleStyles.replaceSync(`
            img{
                width:100%;
                heigth:100%;
                max-height:20vh;
                aspect-ratio:1;
            }
            `);
        this.shadowDom.adoptedStyleSheets = [feuilleStyles]; //Ajoute la feuille de style au shadowDom
    }

    #genererHTML() {
        let gabarit = `<img src="assets/img/icones/${this.type}.svg">`;
        this.shadowDom.innerHTML = gabarit;
        // this.shadowDom.lastElementChild.style.backgroundColor = "tomato";
    }

    attributeChangedCallback(nom, ancienneValeur, nouvelleValeur) {
        if (nouvelleValeur !== null && nom === "data-type") {
            this.type = this.dataset.type;
            this.#genererHTML();
        }
    }
}

//Ligne essentielle pour déclarer le composant et le rendre utilisable dans le HTML
// On doit ensuite importer ce fichier dans le fichier index.js pour que le composant soit utilisable
customElements.define("icone-meteo", IconeMeteo);

export default IconeMeteo;
