// CHAPTER 01 (ALERT)

//alert("Thanks for such a good friend")
//alert("Put your name first")

//CHAPTER 02 (VARIABLE FOR STRING)

//var a = "Hira";
//var b = "Alvi";
//var c = a + b;
//console.log(c)

//var x = "Camel";
//var y = "case";
//var z = x + y;
//console.log(z)

//CHAPTER 03 (VERIABLE FOR NUMBER)

//var x = 5;
//var y = 6;
//var z = x + y;
//console.log(z)

//CHAPTER 04 (VARIABLE NAMES LEGAL AND ILLEGAL)

//var pop1 = 2;
//var $dad = 4;
//var CamelCase = 15;
//var rose8 = CamelCase - $dad * pop1;
//console.log(rose8)

//CHAPTER 05 (MATH EXPRESSIONS: FAMILIAR OPERATORS)

//var a = 10;
//var b = 8;
//var c = a + b
//console.log(c)


//var f = 20;
//var g = 5;
//var h = a * b
//console.log(h)

//CHAPTER 06 (MATH EXPRESSIONS: UNFAMILIAR OPERATORS)
// post increment:
//var x = 10;
//var y = x++;
//console.log(y)

//per increment:
//var a = 5;
//var b = ++a;
//console.log(b)

//post decriment:
//var a = 12;
//var b = a--;
//console.log(b)

// pre decriment
//var x = 7;
//var y = --x;
//console.log(y)

//var a = 8
//var b = a++ + a + ++a - a + a++ - ++a;
//console.log(b)

//CHAPTER 07 ((MATH EXPRESSIONS:ELIMINATING AMBIGUITY)

//var a = 1 + (3 * 4);
//console.log(a)

//var b = 2 - (5 + 3) * 8
//console.log(b)

//CHAPTER 08 (Concatenating text strings)
//var message = "Thanks, ";
//var banger = "!";
//alert(message + banger);


//var l = 20;
//var m = "20";
//var n = l + m;
//console.log(n)

//CHAPTER 09 (Prompts)

//var question = "Your species?";
//var defaultAnswer = "human";
//var spec = prompt(question, defaultAnswer);

//CHAPTER 10 (if statements)

//var x = prompt("Where does the Pope live?");
//if (x === "Vatican") 
    //alert("Correct!");
      
// CH # 11 Comparison Operators:

// if (fullName === "Mark" + " " + "Myers");

// if (totalCost === materialsCost + laborCost);

// if (yourTicketNumber !== 487208) {
//      alert("Better luck next time.");
// }

// if (1 > 0) {
// if (0 < 1) {
// if (1 >= 0){
// if (1 >= 1) {
// if (0 <= 1) {
// if (1 <= 1) ;


// CH # 12 if...else and else if statements

// var x = prompt("Where does the people live ?")

// if (x === "London") {
//     alert("Your answer is correct!");
// }

// if (x !== "London") {
//     alert("Your answer is incorrect!");
// } 

// var rightAns = "Canada";

// if (rightAns === "Canada") {
//     alert("Correct!"); 
// }

// else if (rightAns === "Paris") {
//     alert("Incorrect! But close");  
// }

// CH # 13 Testing sets of conditions

// if (weight > 300 && time < 6 && age > 17 && gender === "male") {
//      alert("Come to our tryout!");
//      }
//      else {
//      alert("Come to our cookout!");
//      }

// CH # 14 if statements nested

// if (c === d) {
//      if (x === y) {
//      g = h;
//      }
//      else if (a === b) {
//      g = h;
//      }
//      else {
//      e = f;
//      }
//      }
// else {
//   e = f;
// }

// CH # 15 Arrays

// var cities = ("Tokyo", "Rio", "Berlin", "Denver", "Helisinki", "Nairobi");
// alert("Welcome to " + cities[2]);

// CH # 16 Arrays:Adding and removing elements
// CH # 17 Arrays:Removing, inserting,and extracting elements

// var pets = [];

// pets[0] = "dog";
// pets[1] = "cat";
// pets[2] = "bird";
// pets[3] = "lizard";
// pets[4] = "fish";
// pets[5] = "gerbil";
// pets[6] = "snake";

// alert(pets);

// pets.pop();
// alert(pets)

// pets.push("fish", "ferret");
// alert(pets);

// pets.shift();
// alert(pets);

// pets.unshift("Lion", "Tiger");
// alert(pets);

// pets.splice(2, 2, "Elephant", "Duck", "Cheetah");
// alert(pets);

// var noPets = pets.slice(2, 4);
// alert(pets);

// CH # 18 for loops

// var cleanestCities = ["Cheyenne", "Santa Fe", "Tucson", "Great Falls", "Honolulu"];
// if (cityToCheck === cleanestCities[0]) {
//     alert("It's one of the cleanest cities");
// }
// else if (cityToCheck === cleanestCities[1]) {
//     alert("It's one of the cleanest cities");
// }
// else if (cityToCheck === cleanestCities[2]) {
//     alert("It's one of the cleanest cities");
// }
// else if (cityToCheck === cleanestCities[3]) {
//     alert("It's one of the cleanest cities");
// }
// else if (cityToCheck === cleanestCities[4]) {
//     alert("It's one of the cleanest cities");
// }
// else {
//     alert("It's not on the list");
// }

// for (var i = 0; i <= 4; i++) {
//     if (cityToCheck === cleanestCities[i]) {
//         alert("It's one of the cleanest cities");
//     }
// }

// CH # 19 for loops: Flags, Booleans, array length, and loopus interruptus

// var matchFound = false;
// for (var i = 0; i <= 4; i++);
// if (cityToCheck === cleanestCities[i]) {
//     matchFound = true;
//     alert("It's one of the cleanest cities");
// }
//  }
// if (matchFound === false) {
//     alert("It's not on the list");
// }

// var matchFound = false;
// for (var i = 0; i <= 4; i++);
// if (cityToCheck === cleanestCities[i]) {
//     matchFound = true;
//     alert("It's one of the cleanest cities");
//     break;
// }
//  }
// if (matchFound === false) {
//     alert("It's not on the list");
// }

// CH # 20 for loops nested

// var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
// var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
// var fullNames = [];
// for (var i = 0; i < firstNames.length; i++) {
//     for (var j = 0; j < lastNames.length; j++) {
//         fullNames.push(firstNames[i] + lastNames[j]);
//     }
// }
