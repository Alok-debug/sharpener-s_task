var form = document.getElementById('inputForm');
form.addEventListener('submit', storeInputToCloud);


// for update operation
let updateDataId = [];
var updatebtnn = document.getElementById('updatebtn');
updatebtnn.addEventListener('click', updateDataToCloud);

async function updateDataToCloud(e) {
    e.preventDefault();
    var expenseData = {
        expenseCat: `${document.getElementById('exp_cat').value}`,
        expenseAmt: `${document.getElementById('E_amount').value}`,//form.children[1].value 
        expenseDes: `${document.getElementById('descript').value}`
        
    };
    document.getElementById('updatebtn').style.display = 'none';
    document.getElementById('submitbtn').style.display = 'block';
    try {
        const dataPosted = await axios.put(`http://localhost:5000/updateExpense/${updateDataId[0]}`, expenseData);
        //showNewUserOnScreen(expenseData);
        updateDataId.pop();
    }
    catch (err) {
        console.log(err);
    }
}

async function storeInputToCloud(e) {
    e.preventDefault();
    var expenseData = {
        expenseCat: `${document.getElementById('exp_cat').value}`,
        expenseAmt: `${document.getElementById('E_amount').value}`,
        expenseDes: `${document.getElementById('descript').value}`
        
    };
    try {
        const response = await axios.post('http://localhost:5000/addExpense', expenseData)
        showNewUserOnScreen(response.data);
    } catch (err) {
        console.log(err)
    }
}

// add ul to DOM
var ul = document.createElement('ul');
ul.id = 'show__details';
var mainDiv = document.getElementById('main__container');
mainDiv.appendChild(ul);


function showNewUserOnScreen(user){
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
    //clearForm();
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
            const deleteRow = async () => {
                try {
                    let response = await axios.delete(`http://localhost:5000/deleteExpense/${li.id}`);
                    console.log('delete success');
                    itemList.removeChild(li);
                } catch (err) {
                    console.log(err);
                }
            }
            deleteRow();
            
        }
        
    }
    if (e.target.classList.contains('edit')) {
        var li = e.target.parentElement;
        document.getElementById('updatebtn').style.display = 'block';
        document.getElementById('submitbtn').style.display = 'none';
        const editdetails = async () => {
            try {
                let dataObj = await axios.get(`http://localhost:5000/getExpense/${li.id}`);
                updateDataId.push(dataObj.data._id);
                document.getElementById('exp_cat').value = dataObj.data.expenseCat;
                document.getElementById('E_amount').value = dataObj.data.expenseAmt;
                document.getElementById('descript').value = dataObj.data.expenseDes;
                itemList.removeChild(li);
            } catch (err) {
                console.log(err);
            }
        }
        editdetails();
    }
}

// when DOM Content gets loaded;
async function loadWindow () {
    try {
        const responseFromCloud = await axios.get('http://localhost:5000/getExpenses');
        const data = responseFromCloud.data;
        data.forEach(obj =>showNewUserOnScreen(obj));
    }
    catch (err) {
        console.log(err)
    }
}

window.addEventListener('DOMContentLoaded', loadWindow);
    







