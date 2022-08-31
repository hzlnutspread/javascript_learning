window.addEventListener('DOMContentLoaded', (e) => {

    const posts = [
        {title: 'Post one', body: 'This is post one'},
        {title: 'Post two', body: 'This is post two'}
    ];

    function getPosts() {
        setTimeout(() => {
            let output = '';
            posts.forEach((post, index) => {
                output += `<li>${post.title}</li>`;
            });
            document.body.innerHTML = output;
        }, 1000);
    }

    function createPost(post) {
        return new Promise((resolve, reject) => {
                posts.push(post);

                const error = false;
                if(!error) {
                    resolve();
                } else {
                    reject('Error: Something went wrong');
                }
        });
        
    }

    // createPost({title: 'This is a new post', body: 'This is post 3'})
    // .then(getPosts)
    // .catch(error => alert(error));


    // Async/await
    // async function init() {
    //     await createPost({title: 'This is a new post', body: 'This is post 3'});
    //     getPosts();
    // }

    // init();


    // Async/await with fetch
    async function fetchUsers() {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        const data = await response.json();
        console.log(data)
        console.log("----------------------------------------")

        console.log(data[0].name)
        console.log("----------------------------------------")

        data.forEach((data) => {
            console.log(data.name)
        });

        console.log("----------------------------------------")


        for (i = 0; i < Object.keys(data).length; i++) {
            console.log(Object.values(data)[i]['name']);
        }
    };

    fetchUsers();



    // Promise.all
    // const promise1 = Promise.resolve('Hello World');
    // const promise2 = 10;
    // const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 2000, 'Goodbye'));
    // const promise4 = fetch('https://jsonplaceholder.typicode.com/users')
    // .then(response => response.json());


    // Promise.all([promise1, promise2, promise3, promise4]).then((values) => console.log(values));


});