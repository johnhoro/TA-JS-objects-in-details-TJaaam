// ANIMAL USING PSEUDOCLASSICAL PATTERN

function CreateAnimal(location, numberOfLegs) {
  this.location = location;
  this.numberOfLegs = numberOfLegs;
}

CreateAnimal.prototype = {
  eat() {
    console.log(`I live in ${this.location} and I can eat`);
  },

  changeLocation(newLocation) {
    this.location = newLocation;
  },

  summary() {
    return `I live in ${this.location} and I have ${this.numberOfLegs}`;
  },
};

// DOG

function CreateDog(name, location, numberOfLegs, color) {
  CreateAnimal.call(this, location, numberOfLegs);
  this.name = name;
  this.color = color;
}

CreateDog.prototype = {
  bark() {
    alert(`I am ${this.name} and I can bark 🐶`);
  },
  changeName(newName) {
    this.name = newName;
  },
  changeColor(newColor) {
    this.color = newColor;
    return this.color;
  },
  summary() {
    return `I am ${this.name} and I am of ${this.color} color. I can also bark`;
  },
};

Object.setPrototypeOf(CreateDog.prototype, CreateAnimal.prototype);

// CATS

function CreateCat(name, location, numberOfLegs, colorOfEyes) {
  CreateAnimal.call(this, location, numberOfLegs);
  this.name = name;
  this.colorOfEyes = colorOfEyes;
}

CreateCat.prototype = {
  meow() {
    alert(`I am ${this.name} and I can do meow meow 😹`);
  },
  changeName(newName) {
    this.name = newName;
  },
  changeColorOfEyes(newColor) {
    this.colorOfEyes = newColor;
    return this.colorOfEyes;
  },
  summary() {
    return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`;
  },
};
Object.setPrototypeOf(CreateCat.prototype, CreateAnimal.prototype);

//  USING CLASS PATTERN

class Animal {
  constructor(location, numberOfLegs) {
    this.location = location;
    this.numberOfLegs = numberOfLegs;
  }
  eat() {
    console.log(`I live in ${this.location} and I can eat`);
  }

  changeLocation(newLocation) {
    this.location = newLocation;
  }

  summary() {
    return `I live in ${this.location} and I have ${this.numberOfLegs}`;
  }
}

// DOG

class Dog extends Animal {
  constructor(name, location, numberOfLegs, color) {
    super(location, numberOfLegs);
    this.name = name;
    this.color = color;
  }
  bark() {
    alert(`I am ${this.name} and I can bark 🐶`);
  }
  changeName(newName) {
    this.name = newName;
  }
  changeColor(newColor) {
    this.color = newColor;
    return this.color;
  }
  summary() {
    return `I am ${this.name} and I am of ${this.color} color. I can also bark`;
  }
}

// CATS

class Cat extends Animal {
  constructor(name, location, numberOfLegs, colorOfEyes) {
    super(location, numberOfLegs);
    this.name = name;
    this.colorOfEyes = colorOfEyes;
  }
  meow() {
    alert(`I am ${this.name} and I can do meow meow 😹`);
  }
  changeName(newName) {
    this.name = newName;
  }
  changeColorOfEyes(newColor) {
    this.colorOfEyes = newColor;
    return this.colorOfEyes;
  }
  summary() {
    return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`;
  }
}
