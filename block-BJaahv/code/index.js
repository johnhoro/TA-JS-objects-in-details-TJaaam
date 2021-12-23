// - [ ] Using function to create object
// - [ ] Using Object.create (prototypal pattern)
// - [ ] Using Pseudoclassical Way
// - [ ] Using Class

// Create User (class/function) with the following properties.

// - [ ] properties (data):
//   - [ ] name
//   - [ ] id
//   - [ ] noOfProjects
// - [ ] methods:
//   - [ ] getProjects -> return number of project
//   - [ ] changeName -> accepts one parameter (newName)returns old user name
//   - [ ] incrementProject -> returns updated number of projects
//   - [ ] decrementProject -> returns updated number of projects

//Factory Pattern

// function createUser(name, id, noOfProjects = 2) {
//   let user = {};
//   user.name = name;
//   user.id = id;
//   user.noOfProjects = noOfProjects;

//   user.getProject = function () {
//     return `${user.name} ${user.id} ${user.noOfProjects}`;
//   };
//   user.changeName = function (newName) {
//     user.name = newName;
//     return user.name;
//   };
//   user.incrementProject = function (value = 1) {
//     user.noOfProjects = user.noOfProjects + value;
//     return user.noOfProjects;
//   };
//   user.decrementProject = function (value = 1) {
//     user.noOfProjects = user.noOfProjects - value;
//     return user.noOfProjects;
//   };
//   return user;
// }

// prototypal pattern

// let userMethods = {
//   getProject: function () {
//     return `${this.name} ${this.id} ${this.noOfProjects}`;
//   },
//   changeName: function (newName) {
//     this.name = newName;
//     return this.name;
//   },
//   incrementProject: function (value = 1) {
//     this.noOfProjects = this.noOfProjects + value;
//     return this.noOfProjects;
//   },
//   decrementProject: function (value = 1) {
//     this.noOfProjects = this.noOfProjects - value;
//     return this.noOfProjects;
//   },
// };

// function createUser(name, id, noOfProjects = 2) {
//   let user = Object.create(userMethods);
//   user.name = name;
//   user.id = id;
//   user.noOfProjects = noOfProjects;

//   return user;
// }

// Pseudoclassical pattern

// function CreateUser(name, id, noOfProjects = 2) {
//   this.name = name;
//   this.id = id;
//   this.noOfProjects = noOfProjects;
// }

// CreateUser.prototype = {
//   getProject: function () {
//     return `${this.name} ${this.id} ${this.noOfProjects}`;
//   },
//   changeName: function (newName) {
//     this.name = newName;
//     return this.name;
//   },
//   incrementProject: function (value = 1) {
//     this.noOfProjects = this.noOfProjects + value;
//     return this.noOfProjects;
//   },
//   decrementProject: function (value = 1) {
//     this.noOfProjects = this.noOfProjects - value;
//     return this.noOfProjects;
//   },
// };

//Class Pattern

class CreateUser {
  constructor(name, id, noOfProjects = 2) {
    this.name = name;
    this.id = id;
    this.noOfProjects = noOfProjects;
  }
  getProject() {
    return `${this.name} ${this.id} ${this.noOfProjects}`;
  }
  changeName(newName) {
    this.name = newName;
    return this.name;
  }
  incrementProject(value = 1) {
    this.noOfProjects = this.noOfProjects + value;
    return this.noOfProjects;
  }
  decrementProject(value = 1) {
    this.noOfProjects = this.noOfProjects - value;
    return this.noOfProjects;
  }
}

let user1 = new CreateUser(`john`, 111, 4);
let user2 = new CreateUser(`reena`, 211, 1);
