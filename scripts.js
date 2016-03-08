document.addEventListener('DOMContentLoaded', function() {
    // Simple console.log letting me know the browser is fully loaded.
    console.log('I\'m ready');
    
    // 1. Make a button appear on the page when it's first loaded. The button cannot already be in your html. When the button is clicked, you should display an Alert box with any (nice) message. 
    
    var aButton = document.createElement('button');
    document.body.appendChild(aButton);
    var clickMe = document.createTextNode('Click on me!');
    aButton.appendChild(clickMe);
    
    aButton.onclick = function() {
        alert('You found me!');
    }
    
    // 2. Make a button and text box (you can just put them in your HTML). When the button is clicked, display an alert with the message that is typed in the text box.
    
    var anotherButton = document.getElementById('button2');
    anotherButton.onclick = function() {
        var theText = document.getElementById('myValue').value;
        alert(theText);
        
    }
    
    // 3. Create a `div` in HTML. Using JavaScript, make it change to a different background color when your mouse hovers over it. The div should return to its original color when the mouse exits the div.
   
    var theDiv = document.getElementById('div');
    theDiv.onmouseover = function() {
        theDiv.style.backgroundColor = 'blue';
    }
    theDiv.onmouseout = function() {
        theDiv.style.backgroundColor = 'white';
    }
    
    // 4. Put some text in a paragraph. Make it where when you click on the paragraph, the color of the text switches to red. Once you get that working, try to rewrite your code to make it switch to a random color each click (you don't have to show the code for just red once you get random working).
    
    var para = document.getElementById('para')
    para.onclick = function() {
        var randomColor = ['green','red','pink','purple','grey','yellow']
        i = Math.floor(Math.random() * 5) + 1;
        para.style.color = randomColor[i];
    }
    
    // 5. Add a button and an empty div. When the button is clicked, add a `span` that contains your name to the empty div.
   
    var forEmpty = document.getElementById('forEmpty');
    forEmpty.onclick = function() {
       var emptyDiv = document.getElementById('empty');
       var theSpan = document.createElement('span')
       var text = document.createTextNode('James was here');
       theSpan.appendChild(text);
       emptyDiv.appendChild(theSpan);
        
    }
    
    // 6. Create a button and a `ul` in your HTML. In JavaScript, create an array containing the names of your friends (at least 10. If you don't have that many, include your imaginary ones). When the button is clicked, add each friend's name as an `li` to the `ul` on the page.
    
    var friends = ['Me','Myself','JR','Betsy','Fluffy','Francis','Francois','Spirit','Cheyenne','Kiante'];
    var forList = document.getElementById('forList');
    forList.onclick = function() {
        
        var theList = document.getElementById('ul');
         for(var i = 0; i < friends.length; i++){
            var listItem = document.createElement('li');
             var newer = friends.shift();
            listItem.appendChild(document.createTextNode(newer));
            theList.appendChild(listItem);
            break;
         };
    }
});