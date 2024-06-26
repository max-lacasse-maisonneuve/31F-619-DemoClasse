import GestionnaireMusee from "../classes/GestionnaireMusee.js";
import BoutonDanger from "../classes/BoutonDanger.js";
new GestionnaireMusee();

console.log(GestionnaireMusee.instance);
new BoutonDanger(document.body);
