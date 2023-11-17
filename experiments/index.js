// index.js
// Scarlett Orkin
// Nov 16 2023


console.log("Javascript is workin");
 
$("#my-button").click(function() {
   
    var name = $("#input").val();
    
    console.log("button clicked");
    var name = prompt ("what is your name?");
   

    console.log("prompt returned: "+ name);
   
    newText = "Hello" + name + "!";
    $("#title").html(newText)
});

