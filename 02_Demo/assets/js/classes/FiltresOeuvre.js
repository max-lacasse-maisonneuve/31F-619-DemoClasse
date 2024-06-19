class FiltresOeuvre {
    constructor(gestionnaire) {
        this.gestionnaire = gestionnaire;

        this.gestionnaire.listeOeuvresInstanciees.forEach(function (oeuvre) {
            oeuvre.afficher(true);
        });
    }

    injecterHTML() {}
}

export default FiltresOeuvre;
