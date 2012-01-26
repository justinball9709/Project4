//alert("JavaScript works!");

//function
var feedPirate = function (pirateName, food) {
  console.log("Gave some " + food + " to the pirate " + pirateName);
};

feedPirate("Morgan", "oranges");

//Example variable Scope
var feedDog = function (dogName, food) {
  console.log("I fed my dog " + dogName + " some " + food);
};

feedDog("Wilson", "dog food.");