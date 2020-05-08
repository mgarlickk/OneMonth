var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1qqMY9Mm0tEY-kmq2E9EfwS6-Z1ZoRk9pF7zK78SdzTQ/edit?usp=sharing';

function init() {
Tabletop.init( { key: publicSpreadsheetUrl,
                 callback: showInfo,
                 simpleSheet: true } )
}

function showInfo(data, tabletop) {
console.log(data);
}

window.addEventListener('DOMContentLoaded', init);

function showInfo(data, tabletop){
    data.forEach(function(data){
        var header = document.querySelector('.header');
        var newDiv = document.createElement('div');
        header.append(newDiv);
        newDiv.innerHTML = data.Category;
    });
}