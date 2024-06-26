import { assert, it } from "../utils/testHelper.js";
import museeInfos from "../data/museeInfos.js";
import Oeuvre from "../classes/Oeuvre.js";
import GestionnaireMusee from "../classes/GestionnaireMusee.js";
let gestionnaire = new GestionnaireMusee();

it("devrait avoir des oeuvres injectées", () => {
    let liste = document.querySelector(".card-container");

    assert(liste.children.length > 0, "Il n'y a pas de livres injectés");
});

it("gestionnaire devrait garder une liste des instances d'Oeuvre", () => {
    let liste = gestionnaire.listeOeuvresInstanciees;

    assert(liste.length > 0, "Il n'y a pas d'objets Oeuvre");
    assert(liste[0].constructor == Oeuvre, "Les éléments n'ont pas le bon prototype");
});

it("afficher devrait modifier la liste des éléments", () => {
    let instancesOeuvres = gestionnaire.listeOeuvresInstanciees;
    let listeTest = [instancesOeuvres[0].elementHTML];
    gestionnaire.afficherOeuvres(listeTest);

    let listeHTML = document.querySelector(".card-container");

    assert(listeHTML.children.length == 1, "Le gestionnaire n'affiche pas la bonne quantité d'oeuvres");
});

it("devrait avoir une seule instance de gestionnaire", () => {
    let instanceGestionnaire = GestionnaireMusee.instance;

    new GestionnaireMusee();
    let instanceGestionnaire2 = GestionnaireMusee.instance;

    assert(instanceGestionnaire === instanceGestionnaire2, "Les instances du gestionnaire ne sont pas pareilles");
});
