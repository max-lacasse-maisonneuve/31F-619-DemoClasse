class Router {
    constructor(app) {
        this.app = app;
        this.routes = {
            liste: app.afficherPanneauListe.bind(this.app),
            ajouter: app.afficherPanneauFormulaire.bind(this.app),
            detail: app.afficherPanneauDetail.bind(this.app),
        };

        window.addEventListener("popstate", this.miseAJourURL.bind(this));
        document.addEventListener("click", this.onClicLien.bind(this));

        this.miseAJourURL();
    }

    miseAJourURL() {
        const url = window.location.pathname.slice(1); //On récupère l'URL sans le /
        const parts = url.split("/"); //On découpe l'URL en parties distinctes dans un tableau
        let route = parts[0]; //On récupère le premier élément du tableau. Il n'y a pas de # dans l'URL
        let id = parts[1]; //On récupère le deuxième élément du tableau

        // const params = new URLSearchParams(document.location.search);
        // const id = params.get("id");
        // console.log(route, id);

        const fonctionRoute = this.routes[route];
        if (id) {
            fonctionRoute(id);
        } else if (fonctionRoute) {
            fonctionRoute();
        } else {
            this.routes["liste"]();
        }
    }

    onClicLien(evenement) {
        const elementClique = evenement.target.closest("[data-lien]");
        if (elementClique !== null) {
            evenement.preventDefault();
            const url = elementClique.href;
            history.pushState({}, "", url);

            this.miseAJourURL();
        }
    }
}

export default Router;
