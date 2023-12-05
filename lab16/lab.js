//Scarlett orkin

// Using the core $.ajax() method
// Block for external links
//Links to an external site.

// Using the core $.ajax() method
const ENDPOINT = "https://xkcd.com/info.0.json";
 

// add button event listener
$("#get-em").click(function(){
  
	// construct ajax object
	const ajaxParams = {
	  url: ENDPOINT,

	  type: "GET",
	  dataType: "json",
    success: ajaxSuccess,
    error: ajaxError
	}
    $.ajax(ajaxParams);
})

function ajaxSuccess(data){
	  console.log("Here's what I got:", data)
      const title = data.title;
      const desc = data.alt;
      const imageURL = data.img;
  
  $("#output").append("<h2>"+ title + "</h2>");
  $("#output").append("<img src='"+ imageURL + "'/>");
  $("#output").append("<p>"+ desc + "</p>");
}

function ajaxError(request,error){
	  console.log("Oops:", request, error)
}

