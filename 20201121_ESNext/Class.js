abstract class Animal {
    constructor(public name ? : string, public age ? : number) {}
    abstract say(): string
}

class Cat extends Animal {
    say() {
        return '야옹'
    }
}

class Dog extends Animal {
    say() {
        return '멍멍'
    }
}

let animals: Animal[] = [new Cat('야옹이', 2), new Dog('멍멍이', 3)]
let sounds = animals.map(a => a.say())
// ["야옹", "멍멍"]

console.log(sounds);