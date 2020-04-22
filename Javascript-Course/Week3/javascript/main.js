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

var card = document.createElement('div');
card.classList.add('card');

var addCard = document.querySelector('.js-search-results');
addCard.appendChild(card);

var imgDiv = document.createElement('div');
imgDiv.classList.add('image');
imgDiv.classList.add('testing');

var addImgDiv = document.querySelector('.card:nth-child(2)');
addImgDiv.appendChild(imgDiv);

var catImage = document.createElement('div');
catImage.classList.add('image_img');

var addCatImage = document.querySelector('.testing');
addImgDiv.appendChild(imgDiv);



/* 4. Add to playlist and play */