// Create array of gif words

var gifs = ["internet", "developer", "css", "coding", "computer", "aol", "website", "anonymous", "html", "technology"];

// Initial render of button on page load
renderButtons();


// Add click listener to #add-gif button
$("#add-gif").on("click", function (event) {
	// Prevent reload
	event.preventDefault();

	// Store and push user input
	var searched = $("#searchBox").val().trim();
	gifs.push(searched);
	$("#searchBox").val("Keep Searching and when you are ready, just click the Button/Buttons you created to display the gifs!!!!")
	// Re-render buttons
	renderButtons(); 
});

// Function that renders the buttons
function renderButtons() {
	
	$("#buttons-view").empty();

	for (var i = 0; i < gifs.length; i++) {
		var a = $("<button>");
		a.addClass("gif");
		a.attr("data-state");
		a.attr("data-name", gifs[i]);
		a.text(gifs[i]);
		$("#buttons-view").append(a);
		
	}
}

// Function that displays gifs
  // function mySearch (){
  // var myEl = document.getElementById("add-gif");
  //  myEl.addEventListener("click");}
  function displayGifs() {
      // Prevent reload
    event.preventDefault();
    //  $("#searchBox").val().trim();
  
    // Store and push user input
    

  var gifs = $(this).attr("data-name");
	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gifs + "&apikey=11q0Kp4LaudSyBb2k9XWxuv5tREZXJ0A&limit=25";

	$.ajax({
		url: queryURL,
		method: "GET"
	}).then(function (response) {
		// $("#gifs-view").text(JSON.stringify(response));
    var results = response.data;
    // var output = "";
    // for (var index in data)
// var gifObject = data[index];
// var gifURL = gifObject.images.fixed_height.url;
// console.log(gifURL);
// output += "<img width='200px' src='"+gifURL+"'/>;

  // $("#gifs-view").html(output);
		for (var i = 0; i < results.length; i++) {

			var gifDiv = $("<i>","<hr>");
      var p = $("<span>").text("Rating: " + results[1].rating);
			var gifImage = $("<img>");
			gifImage.attr("src", results[i].images.fixed_height.url);
			gifImage.attr("<class='col-lg-10'>")
			
			// gifDiv.attr("src = 'data-state'");
			gifDiv.append(p);
			gifDiv.append(gifImage);

			$("#gifs-view").prepend(gifDiv);

			
			
			
			// 		var d=	$("i")
			// d.text(d.text().trim().replace(/"img"/,'img class="gif" src="' + results[i].images.fixed_height_still.url + ''));
			// 			$('body').on('click', '.gif', function() {
			// 				 gifImage = $("img");
			// 				var gifImage = $(this).attr("src");
			// 			if($(this).hasClass('playing')){
			// 				//stop
			// 				$(this).attr('src', string.replace(/\.gif/i, "_s.gif"))
			// 				$(this).removeClass('playing');
			// 			} else {
			// 				//play
			// 				$(this).addClass('playing');
			// 				$(this).attr('src', string.replace(/\_s.gif/i, ".gif"))

			// 					}
			// 								});



		};
	})
}

$(document).on("click", ".gif", displayGifs);




$("#stop").click(function(){
	window.stop()});

//   }); $("img").hover(
//     function() {
//         $(this).attr("src", "animate1.gif");
//     },
//     function() {
//         $(this).attr("src", "static1.jpg");
//     }                         
// ); 

// $(".gif").on("click", function() {
// 	// The attr jQuery method allows us to get or set the value of any attribute on our HTML element
// 	var state = $("<i>").attr("data-state");
// 	// If the clicked image's state is still, update its src attribute to what its data-animate value is.
// 	// Then, set the image's data-state to animate
// 	// Else set src to the data-still value
// 	if (state === "still") {
// 	  $(this).attr("src", $(this).attr("data-animate"));
// 	  $(this).attr("data-state", "animate");
// 	} else {
// 	  $(this).attr("src", $(this).attr("data-still"));
// 	  $(this).attr("data-state", "still");
// 	}})