var form = document.getElementById('inputf');
form.addEventListener('submit', storeInput);
var customerID = 1;
var random = Math.random();


// add ul to DOM
var ul = document.createElement('ul');
ul.id = 'show__details';
var mainDiv = document.getElementById('main__container');
mainDiv.appendChild(ul);

function storeInput(e) {
    e.preventDefault();
    customerID *= random;

    var customerData = {
        name: `${document.getElementById('personn').value }`,//form.children[1].value 
        mobileNo: `${document.getElementById('contact1').value  }`,
        appointmentTime: `${document.getElementById('dateTime').value }`
    };
    console.log(customerData);
    var jsonCustomer = JSON.stringify(customerData);
    localStorage.setItem(`${customerID}`, jsonCustomer);

    // show ul li items who have registered 
    var li = document.createElement('li');
    var detailsText = document.createTextNode(`name: ${document.getElementById('personn').value}, MobileNo: ${document.getElementById('contact1').value}, ${document.getElementById('dateTime').value}`);
    li.appendChild(detailsText);
    
    // create delete and edit button
    var delbtn = document.createElement('button');
    delbtn.id = 'deletebtn';
    delbtn.className = 'del_class delete';
    delbtn.appendChild(document.createTextNode('❌'));

    var editbtn = document.createElement('button');
    editbtn.id = 'editebtn';
    editbtn.className = 'edit_class edit';
    editbtn.appendChild(document.createTextNode('ᴇᴅɪᴛ'));

    // add delete button and add button to li
    li.appendChild(editbtn);
    li.appendChild(delbtn);
    ul.appendChild(li);
}


// delete functiionality
// element remove functionality
var itemList = document.getElementById('show__details');
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


// delete functiionality
// element remove functionality
var itemList = document.getElementById('show__details');
itemList.addEventListener('click', removeItem);
function removeItem(e) {
    //console.log(e);
    if (e.target.classList.contains('edit')) {
        var li = e.target.parentElement;
        itemList.removeChild(li);
        
        
    }
}






