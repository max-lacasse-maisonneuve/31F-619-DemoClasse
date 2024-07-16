class App {
    #taches; 
    #formulaire;
    #router; 

    constructor() {
        this.recupererToutesLesTaches();
        this.#taches=[];
        
        this.#formulaire;
        this.#router; 
    }

    async recupererToutesLesTaches() {
        const reponse = await fetch("http://localhost/backend/taches/lireTout.php");
        const taches = await reponse.json();
        console.log(taches);
    }
}

export default App;
