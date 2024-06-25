class Minuteur {
    constructor(conteneurHTML, duree) {
        this.tempsRestant = 0;
        this.tempsInitial = 0;
        this.tempsEcoule = 0;
        this.intervalID = null;
        this.conteneurHTML = conteneurHTML;
        this.elementHTML;

        this.initialiser(duree);
        this.injecterHTML(conteneurHTML);
        this.afficher();
    }

    injecterHTML(conteneur) {
        const gabarit = `
            <section class="minuteur">
                <h1>Minuteur</h1>
                <div class="minuteur__contenu">
                    <div class="minuteur__contenu__temps">
                        <span class="minuteur__contenu__temps__minutes">00</span>:
                        <span class="minuteur__contenu__temps__secondes">00</span>
                    </div>
                    <div class="minuteur__contenu__controles">
                        <button class="minuteur__contenu__controles__bouton" id="demarrer">Démarrer</button>
                        <button class="minuteur__contenu__controles__bouton" id="arreter">Arrêter</button>
                    </div>
                </div>
            </section>
        `;
        this.conteneurHTML.insertAdjacentHTML("beforeend", gabarit);
        this.elementHTML = this.conteneurHTML.lastElementChild;

        this.elementHTML.querySelector("#demarrer").addEventListener("click", this.demarrer.bind(this));
        this.elementHTML.querySelector("#arreter").addEventListener("click", this.arreter.bind(this));
    }

    initialiser(duree) {
        clearInterval(this.intervalID);
        this.tempsInitial = duree;
        this.tempsRestant = duree;
    }

    afficher() {
        const minutes = Math.floor(this.tempsRestant / 60);
        const secondes = this.tempsRestant % 60;

        this.elementHTML.querySelector(".minuteur__contenu__temps__minutes").textContent = minutes
            .toString()
            .padStart(2, "0");
        this.elementHTML.querySelector(".minuteur__contenu__temps__secondes").textContent = secondes
            .toString()
            .padStart(2, "0");

        // Si le temps restant est égal à 0, on envoie un événement personnalisé 'finMinuteur' et on arrête le minuteur
        if (this.tempsRestant <= 0) {
            clearInterval(this.intervalID);
            console.log("Le minuteur est terminé");
        }

        this.tempsRestant--;
    }

    demarrer() {
        clearInterval(this.intervalID);
        this.intervalID = setInterval(this.afficher.bind(this), 1000);
    }

    arreter() {
        clearInterval(this.intervalID);
    }
}

export default Minuteur;
