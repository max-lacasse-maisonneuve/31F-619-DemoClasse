// import { config } from "../../../config.js";
import { codeMeteo, coordVilles } from "../data/codeMeteo.js";
import IconeMeteo from "./IconeMeteo.js";

class App {
    constructor() {
        this.city;
        this.latitude;
        this.longitude;
        this.meteo;
        this.temperature;

        this.container = document.querySelector(".meteo");
        this.spinner = this.container.querySelector(".spinner");
        this.iconHTML = this.container.querySelector(".meteo__icon");
        this.textHTML = this.container.querySelector(".meteo__text");

        this.init();
    }

    init() {
        const url = "templates/footer.html";
        fetch(url)
            .then(function (reponse) {
                return reponse.text();
            })
            .then(function (reponseText) {
                let now = new Date();
                reponseText = reponseText.replace("{{ APP_NAME }}", `Application météo. &copy; ${now.getFullYear()}`);
                document.querySelector("[data-footer]").insertAdjacentHTML("beforeend", reponseText);
            })
            .catch(function (erreur) {
                console.log(erreur);
            });

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

        const gabaritPub = document.querySelector("template#publicite");
        const pubConteneur = document.querySelector("[data-pub]");

        pubData.forEach(function (data) {
            const clone = gabaritPub.content.cloneNode(true);
            clone.querySelector("h3").textContent = data.title;
            clone.querySelector("h4").textContent = data.description;
            pubConteneur.append(clone);
        });
        this.getCurrentUserPosition();
        // this.getWeatherData(coordVilles.marseille);
        this.showHeader();
    }

    getHeader() {}

    showHeader() {
        Object.keys(coordVilles).forEach(
            function (ville) {
                let buttonTemplate = `<button>${ville}</button>`;
                const buttonList = document.querySelector(".buttons");

                buttonList.insertAdjacentHTML("beforeend", buttonTemplate);

                let position = coordVilles[ville];
                let button = buttonList.lastElementChild;
                button.addEventListener(
                    "click",
                    function () {
                        this.getWeatherData(position);
                    }.bind(this)
                );
            }.bind(this)
        );
    }

    async getWeatherData(position) {
        const API_key = "f67ac0abd5ea08547d5a0628ef5fbe1f";
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}&units=metric&lang=fr`;
        // let patate = fetch(url);
        // console.log(patate);

        this.spinner.classList.remove("invisible");
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
        try {
            const reponse = await fetch(url);
            const reponseJson = await reponse.json();

            this.city = reponseJson.name;
            this.temperature = reponseJson.main.temp;
            let iconeTemp = reponseJson.weather[0].icon;
            this.iconeSrc = `assets/img/icones/${codeMeteo[iconeTemp]}.svg`;

            this.showWeatherInfo();
        } catch (erreur) {
            console.log(erreur);
        }
    }

    getCurrentUserPosition() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                function (localisation) {
                    this.getWeatherData(localisation);
                }.bind(this),
                function (erreur) {
                    console.log(erreur);
                }
            );
        }
    }

    showWeatherInfo(isVisible) {
        this.textHTML.querySelector(".city").textContent = this.city;
        this.textHTML.querySelector(".temperature").textContent = `${this.temperature.toFixed(0)} °C`;
        this.iconHTML.querySelector("img").src = this.iconeSrc;
        this.spinner.classList.add("invisible");
    }

    showSpinner(isVisible) {}

    displayError(isVisible) {}
}

export default App;
