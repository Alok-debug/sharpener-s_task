// -------------Add,modify,remove element from DOM-------
//------------traversing of DOM----

//var itemList = document.querySelector('#items');
// //--parent Node and parent Element are alomost same
// console.log(itemList.parentNode)
// itemList.parentNode.style.backgroundColor = 'lightGrey'
// // --parent element
// console.log(itemList.parentElement)

//---childNode VS children

// console.log(itemList.childNodes);
//      // it gives white spaces or line breakes as text nodes

// console.log(itemList.children);
// console.log(itemList.children[0]);
//   // it gives only element childs


// // firstChild
// console.log(itemList.firstChild);
// console.log(itemList.firstElementChild);

// // lastChild
// console.log(itemList.lastChild);
// console.log(itemList.lastElementChild);

// // next sibiling
// console.log(itemList.nextSibling);
// console.log(itemList.nextElementSibling);//---it is showimg here 'null' as this element dont have next sibling
// console.log(itemList.previousElementSibling);


//-----creating new element ----

var newDiv = document.createElement('div');
// add class
newDiv.className = 'new';
// add id
newDiv.id = 'new1';

//add title
newDiv.setAttribute('title', 'Hello new');

// create text Node
var newDivText = document.createTextNode('Hello World');

// add text to div as child
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
newDiv.style.fontSize='30px'
container.insertBefore(newDiv, h1);

// manupulate newly created element

var newly = document.querySelector('body').children[0].children[0].firstElementChild;
newly.style.background = 'yellow';


