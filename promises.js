// var promiseToCleanRoom = new Promise(function (resolve, reject) {
//     var status = confirm('Have you cleaned your room?');

//     if (status === true) {
//         resolve('Good!!');
//     }

//     else {
//         reject('Very Bad!!!');
//     }

// });

// promiseToCleanRoom
//     .then(function (message) {
//         console.log(message);
//     })
//     .catch(function (err) {
//         console.log(err);
//     });

// Advance

new Promise(function (resolve, reject) {
    resolve({
        posts: [
            { name: "POST 1" },
            { name: "POST 2" }]
    });
})
    .then(function (data) {
        return data.posts;
    })
    .then(function (posts) {
        console.log('posts', posts);
    })
    .then(function(){
        console.log('Do some work');
    })
    .catch(function (err) {
        console.log(err, 'catch');
    });