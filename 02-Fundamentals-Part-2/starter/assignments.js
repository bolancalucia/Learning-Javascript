'use strict';

let country, population, capitalCity;

let describeCountry = (country, population, capitalCity) =>
  console.log(
    `${country} has ${population} million people and its capital city is ${capitalCity}.`
  );

describeCountry('Croatia', 3.8, 'Zagreb');
describeCountry('France', 44, 'Paris');
describeCountry('Ireland', 10, 'Dublin');

//Coding challenge #1
let DScore = [85, 54, 41];
let KScore = [23, 34, 27];

let calcAvg = (score) => (score[0] + score[1] + score[2]) / 3;
let checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins > avgKoalas * 2)
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  else if (avgKoalas > avgDolphins * 2)
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  else console.log(`No one wins.`);
};

let avgDolp = calcAvg(DScore);
let avgKoal = calcAvg(KScore);
checkWinner(avgDolp, avgKoal);

//Coding challenge #2
let calcTip = (bill) => (bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2);
console.log(calcTip(100));

//used for challenge #4
//let bills = [125, 555, 44];
//let tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
//console.log(tips);

//Coding challenge #3
let Person1 = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

let Person2 = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

if (Person1.calcBMI() > Person2.calcBMI()) {
  console.log(
    `${Person1.fullName}'s BMI (${Person1.BMI}) is higher than ${Person2.fullName}'s (${Person2.BMI})`
  );
} else {
  console.log(
    `${Person2.fullName}'s BMI (${Person2.BMI}) is higher than ${Person1.fullName}'s (${Person1.BMI})`
  );
}

//Coding challenge #4
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(bills[i] + tips[i]);
  console.log(`Bill ${bills[i]} Tip ${tips[i]} Total ${totals[i]}`);
}

//Bonus
const calcAverage = (arr) => {
  let average = 0,
    sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  average = sum / arr.length;
  console.log(sum);
  return average;
};
console.log(calcAverage(totals));
