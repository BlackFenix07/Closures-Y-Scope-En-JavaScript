// VARIABLES.
var a; // Declaración.
var a = "A"; // Declaración y asignación.
var a = "Aa"; // Redeclaración.
a = "Aaa"; // Reasignación.

// GLOBAL SCOPE.
let fruit = "Apple"; // Global.
console.log(fruit);

function bestFruit() {
  console.log(fruit);
}
bestFruit();

function countries() {
  country = "Colombia"; // Global.
  console.log(country);
}
countries();
console.log(country);