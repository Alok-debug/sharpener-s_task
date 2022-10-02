// element remove functionality
var itemList = document.getElementById('items');
itemList.addEventListener('click', removeItem);
function removeItem(e) {
    //console.log(e);
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you Sure?')) {
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
        
    }
}

//value of li items
// var valueLi = itemList.children[0].textContent.toLowerCase();;
// console.log(valueLi);


// item filter functionality 
var searchBox = document.getElementsByClassName('inputFilter')
// console.log(searchBox);
searchBox[0].addEventListener('keypress',searchInput);

function searchInput(e) {
    //convert text to lowercase
    var text = e.target.value.toLowerCase();
    // get item list
    var items = itemList.getElementsByTagName('li');
    //convert into array
    Array.from(items).forEach(function (item) {
        var itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
            
        }
    })
}


//------------add item functionality
var form = document.getElementById('addForm');
form.addEventListener('submit', addItem);

// add item
function addItem(e) {
    e.preventDefault();
    
    // get input value
    var newItem = document.getElementById('item').value;

    // description value
    var desVal = document.getElementById('description').value;
    
    // create new li element
    var li = document.createElement('li');

    // add class
    li.className = 'list-group-item';
    
    // add text Node with input value
    li.appendChild(document.createTextNode(newItem));
     
    // add text Node with description value
    li.appendChild(document.createTextNode(desVal));

    
    // create delete button
    var delbtn = document.createElement('button');

    // add classes to delete button
    delbtn.className = 'btn btn-danger delete';

    // append text node in delete button
    delbtn.appendChild(document.createTextNode('❌'));

    // create edit button
    var editbtn = document.createElement('button');

    // add classes to delete button
    editbtn.className = 'btnD btn btn-primary';

    // append text node in delete button
    editbtn.appendChild(document.createTextNode('ᴇᴅɪᴛ'));

    //add edit button to the li
    li.appendChild(editbtn);

    // add delete btn to li
    li.appendChild(delbtn);

    // add element as new item
    itemList.appendChild(li);


}

