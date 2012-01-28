//Author: Justin Ball
// January 26,2011
// Project 4

//MAKE UP: Scope / Project 2
var feedDog = function (dogName, food) {
  console.log("I fed my dog " + dogName + " some " + food);
var feedCat = function (catName, food){
  console.log("Also fed " + food + " to " + catName);)
};
    feedCat("Chewy", "cat food");
    feedCat("Garfield", "cat food");
  console.log(dogName + " enjoys his " + food);
};
feedDog("Wilson", "dog food.");

//MAKE UP: Returns /Project 2
var buyTwix = function(givenMoney)  {
    var smallTwix = 1,
      bigCandy;
    if (givenMoney < smallTwix) {
      console.log("I can't afford Twix with that much money.");
      return;
}
    bigCandy = Math.floor(givenMoney / smallTwix);
      return bigCandy;
};

var affordTwix = buyTwix(10);
console.log("Thanks for purchasing " + affordTwix + " Twix candies.");

//String Follow 123-456-7890 pattern like phone number?
var cellNumber = function(cell){
  var numOptions =  /^(\d{3})-(\d{3})-(\d{4})$/; 
  if (cell.match(numOptions)) {
    workingNum = cell " is a number. ";//TRUE
    return workingNum;
  } else {
      nonworkNum = "Number" + cell + "is not correct.";//FALSE
      return nonworkNum;
}
};

// Does a string follow an aaa@bbb.ccc pattern like an email address?

var emailTest = function(email) {
    var emailAddress = (/^[a-zA-Z0-9_\.\-] + @[a-zA-Z0-9\-] + \.[a-zA-Z]{2,4}$/);
    if (emailAddress) {
      works = email + "Email address works.";
      return works;
    }else {
      notWork = email + " This email does not properly work.";
      return notWork;
}
};


