// index.js
// Scarlett Orkin
// Nov 16 2023

console.log("Javascript is workin");

$("#my-button").click(function){
    console.log("button clicked");
    var name = prompt ("what is your name?");
    console.log("prompt");
    newText = "Hello" + name + "!";
    $("#title").html(newText)
}