const posts = [
    {title:'Post One', body:'This is post one' },
    {title:'Post Two', body:'This is post one'}
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}, post created:@ ${(new Date().toLocaleTimeString())} ,Seconds Ago</li>`;
        });
        document.body.innerHTML = output;
    },10000);
}

function createPost(callback) {
    const postData = [
        {title:'Post Three', body:'This is post three' },
        { title: 'Post four', body: 'This is post four' },
        {title:'Post fivr', body:'This is post fivr' },
        { title: 'Post six', body: 'This is post six' },
        {title:'Post seven', body:'This is post sevev' },
        { title: 'Post eight', body: 'This is post eight' },
        {title:'Post nine', body:'This is post nine' },
        {title:'Post ten', body:'This is post ten'}
    ];
    for (let i = 0; i < postData.length; i++){
        setTimeout(() => {
        posts.push(postData[i]);
            
        }, i * 1000);
        
    }
    callback();
    // for (let i = 0; i < postData.length; i++){
    //     setTimeout(() => {
    //     posts.pop(postData[postData.length-1-i]);
    //         callback();
    //     }, i * 1000);
        
    // }
    
    
}


createPost(getPosts);

let currTime = new Date().getTime();
console.log(currTime);

// var li = document.getElementsByTagName('li');
// setTimeout(() => {
//     for (let i = 0; i < li.length; i++) {
//         //create text node
//         //var text = document.createTextNode();
//         console.log(li[i].firstChild);
//     }
// },10000)

