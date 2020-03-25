
/* 1. Grab the input */

document.getElementById('js-search').addEventListener('click', function(){
    var inputText = document.getElementById('input-field').value;
    pushToDOM(inputText);
});

document.getElementById('input-field').addEventListener('keyup', function(e){
    var inputText = document.getElementById('input-field').value;
    console.log(inputText);
    
    // if the key ENTER is pressed...
    if(e.which===13){
       pushToDOM(inputText);
    }
});


/* 2. Do the data work with the API */

var trendingUrl = "https://api.giphy.com/v1/gifs/trending?api_key=STOPsEqOA089eUeZvDCj5n9Fz3snySCW&limit=25&rating=G";
var catsUrl = "http://api.giphy.com/v1/gifs/search?q=cats&api_key=dc6zaTOxFJmzC";
var dogsUrl = "http://api.giphy.com/v1/gifs/search?q=dogs&api_key=dc6zaTOxFJmzC";

var GiphyAJAXCall = new XMLHttpRequest();
GiphyAJAXCall.open('GET', trendingUrl);
GiphyAJAXCall.send();

GiphyAJAXCall.addEventListener('load', function(e){
    var data = e.target.response;
    pushToDOM(data);
});


/* 3. Show the GIFS */

function pushToDOM(inputText){
    
    // Clean up data into an object
    var response = JSON.parse(inputText);
    
    var imageUrls = response.data;
    
    imageUrls.forEach(function(image){
        var src = image.images.fixed_height.url;
        console.log(src);
        var gifContainer = document.getElementById('js-gif-container');
        element = gifContainer.innerHTML += "<img src=\""+src+"\" class=\"gifs\">";
    });
                
}





