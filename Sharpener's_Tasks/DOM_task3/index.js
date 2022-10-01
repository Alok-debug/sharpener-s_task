//console.dir(document.domain)
// var headerTitle=document.getElementById('header-title')
// headerTitle.innerText = 'inner text is changed'
// headerTitle.style.fontWeight = 'Bold'
// headerTitle.style.textDecoration = 'Underline';
// headerTitle.style.borderBottom='solid  red'

//------ GET ELEMENTs BY CLASS-NAME-----(gives groups of element with same class Name)
// var items = document.getElementsByClassName('list-group-item');
// for (let i = 0; i < items.length;i++){
//     items[i].style.color = "brown";
//     items[i].style.fontWeight = "bolder";
//     items[i].style.background = "grey"
//     if (i == 1) {
//         items[i].style.background='green'
//     }
//     if (i == 2) {
//         items[i].style.background = 'red';
//         items[i].innerHTML = '<h1>Hey</h1>';
//         items[i].style.color = 'blue'
//         items[i].style.display='none'
//     }
// }

//-------------get elements by tag Name-----

// var liItems = document.getElementsByTagName('li');

// for (let i = 0; i <liItems.length;i++){
//     liItems[i].style.color = "brown";
//     liItems[i].style.fontWeight = "bolder";
//     liItems[i].style.background = "grey"
//     if (i == 2) {
//         liItems[i].style.background='green'
//     }
//     if (i == 3) {
//         liItems[i].style.background = 'red';
//         liItems[i].innerHTML = '<h1>Hey</h1>';
//         liItems[i].style.color='blue'
//     }
// }



// ------- querySelector()-------->picks single
//    elements at a time which occures at first <----------//
// queryselector can pick html element by all type of selector like..
// ..... class, id, tagname, also  by DOM like nth clild

// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px red'

// var input = document.querySelector('input'); //---- here first occurance of input is picked
// input.value = 'Hello World';

//----to pick element of your choice, you need to mention it in any way,out of two ways.
// 1. psudoselectors
// 2. tagName with distinguishing attribute
// here is the example
// var inputSubmit = document.querySelector('input[type="submit"]');
// inputSubmit.value='press here'

// var item = document.querySelector('.list-group-item');
// item.style.background = 'red';
// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.background = 'red';

// //--to select nth item out of list of item of same selectors
// var nthitem = document.querySelector('.list-group-item:nth-child(2)');
// nthitem.style.background = 'blue';



// ------------querySelectorAll()---------------------------//


var titles = document.querySelectorAll('.title');
console.log(titles)
titles[0].innerHTML = '<h1>querySelectorAll</h1>';

var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');

for (let i = 0; i < odd.length; i++){
    if (i == 0) {
        even[i].style.color = 'green';
        even[i].style.fontWeight='bolder'
    }
    odd[i].style.background = 'yellow';
    even[i].style.background = 'lightgrey';

}