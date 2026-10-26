let date = new Date();
console.log(date.getFullYear());
const months = [
  "jan",
  "feb",
  "mar",
  "apr",
  "may",
  "june",
  "july",
  "aug",
  "sep",
  "oct",
  "nov",
  "dec",
];
console.log(months[date.getMonth()]);
const days = [
  "sunday",
  "monday",
  "tuesday",
  "wedneday",
  "thursday",
  "friday",
  "saturday",
];
console.log(days[date.getDay()]);
console.log(
  "${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}:${date.getMilliseconds()}",
);

console.log(date.toDateString());
console.log(date.toLocaleTimeString());
console.log(date.toLocaleString());
console.log(date.toLocaleString("en - Us", { dataStyle: "long" }));
console.log(date.toLocaleString("ar - Ab", { dataStyle: "long" }));
console.log(date.toLocaleString("ng - Ig", { dataStyle: "long" }));
console.log(date.toLocaleString("ja - Jp", { dataStyle: "full" }));
const h1 = document.querySelector("h1");
setInterval(function () {
  let newdate = new Date();
  h1.innerHTML = newdate.toLocaleString();
});
setTimeout(function () {
  alert("hello world");
}, 1000);
