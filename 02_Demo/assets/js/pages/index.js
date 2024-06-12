import museeInfos from "../data/museeInfos.js";
// Variables et constantes
const conteneur = document.querySelector(".liste-oeuvres");

// =======================
//        À voir
// =======================
// Retour sur l'exercice du cours précédent
// Prototype des objets
// Exemple objet Date
// __proto__

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
}

Oeuvre.prototype.injecterHTML = function () {
    let gabarit = `<div>${this.titre}/${this.artiste}</div>`;
    this.conteneur.insertAdjacentHTML("beforeend", gabarit);
};

function init() {
    let nouvelleOeuvre = new Oeuvre("Patate", "M. Patate", conteneur);
    let nouvelleOeuvre2 = new Oeuvre("Patate2", "M. Patate2", conteneur);
    nouvelleOeuvre.injecterHTML();
    nouvelleOeuvre2.injecterHTML();
}

// Exécution
init();
