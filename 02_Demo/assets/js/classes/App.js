import { codeMeteo, coordVilles } from "../data/codeMeteo.js";

//Permet d'utiliser la balise <icone-meteo> dans le HTML
import IconeMeteo from "../components/IconeMeteo.js";

class App {
    #city;
    #temperature;
    #iconeSrc;
    #nomIcone;

    #container;
    #spinner;
    #iconHTML;
    #textHTML;

    constructor() {
        this.#city;
        this.#temperature;
        this.#iconeSrc;
        this.#nomIcone = "soleil"; //Par défaut, on affiche l'icône "soleil"

        this.#container = document.querySelector(".meteo");
        this.#spinner = this.#container.querySelector(".spinner");
        this.#iconHTML = this.#container.querySelector(".meteo__icon");
        this.#textHTML = this.#container.querySelector(".meteo__text");

        this.#init();
    }

    #init() {
        this.#addFooter();
        this.#addAdvertisement();
        this.#showHeader();
        this.#textHTML.classList.add("invisible");
        this.#iconHTML.classList.add("invisible");
        //Au chargement, on récupère la position de l'utilisateur
        this.#getCurrentUserPosition();
    }

    /**
     * Fonction pour ajouter les publicités
     * Méthode d'affichage avec la balise template
     */
    #addAdvertisement() {
        //Ajouter les publicités
        const pubData = [
            {
                title: "Pub 1",
                description: "lorem ipsum",
            },
            {
                title: "Pub 2",
                description: "lorem ipsum",
            },
        ];

        //On récupère le gabarit de la publicité.
        //Le gabarit est situé dans le fichier index.html dans une balise <template>
        const gabaritPub = document.querySelector("template#publicite");
        const pubConteneur = document.querySelector("[data-pub]");

        pubData.forEach(function (data) {
            // On clone le gabarit et on remplace les données.
            // True permet de cloner les enfants du gabarit
            const clone = gabaritPub.content.cloneNode(true);

            clone.querySelector("h3").textContent = data.title;
            clone.querySelector("h4").textContent = data.description;

            //On ajoute le clone au conteneur. On utilise append lorsqu'il s'agit d'un élément HTML
            pubConteneur.append(clone);
        });
    }

    /**
     * Fonction pour ajouter le pied de page
     * Méthode d'affichage avec fetch avec un fichier html externe
     */
    #addFooter() {
        //Le chemin du fichier est toujours relatif au fichier HTML qui appelle la fonction fetch
        //Dans ce cas-ci, index.html est le fichier qui appelle la fonction fetch
        const url = "templates/footer.html";

        fetch(url)
            .then(function (reponse) {
                //Objet Response
                //On traite la réponse, c'est une promesse. C'est pour cela qu'il y a un autre then
                return reponse.text();
            })
            .then(
                function (reponseText) {
                    //On remplace la variable {{ APP_NAME }} par le nom de l'application et l'année courante
                    let now = new Date();

                    reponseText = reponseText.replace(
                        "{{ APP_NAME }}",
                        `Application météo. &copy; ${now.getFullYear()}`
                    );

                    //On utilise insertAdjacentHTML car la variable reponseText est une chaine de caractères
                    document.querySelector("[data-footer]").insertAdjacentHTML("beforeend", reponseText);
                }.bind(this)
            )
            .catch(function (erreur) {
                //En cas d'erreur, on affiche l'erreur dans la console
                console.log(erreur);
            });

        //Méthode avec async/await
        // try {
        //     const reponse = await fetch(url);
        //     const reponseText = await reponse.text();
        //
        //     let now = new Date();
        //     reponseText = reponseText.replace(
        //         "{{ APP_NAME }}",
        //         `Application météo. &copy; ${now.getFullYear()}`
        //     );
        //     document.querySelector("[data-footer]").insertAdjacentHTML("beforeend", reponseText);
        // } catch (erreur) {
        //     console.log(erreur);
        // }
    }

    /**
     * Fonction pour afficher les boutons de villes
     * Méthode d'affichage en injectant le HTML directement dans le JS
     */
    #showHeader() {
        //Afficher les boutons de villes
        //Object.keys permet de récupérer les clés d'un objet sous forme de tableau
        Object.keys(coordVilles).forEach(
            function (ville) {
                const buttonList = document.querySelector(".buttons");

                let buttonTemplate = `<button>${ville}</button>`;
                buttonList.insertAdjacentHTML("beforeend", buttonTemplate);
                let button = buttonList.lastElementChild;

                //Ajouter un écouteur d'événement sur chaque bouton
                //Au clic, on récupère les données météo de la ville correspondante et on les affiche
                let position = coordVilles[ville];
                button.addEventListener(
                    "click",
                    function () {
                        this.#getWeatherData(position);
                    }.bind(this)
                );
            }.bind(this)
        );
    }

    /**
     * Fonction pour récupérer les données météo de manière asynchrone
     * @param {*} position
     */
    async #getWeatherData(position) {
        //Afficher le spinner
        this.#spinner.classList.remove("invisible");

        const API_key = "f67ac0abd5ea08547d5a0628ef5fbe1f"; //TODO: METTRE VOTRE PROPRE CLÉ API OPENWEATHERMAP
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}&units=metric&lang=fr`;

        //Méthode avec fetch et async/await
        try {
            const reponse = await fetch(url);
            const reponseJson = await reponse.json();

            //Si la réponse est traitée, on affiche les données
            //On change les valeurs des propriétés privées pour y avoir accès dans les autres méthodes de la classe
            this.#city = reponseJson.name;
            this.#temperature = reponseJson.main.temp;

            this.#nomIcone = codeMeteo[reponseJson.weather[0].icon];
            // this.#iconeSrc = `assets/img/icones/${nomIcone}.svg`;

            this.#showWeatherInfo(); //On affiche les données météo
        } catch (erreur) {
            console.log(erreur);
        }

        //Méthode avec fetch et promesses (then, catch)
        //Fetch == Promesse
        // fetch(url)
        //     .then(function (reponse) {
        //         //Objet Response
        //         console.log(reponse);
        //         //Traitement reponse == Promesse
        //         return reponse.json();
        //     })
        //     .then(
        //         function (reponseJson) {
        //             console.log(reponseJson);
        //             this.city = reponseJson.name;
        //             this.temperature = reponseJson.main.temp;
        //             let iconeTemp = reponseJson.weather[0].icon;
        //             this.iconeSrc = `assets/img/icones/${codeMeteo[iconeTemp]}.svg`;

        //             this.showWeatherInfo();
        //         }.bind(this)
        //     )
        //     .catch(function (erreur) {
        //         console.log(erreur);
        //     });
    }

    /**
     * Fonction pour récupérer la position de l'utilisateur via la fonction geolocation du navigateur
     */
    #getCurrentUserPosition() {
        //Vérifier si le navigateur supporte la géolocalisation
        if (navigator.geolocation) {
            //Récupérer la position de l'utilisateur
            navigator.geolocation.getCurrentPosition(
                function (localisation) {
                    //Si l'utilisateur partage sa position, on récupère les données météo et on les affiche
                    this.#getWeatherData(localisation);
                }.bind(this),
                function (erreur) {
                    //Si l'utilisateur refuse de partager sa position, on affiche la météo de Marseille par défaut
                    this.#getWeatherData(coordVilles.marseille);
                }
            );
        }
    }

    /**
     * Fonction pour afficher les données météo
     */
    #showWeatherInfo() {
        //On cache le spinner
        this.#spinner.classList.add("invisible");

        this.#textHTML.classList.remove("invisible");
        this.#iconHTML.classList.remove("invisible");

        //On modifie le contenu HTML
        this.#textHTML.querySelector(".city").textContent = this.#city;
        this.#textHTML.querySelector(".temperature").textContent = `${this.#temperature.toFixed(0)} °C`;
        this.#iconHTML.querySelector("icone-meteo").dataset.type = this.#nomIcone;
    }
}

export default App;
