import App from "../classes/App.js";

new App();
const API_key = "f67ac0abd5ea08547d5a0628ef5fbe1f";
const lat = 48.8566;
const lon = 2.3522;

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}`;

console.log("avant");
fetch(url)
    .then(function (reponse) {
        console.log(reponse);
        return reponse.json();
    })
    .then(function (reponseJson) {
        console.log(reponseJson);
    })
    .catch(function (erreur) {
        console.log(erreur);
    });
console.log("après");
