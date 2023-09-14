// Définition d'une classe Player pour représenter un joueur avec des attributs tels que le nom d'utilisateur, l'alignement, l'or et l'inventaire.
class Player {
    constructor(username, alignment, gold, inventory) {
      this.username = username;
      this.alignment = alignment;
      this.gold = gold;
      this.inventory = inventory;
    }
}

// Définition d'une fonction initializePlayer pour recueillir les informations du joueur à l'aide de la fonction prompt.
function initializePlayer() {
    const username = prompt("Entrez votre pseudo :");
    const alignment = parseInt(prompt("Entrez votre niveau d'alignement :"));
    const gold = parseInt(prompt("Entrez la quantité d'or que vous possédez :"));
}

// Redéfinition de la fonction initializePlayer (ceci peut provoquer un écrasement de la précédente).

// Redirection vers une page nommée 'initialisation.html' avec des paramètres d'URL contenant les données du joueur.
window.location.href = `initialisation.html?username=${player.username}&alignment=${player.alignment}&gold=${player.gold}`;

// Création d'une instance de la classe Player en utilisant les données recueillies précédemment.
const player = new Player(username, alignment, gold, []);

// Définition d'une classe item pour représenter des objets du jeu avec des attributs tels que le nom, la description, le prix et l'effet.
class Item {
    constructor(name, description, price, effect) {
      this.name = name;
      this.description = description;
      this.price = price;
      this.effect = effect;
    }
}

// Définition d'une fonction PerformAction pour effectuer des actions en fonction du type d'action spécifié.
function PerformAction(actionType) {
    if (actionType === "BonneAction") {
        // Augmente l'alignement du joueur de 10 en cas d'action "BonneAction".
        this.alignment += 10;
    } else if (actionType === "MauvaiseAction") {
        // Diminue l'alignement du joueur de 10 en cas d'action "MauvaiseAction".
        this.alignment -= 10;
    }
}
