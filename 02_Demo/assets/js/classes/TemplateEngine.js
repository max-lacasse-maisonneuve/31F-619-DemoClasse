class TemplateEngine {
    /**
     *
     * @param {String} sourceURL l'url de la ressource à récupérer
     * @returns {String} Le gabarit récupéré ou une erreur
     */
    static async getTemplate(sourceURL) {
        try {
            const requete = await fetch(sourceURL);
            const reponse = await requete.text();

            return reponse;
        } catch (error) {
            return error;
        }
    }
    /**
     *
     * @param {String} template Une chaine comprenant le HTML du gabarit
     * @param {Object} data Un objet dans lequel passer pour remplacer les éléments
     * @returns
     */
    static render(template, data) {
        Object.keys(data).forEach(function (key) {
            const replacement = data[key];

            const regex = new RegExp(`\{\{(${key})\}\}`, "g");
            template = template.replaceAll(regex, replacement);
        });
        return template;
    }

    /**
     *
     * @param {String} html Un chaine comprenant le HTML à injecter dans une balise template.
     * @param {HTMLElement} container
     * @returns
     */
    static injectFromTemplateTag(html, container) {
        let parser = new DOMParser();

        let doc = parser.parseFromString(html, "text/html");
        let template = doc.querySelector("template");
        let clone = template.content.cloneNode(true);
        container.append(clone);

        const elementHTML = container.lastElementChild;

        return elementHTML;
    }

    /**
     *
     * @param {String} html Un chaine comprenant le HTML à injecter sans balise template.
     * @param {HTMLElement} container
     * @returns
     */
    static injectFromString(html, container, position = "beforeend") {
        container.insertAdjacentHTML(position, html);
        const elementHTML = container.lastElementChild;

        return elementHTML;
    }
}

export default TemplateEngine;
