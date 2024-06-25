class Oeuvre {
    constructor(gestionnaire, infosOeuvre, id, conteneur) {
        const { libelleNomsArtistes, titre, dateProduction, categorie, materiaux, images, dateAcquisition } =
            infosOeuvre;

        this.gestionnaire = gestionnaire;
        this.libelleNomsArtistes = libelleNomsArtistes;
        this.titre = titre;
        this.dateProduction = dateProduction;
        this.dateAcquisition = dateAcquisition;
        this.categorie = categorie;
        this.materiaux = materiaux;
        this.images = images;

        this.id = id;
        this.conteneurHTML = conteneur;
        this.elementHTML;

        this.injecterHtml();
    }

    injecterHtml() {
        let imageOeuvre =
            this.images.length > 0
                ? ` <div class="img-container">
                        <img src="${this.images[0].url}"/>
                    </div>`
                : "";

        let gabaritHTML = `
            <div class="card" data-index="${this.id}">
                    <div class="like-btn">💗</div>
                    ${imageOeuvre}
                    <div class="infos-container">
                        <h2 class="infos__titre">${this.titre}</h2>
                        <h3 class="infos__artiste">${this.libelleNomsArtistes}</h3>
                        <p class="infos__date">Date de production: ${this.dateProduction}</p>
                        <p class="infos__dateAcquisition">Date d'acquisition: ${this.dateAcquisition}</p>
                        <p class="infos__categorie">${this.categorie}</p>
                    </div>
            </div>
        `;
        this.conteneurHTML.insertAdjacentHTML("beforeend", gabaritHTML);
        this.elementHTML = this.conteneurHTML.lastElementChild;
        this.elementHTML.addEventListener("click", this.onClicOeuvre.bind(this));
    }

    onClicOeuvre(evenement) {
        const declencheur = evenement.target;

        if (declencheur.closest(".like-btn") !== null) {
            this.mettreEnFavoris();
        } else {
            this.afficherOeuvre();
        }
    }

    mettreEnFavoris() {
        this.elementHTML.classList.toggle("favoris");
    }

    afficherOeuvre() {
        this.gestionnaire.modale.changerMessage(this.titre);
        this.gestionnaire.modale.afficher();
    }
}

export default Oeuvre;
