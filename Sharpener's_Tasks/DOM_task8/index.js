var itemList = document.getElementById('items');

itemList.addEventListener('click', removeItem);
function removeItem(e) {
    //console.log(e);
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you Sure?')) {
            var li = e.target.parentElement;
            itemList.removeChild(li);

        }
        
    }
}

