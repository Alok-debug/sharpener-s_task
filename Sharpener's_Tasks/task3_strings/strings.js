let name = "yash prasad";
let age = 25;
let address = "Prestige Falcon City, bangalore";

function printDetails(name,age,address){
    details = ("personal datails= My name is" + " " + name + ",age is " + age + ", and address is " + address);
    console.log(details);
    return details;
}

let info = printDetails(name, age, address);
const myArray = info.split(",")
console.log(myArray)
