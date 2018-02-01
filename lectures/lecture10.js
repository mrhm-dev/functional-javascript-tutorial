var arr = [5, 9, 1, 2, 3, 4, 5];

// arr.forEach(function(element, index, arr){
//     console.log('Element is = ' + element + ' Index = ' + index + ' arr = ' + arr);
// });

function loop(arr, callback) {
    for (var i=0; i<arr.length; i++) {
       callback(arr[i], i);
    }
}

loop(arr, function(element, i) {
    console.log('Element is ' + element + ' index = ' + i);
});