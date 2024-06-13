class Oeuvre {
    constructor(titre, artiste, conteneur) {
        this.titre = titre;
        this.artiste = artiste;
        this.conteneurHTML = conteneur;
        this.favorisActif = false;
        this.elementHTML;
        this.injecterHTML();
    }

    injecterHTML() {
        let gabarit = `<div class="card">${this.titre}</div>`;

        this.conteneurHTML.insertAdjacentHTML("beforeend", gabarit);

        this.elementHTML = this.conteneurHTML.lastElementChild;
        this.elementHTML.addEventListener("dblclick", this.mettreEnFavoris.bind(this));
        // setTimeout(this.mettreAJour.bind(this), 4000)
    }

    mettreEnFavoris() {
        this.favorisActif = !this.favorisActif;
        this.elementHTML.classList.toggle("favoris", this.favorisActif);
        console.log(this);
    }

    mettreAJour() {}

    activer() {}
}

export function patate() {}
export default Oeuvre;
