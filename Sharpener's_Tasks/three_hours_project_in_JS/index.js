


var form = document.getElementById('inputForm');
form.addEventListener('submit', storeInput);
var expenseID = 0;
var random = Math.random();


// add ul to DOM
var ul = document.createElement('ul');
ul.id = 'show__details';
var mainDiv = document.getElementById('main__container');
mainDiv.appendChild(ul);

function storeInput(e) {
    e.preventDefault();
    expenseID += 1;

    var expenseData = {
        expenseID: `${expenseID}`,
        expenseAmt: `${document.getElementById('E_amount').value }`,//form.children[1].value 
        expenseDes: `${document.getElementById('descript').value  }`,
        expenseCat: `${document.getElementById('exp_cat').value }`
    };
    //console.log(expenseData);
    var jsonExpense = JSON.stringify(expenseData);
    localStorage.setItem(`${expenseID}`, jsonExpense);

    // show ul li items who have registered 
    var li = document.createElement('li');
    li.className = 'li_items';
    var detailsText = document.createTextNode(`expenseAmt: ${document.getElementById('E_amount').value}, expenseDes: ${document.getElementById('descript').value}, Exp. Category: ${document.getElementById('exp_cat').value}`);
    li.appendChild(detailsText);
    
    // create delete and edit button
    var delbtn = document.createElement('button');
    delbtn.id = 'deletebtn';
    delbtn.className = 'del_class delete btnn';
    delbtn.appendChild(document.createTextNode('❌'));

    var editbtn = document.createElement('button');
    editbtn.id = 'editebtn';
    editbtn.className = 'edit_class edit btnn';
    editbtn.appendChild(document.createTextNode('ᴇᴅɪᴛ'));

    // add delete button and add button to li
    li.appendChild(editbtn);
    li.appendChild(delbtn);
    ul.appendChild(li);
}


// delete functiionality
// element remove functionality
var itemList = document.getElementById('show__details');
itemList.addEventListener('click', doSomething);
function doSomething(e) {
    //console.log(e);
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you Sure?')) {
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
        
    }
    if (e.target.classList.contains('edit')) {
        var selectedRow = e.target.parentElement;
        var strr = selectedRow.firstChild;
        
        console.log(strr['expenseAmt']);
        // document.getElementById('E_amount').value = selectedRow.firstChild;
        // document.getElementById('descript').value = selectedRow.secondChild;
        // document.getElementById('exp_cat').value = selectedRow.lastChild;

          
        
        
    }
}


// // delete functiionality
// // element remove functionality
// var itemList = document.getElementById('show__details');
// itemList.addEventListener('click', removeItem);
// function removeItem(e) {
//     //console.log(e);
//     if (e.target.classList.contains('edit')) {
//         var li = e.target.parentElement;
//         itemList.removeChild(li);
        
        
//     }
// }

