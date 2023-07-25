import { Person } from './Person.js';

console.log(1);

export function recycle() {
    console.log('recycle');
}

class User extends Person {
    constructor(name, id) {
        super(id);
        this.name = name;
    }
}

export { User };
