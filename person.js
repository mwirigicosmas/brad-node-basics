// MODULE WRAPPER FUNCTION
//(function(exports,require,module,__filename,__dirname){

//})
// console.log(__dirname, __filename);

/*
const person = {
    name:"cosmas",
    age: 25,
    married: false,
    working: function(){
        console.log("yes");
    }
};

module.exports = person;
*/
class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    greeting(){
        console.log(`My name is ${this.name} and i am ${this.age} years old.`);
    }
}
module.exports = Person;



