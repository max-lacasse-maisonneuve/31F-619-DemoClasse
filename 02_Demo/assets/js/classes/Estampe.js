class Estampe {
    constructor(infosOeuvre, id, conteneur) {
        const { libelleNomsArtistes, titre, dateProduction, categorie, materiaux, images } = infosOeuvre;

        this.libelleNomsArtistes = libelleNomsArtistes;
        this.titre = titre;
        this.dateProduction = dateProduction;
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
            <div class="card estampe" data-index="${this.id}">
                    <div class="like-btn">💗</div>
                    ${imageOeuvre}
                    <div class="infos-container">
                        <h2 class="infos__titre">${this.titre}</h2>
                        <p class="infos__categorie">${this.categorie}</p>
                        <p>Ajouter ici les autres infos de l'oeuvre</p>
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
        console.log(this);
    }
}

export default Estampe;
