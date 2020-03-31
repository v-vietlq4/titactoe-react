class Human {
  constructor() {
    this.age = 21;
  }
  printAge() {
    console.log(1);
  }
}

class Person extends Human {
  constructor() {
    super();
    this.name = "Viet";
  }
  printName() {
    console.log(this.name);
  }
}

const person = new Person();
person.printName();
person.printAge();
