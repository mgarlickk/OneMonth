//var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1qqMY9Mm0tEY-kmq2E9EfwS6-Z1ZoRk9pF7zK78SdzTQ/edit?usp=sharing';
var publicWoWSpreadsheet = 'https://docs.google.com/spreadsheets/d/1MBf8yFVXd6jt9378Sp9ILK10yJ7TaaGahJKyR6UgVPw/edit?usp=sharing';

    function init() {
        Tabletop.init( {
          key: publicWoWSpreadsheet,
          callback: showInfo,
          simpleSheet: true 
        });
    }

    function showInfo(data, tabletop){
        data.forEach(function (data){
            var header = document.querySelector('.header');
            var newDamageDiv = document.createElement('h2');
            header.append(newDamageDiv);
            if(data.DPS != ''){
                newDamageDiv.innerHTML = 'Calculated DPS - ' + data.DPS;
            }
        });
        
        data.forEach(function(data){
            var leftGear = document.querySelector('.left-gear');
            var newDiv = document.createElement('div');
            var newButton = document.createElement('button');
            var dropdownContent = document.createElement('div');
            newDiv.classList.add('gear-spacing', 'site-dropdown');
            newButton.classList.add('site-dropbtn');
            dropdownContent.classList.add('site-dropdown-content');
            leftGear.append(newDiv);
            newDiv.appendChild(newButton);
            newDiv.appendChild(dropdownContent);
            newButton.innerHTML = data.GearLeft;
            dropdownContent.forEach(function(data){
                dropdownContent.innerHTML = data.GearList;
            });
            
        });
        
        data.forEach(function(data){
            var rightGear = document.querySelector('.right-gear');
            var newDiv = document.createElement('div');
            newDiv.classList.add('gear-spacing');
            rightGear.append(newDiv);
            newDiv.innerHTML = data.GearRight;
        });
        
        data.forEach(function(data){
            var middleGear = document.querySelector('.middle-gear');
            var newDiv = document.createElement('div');
            newDiv.classList.add('gear-spacing');
            middleGear.append(newDiv);
            newDiv.innerHTML = data.GearMiddle;
        });
    }

window.addEventListener('DOMContentLoaded', init);