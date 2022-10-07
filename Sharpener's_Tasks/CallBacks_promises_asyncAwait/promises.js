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
    },1000);
}

//-----promises to create post-----
function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const error = false;
            if (!error) {
                resolve();
            } else {
                reject('Error: Something went wrong');
            }
        }, 2000);
    });
}

createPost({ title: 'Post Three', body: 'This is post three' })
    .then(getPosts)
    .catch(err => console.log(err));

createPost({ title: 'Post four', body: 'This is post four' })
    .then(getPosts)
    .catch(err => console.log(err));
    
//------promises to delete post
function deletePost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (posts.length > 0) {
                posts.pop();
                resolve()
            } else {
                reject("Insede catch block, Post's array became empty")
            }
        }, 5000);
    });
}

deletePost().then(getPosts).catch(err => console.log(err));
//deletePost().then(getPosts).catch(err => console.log(err));
// deletePost().then(getPosts).catch(err => console.log(err));
// deletePost().then(getPosts).catch(err => console.log(err));