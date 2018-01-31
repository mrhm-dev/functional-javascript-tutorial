// var name = 'Twinkle Cats';

// function sayName() {
//     console.log('Hello, ' + name);
// }
// // console.dir(sayName);
// sayName();

function greeting(msg) {
    return function(name) {
        console.log(msg + ' ' + name);
    }
}

var hello = greeting('Hello');
hello('Twinkle Cats');