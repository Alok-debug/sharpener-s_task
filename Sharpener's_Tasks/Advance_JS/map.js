// map function works in this way
var arr = [1, 2, 3, 4];
var newArr = arr.map((num) => num ** num);
console.log(arr);
console.log(newArr);

// polyfill for map function will be like this
function myMap(arr)
