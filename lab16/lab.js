//scarlett orkin

// Using the core $.ajax() method
// Block for external links
//Links to an external site.

// Using the core $.ajax() method
const ENDPOINT = "https://imgs.xkcd.com/comics/typical_seating_chart.png";
const APIKEY = 

// add button event listener
$("#get-em").click(function(){
  
	// construct ajax object
	const ajaxParams = {
	  url: ENDPOINT,
	  data: {api_key: APIKEY},
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
      const desc = data.explanation;
      const imageURL = data.url;
  // jQuery is my boyfriend
  $("#output").append("<h2>"+ title + "</h2>");
  $("#output").append("<img src='"+ imageURL + "'/>");
  $("#output").append("<p>"+ desc + "</p>");
}

function ajaxError(request,error){
	  console.log("Oops:", request, error)
}

<><h2> typical seating chart</h2><img src="https://imgs.xkcd.com/comics/typical_seating_chart.png" /></>
