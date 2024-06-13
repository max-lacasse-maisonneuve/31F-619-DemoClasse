import Oeuvre from "./Oeuvre.js";

class GestionnaireOeuvre {
    constructor(listeDonnees = []) {
        this.listeDonnees = listeDonnees;
        this.oeuvres = [];
        this.conteneur = document.querySelector("main");
        this.afficher();
    }

    afficher() {
        this.listeDonnees.forEach(
            function (oeuvre) {
                let nouvelleOeuvre = new Oeuvre(oeuvre.titre, oeuvre.libelleNomsArtistes, this.conteneur);
                this.oeuvres.push(nouvelleOeuvre);
                nouvelleOeuvre.mettreEnFavoris();
            }.bind(this)
        );
        console.log(this);
    }
    filtrer(filtre) {}

    trier(cle, ordre) {}
}

export default GestionnaireOeuvre;
