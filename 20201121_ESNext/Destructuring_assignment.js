let person = {
    name: "Joo",
    age: 26
}

let {
    name,
    age
} = person
// name = "Joo", age = 26

let array = [1, 2, 3, 4]
let [head, ...rest] = array
// head = 1, rest=[2,3,4]


let a = 1,
    b = 2;
[a, b] = [b, a]
//swap: a = 2, b = 1