// A Javascript object is a collections of key-value pairs, like a container that holds data and properties. think of itnlike a real-object, like a car, with properties like color, model, and year;
const car = {
    color: "red";
    model: "toyota";
    year: "2020";
    startEngine: function () {
        console.log("Vrooml");
    },
};

console.log(car, color);
(car.startEngine());

// objects are flexible and can be created in many ways,
// like using () or a new object;

let user = {
    fullname: "Michael k",
    contact: "09068437550",
    username: "Snowel",
    login: function (){ 
        console.log ('$(this.fullname) Just Loged In');
    },
}

// Accessing Properties of an object
console.log(user.function);
// Accessing Methods of an object
user.login();

//DOM MANUPULICATION
let h1 = document.createElement("h1");
//- creates an  <H1> element in memory (not on the screen yet)
h1.innerHTML = "I am h1 created in javascript"
Document.body.append(h1)

document.getElementById("box").append(h1)
// Removing Element
// h1.remove();
// document.getElementById("box").removeChild(h1);
// Replace Elementslet p = document.createElement:()
let p = document.createElement("p");
p.textContent = "Replace the h1!!!";

document.getElementById("box").replaceChild(p, h1)

// Adding Attributes