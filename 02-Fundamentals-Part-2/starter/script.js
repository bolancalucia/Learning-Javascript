'use strict';

function logger() {
  console.log(`My name is Lucia.`);
}

logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 8);
console.log(appleJuice);

console.log(fruitProcessor());

//function declaration
function calcAge(birthYear) {
  return 2022 - birthYear;
}

const age1 = calcAge(1997);
console.log(age1);

//function expression - anonymous function
const calcAge2 = function (birthYear) {
  return 2022 - birthYear;
};

const age2 = calcAge2(1997);
console.log(age2);

//arrow function
let calcAge3 = (birthYear) => 2022 - birthYear;
console.log(calcAge3(1997));

const yearsUntilRetirement = (birthYear) => {
  const age = 2022 - birthYear;
  const retirement = 65 - age;
  return retirement;
};

//arrays
const friends = ['Steve', 'John', 'Mike'];
const years = new Array(1991, 1993, 1988);

console.log(friends[2], friends.length);
friends[2] = 'Peter';
console.log(friends[2]);
console.log(friends);

friends.push('Anna');
friends.unshift('Maya');
console.log(friends);

friends.pop();
friends.shift();
friends.shift();

console.log(friends.indexOf('Peter'));
console.log(friends.includes('John'));

const Person = {
  firstName: 'Lucia',
  lastName: 'Cvitanović',
  birthYear: 1997,
  friends: ['Rea', 'Vesela', 'Stella'],
  driversLicense: true,

  //calcAge : function (birthYear) {
  //  return 2022 - birthYear;
  //}
  //calcAge: function () {
  //  return 2022 - this.birthYear;
  //},
  calcAge: function () {
    this.age = 2022 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    this.calcAge();
    return `${
      this.firstName
    } is a ${this.calcAge()}-year old teacher and he has ${
      this.driversLicense ? 'a' : 'no'
    } driver's license.`;
  },
};
console.log(Person);
console.log(Person.lastName);
console.log(Person['lastName']);

console.log(
  `${Person.firstName} has ${Person.friends.length} friends and her best friend is called ${Person.friends[0]}`
);
console.log(Person.age);
console.log(Person['calcAge']);
console.log(Person.getSummary());

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

const LuciaArray = [
  'Lucia',
  'Cvitanović',
  1997,
  'QA engineer',
  ['Rea', 'Vesela', 'Stella'],
  true,
];
const types = [];

for (let i = 0; i < LuciaArray.length; i++) {
  console.log(LuciaArray[i]);
  //types[i] = typeof LuciaArray[i];
  types.push(typeof LuciaArray[i]);
}

for (let i = 0; i < types.length; i++) console.log(types[i]);

// only string, to show what continue does
for (let i = 0; i < LuciaArray.length; i++) {
  if (typeof LuciaArray[i] !== 'string') continue;
  console.log(typeof LuciaArray[i]);
}

// break after a number type
for (let i = 0; i < LuciaArray.length; i++) {
  if (typeof LuciaArray[i] === 'number') break;
  console.log(typeof LuciaArray[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`------------Starting exercise ${exercise}`);
  for (let rep = 1; rep < 6; rep++) {
    console.log(`Lifting weights repetition ${rep}`);
  }
}

//while loop
let rep = 1;
while (rep <= 10) {
  console.log(`Rep ${rep}`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
  console.log(`Dice roll ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log(`Dice roll ${dice}`);
}
