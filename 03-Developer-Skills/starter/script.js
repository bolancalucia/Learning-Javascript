// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const x = 23;
if (x === 23) console.log(x);


//debugger;
const calcAge = birthYear => 2022 - birthYear;

const temperatures1 = [17,21,23];
const temperatures2 = [12,x,-5,0,4];
const printForecast = arr => { 
    let forecast = `... `;
    for(let i = 0; i < arr.length; i++) 
        forecast += `${arr[i]}°C in ${i+1} days ... `;
    console.log(forecast);
}

printForecast(temperatures1);
printForecast(temperatures2);