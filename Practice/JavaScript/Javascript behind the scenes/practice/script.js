'use strict';

function calcAge(birthYear) {
  const age = 2022 - birthYear;

  function printAge() {
    const output = `You are ${age}, born in ${birthYear}`;
    console.log(output);
  }

  if (birthYear >= 1981 && birthYear <= 1996) {
    var millenial = true; // var variables are function scoped

    const str = `Oh, and you're a millenial, ${firstName}`;
    console.log(str);
  }
  console.log(str);
  console.log(millenial);
  printAge();

  return age;
}

const firstName = 'James';
calcAge(1991);
