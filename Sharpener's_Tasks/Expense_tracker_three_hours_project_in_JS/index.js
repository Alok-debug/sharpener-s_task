var form = document.getElementById('inputForm');
form.addEventListener('submit', storeInput);
//var expenseID = 0;
//var objectArr = [];

// for update operation
let updateDataId = [];
var updatebtnn = document.getElementById('updatebtn');
updatebtnn.addEventListener('click', updateDataToCloud);

// add ul to DOM
var ul = document.createElement('ul');
ul.id = 'show__details';
var mainDiv = document.getElementById('main__container');
mainDiv.appendChild(ul);

function updateDataToCloud(e) {
    e.preventDefault();
    var expenseData = {
        
        expenseAmt: `${document.getElementById('E_amount').value}`,//form.children[1].value 
        expenseDes: `${document.getElementById('descript').value}`,
        expenseCat: `${document.getElementById('exp_cat').value}`
    };

    axios.put(`https://crudcrud.com/api/53d58481ebd74ca9ae374c51bfb4a2b5/expenseData/${updateDataId[0]}`, expenseData)
        .then(() => {
            //console.log(res);
            //objectIDlist.push(res.data._id);
            //showNewUserOnScreen(expenseData);
            updateDataId.pop(); 
        })
        .catch(err => console.log(err));
    document.getElementById('updatebtn').style.display = 'none';
    document.getElementById('submitbtn').style.display = 'block';
    
}




function storeInput(e) {
    e.preventDefault();
    //expenseID += 1;
    var expenseData = {
        // expenseID: `${expenseID}`,
        expenseAmt: `${document.getElementById('E_amount').value}`,//form.children[1].value 
        expenseDes: `${document.getElementById('descript').value}`,
        expenseCat: `${document.getElementById('exp_cat').value}`
    };
    //console.log(expenseData);
    var jsonExpense = JSON.stringify(expenseData);
    // localStorage.setItem(`${expenseID}`, jsonExpense);
    // objectArr.push(expenseData);

    // // Instead of putting into local storage, Now try to put data on cloud using crud-crud, and axios
    axios.post('https://crudcrud.com/api/53d58481ebd74ca9ae374c51bfb4a2b5/expenseData', expenseData)
        .then(res => {
            //console.log(res.data._id);
            //objectIDlist.push(res.data._id);
            showNewUserOnScreen(res.data);
        })
        .catch(err => console.log(err));
    // show on the screen
    
}

function showNewUserOnScreen(user){


    // show ul li items who have registered 
    var li = document.createElement('li');
    li.className = 'li_items';
    li.id = user._id;
    var detailsText = document.createTextNode(`ExpenseAmt: ${user.expenseAmt}, Expense-Des: ${user.expenseDes}, Exp. Category: ${user.expenseCat}`);
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
        var li = e.target.parentElement;
        if (confirm('Are you Sure?')) {
            axios.delete(`https://crudcrud.com/api/53d58481ebd74ca9ae374c51bfb4a2b5/expenseData/${li.id}`)
            .then(() => console.log('delete success'))
            .catch(err => console.log(err));
            itemList.removeChild(li);
        }
        
    }
    if (e.target.classList.contains('edit')) {
        var li = e.target.parentElement;
            document.getElementById('updatebtn').style.display = 'block';
            document.getElementById('submitbtn').style.display = 'none';
            axios.get(`https://crudcrud.com/api/53d58481ebd74ca9ae374c51bfb4a2b5/expenseData/${li.id}`)
                .then((OBJ) => {
                    updateDataId.push(OBJ.data._id);
                    document.getElementById('E_amount').value = OBJ.data.expenseAmt;
                    document.getElementById('descript').value = OBJ.data.expenseDes;
                    document.getElementById('exp_cat').value = OBJ.data.expenseCat;
                    //document.getElementById('submitbtn').value = 'UPDATE DATA';
                })
                .catch(err => console.log(err));
                itemList.removeChild(li);
        // var li = e.target.parentElement;
        // var li_ID = e.target.parentElement.id;
        // console.log(li_ID);
        // objectArr.filter((obj) => {
        //     if (obj.expenseID === li_ID) {
        //         document.getElementById('E_amount').value = obj.expenseAmt;
        //         document.getElementById('descript').value = obj.expenseDes;
        //         document.getElementById('exp_cat').value = obj.expenseCat;
        //         itemList.removeChild(li);
        //         localStorage.removeItem(li_ID);
        //     }
        // }
        // );
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

// when DOM Content gets loaded;

window.addEventListener('DOMContentLoaded', () => {
    axios.get('https://crudcrud.com/api/53d58481ebd74ca9ae374c51bfb4a2b5/expenseData')
        .then(response => { return (response.data) })
        .then(data => {
            data.forEach(obj => showNewUserOnScreen(obj))
        })
        .catch(err => console.log(err));
    // const localstorageobj = localStorage;
    // const localstoragekeys = Object.keys(localstorageobj);
    // for (var i = 0; i < localstoragekeys.length; i++){
    //     const key = localstoragekeys[i];
    //     const userDetailString = localstorageobj[key];
    //     const userDetailsObj = JSON.parse(userDetailString);
    //     showNewUserOnScreen(userDetailsObj);
    // }

})



