let weatherInfo = {
  Abuja: {
    weather: "Rainy",
    weatherInformation: "Go out with an Umbrella",
    WeatherResult: function () {
      console.log(`${this.weather} 🌧☔☔⛈⛈🌧🌧`);
    },
  },
  Enugu: {
    weather: "Sunny",
    weatherInformation: "Dress Light",
    WeatherResult: function () {
      console.log(`${this.weather} ☀🌞🌄🌅🌻⛅☀`);
    },
  },
};
console.log(weatherInfo);

// Serialization
// - Serialization: Converts the object into a JSON string (used to send data to a server).
let objectToString = JSON.stringify(weatherInfo);
console.log(objectToString);

// Deserialization
// - Deserialization: Converts the JSON string back to a JavaScript object.
let stringToObject = JSON.parse(objectToString);
console.log(stringToObject);

// Strings Methods
let yourName = "will";
// length;
console.log(yourName.length);
// Changing case
console.log(yourName.toLowerCase());
console.log(yourName.toUpperCase());

// Extracting Strings
//  slice(start) gets part of the string from index 10 onward.
// - slice(start, end) gets from index 5 to 8 (end is not included).
yourName = "1234 name is Will";
console.log(yourName.slice(10));
console.log(yourName.slice(5, 9));
// substring
// - Works like slice(), but doesn't accept negative values.
console.log(yourName.substring(10));

// substr
// - substr(start, length): starts at index 0 and get 5.
console.log(yourName.substr(0, 6));
// Replacing Strings
// - replace() changes one part of the string. The second uses a case-insensitive regex (/will/i).
yourName = "Your name is Will";
console.log(yourName.replace("Will", "Jake"));
console.log(yourName.replace(/wIll/i, "bale"));
yourName = "Your name is Will, Your name is Bale";
console.log(yourName.replace("Your name", "Do You Know your name"));
console.log(yourName.replaceAll("Your name", "Do You Know your name"));
// Joining Strings
let text = "Hahahaha";
let text2 = "Buuuuu";
console.log(text2.concat(text).concat(text2));
console.log(text + " " + text2);
console.log(`${text}${text2}`);
// trim()
let fullname = "      Sam      ";
console.log(fullname.trimStart());
console.log(fullname.trimEnd());
console.log(fullname.trim());

// Converting Strings to Arrays
let names = "Emily, Billy, Chloe, Max";
console.log(names.split(" "));
// console.clear()
let h1 = document.getElementById("text");
let precious = "My name is Damian";
let splitted = precious.split("");
// Specifying counter
let index = 0;
setInterval(function () {
  if (index < splitted.length) {
    h1.innerHTML += splitted[index];
    index++;
  } else {
    index = 0;
    h1.innerHTML = "";
  }
}, 1000);
