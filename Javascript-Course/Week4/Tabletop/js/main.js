//var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1qqMY9Mm0tEY-kmq2E9EfwS6-Z1ZoRk9pF7zK78SdzTQ/edit?usp=sharing';
var publicWoWSpreadsheet = 'https://docs.google.com/spreadsheets/d/1dcnjO261YSfoUh1L3EcwN9NlPpDZDQND9CqyEYd_Z-M/edit?usp=sharing';

  function init() {
    Tabletop.init( {
      key: publicWoWSpreadsheet,
      callback: showInfo,
      simpleSheet: true 
    })
  }


    function showInfo(data, tabletop){
        data.forEach(function(data){
        var header = document.querySelector('.header');
        var newDiv = document.createElement('div');
        header.append(newDiv);
        newDiv.innerHTML = data.Category;
        console.log(data.Category);
        })
    }

window.addEventListener('DOMContentLoaded', init);