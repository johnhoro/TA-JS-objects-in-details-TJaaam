// Animal

let animalMethods = {
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

function createAnimal(location, numberOfLegs) {
  let animal = Object.create(animalMethods);
  animal.location = location;
  animal.numberOfLegs = numberOfLegs;

  return animal;
}

//Dog

let dogsMethods = {
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

function createDog(name, location, numberOfLegs, color) {
  let dog = createAnimal(location, numberOfLegs);
  Object.setPrototypeOf(dog, dogsMethods);
  dog.name = name;

  dog.color = color;
  return dog;
}
Object.setPrototypeOf(dogsMethods, animalMethods);

//Cats

let catMethods = {
  meow() {
    alert(`Iam ${this.name} and I can do meow 😹`);
  },
  changeName(newName) {
    this.name = newName;
  },
  changeColorOfEyes(newColor) {
    this.colorOfEyes = newColor;
    return this.colorOfEyes;
  },
  summary() {
    return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow`;
  },
};

function createCat(name, location, numberOfLeges, colorOfEyes) {
  let cat = createAnimal(location, numberOfLeges);
  Object.setPrototypeOf(cat, catMethods);
  cat.name = name;
  cat.colorOfEyes = colorOfEyes;

  return cat;
}
Object.setPrototypeOf(catMethods, animalMethods);
