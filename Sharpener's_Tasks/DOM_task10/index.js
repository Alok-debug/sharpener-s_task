var form = document.getElementById('inputf');
form.addEventListener('submit', storeInput);
var customerID = 1;
var random = Math.random();


// add ul to DOM
var ul = document.createElement('ul');
ul.id = 'show__details';
var mainDiv = document.getElementById('main__comtainer');
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


    var li = document.createElement('li');
    var detailsText = document.createTextNode(`name: ${document.getElementById('personn').value}, MobileNo: ${document.getElementById('contact1').value}, ${document.getElementById('dateTime').value}`);
    li.appendChild(detailsText);
    ul.appendChild(li);
    


}







