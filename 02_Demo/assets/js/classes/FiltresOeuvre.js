import GestionnaireMusee from "./GestionnaireMusee.js";

class FiltresOeuvre {
    constructor(gestionnaireMusee) {
        //TODO: retirer le lien vers le GestionnaireMusee
        this.gestionnaireMusee = gestionnaireMusee;
        this.conteneurHTML = document.querySelector(".filters-container");

        this.elementHTML;
        this.triDirectionHTML;
        this.triCategorieHTML;
        this.filtreCategorieHTML;

        this.#injecterHTML();
    }

    #injecterHTML() {
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
        this.trier("titre", "asc"); // On trie par défaut les oeuvres par titre en ordre ascendant
    }

    onChangement(evenement) {
        // On récupère l'action à effectuer selon le bouton cliqué
        const declencheur = evenement.target;
        const action = declencheur.dataset.action;

        // On appelle la méthode correspondante selon l'action à effectuer
        if (action === "trier") {
            this.trier(this.triCategorieHTML.value, this.triDirectionHTML.value);
        } else if (action === "filtrer") {
            this.filtrer(this.filtreCategorieHTML.value);
        }
    }

    trier(typeTri, ordreTri) {
        // On crée une copie du tableau d'oeuvres instanciées pour ne pas modifier l'original
        let tabTemporaire = [...this.gestionnaireMusee.listeOeuvresInstanciees];

        // On trie le tableau temporaire selon le type de tri et l'ordre de tri
        tabTemporaire.sort((a, b) => {
            if (typeTri === "titre") {
                return a.titre.localeCompare(b.titre);
            } else if (typeTri === "artiste") {
                return a.libelleNomsArtistes.localeCompare(b.libelleNomsArtistes);
            } else if (typeTri === "dateAcquisition") {
                return parseInt(a.dateAcquisition) - parseInt(b.dateAcquisition);
            } else {
                console.log("Erreur de tri");
            }
        });

        // Si l'ordre de tri est descendant, on inverse le tableau temporaire
        if (ordreTri === "desc") {
            tabTemporaire.reverse();
        }

        // On crée un tableau contenant uniquement les éléments HTML des oeuvres triées et on change l'affichage
        let tableauOeuvresHTML = tabTemporaire.map((oeuvre) => oeuvre.elementHTML);

        // On appelle la méthode afficherOeuvres du GestionnaireMusee pour afficher les oeuvres triées
        this.gestionnaireMusee.afficherOeuvres(tableauOeuvresHTML);

        //=================
        // TODO: Remplacer le lien vers la méthode afficherOeuvres en déclenchant un événement personnalisé 'onTriTermine'
        // Permet d'éviter de dépendre de la méthode afficherOeuvres dans le GestionnaireMusee
        //=================
    }

    /**
     * Fonction qui filtre les oeuvres selon la catégorie
     * @param {String} filtre Le filtre à appliquer
     */
    filtrer(filtre) {
        this.gestionnaireMusee.listeOeuvresInstanciees.forEach(function (oeuvre) {
            // On ajoute la classe invisible aux oeuvres qui ne correspondent pas au filtre
            // Si le filtre est 'tout', on retire la classe invisible pour toutes les oeuvres
            const oeuvreHTML = oeuvre.elementHTML;
            oeuvreHTML.classList.toggle("invisible", filtre == "tout" ? false : oeuvre.categorie != filtre);
        });
    }
}

export default FiltresOeuvre;
