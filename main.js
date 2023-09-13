class Player {
    constructor(username, alignment, gold, inventory) {
      this.username = username;
      this.alignment = alignment;
      this.gold = gold;
      this.inventory = inventory;
    }
}

function initializePlayer() {
    const username = prompt("Entrez votre pseudo :");
    const alignment = parseInt(prompt("Entrez votre niveau d'alignement :"));
    const gold = parseInt(prompt("Entrez la quantité d'or que vous possédez :"));
}
function initializePlayer() {
    const username = prompt("Entrez votre pseudo :");
    const alignment = parseInt(prompt("Entrez votre niveau d'alignement :"));
    const gold = parseInt(prompt("Entrez la quantité d'or que vous possédez :"));
}

window.location.href = `initialisation.html?username=${player.username}&alignment=${player.alignment}&gold=${player.gold}`;

const player = new Player(username, alignment, gold, []);

class item {
    constructor(name, description, price, effect) {
      this.name = name;
      this.description = description;
      this.price = price;
      this.effect = effect;
    }
}

function PerformAction(actionType) {
    if (actionType === "BonneAction"){
        this.alignment += 10;
    }
    else if (actionType === "MauvaiseAction"){
        this.alignment -= 10;
    }
 }