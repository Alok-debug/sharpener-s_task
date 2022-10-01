//console.dir(document.domain)
var headerTitle=document.getElementById('header-title')
// headerTitle.innerText = 'inner text is changed'
// headerTitle.style.fontWeight = 'Bold'
// headerTitle.style.textDecoration = 'Underline';
// headerTitle.style.borderBottom='solid  red'

//------ GET ELEMENTs BY CLASS-NAME-----(gives groups of element with same class Name)
var items = document.getElementsByClassName('list-group-item');
for (let i = 0; i < items.length;i++){
    items[i].style.color = "brown";
    items[i].style.fontWeight = "bolder";
    items[i].style.background = "grey"
    if (i == 2) {
        items[i].style.background='green'
    }
    if (i == 3) {
        items[i].style.background = 'red';
        items[i].innerHTML = '<h1>Hey</h1>';
        items[i].style.color='blue'
    }
}