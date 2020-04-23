/* 1. Search */





/* 2. Query Soundcloud API */


var SoundCloudAPI = {}

SoundCloudAPI.init = function(){
    SC.initialize({
        client_id: 'cd9be64eeb32d1741c17cb39e41d254d'
    });
};

SoundCloudAPI.init();

SoundCloudAPI.getTrack = function(inputValue){
    // find all sounds of buskers licensed under 'creative commons share alike'
    SC.get('/tracks', {
      q: inputValue
    }).then(function(tracks) {
      console.log(tracks);
    });
};


SoundCloudAPI.getTrack('zedd');

/* 3. Display the cards */

SoundCloudAPI.renderTracks = function(){

    // Add first child Card
    var card = document.createElement('div');
    card.classList.add('card');
    var addCard = document.querySelector('.js-search-results');
    addCard.appendChild(card);
    
    // Add div for the image
    var imgDiv = document.createElement('div');
    imgDiv.classList.add('image');
    imgDiv.classList.add('testing');
    var addImgDiv = document.querySelector('.card:nth-child(2)');
    addImgDiv.appendChild(imgDiv);

    // Add the image to the above div
    var catImg = document.createElement('img');
    catImg.classList.add('image_img');
    catImg.src = 'http://www.placekitten.com/290/290';
    var addCatImg = document.querySelector('.testing');
    addCatImg.appendChild(catImg);

    // Add the content div
    var imgContent = document.createElement('div');
    imgContent.classList.add('content');
    imgContent.classList.add('testing2');
    var addImgContent = document.querySelector('.card:nth-child(2)');
    addImgContent.appendChild(imgContent);
    
    // Add the div for the link
    var imgContentChild = document.createElement('div');
    imgContentChild.classList.add('header');
    imgContentChild.classList.add('testing3');
    var addImgContentChild = document.querySelector('.testing2');
    addImgContentChild.appendChild(imgContentChild);
    
    // Add the link to the above div
    var songLink = document.createElement('a');
    songLink.innerHTML = '-Song Name Here-';
    songLink.href = 'https://soundcloud.com/barsuk-records/rilo-kiley-science-vs-romance';
    songLink.target = '_blank';
    var addSongLink = document.querySelector('.testing3');
    addSongLink.appendChild(songLink);
    
    
}

SoundCloudAPI.renderTracks();

/* 4. Add to playlist and play */