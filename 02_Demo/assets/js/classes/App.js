// import { config } from "../../../config.js";
// import { codeMeteo, coordVilles } from "../data/codeMeteo.js";

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

    init() {}

    getHeader() {}

    showHeader() {}

    getWeatherData(position) {}

    getCurrentUserPosition() {}

    showWeatherInfo(isVisible) {}

    showSpinner(isVisible) {}

    displayError(isVisible) {}
}

export default App;
