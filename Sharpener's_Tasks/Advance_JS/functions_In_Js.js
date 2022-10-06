//---function Statement and function declaration is Same
function a() {
    console.log('This is function statement');
}
a();
//---function Expression ==> Function acting like value
var newFun= function () {
    console.log('This is function expression, as here we are trying to treat function as a value');
}
newFun();

//-----Differnece btw function statement and function expression ,
//function stmnt are hoisted and functn exp are not hoisted,
//hence can be used in code before code execution comes to its line.
// this throws a error "Type error".

//------Anonymous function------
//     function without having their identity are called anonymous func.
//     they are defined with name
//     Since anonymous function dont hav name, so they are used as values.
var b = function () {
    console.log('This part is known as anonymous function ,So func. exp. uses anonymous func and func. statement cant use them')
}

// ------Named Function Expression--------------
//       function expression using Named function instead of anonymous function is called NAMED FUNCTION EXPRESSION.
var newFun= function oldFun() {
    console.log('This is function expression, as here we are trying to treat function as a value');
}
newFun();
//oldFun();// -------> this will through error

//-------param vs argument----
// Param: Recieved variables, local variable , which are accessible inside function only
// Args: Sent variables,which are send at time function calling.


//----fisrt class functions or first class citizen--
//   Behaviour of function, by which function can be trated as a value.
//   Hence function can be passed into another function , function can be return from another.
//    That's why function in javaScript are called as first class function.


