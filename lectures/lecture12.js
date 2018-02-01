var arr = [5, 9, 1, 2, 3, 4, 5, 6];

// var mapedArr = [];

// for (var i=0; i<arr.length; i++) {
//     mapedArr.push(arr[i] + 2);
// }

// console.log('Mapped Array = ' + mapedArr);

// var newArr = arr.map(function(value){
//     return value * 2;
// });

// console.log('New Array = ' + newArr);

function myMap(arr, callback) {
    var newArr = [];

    for (var i=0; i<arr.length; i++) {
        var data = callback(arr[i]);
        // newArr.push(callback(arr[i]));
        newArr.push(data);
    }

    return newArr;
}


var myArr = myMap(arr, function(value) {
    return value * (5 - 2 * 3);
});

console.log('My New Array = ' + myArr);
