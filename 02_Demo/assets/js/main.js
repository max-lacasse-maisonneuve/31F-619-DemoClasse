// Révision
// console.log("patate");
// Structure du document X

// Structures conditionnelles et itératives
let test = "patate";
const test2 = "carotte";

if (test == "patate") {
    let test = "super";
    // console.log(test);
} else if (test == "radis") {
    console.log("ok2");
} else {
    console.log("ok3");
}

// console.log(test);
let i = 15;

let tableau = ["patate", "radis", "carotte"];
// console.log(tableau[3]);

for (let i = 0; i < tableau.length; i++) {
    let element = tableau[i];
    // console.log(element);
}

tableau.forEach(function (element, index, array) {
    console.log(element, index);
    array[index] = element.toUpperCase();
});
console.log(tableau);

/**
 * Cette fonction filtre un tableau de chaines contenant des légumes
 * @param {Array} tableauLegumes
 * @returns {Array}
 */
function filtrerLegumes(tableauLegumes) {
    let nouveauTableau = [];
    tableauLegumes.forEach(function (element) {
        if (element.length <= 6) {
            nouveauTableau.push(element);
        }
    });

    return nouveauTableau;
}

const nouveauLegumes = filtrerLegumes(tableau);
console.log(nouveauLegumes);

// Sélection
const boutons = document.querySelectorAll("#demo1-sect2-btn");

// Modification de contenu texte
boutons.forEach(function (element) {
    element.textContent = "Bouton changé";
    element.classList.add("danger");
    element.addEventListener("click", function (evenement) {
        const declencheur = evenement.currentTarget;
        declencheur.classList.remove("danger");
        declencheur.remove(); //Supprime de la page
    });
    console.log(element);
});
// boutons.addEventListener()

// Modification de classes

// Ajout d'écouteur d'événement

// Création d'éléments
const conteneur = document.querySelector("main");
let texte = "Du texte à ajouter";
const nouveauHTML = `<div>${texte}</div>`;
conteneur.insertAdjacentHTML("beforeend", nouveauHTML);

// ===================================
// Fonctions spécialisées de tableaux

//- Foreach
//- Find - Un seul élément avec condition
//- Filter - Un tableau de certains éléments avec condition
const petitsLegumes = tableau.filter((element) => element.length <= 6);
console.log(petitsLegumes);
//- Map - Un tableau d'éléments transformés
//- Some - Contient un élément avec condition
//- Every - Contient tous les éléments avec condition

//Destructuration
const personne = {
    nom: "Maxime",
    age: undefined,
};
// let nom = personne.nom;
// let age = personne.age;
let { nom, age, taille = 165 } = personne;
console.log(nom, age, taille);
//Spread operator
const tableau1 = ["sdhfjksdf", "lskdjflsdjf"];
let [element1, element2, element3] = tableau1;
console.log("test desc", element1, element2, element3);
const tableau2 = ["aaaaaa", "bbbbbb"];
const tableau3 = [...tableau1, ...tableau2];
