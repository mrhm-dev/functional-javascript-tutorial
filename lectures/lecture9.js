// var arr = [67, 34, 21, 45, 6, 29, 38, 55, 76, 10];

// arr.sort(function(a, b){
//     return a-b;
// });

// console.log(arr);

var people = [
    {name: 'HM Nayem', age: 22},
    {name: 'Abir Azim', age: 23},
    {name: 'Jubel Ahmed', age: 18},
    {name: 'Al Rafi', age: 19},
    {name: 'Mr. X', age: 33},
    {name: 'Mr. Y', age: 27}
]

// people.sort(function(a, b) {
//     return b.age - a.age;
// });

people.sort(function(a, b){
    if (a.name > b.name) {
        return 1;
    } else if (a.name < b.name) {
        return -1;
    } else {
        return 0;
    }
});

console.log(people);


