"use strict";
var Person = (function () {
    function Person(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastname = lastName;
        this.age = age;
    }
    Person.prototype.greet = function () {
        console.log("Hello, my names is " + this.firstName + " " + this.lastname);
    };
    return Person;
}());
var jon = new Person("Jon", "Alanis", 32);
var karol = new Person("Karolina", "Juarez", 26);
jon.greet();
karol.greet();
