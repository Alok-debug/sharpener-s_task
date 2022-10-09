var form = document.getElementById('inputf');
form.addEventListener('submit', storeInput);
//var customerID = 0;
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
    var customerData = {
        custId: `${document.getElementById('contact1').value}`,
        name: `${document.getElementById('personn').value}`,//form.children[1].value 
        mobileNo: `${document.getElementById('contact1').value}`,
        appointmentTime: `${document.getElementById('dateTime').value}`
    };

    axios.put(`https://crudcrud.com/api/274b3f5404064448b4a7cb7b5c11bb08/appoinmentData/${updateDataId[0]}`, customerData)
        .then(res => {
            console.log(res);
            //objectIDlist.push(res.data._id);
            //showNewUserOnScreen(res.data);
        })
        .catch(err => console.log(err));
    
}

function storeInput(e) {
    e.preventDefault();
    //customerID += 1;

    var customerData = {
        custId: `${document.getElementById('contact1').value}`,
        name: `${document.getElementById('personn').value}`,//form.children[1].value 
        mobileNo: `${document.getElementById('contact1').value}`,
        appointmentTime: `${document.getElementById('dateTime').value}`
    };
    //console.log(customerData);
    // var jsonCustomer = JSON.stringify(customerData);
    // localStorage.setItem(`${customerData.mobileNo}`, jsonCustomer);


    // // Instead of putting into local storage, Now try to put data on cloud using crud-crud, and axios
    axios.post('https://crudcrud.com/api/274b3f5404064448b4a7cb7b5c11bb08/appoinmentData', customerData)
        .then(res => {
            //console.log(res.data._id);
            //objectIDlist.push(res.data._id);
            showNewUserOnScreen(res.data);
        })
        .catch(err => console.log(err));
    // show on the screen
    

}


    function showNewUserOnScreen(user) {
        // show ul li items who have registered 
        
        var li = document.createElement('li');
        li.id = user._id;
        
        var detailsText = document.createTextNode(`Name: ${user.name},  MobileNo: ${user.mobileNo}, Appointment App: ${user.appointmentTime}       `);
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
            var li = e.target.parentElement;
            if (confirm('Are you Sure?')) {
                axios.delete(`https://crudcrud.com/api/274b3f5404064448b4a7cb7b5c11bb08/appoinmentData/${li.id}`)
                .then(() => console.log('delete success'))
                .catch(err => console.log(err));
                itemList.removeChild(li);
            }
        }
        else if (e.target.classList.contains('edit')) {
            var li = e.target.parentElement;
            document.getElementById('updatebtn').style.display = 'block';
            document.getElementById('submitbtn').style.display = 'none';
            axios.get(`https://crudcrud.com/api/274b3f5404064448b4a7cb7b5c11bb08/appoinmentData/${li.id}`)
                .then((OBJ) => {
                    updateDataId.push(OBJ.data._id);
                    document.getElementById('personn').value = OBJ.data.name;
                    document.getElementById('contact1').value = OBJ.data.mobileNo;
                    document.getElementById('dateTime').value = OBJ.data.appointmentTime;
                    //document.getElementById('submitbtn').value = 'UPDATE DATA';
                })
                .catch(err => console.log(err));
                itemList.removeChild(li);
            
        }
    }


    // when DOM Content gets loaded;

    window.addEventListener('DOMContentLoaded', () => {
        axios.get('https://crudcrud.com/api/274b3f5404064448b4a7cb7b5c11bb08/appoinmentData')
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




