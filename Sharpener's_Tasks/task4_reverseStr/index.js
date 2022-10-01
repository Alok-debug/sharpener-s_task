//-----combining three inbuilt methos of js-----
// function reverseString(str) {
//     return str.split("").reverse().join("");
// }
// reverseString("hello");

//------without using any inbuilt methods---
var reverseString = function(s) {
    n=s.length
    let i=0
    while(i<n/2){
        [s[i],s[n-1-i]]=[s[n-1-i],s[i]]
        i+=1
    }
    return s
};