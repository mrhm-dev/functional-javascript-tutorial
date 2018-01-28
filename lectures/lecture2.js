/****************************
 * 
 * Twinkle Cats
 * Functional Javascript
 * First Class Function
 * Lectur - 2
 * 
 *****************************/

function sayName(name) {
    return 'Hello, ' + name;
}

// Todays Topics

// 1. A Function can be stored in a Variable * Passed

var hello = sayName;
//  var fun = sayName('HM Nayem');

//  console.log(hello);
//  console.log(fun);

// console.log(hello('HM Nayem'));

var anotherHello = hello;

console.log(anotherHello('HM Nayem'));




// 2. A Function can be stored in an Array * Passed
var arr = [1, 2, 3, anotherHello];
arr.push(sayName)
console.log(arr);


// 3. A Function can be stored as an Object Field or Property * Passed
var person = {
    name: 'HM Nayem',
    sayName: hello,
    print: function () {
        console.log('Hi');
    }
}

console.log(person);


person

// 4. We can create function as needed  * Passed

var sum = 10 + (function () {
    return 50
})();
sum;

// 5. We can pass function as an arguments  * passed

function wow(name, fun) {
    return fun(name);
}

var result = wow('HM Nayem', sayName);
console.log(result);


// 6. We can return function from another function

function base(b) {
    return function (n) {
        var result = 1;

        for (var i = 0; i < b; i++) {
            result *= n;
        }

        return result;
    }
}

//  var power = base(2);
//  var result = power(5);

var result = base(3)(5);
result