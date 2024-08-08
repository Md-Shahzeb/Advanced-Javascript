function Person(name, age) {
    this.name = name;
    this.age = age;
  
    // Method to greet the person
    this.sayHello = function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    };
}

const person1 = new Person('Shanaya', 25);
person1.sayHello(); 

const person2 = new Person('Zeb', 21);
person2.sayHello(); 