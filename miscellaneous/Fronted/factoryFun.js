function Personmaker (name, age) {
    const Person = {
        name: name,
        age: age,
        talk() {
            console.log(`Hi, my name is ${this.name}`);
        },
    };
    return Person;
}

let p1 = Personmaker("adam", 25);
let p2 = Personmaker("eve", 56);