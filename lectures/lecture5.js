var arr = [4, 5, 1, 0, 8];

function cbf(a) {
    console.log(a);
}

arr.forEach(cbf);

function caller() {
    return function(name){
        return 'Caller Calling You ' + name;
    }
}

// var x = caller();
// var y = x('HM Nayem');
// y;

// var z = x('Twinkle Cats');
// z;

var a = caller()('Twinkle Cats');
a;