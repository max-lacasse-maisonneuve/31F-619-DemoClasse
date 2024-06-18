class FiltresOeuvre {
    constructor(gestionnaireMusee) {
        this.gestionnaireMusee = gestionnaireMusee;
        this.conteneurHTML = document.querySelector(".filters-container");

        this.elementHTML;
        this.triDirectionHTML;
        this.triCategorieHTML;
        this.filtreCategorieHTML;

        this.injecterHTML();
    }

    injecterHTML() {
        const gabarit = `
           <div class="filtres">
                <div>
                    <label for="filtre_categorie">Categorie</label>
                    <select name="filtre_categorie" id="filtre_categorie" data-action="filtrer">
                        <option value="tout" selected>Tout</option>
                        <option value="Dessin">Dessin</option>
                        <option value="Peinture">Peinture</option>
                        <option value="Estampe">Estampe</option>
                        <option value="Photographie">Photographie</option>
                    </select>
                </div>
                <div>
                    <label for="tri_categorie">Tri</label>
                    <select name="tri_categorie" id="tri_categorie" data-action="trier">
                        <option value="titre">Titre</option>
                        <option value="artiste">Artiste</option>
                        <option value="dateAcquisition">Date d'acquisition</option>
                    </select>
                <label for="tri_direction">Direction</label>
                    <select name="tri_direction" id="tri_direction" data-action="trier">
                        <option value="asc">Ascendant</option>
                        <option value="desc">Descendant</option>
                    </select>
                </div>
           </div>
        `;
        this.conteneurHTML.insertAdjacentHTML("beforeend", gabarit);
        this.elementHTML = this.conteneurHTML.lastElementChild;

        this.triDirectionHTML = this.elementHTML.querySelector("#tri_direction");
        this.triCategorieHTML = this.elementHTML.querySelector("#tri_categorie");
        this.filtreCategorieHTML = this.elementHTML.querySelector("#filtre_categorie");

        this.elementHTML.addEventListener("change", this.onChangement.bind(this));
    }

    onChangement(evenement) {
        const declencheur = evenement.target;
        const action = declencheur.dataset.action;

        if (action === "trier") {
            this.trier(this.triCategorieHTML.value, this.triDirectionHTML.value);
        } else if (action === "filtrer") {
            this.filtrer(this.filtreCategorieHTML.value);
        }
    }

    trier(typeTri, ordreTri) {
        let tabTemporaire = [...this.gestionnaireMusee.listeOeuvresInstanciees];

        tabTemporaire.sort((a, b) => {
            if (typeTri === "titre") {
                return a.titre.localeCompare(b.titre);
            } else if (typeTri === "artiste") {
                return a.libelleNomsArtistes.localeCompare(b.libelleNomsArtistes);
            } else if (typeTri === "dateAcquisition") {
                return parseInt(a.dateAcquisition) - parseInt(b.dateAcquisition);
            }
        });

        if (ordreTri === "desc") {
            tabTemporaire.reverse();
        }

        // On crée un tableau contenant uniquement les éléments HTML des oeuvres triées et on change l'affichage
        let tableauOeuvresHTML = tabTemporaire.map((oeuvre) => oeuvre.elementHTML);
        this.gestionnaireMusee.afficherOeuvres(tableauOeuvresHTML);
    }

    filtrer(filtre) {
        let tabTemporaire = [...this.gestionnaireMusee.listeOeuvresInstanciees];

        if (filtre != "tout") {
            tabTemporaire = tabTemporaire.filter((oeuvre) => oeuvre.categorie === filtre);
        }

        // On crée un tableau contenant uniquement les éléments HTML des oeuvres filtrées et on change l'affichage
        let tableauOeuvresHTML = tabTemporaire.map((oeuvre) => oeuvre.elementHTML);
        this.gestionnaireMusee.afficherOeuvres(tableauOeuvresHTML);
    }
}

export default FiltresOeuvre;
