// Class: blueprint to create an object with some fields (values) and methods (functions) to represent a 'thing'

// Modifiers: public, private, protected
// public: the method can be called any where, any time (default)
// private: this method can only be called by other methods in this class
// protected: this method can be called by other methods in this class, or by other methods in child classes

class Vehicle {
  constructor(public color: string) {}

  protected honk(): void {
    console.log('beep');
  }
}

class Car2 extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  // Car extends the functions in Vehicle
  // but we can overwrite function if needed like so:
  private drive(): void {
    console.log('vroom');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk(); // able to be called because Car2 is a child of Vehicle (protected)
  }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);
// vehicle.drive();
// vehicle.honk();

const car3 = new Car2(4, 'red');

// Property 'drive' is private and only accessible within class 'Car2'.
// car3.drive(); ~ error
// car3.honk();
// car3.startDrivingProcess();
