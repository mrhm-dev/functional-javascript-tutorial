var arr = [5, 9, 1, 2, 3, 4, 5, 6];

// var sum = 0;
// for (var i=0; i<arr.length; i++) {
//     sum += arr[i];
// }
// console.log('Sum = ' + sum);

var result = arr.reduce(function(a, b) {
    return a+b;
});

console.log('Result = ' + result);
