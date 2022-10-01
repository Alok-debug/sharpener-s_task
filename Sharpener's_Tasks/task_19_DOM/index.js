const item1 = document.getElementById('li1');
const item2 = document.getElementById('li2')
item1.style.color = 'Brown'
item2.innerText = 'Brown'
item2.style.color='red'

item2.addEventListener('mouseover', (e) => {
    
    e.target.innerHTML = "<h1>You took mouse over me</h1>"
    e.target.style.color='black'
});
item1.addEventListener('mouseout', (e) => {
    
    e.target.innerHTML = "<h6>this is mouseout</h6>"
    e.target.style.color='blue'
});


window.addEventListener('click', (e) => {
    e.target.style.background="red"
})


