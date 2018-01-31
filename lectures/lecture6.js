// function hello(name) {
//     print(name);
//     print('Something Else');
// }

// function print(args) {
//     console.log(args);
// }


// hello('Twinkle Cats');

// function hello(name, print) {
//     print(name);
// }

// hello('HM Nayem', print)

// function print(args) {
//     console.log(args);
// }

// hello('HM Nayem', function(name){
//     console.log('Hello ' + name);  
// });

// hello('HM Nayem', function(name) {
//     console.log('Hi, How are you ' + name + '?');
// })

// hello('Twinkle Cats', function(name) {
//     console.log('Length of ' + name + ' is = ' +  name.length );
// })

// var me = {
//     name: 'HM Nayem',
//     age: 16,
//     email: 'hasan.m.nayem@gmail.com'
// }

// function printMySelf(person, callback) {
//     console.log('Person: ' + person.name + ' (' + person.age + ')');
//     if (person.age >= 18) {
//         callback(person.email);
//     } else {
//         console.log('You are too little...');
//     }
// }

// printMySelf(me, function(email){
//     console.log('Email sent to ' + email);
// });

function print(data, callback1, callback2) {
    console.log('Original Data: ' + data);
    callback1(data);
    callback2(data);
}

print('Twinkle Cats is Awesome Channel for Beginners', function(data){
    var data = data.toUpperCase();
    console.log('Uppercase: ' + data);
    
}, function(data){
    var data = data.toLowerCase();
    console.log('Uppercase: ' + data);
    console.log('Length: ' + data.length);
    
});