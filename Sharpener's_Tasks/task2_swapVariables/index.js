// in order to swap two variable we can use array destructuring (ES6 Concept)
//------- direct swap using destructuring----------
let a = 10;
let b = 20;
[b, a] = [a, b];
console.log("a:", a, "b:", b)


//--------swap using function ( separation of concern)--------
// function swapVariables(x, y) {
//     [x, y] = [y, x]
//     return [x,y]}
// console.log(swapVariables(a, b))


//--------swap using XOR operations---------
// let a = 1;
// let b = 2;
// a = a ^ b;
// b = a ^ b;
// a = a ^ b;
// console.log(a,b)
