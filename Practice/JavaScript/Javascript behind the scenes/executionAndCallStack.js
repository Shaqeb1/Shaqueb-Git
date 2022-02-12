const username = 'james';

const first = () => {
  let a = 1;
  const b = second(7, 9);
  a = a + b;
  return a;
};

function second(x, y) {
  var c = 2;
  return c;
}

const x = first();

/*
1.What's inside execution context?

let, const and var declarations
Functions
arguments object

2. Scope chain 

3. This Keyword
(execution context belonging to arrow functions do not get arguments object nor do the get this keyword they use arguments object and this keyword of there closest parent regular function)
*/
