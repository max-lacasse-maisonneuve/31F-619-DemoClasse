// Variables et constantes
//Le conteneur HTML de tous les boutons
const conteneur = document.querySelector(".instruments-container");

// Fonctions
/**
 * Fonction servant à instancer un bouton du kit musical
 * @param {String} nom Le nom à afficher
 * @param {String} audioSrc Le chemin vers le fichier Audio
 * @param {String} imageSrc Le chemin vers le fichier image
 * @param {HTMLElement} conteneur Le conteneur HTML
 */
function Instrument(nom, audioSrc, imageSrc, conteneur) {
    this.nom = nom;
    this.audioSrc = audioSrc;
    this.imageSrc = imageSrc;
    this.conteneurHTML = conteneur;
    this.elementHTML;
    this.injecterHTML();
}

/**
 * Fonction servant à injecter le HTML
 */
Instrument.prototype.injecterHTML = function () {
    const bouton = `<button class="instrument-button">
        <img src="assets/img/${this.imageSrc}.svg" alt="${this.nom}" />
        <span>${this.nom}</span>
    </button>`;

    this.conteneurHTML.insertAdjacentHTML("beforeend", bouton);
    this.elementHTML = this.conteneurHTML.lastElementChild;
    this.elementHTML.addEventListener("click", this.jouer.bind(this));
};

/**
 * Fonction servant à jouer le son au clic
 */
Instrument.prototype.jouer = function () {
    const audio = new Audio(`assets/audio/${this.audioSrc}.wav`);
    audio.play();
};

/**
 * Fonction appelée au chargement de la page
 */
function init() {
    new Instrument("Tambour", "drum", "drum", conteneur);
    new Instrument("Maracas", "maracas", "maracas", conteneur);
    new Instrument("Baguettes", "drumsticks", "drumsticks", conteneur);
    new Instrument("Cymbale", "cymbal", "cymbal", conteneur);
}

// Exécution
init();
