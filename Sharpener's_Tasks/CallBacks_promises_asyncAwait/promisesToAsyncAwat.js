const posts = [
    {title:'Post One', body:'This is post one' },
    {title:'Post Two', body:'This is post one'}
];


const newCreatePost = async (post) => {
    var creatingPost= new Promise((resolve, reject) => {
        setTimeout(() => {posts.push(post);
            const error = false;
            if (!error) {
                resolve('Creating post successfull');
            } else {
                reject('Error: Something went wrong');
            }}, 2000);
    });

    var deletingPost=new Promise((resolve, reject) => {
            setTimeout(() => {
                if (posts.length > 0) {
                    posts.pop();
                    resolve('deleting post successfull')
                } else {
                    reject("Insede catch block, Post's array became empty")
                }
            }, 5000);
        });
    

    let postcreation = await creatingPost;
    console.log(`${postcreation}, posts:`, posts);
    getPosts();

    

    let postdeletion = await deletingPost;
    console.log(`${postdeletion}, post:`, posts);
    getPosts();
    
    postdeletion = await deletingPost;
    console.log(`${postdeletion}, post:`, posts);
    getPosts();
    

     postdeletion = await deletingPost;
    console.log(`${postdeletion}, post:`, posts);
    getPosts();


}    


newCreatePost({ title: 'Post Three', body: 'This is post three' }).then((t) => console.log(t));
    
 








function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}, post created:@ ${(new Date())} ,Seconds Ago</li>`;
        });
        document.body.innerHTML = output;
    },1000);
}
// getPosts();
// //-----promises to create post-----


// // createPost({ title: 'Post Three', body: 'This is post three' })
// //     .then(getPosts)
// //     .catch(err => console.log(err));

// // createPost({ title: 'Post four', body: 'This is post four' })
// //     .then(getPosts)
// //     .catch(err => console.log(err));
    


// Promise.all([createPost({ title: 'Post Three', body: 'This is post three' }), createPost({ title: 'Post four', body: 'This is post four' })]).then(getPosts);
// //------promises to delete post
// function deletePost() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (posts.length > 0) {
//                 posts.pop();
//                 resolve()
//             } else {
//                 reject("Insede catch block, Post's array became empty")
//             }
//         }, 5000);
//     });
// }

// //deletePost().then(getPosts).catch(err => console.log(err));
// //deletePost().then(getPosts).catch(err => console.log(err));
// // deletePost().then(getPosts).catch(err => console.log(err));
// // deletePost().then(getPosts).catch(err => console.log(err));


