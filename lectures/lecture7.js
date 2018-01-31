// function host() {
//     console.log('I am host function..');
//     return function() {
//         console.log('I am Chiled');   
//     }
// }

// var a = host();
// a();


// function greeting(msg) {
//     return function(name) {
//         console.log(msg + ' ' + name);
//     }
// }

function greeting(msg) {
    function ret(name) {
        console.log(msg + ' ' + name);
    }

    return ret;
}

var good = greeting('Good Morning');
var hello = greeting('Hello');

hello('Twinkle Cats');
good('Twinkle Cats');

