'use strict';

let json = document.querySelector('.json');

fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(data => {
        // console.log('data: ', data.status, data.text());
        return data.json();
    })
    .then(users => {
        let user = users.filter(user => {
            if (user.username === 'Samantha') {
                return true;
            } else {
                return false;
            }
        });
        json.innerHTML = user[0].id;
        return user[0].id;
    })
    .then(id => {
        fetch(`https://jsonplaceholder.typicode.com/posts2`)
            .then(data => {
                return data.json();
            })
            .then(posts => {
                let userPosts = posts.filter(post => post.userId === id);
                userPosts.forEach(post => {
                    json.innerHTML += `<p>${post.body}</p>`;
                });
            })
            .catch(error => {
                console.log('Перехваченная вложенная ошибка!');
                console.log(error);
            });
    })
    .catch(error => {
        console.log('Перехваченная ошибка!');
        console.log(error);
    });

new Promise((resolve, reject) => {
    //functions
    resolve(value);
    reject(error);
})

    // pending
    // fullfiled
    // rejected

    .then(value => {})
    .catch(error => {})
    .finally(() => {});
