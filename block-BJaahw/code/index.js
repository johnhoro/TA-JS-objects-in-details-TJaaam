// 1. Create a function `createUser` that accepts `name` and `age` and returns a new object with those properties.

// function createUser(name, age) {
//   let user = {};
//   user.name = name;
//   user.age = age;
//   return user;
// }

// 2. Add a method named `sayHello` inside the object created above. When called it should alert `Welcome {user}`. Replace `{user}` with the name of the user.

// function createUser(name, age) {
//   let user = {};
//   user.name = name;
//   user.age = age;

//   user.sayHello = function () {
//     return alert(`Welcome ${user.name}`);
//   };
//   return user;
// }

// 3. Use the data (name, age) of two different person to create the object using `createUser`. Store the returned value in `personOne` and `personTwo`.

// let personOne = createUser(`john`, 25);
// let personTwo = createUser(`kushal`, 25);

// 4. Change the code inside `createUser` in such a way that the methods `sayHello` doesn't have to be in all object. Use the prototypal nature. (Hint Object.create())

// function createUser(name, age) {
//   let user = Object.create(userMethods);
//   user.name = name;
//   user.age = age;

//   return user;
// }

// let userMethods = {
//   sayHello: function () {
//     return alert(`Welcome ${this.name}`);
//   },
// };

// let personOne = createUser(`john`, 25);
// let personTwo = createUser(`kushal`, 25);

// 5. Convert the `createUser` function into Pseudoclassical pattern of object creation. Use `F.prototype` to store the methods. `F.prototype` means storing the methods in prototype property of the function.

// function createUser(name, age) {
//   this.name = name;
//   this.age = age;
// }

// createUser.prototype = {
//   sayHello: function () {
//     return alert(`Welcome ${this.name}`);
//   },
// };

// let personOne = new createUser(`john`, 25);
// let personTwo = new createUser(`kushal`, 25);

// 6. Use `new` to create two new objects with the data of two different person and re-assign the value of `personOne` and `personTwo`.

// function createUser(name, age) {
//   this.name = name;
//   this.age = age;
// }

// createUser.prototype = {
//   sayHello: function () {
//     return alert(`Welcome ${this.name}`);
//   },
// };

// let personOne = new createUser(`john`, 25);
// let personTwo = new createUser(`kushal`, 25);

// 7. Try calling `personOne.sayHello()` and `personTwo.sayHello()`. Check if you get the required output.

// personOne.sayHello();
// personTwo.sayHello();

// 8. Convert the `createUser` function into `User` class.

class createUser {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayHello() {
    return alert(`Welcome ${this.name}`);
  }
}

let personOne = new createUser(`john`, 25);
let personTwo = new createUser(`kushal`, 25);

// 9. Check by creating two instance of the class using data of two different persons and re-assign the value of `personOne` and `personTwo`
personOne.name = `suhana john`;
personTwo.name = `Arya`;

// 10. Try calling `personOne.sayHello()` and `personTwo.sayHello()`. Check if you get the required output.

personOne.sayHello(); //welcome suhana
personTwo.sayHello(); // welcome Arya
