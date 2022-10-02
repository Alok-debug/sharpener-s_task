var form = document.getElementById('inputf');
form.addEventListener('submit', storeInput);
var customerID = 1;
var random = Math.random();

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
    localStorage.setItem(`${customerID}`,jsonCustomer);
}