// Animal

let animalMethods = {
  eat: function () {
    console.log(`I live in ${this.location} and I can eat`);
  },
  changeLocation: function (newLocation) {
    this.location = newLocation;
    return this.location;
  },
  summary: function () {
    return `I live in ${this.location} and I have ${this.numberOfLegs}`;
  },
};

function createAnimal(location, numberOfLegs) {
  let animal = Object.create(animalMethods);
  animal.location = location;
  animal.numberOfLegs = numberOfLegs;
  return animal;
}

// Dog

let dogMethods = {
  bark: function () {
    alert(`I am ${this.name} and I can bark`);
  },
  changeName: function (newName) {
    this.name = newName;
    return this.name;
  },
  changeColor: function (newColor) {
    this.color = newColor;
    return this.color;
  },
  summary: function () {
    return `I am ${this.name} and I am of ${this.color} color. I can also bark`;
  },
};

Object.setPrototypeOf(dogMethods, animalMethods);

function createDog(location, numberOfLegs, name, color) {
  let dog = createAnimal(location, numberOfLegs);
  Object.setPrototypeOf(dog, dogMethods);
  dog.name = name;
  dog.color = color;
  return dog;
}

// Cat

let catMethods = {
  meow: function () {
    alert(`I am ${this.name} and I can do meow meow 😹`);
  },
  changeName: function (newName) {
    this.name = newName;
    return this.name;
  },
  changeColorOfEyes: function (newColor) {
    this.color = newColor;
    return this.color;
  },
  summary: function () {
    return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}`;
  },
};

Object.setPrototypeOf(catMethods, animalMethods);

function createCat(location, numberOfLegs, name, colorOfEyes) {
  let cat = createAnimal(location, numberOfLegs);
  Object.setPrototypeOf(cat, catMethods);
  cat.name = name;
  cat.colorOfEyes = colorOfEyes;
  return cat;
}
