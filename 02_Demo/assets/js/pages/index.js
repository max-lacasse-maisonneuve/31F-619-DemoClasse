import museeInfos from "../data/museeInfos.js";
import GestionnaireOeuvre from "../classes/GestionnaireOeuvre.js";

// Variables et constantes
const conteneur = document.querySelector(".liste-oeuvres");

// =======================
//        À voir
// =======================
// 1. Transformer une fonction constructeur en classe
// 2. Ajouter des méthodes à une classe et des propriétés
// 3. Instancier la classe à plusieurs reprises
// 4. Attacher des événements à des éléments du DOM dans une classe
// 5. Changer le contexte d'une méthode avec la méthode bind


// Créer la fonction constructeur
// Ajouter la méthode d'injection à la fonction constructeur
// Instancier
// Fonctions fléchées (oui ou non?)
// let tableau = new Array();
// tableau.push("patate");
// tableau.__proto__.find = function () {
//     console.log("salut");
// };
// tableau.find();
// let maFonction = function () {
//     console.log("ok");
// };

// console.dir(maFonction);

// let Personne = {
//     nom: "Maxime",
//     age: undefined,
//     saluer: function () {
//         console.log("Bonjour" + this.nom);
//     },
// };

// function Personne(nom) {
//     this.nom = nom;

// }

// Personne.prototype.saluer = function () {
//     console.log("Bonjour" + this.nom);
// };

// let personne1 = new Personne("Maxime");
// personne1.saluer();

// let personne2 = new Personne("Filippa");
// personne2.saluer();
// console.log(Personne.__proto__);

function Oeuvre(titre, artiste, conteneur) {
    this.titre = titre;
    this.artiste = artiste;
    this.conteneur = conteneur;
    this.elementHTML;
}

Oeuvre.prototype.injecterHTML = function () {
    let gabarit = `<div class="card">${this.titre}/${this.artiste}</div>`;
    this.conteneur.insertAdjacentHTML("beforeend", gabarit);
    this.elementHTML = this.conteneur.lastElementChild;
    this.elementHTML.addEventListener("click", this.mettreEnFavoris);
};
Oeuvre.prototype.mettreEnFavoris = () => {
    console.log(this);
    this.elementHTML.classList.toggle("favoris");
    // console.log(this.__proto__.nombre--);
};
Oeuvre.prototype.nombre = 5;
function init() {
    // let nouvelleOeuvre = new Oeuvre("Patate", "M. Patate", conteneur);
    // let nouvelleOeuvre2 = new Oeuvre("Patate2", "M. Patate2", conteneur);
    // nouvelleOeuvre.injecterHTML();
    // nouvelleOeuvre2.injecterHTML();
    const oeuvres = museeInfos.results;
    oeuvres.forEach(function (element, index) {
        const oeuvre = new Oeuvre(element.titre, element.libelleNomsArtistes, conteneur);
        oeuvre.injecterHTML();
    });
}

// Exécution
init();
