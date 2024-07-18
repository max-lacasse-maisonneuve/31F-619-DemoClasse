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

        this.conteneur.appendChild(clone);
        this.elementHTML = this.conteneur.lastElementChild;

        this.elementHTML.innerHTML = this.elementHTML.innerHTML.replace(/{{id}}/g, this.id);
        this.elementHTML.innerHTML = this.elementHTML.innerHTML.replace(/{{nom}}/g, this.nom);

        this.elementHTML.addEventListener(
            "click",
            function () {
                console.log("click");
                history.pushState({}, "", `/detail/${this.id}`);
                this.app.router.miseAJourURL();
            }.bind(this)
        );
    }
}

export default Tache;
