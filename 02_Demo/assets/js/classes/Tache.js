class Tache {
    constructor(tachesInfos, conteneur, app) {
        const { id, nom, description, date, estTerminee } = tachesInfos;
        this.conteneur = conteneur;
        this.app = app;

        this.id = id;
        this.nom = nom;
        this.description = description;
        this.date = date;
        this.estTerminee = estTerminee;

        this.gabaritTaches = document.querySelector("template#tache");
        this.injecterHTML();
    }

    injecterHTML() {
        let clone = this.gabaritTaches.content.cloneNode(true);

        this.conteneur.append(clone);
        this.elementHTML = this.conteneur.lastElementChild;

        this.elementHTML.id = this.id;
        this.elementHTML.innerHTML = this.elementHTML.innerHTML.replaceAll(/{{nom}}/g, this.nom);

        this.elementHTML.addEventListener("click", this.onClic.bind(this));
    }

    onClic(evenement) {
        const declencheur = evenement.target;
        const bouton = declencheur.closest("[data-action='supprimer']");
        const tache = declencheur.closest(".tache");
       

        if (bouton !== null) {
            //Supprime
            const id = tache.id;
            this.app.supprimerUneTache(id);

        } else {
            history.pushState({}, "", `/detail/${this.id}`);
            this.app.router.miseAJourURL();
        }
    }
}

export default Tache;
