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

    var card = document.createElement('div');
    card.classList.add('card');

    var addCard = document.querySelector('.js-search-results');
    addCard.appendChild(card);

    var imgDiv = document.createElement('div');
    imgDiv.classList.add('image');
    imgDiv.classList.add('testing');

    var addImgDiv = document.querySelector('.card:nth-child(2)');
    addImgDiv.appendChild(imgDiv);

    var catImg = document.createElement('img');
    catImg.classList.add('image_img');
    catImg.src = 'http://www.placekitten.com/290/290';

    var addCatImg = document.querySelector('.testing');
    addCatImg.appendChild(catImg);
}

SoundCloudAPI.renderTracks();

/* 4. Add to playlist and play */