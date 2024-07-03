class App {
    constructor() {
        this.conteneur = document.querySelector("[data-app]");
        this.recupererEntraves();
    }

    recupererEntraves() {
        const url =
            "https://donnees.montreal.ca/dataset/667342f7-f667-4c3c-9837-65e81312cd8d/resource/535c090c-2f74-4398-83ec-2771a6ce7174/download/informations-complementaires-entraves-travaux.json";

        fetch(url)
            .then(function (reponse) {
                return reponse.json();
            })
            .then(
                function (reponseJson) {
                    this.afficherEntraves(reponseJson.entries);
                }.bind(this)
            )
            .catch(function () {});
    }

    afficherEntraves(listesEntraves) {
        console.log(listesEntraves[0]);
        listesEntraves.forEach(
            function (entrave) {
                let gabarit = `
                <div class="entrave">
                    <p class="title">${entrave.dc_title}</p>
                    <p>Durée: ${entrave.dc_valid.start} - ${entrave.dc_valid.end}</p>
                    <p>${entrave.affectedArea}</p>
                </div>`;
                this.conteneur.insertAdjacentHTML("beforeend", gabarit);
            }.bind(this)
        );
    }
}

export default App;
