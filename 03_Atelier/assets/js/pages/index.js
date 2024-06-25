import Minuteur from "../classes/Minuteur.js";
import Modale from "../classes/Modale.js";

const minuteurConteneur = document.querySelector("[data-minuteur-conteneur]");
new Minuteur(minuteurConteneur, 120);

//On écoute l'événement 'finMinuteur' et on déclenche une modale indiquant que le minuteur est terminé
//EX: new Modale("Le minuteur est terminé", document.body).afficher();
