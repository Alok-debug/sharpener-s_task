var form = document.getElementById('inputf');
form.addEventListener('submit', storeInput);
var customerID = 1;
var random = Math.random();

function storeInput(e) {
    e.preventDefault();
    customerID *= random;

    var customerData = {
        name: `${ form.children[1].value }`,
        mobileNo: `${ form.children[3].value }`,
        appointmentTime: `${form.children[5].value}`
    };

    console.log(customerData);
    var jsonCustomer = JSON.stringify(customerData);
    localStorage.setItem(`${customerID}`,`${jsonCustomer}`);
}