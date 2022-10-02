var form = document.getElementById('inputf');
form.addEventListener('submit', storeInput);

function storeInput(e) {
    e.preventDefault();
    console.log(form.children[1])
    localStorage.setItem(`${form.children[1].value}`,`${form.children[3].value}`);
}