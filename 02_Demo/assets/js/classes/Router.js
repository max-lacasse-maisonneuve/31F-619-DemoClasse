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
        const url = window.location.pathname.slice(1);
        console.log(url);
        const tabRoutes = url.split("/");
        const route = tabRoutes[0];
        const id = parseInt(tabRoutes[1]);
       
        // switch (route) {
        //     case "afficher":
        //         this.routes.afficher();
        //         break;
        //     case "formulaire":
        //         this.routes.formulaire();
        // }
        const fonctionRoute = this.routes[route];
        if (id) {
            fonctionRoute(id);
        } else if (fonctionRoute !== undefined) {
            fonctionRoute();
        } else {
            this.routes["liste"]();
        }
        // if (id) {
        //     this.routes[route](id);
        // } else if (this.routes[route] !== undefined) {
        //     this.routes[route]();
        // } else {
        //     this.routes["afficher"]();
        // }
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
