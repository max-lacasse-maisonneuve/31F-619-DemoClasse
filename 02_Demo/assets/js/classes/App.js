// import { config } from "../../../config.js";
import { codeMeteo, coordVilles } from "../data/codeMeteo.js";

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
        this.getWeatherData(coordVilles.marseille);
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

    getWeatherData(position) {
        const API_key = "f67ac0abd5ea08547d5a0628ef5fbe1f";
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}&units=metric&lang=fr`;

        this.spinner.classList.remove("invisible");
        fetch(url)
            .then(function (reponse) {
                return reponse.json();
            })
            .then(
                function (reponseJson) {
                    console.log(reponseJson);
                    this.city = reponseJson.name;
                    this.temperature = reponseJson.main.temp;
                    let iconeTemp = reponseJson.weather[0].icon;
                    this.iconeSrc = `assets/img/icones/${codeMeteo[iconeTemp]}.svg`;

                    this.showWeatherInfo();
                }.bind(this)
            )
            .catch(function (erreur) {
                console.log(erreur);
            });
    }

    getCurrentUserPosition() {}

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
