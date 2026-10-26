// Storage
// Local Storage
// Session Storage

//sessionStorage.clear()
//localStorage.clear()

// Storage Mutliple Value
let userDetails = {
    name: "Ken",
    age: "27",
    DOB: "June 12 '1996",
};
// - You can't storage to storenobjects directly, so you convert the object string using
sessionStorage.setitem("details", JSON.stringify(userDetails));
localStorage.setitem("details", JSON.stringify(userDetails));

// -setitem(key, value) stores that string in sessionStorage with the key "details",

let details = JSON.parse(sessionStorage.getItem("details"))
console.log(details)

// -getitem() gets the string version of the object.
// - JSOn.parse() convert it back to an object.

// Comparing Local Storage and Session Storage
document.querySelector("button").onclick = function() {
    sessionStorage.setItem("sessionuser", "mich")
    localStorage.setItem("sessionuser", "mich")
}

// - This stores "kens"
// - The value



// EXAMPLE 2
// Step 1: Remove a specific session storage item
localStorage.removeItem("localUser")