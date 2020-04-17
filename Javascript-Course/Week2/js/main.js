
/* 1. Grab the input */

document.getElementById('js-search').addEventListener('click', function(){
    var inputText = document.getElementById('js-user-input').value;
    var userInput = getUserInput();
    searchGiphy(userInput);
});

document.getElementById('js-user-input').addEventListener('keyup', function(e){
    // if the key ENTER is pressed...
    if(e.which===13){
        var userInput = getUserInput();
        searchGiphy(userInput);
    }
});

function getUserInput(){
    var inputValue = document.getElementById('js-user-input').value;
    return inputValue;
}


/* 2. Do the data work with the API */

function searchGiphy(searchQuery){
    var url = "https://api.giphy.com/v1/gifs/search?&api_key=STOPsEqOA089eUeZvDCj5n9Fz3snySCW&q="+searchQuery;
    
    // AJAX Request
    var GiphyAJAXCall = new XMLHttpRequest();
    GiphyAJAXCall.open('GET', url);
    GiphyAJAXCall.send();

    GiphyAJAXCall.addEventListener('load', function(data){
        var actualData = data.target.response;
        pushToDOM(actualData);
        console.log(actualData);
});

}


/* 3. Show the GIFS */

function pushToDOM(actualData){
    
    // Clean up data into an object
    var response = JSON.parse(actualData);
    console.log(response);
    var imageUrls = response.data;
    
    imageUrls.forEach(function(image){
        var src = image.images.fixed_height.url;
        var gifContainer = document.getElementById('js-gif-container');
        gifContainer.innerHTML += "<img src=\""+src+"\" class=\"gifs\">";
    });
       
}






