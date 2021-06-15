'use strict';
/*function logger() {
    console.log('My name is Xanthe');
}

logger();

function fruitProcessor (apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}
const appleJuice = fruitProcessor(5,0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2,4);
console.log(appleOrangeJuice);

//function declaration:

function calcAge1(birthYear) {
    return 2021 - birthYear;
}

const age1 = calcAge1(1982);
console.log(age1);

//function expression:

const calcAge2 = function (birthYear) {
    return 2021 - birthYear;
}

const age2 = calcAge2(1982);
console.log(age2); 

//arrow function:

const calcAge3 = birthYear => 2021 - birthYear;
const age3 = calcAge3(1975);
console.log(age3);

const yearsUntilRetirement = (birthYear, name) => {
    const age = 2021 - birthYear;
    const retirement = 65 - age;
    //return retirement;
    return `${name} retires in ${retirement} years.`
}

console.log(yearsUntilRetirement(1982, 'Xanthe'));

//function that calls another function

function cutFruitPieces(fruit) {
    return fruit * 4;
}

// arrow function of this: const cutFruitPieces = fruit => fruit * 4;

function fruitProcessor (apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces`;
    return juice;
}

console.log(fruitProcessor(2,3)); 

const calcAge = function(birthYear) {
    return 2021 - birthYear;
} 

const yearsUntilRetirement = function(birthYear, name) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    if (retirement > 0){
        return retirement;
    } else {
    return -1;
}
    //return `${name} retires in ${retirement} years.`
}

console.log(yearsUntilRetirement(1945, 'Mike'));
console.log(yearsUntilRetirement(1982, 'Xanthe')); 

const friends = ['Michael', 'Steven', 'Peter']
const newLength = friends.push('Jay'); // value is 4. Don't normally store this though.
console.log(friends);
console.log(newLength); //4 

//Object which contains 5 key-value pairs (or property-value pairs):

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtman',
    age: 2021 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};

//console.log(jonas.lastName);
//console.log(jonas['lastName']); // 2 ways to access the properties of an object

const nameKey = 'Name';
//console.log(jonas['first' + nameKey]); // Jonas
//console.log(jonas['last' + nameKey]); // Schmedtman

//const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, or friends.')


if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
    console.log('Invalid request');
}

// adding a value to an object
jonas.location = 'Portugal';
jonas[twitter] = '@jonasschmedtman';
console.log(jonas); 

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}.`); 

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtman',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,
    calcAge: function() {
        this.age = 2021 - this.birthYear;
        return this.age;
    },
    getSummary: function() {
        return `${this.firstName} is a ${this.calcAge()} year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.` 
    }
};

console.log(jonas.getSummary())


    calcAge: function(birthYear) { //calcAge is a property of the jonas object, so not a const
        return 2021 - birthYear;
    } 
    //calcAge: function(birthYear) {
        //console.log(this);
        //return 2021 - this.birthYear; //'this' = the object calling the method
    


//console.log(jonas.calcAge(jonas.birthYear)); //call the function with dot notation
//console.log(jonas['calcAge'](jonas['birthYear'])); // call with bracket notation

//console.log(jonas.age) // for the last version of the calcAge method 

//for loops: instead of this:
console.log('Lifting weights repetition 1');
console.log('Lifting weights repetition 2');
console.log('Lifting weights repetition 3');
console.log('Lifting weights repetition 4');
console.log('Lifting weights repetition 5');
console.log('Lifting weights repetition 6'); // DRY!

//do this:

for(let rep=1; rep<= 6; rep++) {
    console.log(`Lifting weights repetition ${rep}`);
} 

const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];

const types=[];

//console.log(jonas[0]);
//console.log(jonas[1]);
//console.log(jonas[2]);
//console.log(jonas[3]);
//console.log(jonas[4]);

for(let i = 0; i < jonasArray.length; i++) {
    //Reading from jonasArray
    console.log(jonasArray[i], typeof jonasArray[i]);
    //Filling types array
    //types[i] = typeof jonasArray[i];
    types.push(typeof jonasArray[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];
for (let i = 0; i < years.length; i++) {
    ages.push(2021 - years[i]);
}

console.log(ages);

//continue and break
console.log('___ONLY STRINGS___')
for(let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] !== 'string') continue;
    console.log(jonasArray[i], typeof jonasArray[i]);
}

console.log('___BREAK WITH NUMBER___')
for(let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] === 'number') break;
    console.log(jonasArray[i], typeof jonasArray[i]);
    
} 

const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
];

//looping backwards over an array
for (let i = jonas.length - 1; i >= 0; i--) {
    console.log(i, jonas[i]);
} 

//loop inside a loop - imagine we want to do 3 different weight sets, 5 reps each
for (let exercise = 1; exercise <4; exercise ++) {
    console.log(`____Starting exercise ${exercise}`)

    for (let rep = 1; rep <6; rep ++) {
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`)
    }
}  

for (let rep = 1; rep <=10; rep++) {
    console.log(`Lifting weights repetition ${rep}`);
} 

let rep = 1;
while (rep <= 10) {
    console.log(`WHILE: Lifting weights repetition ${rep}`);
    rep++;
} 

//while loops are meant to be used when you don't know num repetitions
let dice = Math.trunc(Math.random() * 6) + 1; 

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Loop is about to end.')
} */