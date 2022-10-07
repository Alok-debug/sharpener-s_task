const posts = [
    {title:'Post One', body:'This is post one' },
    {title:'Post Two', body:'This is post one'}
];

let currTime = new Date().getTime();
console.log(currTime);

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}, post created:@ ${Math.floor((new Date().getTime()-currTime)/1000)} ,Seconds Ago</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
    
}


createPost({ title: 'Post three', body: 'This is post three' }, getPosts)
createPost({title:'Post four', body:'This is post four'},getPosts)