const nameRestaurant = "food-js";
// nom du retaurant variable type string
let numberTable = 20;
// nombre de table dans le restaurant variable type number
let usedTables = 7;
// nombre de tables utilisées variable type number
let price = 45;
// prix moyen d'un repas variable type number
console.log(nameRestaurant, numberTable, usedTables, price);

let remainingTable = (numberTable-usedTables);
console.log(remainingTable);

console.log(remainingTable>=1);
console.log(remainingTable >= 5);
// est ce qu'il y a au moins 5 tables disponibles
console.log(" Moins de 3 tables disponible : " remainingTable <3);
// est ce qu'il y a au moins 3 tables restantes

console.log(remainingTable===numberTable);
//  est ce que le restaurant est plein

let turnover= usedTables *price *6;
console.log(turnover);
// chiffre d'affaire potentiel

turnover+=10;
console.log(turnover);

let message1 ="Bienvenue au restaurant"
let message2= nameRestaurant;
let welcomeMessage = message1 + message2;
console.log( welcomeMessage);

console.log(`${welcomeMessage} il reste ${usedTables} tables`); 