document.addEventListener('DOMContentLoaded', function() {
    console.log('I\'m ready');
    var aButton = document.createElement('button');
    document.body.appendChild(aButton);
    var clickMe = document.createTextNode('Click on me!');
    aButton.appendChild(clickMe);
    
    aButton.onclick = function() {
        alert('You found me!');
    }
    
    var anotherButton = document.getElementById('button2');
    anotherButton.onclick = function() {
        var theText = document.getElementById('myValue').value;
        alert(theText);
        
    }
    var theDiv = document.getElementById('div');
    theDiv.onmouseover = function() {
        theDiv.style.backgroundColor = 'blue';
    }
    theDiv.onmouseout = function() {
        theDiv.style.backgroundColor = 'white';
    }
    var para = document.getElementById('para')
    para.onclick = function() {
        var randomColor = ['green','red','pink','purple','grey','yellow']
        i = Math.floor(Math.random() * 5) + 1;
        para.style.color = randomColor[i];
    }
    var forEmpty = document.getElementById('forEmpty');
    forEmpty.onclick = function() {
       var emptyDiv = document.getElementById('empty');
       var theSpan = document.createElement('span')
       var text = document.createTextNode('James was here');
       theSpan.appendChild(text);
       emptyDiv.appendChild(theSpan);
        
    }
    
    var friends = ['Me','Myself','JR','Betsy','Fluffy','Francis','Francois','Spirit','Cheyenne','Kiante'];
    var forList = document.getElementById('forList');
    forList.onclick = function() {
        
        var theList = document.getElementById('ul');
        
        
         for(var i = 0; i < friends.length; i++){
            var listItem = document.createElement('li');
             var newer = friends.shift();
            //console.log(friends.splice(0,1));
            listItem.appendChild(document.createTextNode(newer));
            theList.appendChild(listItem);
            break;
         };
        
        
        
        
        
    }
});