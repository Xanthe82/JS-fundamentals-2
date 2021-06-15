"use strict";

/* 
function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const c1 = describeCountry('England', 6, 'London');
const c2 = describeCountry('Sweden', 7, 'Stockholm');
const c3 = describeCountry('France', 4, 'Paris');

console.log(c1, c2, c3); 

function percentageOfWorld1(country, population) {
    return `The population of ${country} is ${(population/7900) * 100} per cent of the world population.`;
}
const England = percentageOfWorld1("England", 56);
const Spain = percentageOfWorld1("Spain", 47);
const NorthAmerica = percentageOfWorld1("North America", 579);
console.log(England, Spain, NorthAmerica); 

const percentageOfWorld2 = function(country, population) {
    return `The population of ${country} is ${(population/7900) * 100} per cent of the world population.`;
}

const Eng = percentageOfWorld2("England", 56);
const Spa = percentageOfWorld2("Spain", 47);
const NA = percentageOfWorld2("North America", 579);
console.log(Eng, Spa, NA); 

const percentageOfWorld3 = (country, population) => {
    return `The population of ${country} is ${(population/7900) * 100} per cent of the world population.`; 
}

const popEngland = percentageOfWorld3("England", 56);
console.log(popEngland); 

function percentageOfWorld1(population) {
    return population/7900 * 100;
}

//alternative: const describePopulation = function(country, population);
function describePopulation(country, population) {
    const percentage = percentageOfWorld1(population);
    const description = console.log(`${country} has ${population} million people, which is ${percentage} % of the world.`)
}

describePopulation('England', 56);
describePopulation('Portugal', 10); 

function percentageOfWorld1(population) {
    return population/7900 * 100;
}

const populations = [56, 47, 579, 10];

console.log(populations.length === 4);

const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3])];

console.log(percentages); 

const neighbours = ['Norway', 'Sweden', 'Russia'];
neighbours.push('Utopia');
console.log(neighbours);
neighbours.pop();
console.log(neighbours);

if (!neighbours.includes('Germany')) {
    console.log('Probably not an Eastern European country.');
}

neighbours [neighbours.indexOf('Sweden')] = ('Republic of Sweden');
console.log(neighbours); 

const myCountry = {
    country: 'England',
    capital: 'London',
    language: 'English',
    population: 6,
    neighbours:['Scotland', 'Wales']
} 

//console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`)

myCountry.population += 2;
console.log(myCountry);

myCountry['population'] -= 2;
console.log(myCountry); 

const myCountry = {
    country: 'England',
    capital: 'London',
    language: 'English',
    population: 6,
    neighbours:['Scotland', 'Wales'],
    describe: function() {
        console.log(`${this.country} has ${this.population} miliion ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`);
        
    },
    
    checkIsland: function() {
        this.isIsland = this.neighbours.length === 0 ? true : false;
        return this.isIsland;
        //this.isIsland = !Boolean(this.neighbours.length);
    }
}; 

myCountry.describe();
console.log(myCountry.checkIsland()); 

for (let voter = 1; voter <= 50; voter++) {
    console.log(`Voter number ${voter} is currently voting.`)
}; 


function percentageOfWorld1(population) {
    return population/7900 * 100;
}

const populations = [56, 47, 579, 10];
let percentages2 = [];
for (let i = 0; i < populations.length; i++) {
    const perc = (percentageOfWorld1(populations[i]));
    percentages2.push(perc);
}
console.log(percentages2);


const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];

for(let i=0; i<listOfNeighbours.length; i++){
    for (let j=0; j<listOfNeighbours[i].length; j++) {
        console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
    }
}; 

let dice = Math.trunc(Math.random() * 6) + 1; 

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Loop is about to end.')
} 

function percentageOfWorld1(population) {
    return population/7900 * 100;
}

const populations = [56, 47, 579, 10];
let percentages3 = [];
let i = 0;
while (i < populations.length) {
    const perc = (percentageOfWorld1(populations[i]));
    percentages3.push(perc);
    i ++;
};
console.log(percentages3);

same thing as for loop:
const populations = [56, 47, 579, 10];
let percentages2 = [];
for (let i = 0; i < populations.length; i++) {
    const perc = (percentageOfWorld1(populations[i]));
    percentages2.push(perc);
}
console.log(percentages2); */
