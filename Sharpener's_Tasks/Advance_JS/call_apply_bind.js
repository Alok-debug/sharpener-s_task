let person1 = {
    fName: "Shivam",
    lName: "Shetthi",
    age:   23
}


const printDetails = function () {
    console.log(this.fName + " " + this.lName + " is " + this.age + " years old");
}

printDetails.call(person1);// call 
printDetails.apply(person1);// apply, if we are not passing any parameters then call and apply works totally similar
printDetails.bind(person1); //Bind function doesn't give executed immidiately, it only binds function with values to get executed later in time.
printDetails.bind(person1)();// to execute binded function