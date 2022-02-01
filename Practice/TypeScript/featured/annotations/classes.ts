class Vehicle {
  drive(): void {
    console.log('Chugga Chugga');
  }

  honk(): void {
    console.log('Honk');
  }
}

class Car extends Vehicle {
  drive(): void {
    console.log('broom');
  }
}

const car = new Car();
car.drive();
car.honk();
