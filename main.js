class Player {
    constructor(username, alignment, gold, inventory) {
      this.username = username;
      this.alignment = alignment;
      this.gold = gold;
      this.inventory = inventory;
    }
}
class item {
    constructor(name, description, price, effect) {
      this.name = name;
      this.description = description;
      this.price = price;
      this.effect = effect;
    }
}

 PerformAction(actionType){
    if (actionType === "BonneAction"){
        this.alignment += 10;
    }
    else if (actionType === "MauvaiseAction"){
        this.alignment -= 10;
    }
 }
let item = {
    name: "Trèfle à quatre feuilles",
    description: "augmente l’or de base du joueur.",
    price: 0,
    effect: "",

};
let item = {
    name: "Bénédiction des dieux",
    description: "augmente le niveau d’alignement de base du joueur.",
    price: 0,
    effect: "",

};
let item = {
    name: "Bonne étoile",
    description: "augmente légèrement l’or et le niveau d’alignement de base du joueur.",
    price: 0,
    effect: "",

};