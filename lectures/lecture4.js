function name(firstName, lastName, gendar) {
    var output;

    if (gendar === 'male') {
        output = 'Mr. ' + firstName + ' ' + lastName;

    } else if (gendar === 'female') {
        output = 'Ms. ' + firstName + ' ' + lastName;
    }

    return output;
}

var fullname = name('HM', 'Nayem', 'male');
console.log(fullname);

function example () {
    return {
        name: 'HM Nayem',
        skill: ['Java', 'Javascript'],
        print: function(){
            console.log(this.name, this.skill);
            
        }
    }
}

var obj = example();
obj.print();
