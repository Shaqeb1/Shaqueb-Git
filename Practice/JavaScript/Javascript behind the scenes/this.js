'use strict';

/*
this keyword: Special variable that created for every execution context (every function) Takes the value of (point to) the "owner" of he function in which the this keyword is used.

this is NOT static. It depends on how the function is called and its value is only assigned when the function is actually called.

Method this => <Object that is call the method>

Simple Function Call this => undefined (in use strict mode)

Arrow functions this => <this of surrounding function (lexical this)>

Event Listener this => <DOM element that the handler is attached to>
*/

console.log(this); // Window Object

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this); //Undefined
};

const calcAgeArrow = (birthYear) => {
  console.log(2037 - birthYear);
  console.log(this); // Window Object
};

const james = {
  year: 1998,
  calAge: function () {
    console.log(this); // Object calling the method
    console.log(2067 - this.year);
  },
};
