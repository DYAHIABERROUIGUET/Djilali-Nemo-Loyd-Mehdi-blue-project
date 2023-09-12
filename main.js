class Player {
    constructor(username, alignment, gold, inventory) {
        this.username = username;
        this.alignment = alignment;
        this.gold = gold;
        this.inventory = inventory;
    }
}

// Fonction pour initialiser le joueur
function initializePlayer() {
    const username = prompt("Entrez votre pseudo :");
    const alignment = parseInt(prompt("Entrez votre niveau d'alignement :"));
    const gold = parseInt(prompt("Entrez la quantité d'or que vous possédez :"));
    
    // Créez une instance de la classe Player avec les valeurs entrées
    const player = new Player(username, alignment, gold, []);

    // Redirigez vers la page d'initialisation avec les paramètres du joueur
    window.location.href = `initialisation.html?username=${player.username}&alignment=${player.alignment}&gold=${player.gold}`;
}

// Appelez la fonction initializePlayer pour initialiser le joueur et déclencher la redirection
initializePlayer();
