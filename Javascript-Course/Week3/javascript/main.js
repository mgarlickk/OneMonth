/* 1. Search */

var UI = {};

function clearSearchResults(){
    var clearSearchResults = document.querySelector('.js-search-results').innerHTML = "";
}

// UI.EnterPress = 
UI.MouseClick = function(){
    document.querySelector('.js-submit').addEventListener('click',function(){
        var searchValue = document.querySelector('.input-search').value;
        SoundCloudAPI.getTrack(searchValue);
        clearSearchResults()
})};

UI.MouseClick()

UI.EnterPress = function(){
    document.querySelector('.input-search').addEventListener('keyup',function(e){
        if(e.keyCode===13){
            var searchValue = document.querySelector('.input-search').value;
            SoundCloudAPI.getTrack(searchValue);
            clearSearchResults()
        }
})};

UI.EnterPress()


// UI.ClearPlaylist
UI.ClearPlaylist = function(){
    document.getElementById('clear-playlist').addEventListener('click', function(){
        var clearPlaylist = document.querySelector('.js-playlist').innerHTML = "";
        localStorage.clear();
})};

UI.ClearPlaylist()





/* 2. Query Soundcloud API */

// Create SoundCloudAPI object
var SoundCloudAPI = {};

SoundCloudAPI.init = function(){
    SC.initialize({
        client_id: 'cd9be64eeb32d1741c17cb39e41d254d'
    });
};

SoundCloudAPI.init();

SoundCloudAPI.getTrack = function(inputValue){
    // find tracks
    SC.get('/tracks', {
      q: inputValue
    }).then(function(tracks) {
    console.log(tracks);
    SoundCloudAPI.renderTracks(tracks);
    });
};





/* 3. Display the cards */

SoundCloudAPI.renderTracks = function(tracks){

    
    tracks.forEach(function(track){
        // Add first child Card
        var searchResults = document.querySelector('.js-search-results');
        var card = document.createElement('div');
        card.classList.add('card');


        // Add div for the image
        var imgDiv = document.createElement('div');
        imgDiv.classList.add('image');

        // Add the image to the above div
        var image_img = document.createElement('img');
        image_img.classList.add('image_img');
        if (track.artwork_url != null){
        image_img.src = track.artwork_url;
        } else {image_img.src = 'http://lorempixel.com/g/400/200/'};


        // Add the content div
        var cardContent = document.createElement('div');
        cardContent.classList.add('content');

        var cardHeader = document.createElement('div');
        cardHeader.classList.add('header');
        cardHeader.innerHTML = '<a class="header" target="_blank" href=' + track.permalink_url + '>' + track.title + '</a>';

        // Add div for button
        var playlistButton = document.createElement('div');
        playlistButton.classList.add('ui', 'bottom', 'attached', 'button', 'js-button');

        // Add icon and text to button
        var playlistIcon = document.createElement('i');
        playlistIcon.classList.add('add', 'icon');
        var playlistButtonText = document.createElement('span');
        playlistButtonText.innerHTML = 'Add to playlist';


        // Add the various child elements created abvove (note that append is not supported in IE)
        searchResults.appendChild(card);
        card.append(imgDiv, cardContent, playlistButton);
        cardContent.appendChild(cardHeader);
        imgDiv.appendChild(image_img);
        playlistButton.append(playlistIcon, playlistButtonText);
        // Add selected song to playlist
        playlistButton.addEventListener('click', function(){
            SoundCloudAPI.embed(track.permalink_url);
        });
    });
};



/* 4. Add to playlist and play */

SoundCloudAPI.embed = function(trackURL){
        SC.oEmbed(trackURL, {
        auto_play: false
    }).then(function(embed){
        console.log('oEmbed response: ', embed);

        var sideBar = document.querySelector('.js-playlist');
        
        // Embed the html aka iFram with for the song
        var playlistBox = document.createElement('div');
        playlistBox.innerHTML = embed.html;
        // Add the playlist box as the first element
        sideBar.insertBefore(playlistBox, sideBar.firstChild);
            
        localStorage.setItem('key', sideBar.innerHTML);
        
    
    });
};



var sideBar = document.querySelector('.js-playlist');
sideBar.innerHTML = localStorage.getItem('key');








