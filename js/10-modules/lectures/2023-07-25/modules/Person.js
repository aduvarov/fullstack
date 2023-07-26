let person = 'Vasya';
let nodefaultPerson = 'Masha';

console.log(2);

export default person;

export class Person {
    constructor(id) {
        this.id = id;
    }
}

export { nodefaultPerson };
