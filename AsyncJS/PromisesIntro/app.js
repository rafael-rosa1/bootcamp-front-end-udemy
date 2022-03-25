// THE CALLBACK VERSION
const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 4000) {
            failure('Connection Timeout :(')
        } else {
            success(`Here is your fake data from ${url}`)
        }
    }, delay)
}
// THE PROMISE VERSION 
const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}

fakeRequestCallback('books.com/page1', 
function (response) {
    console.log('IT WORKED!!!');
    console.log(response);
    fakeRequestCallback('books.com/page1',
    function(response) {
        console.log('IT WORKED AGAIN!!!');
        fakeRequestCallback('books.com/page3',
        function(response) {
            console.log('IT WORKED AGAIN 3rd request!!');
            console.log(response)
        }, function(err) {
            console.log('ERROR(3rd request)!!!', err);
        })
    console.log(response);
    },function(err) {
        console.log('ERROR(2nd request)!!!', err);
    })
},function(err) {
    console.log('ERROR !!!', err);
})