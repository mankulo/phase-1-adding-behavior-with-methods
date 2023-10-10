// Your code here
class Cat {
    constructor (name, sex ) {
        this.name = name;
        this.sex = sex;
    }
    speak() {
        return `${this.name} says meow!`
    } 
    
}
let Cat2 = new Cat('Sasha', 'Female');



class Dog {
    constructor (name, sex) {
        this.name = name;
        this.sex = sex;
    }
    speak() {
        return `${this.name} says woof!`
    }
}
let Dog2 = new Dog('Rufio', 'Male');



class Bird {
    constructor (name, sex) {
        this.name = name;
        this.sex = sex;
    }
    speak() {
        if (this.sex === 'Female') {
            return `It's me! ${this.name}, the parrot!`
        }
        else {
            return `${this.name} says squawk!`
        }
    }
    
}
let Bird2 = new Bird('Pablo', 'Male');



