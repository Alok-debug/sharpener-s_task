


var form = document.getElementById('inputForm');
form.addEventListener('submit', storeInput);
var expenseID = 0;
var objectArr = [];

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
    objectArr.push(expenseData);
    


    // show ul li items who have registered 
    var li = document.createElement('li');
    li.className = 'li_items';
    li.id = expenseID;
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
    clearForm();
}

var clearForm = function () {
    document.getElementById('E_amount').value = "";
    document.getElementById('descript').value = '';
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
            localStorage.removeItem(li.id);
        }
        
    }
    if (e.target.classList.contains('edit')) {
        var li = e.target.parentElement;
        var li_ID = e.target.parentElement.id;
        console.log(li_ID);
        objectArr.filter((obj) => {
            if (obj.expenseID === li_ID) {
                document.getElementById('E_amount').value = obj.expenseAmt;
                document.getElementById('descript').value = obj.expenseDes;
                document.getElementById('exp_cat').value = obj.expenseCat;
                itemList.removeChild(li);
                localStorage.removeItem(li_ID);
            }
        }
        );
        
    

          
        
        
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

