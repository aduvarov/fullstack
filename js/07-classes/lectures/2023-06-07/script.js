'use strict';

// Person -> User -> Student -> StudentNewbe

class Person {
    constructor(name) {
        this.name = name;
    }
}

class User extends Person {}
class Student extends User {}
class StudentNewbe extends Student {}

let student = new StudentNewbe('Misha');
