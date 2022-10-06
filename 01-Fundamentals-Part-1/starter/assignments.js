let country = 'Croatia',
  continent = 'Europe',
  population = '3.8';
console.log(country);
console.log(continent);
console.log(population);

const isIsland = false;
let language = 'Croatian';
console.log(isIsland);
console.log(language);

console.log(population / 2);
console.log(population++);

let populationOfFinland = 6;
console.log(population > populationOfFinland);
let averagePopulation = 33;
console.log(population < averagePopulation);

let description =
  country +
  ' is in ' +
  continent +
  ', and its ' +
  population +
  ' million people speak ' +
  language;
console.log(description);

if (population > 33) {
  console.log(`${country}'s population is above average.`);
} else {
  console.log(
    `${country}'s population is ${
      averagePopulation - population
    } million below average.`
  );
}

console.log(
  `${country}'s population is ${population > 33 ? 'above' : 'below'} average.`
);

//Coding challenge #1 & 2
let heightMark = 1.88,
  heightJohn = 1.76,
  weightMark = 95,
  weightJohn = 85;
let BMIMark = weightMark / heightMark ** 2;
let BMIJohn = weightJohn / heightJohn ** 2;
if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark} is higher than John's ${BMIJohn})`);
} else {
  console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})`);
}

//Coding challenge #3
let scoreDolphins = [99, 95, 103];
let scoreKoalas = [90, 95, 106];

let averageDolphins =
  (scoreDolphins[0] + scoreDolphins[1] + scoreDolphins[2]) / 3;
let averageKoalas = (scoreKoalas[0] + scoreKoalas[1] + scoreKoalas[2]) / 3;

if (averageDolphins > averageKoalas && averageDolphins >= 100) {
  console.log(
    `Average of Dolphins ${averageDolphins} is greater than average of Koalas ${averageKoalas}`
  );
} else if (averageDolphins === averageKoalas && averageDolphins >= 100)
  console.log(
    `Average of Dolphins ${averageDolphins} is the same as average of Koalas ${averageKoalas}`
  );
else if (averageDolphins < averageKoalas && averageKoalas >= 100)
  console.log(
    `Average of Dolphins ${averageDolphins} is smaller than average of Koalas ${averageKoalas}`
  );
else
  console.log(
    `Both averages ${averageDolphins} ${averageKoalas} are below 100 so no one wins the trophy.`
  );

//Coding challenge #4
let bill = 430;
let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(
  `The bill was ${bill}, the tip was ${tip} and the total value is ${
    bill + tip
  }`
);
