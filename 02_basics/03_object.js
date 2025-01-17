// singletone
/* object that created using Constructor */
// Object.create() => Syntax

// objects using literals

const mysym = Symbol("Key1")

const userjs = {
    name:"kalpesh",
    age:21,
    [mysym] : "newKey1",
    location:"Amalner",
    loggedIN : true
}

// console.log(userjs);

// console.log(userjs.name);
// console.log(userjs["location"]);
// console.log(userjs[mysym]);


userjs.function1 = function() {
    console.log("hello this is me");
}

userjs.function2 = function() {
    console.log(`hello this is me, ${this.name}`);
}

console.log(userjs.function1());


console.log(userjs.function2());
