
// function outer() {

//     var a = 10;

//     function inner() {
//         a;
//         console.log('I am Inner Function');
//     }
//     inner();
//     console.log('I am Outer function');
// }



// outer();

function add (a, b) {

    function sum(){
        return a+b;
    }

    function sub(){
        return a-b;
    }

    function times() {
        return a*b;
    }

    function div() {
        return a/b;
    }

    return sum() + sub() + times() + div();
}

var result = add(10, 5);
console.log(result);












