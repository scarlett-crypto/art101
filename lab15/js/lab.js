//Scarlett O


const ENDPOINT = "https://icanhazdadjoke.com/"
// attach an event listener
$("#go").click(function(){
  // ajax this shit
  $.ajax({
    "url": ENDPOINT,
    "dataType": "json",
    "success": function(results){
      console.log(results);
 
      jokeText = results.joke;
      // add to output div 
      $("#output").append("<p>" + jokeText);
    },
      "error": function(){
      }
  })
})
