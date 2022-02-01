class AgedPerson {
  printAge() {
    console.log(this.age);
  }
}

class Person extends AgedPerson {
  name = 'Max';

  constructor() {
    super();
    this.age = 30;
  }

  greet() {
    console.log(`Hi, I am ${this.name} and I am ${this.age} years old`);
  }
}

// const person = new Person();

// person.greet();

// function Person() {
//   this.age = 30;
//   this.name = 'Shaqueb';
//   this.greet = function () {
//     console.log(`Hi, I am ${this.name} and I am ${this.age} years old`);
//   };
// }

// Person.describe = function () {
//   console.log('Creating persons...');
// };

// Person.prototype - {
//   printAge() {
//     console.log(this.age)
//   }
// }

// Person.prototype.printAge = function () {
//   console.log(this.age);
// };

// console.dir(Person);

// const p = new Person();
// p.greet();
// p.printAge();
// console.log(p.length);
// console.log(p.toString());
// const p2 = new p.__proto__.constructor();
// console.dir(Object.prototype.__proto__);

const course = {
  title: 'JavaScript',
  rating: 5,
};

// console.log(Object.getPrototypeOf(course));

Object.setPrototypeOf(course, {
  ...Object.getPrototypeOf(course),
  printRating: function () {
    console.log(`${this.rating}/5`);
  },
});

const student = Object.create(
  {
    printProgress: function () {
      console.log(this.progress);
    },
  },
  {
    name: {
      configurable: true,
      enumerable: true,
      value: 'Max',
      writable: true,
    },
  }
);

// student.name = 'Shaqueb';
// Object.defineProperty(student, 'progress', {
//   configurable: true,
//   enumerable: true,
//   value: 0.8,
//   writable: false
// });

console.log(student);
