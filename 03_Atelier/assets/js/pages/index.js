// Variables et constantes
const conteneur = document.querySelector(".instruments-container");

// Fonctions
function Instrument(nom, audioSrc, imageSrc, conteneur) {
    this.nom = nom;
    this.audioSrc = audioSrc;
    this.imageSrc = imageSrc;
    this.conteneurHTML = conteneur;
    this.elementHTML;
    this.injecterHTML();
}

Instrument.prototype.injecterHTML = function () {
    const button = `<button class="instrument-button">
        <img src="assets/img/${this.imageSrc}.svg" alt="${this.nom}" />
        <span>${this.nom}</span>
    </button>`;

    this.conteneurHTML.insertAdjacentHTML("beforeend", button);
    this.elementHTML = this.conteneurHTML.lastElementChild;
    this.elementHTML.addEventListener("click", this.jouer.bind(this));
};

Instrument.prototype.jouer = function () {
    const audio = new Audio(`assets/audio/${this.audioSrc}.wav`);
    audio.play();
};

function init() {
    new Instrument("Tambour", "drum", "drum", conteneur);
    new Instrument("Maracas", "maracas", "maracas", conteneur);
    new Instrument("Baguettes", "drumsticks", "drumsticks", conteneur);
    new Instrument("Cymbale", "cymbal", "cymbal", conteneur);
}

// Exécution
init();
