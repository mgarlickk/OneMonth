
/* Grab the input */



document.getElementById('js-search').addEventListener('click', function(){
    var inputText = document.getElementById('input-field').value;
    pushToDOM(inputText);
});


/* Do the data work with the API */




/* Show the GIFS */

function pushToDOM(inputText){
    var gifContainer = document.getElementById('js-gif-container').innerHTML = inputText;
}