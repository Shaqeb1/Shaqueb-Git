var favoriteFood = 'grapes';

var foodThoughts = function () {
  console.log('Original favorite food: ' + favoriteFood);

  var favoriteFood = 'sushi';

  console.log('New favorite food: ' + favoriteFood);
};

foodThoughts();

// Avoid hoisting using ES5-ES6 syntax
