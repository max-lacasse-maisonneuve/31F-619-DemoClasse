import museeInfos from "../data/museeInfos.js";

// Variables globales - EN HAUT
const listeOeuvres = museeInfos.results;
const conteneur = document.querySelector(".card-container");

// Fonctions

/**
 * Fonction appelée au chargement de la page
 */
function init() {
    listeOeuvres.forEach(function (oeuvre, index) {
        injecterHTML(oeuvre, index);
    });
}

/**
 * Fonction servant à ajouter une oeuvre dans la page
 * @param {Object} oeuvre
 * @param {Number} index
 */
function injecterHTML(oeuvre, index) {
    let { titre, images } = oeuvre;
    let imageOeuvre =
        images.length > 0
            ? ` <div class="img-container">
                    <img src="${images[0].url}"/>
                </div>`
            : "";

    let gabaritHTML = `
        <div class="card" data-index="${index}">
                <div class="like-btn">💗</div>
                ${imageOeuvre}
                <div class="infos-container">
                    <h2>${titre}</h2>
                    
                </div>
        </div>
    `;
    conteneur.insertAdjacentHTML("beforeend", gabaritHTML);
    const elementAjoute = conteneur.lastElementChild;
    elementAjoute.addEventListener("click", onClicOeuvre);
}
/**
 * Fonction appelée au clic d'une oeuvre
 * @param {Event} evenement
 */
function onClicOeuvre(evenement) {
    const declencheur = evenement.target;
    const conteneurOeuvre = declencheur.closest(".card");

    if (declencheur.closest(".like-btn") !== null) {
        mettreEnFavoris(conteneurOeuvre);
    } else {
        const index = conteneurOeuvre.dataset.index;
        afficherOeuvre(index);
    }
}

/**
 * Fonction servant à afficher une oeuvre
 * @param {Number} index
 */
function afficherOeuvre(index) {
    const infosOeuvre = listeOeuvres[index];
    console.log(infosOeuvre);
}

/**
 * Fonction pour changer l'affichage d'un élément favoris
 * @param {HTMLElement} elementHTML
 */
function mettreEnFavoris(elementHTML) {
    elementHTML.classList.toggle("favoris");
}
// Exécution - EN BAS

init();
