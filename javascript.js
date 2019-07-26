var gifs =["internet", "developer", "css", "coding", "computer", "aol", "website", "anonymous", "html", "technology"];

console.log("asdf")



function displayGifs() {

  var gifs = $(this).attr("data-name");
  var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + gifs + "&apikey=11q0Kp4LaudSyBb2k9XWxuv5tREZXJ0A&limit=1";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    $("#gifs-view").text(JSON.stringify(response));
 




 
    console.log(queryURL);

    console.log(response);
  
    var results = response.data;

  
    for (var i = 0; i < results.length; i++) {

      var gifDiv = $("<div class= 'gif'>");

      var p = $("<p>").text("Rating: " + results[1]);       //results[i]
            
      var gifImage = $("<img>");
      gifImage.attr("src", results[i].images.fixed_height_still.url);

      gifDiv.append(p);
      gifDiv.append(gifImage);

      $("#gifs-view").prepend(gifDiv); 
    };

    })
    function renderButtons() {

  $("#buttons-view").empty();

  for (var i = 0; i < gifs.length; i++) {
    var a = $("<button>");
    a.addClass("gif");
    a.attr("data-name", gifs[i]);
    a.text(gifs[i]);
    $("#buttons-view").append(a);
  }
}

$("#add-gif").on("click", function(event) {
  event.preventDefault();

  var searched = $("#searchBox").val().trim();

  gifs.push(searched);
  console.log(gifs);

  renderButtons();
});
$(document).on("click", ".gif", displayGifs);





  displayGifs();{
      for(i=0; i<3 ; i++){}
  
renderButtons();}}