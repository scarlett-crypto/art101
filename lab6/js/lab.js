// index.js - arrays
// Author: Scarlett Orkin
// Date: Nov 26

// Define variabbles
myTransport = ["honda crv"]


//object
main();
var myMainRide = {
  make: "honda",
  model: "crv",
  color: "blue",
  year: "2008",
  age: function () {
      return 2023 - this.year;
  }
}
myMainRide.age

// output
document.writeln("kinds of transportation I use:", myTransport,"</br>");
document.writeln("myMainRide: <pre",
JSON.stringify(myMainRibe, null, '\t'), "</pre>");
