class FiltresOeuvre {
    constructor(gestionnaire) {
        this.gestionnaire = gestionnaire;
        console.log(this.gestionnaire.listeOeuvresInstanciees);

        this.gestionnaire.listeOeuvresInstanciees.forEach(function (oeuvre) {
            oeuvre.afficher(false);
        });
    }
    
    injecterHTML(){

    }
}

export default FiltresOeuvre;
