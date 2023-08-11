const fristName = "Pina"
const lastName = "Pika"

function hello() {
    console.info("Hello, ini dari module object");
}

class Person {
    constructor(name) {
        this.name = name
    }
}

export { fristName, lastName, hello, Person }