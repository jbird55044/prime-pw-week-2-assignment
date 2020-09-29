// REQUIRED FEATURES:
// 1 - Create a variable called `firstName` and assign it the value of your first name
// 2 - Create a second variable called `lastName` and assign it the value of your last name

// 3 - Create a third variable called `fullName`, assign it the value of your first and last name
// (remember, you already have variables for this, can you use those?)
// 5 - Create a variable called `age` and assign it the value of your age

let user = {
    firstName: 'James',
    lastName: 'Bird',
    age: 53
};

let fullName = `${user.firstName} ${user.lastName}`;

// 4 - Console log the value of `fullName`
console.log(`Full name is:  ${fullName}`);

// 6 - Console log this sentence, adding in the variables you created above: 
// 'My name is (full name), and I am (age) years old.'.
// Refer back to the videos if you need help with this one.
console.log(`My name is ${fullName}, and I am ${user.age} years old.`);


// 7 - Create a variable named `adventurous` and set it to a boolean value (true or false)
let adventurous = true;

// 8 - Create a variable named `food`, and set its value to a string of your favorite food
let food = 'Salmon';

// 9 - Create a variable called `pets` and set it to the value of the number of pets you have
let pets = 1;

// 10 - Create a variable called `friendsPets` and assign it the value of the number of pets your friend has
let friendsPets = 1;

// 11 - Add two pets to your `pets` variable
pets =+2;

// 12 - Create a constant variable called `allowedPets` and set it to a number value of your choice
const allowedPets = 3;


// 13 - Create a conditional: if adventurous is true, console log "Adventures are great!", 
// if it's not true, console log "How about we stay home?"
adventurous ? console.log ("Adventures are great!") : console.log("How about we stay home?");


// STRETCH GOALS:
// 14 - Create a compound conditional: if age is greater than 18 and adventurous is true,
// console log "Hurray!"
if (user.age > 18 && adventurous) {
    console.log ("Hurray!")
} else {
    console.log("so sad")
};


// 15 - Write a conditional that console logs "I can have more pets!" 
//if the value of `pets` is less than the value of `allowedPets`,
// console logs "I have enough pets" if the value of `pets` is equal to the value of `allowedPets`,
// and console logs "Oh no, I have too many pets!"
// if the value of `pets` is greater than the value of `allowedPets`.

if (pets < allowedPets) {
    console.log ("I can have more pets!");
} else if (pets == allowedPets) {
    console.log ("I have enough Pets");
} else if (pets > allowedPets) {
    console.log ("Oh no, I have too many pets!");
} else {
    console.log ("I have no idea how many pets you have or can have");
};


// 16 - Write a conditional that assigns the value of the `pets` variable 
// to a new variable called `mostPets` IF `pets` is greater than `friendsPets`.
// If `friendsPets` is greater than `pets`, assign the value of the `friendsPets`
// variable to `mostPets`. Console log the value of `mostPets`.
let mostPets = 0;
let winner = "no winner"

if (pets > friendsPets) {
    mostPets = pets;
    winner = "I win"
} else if (friendsPets > pets) {
    mostPets = friendsPets;
    winner = "Friend Wins"
} else if (pets === friendsPets) {
    winner = "Its a tie"
} else {
    winner = "Jims logic losses"
};
console.log (`${winner} at ${mostPets} total`);


