/**
 * Created by robertsg on 4/12/2016.
 */


// Hoisting takes the var and brings it up here but that var has no instantiation. Basically it finds all the vars
// in the scope brings it to the top but they have no value other than undefined

console.log(myVariable); //undefined
var myVariable = 10;


function func() {
    myVariable = 25;
}

console.log(myVariable); //10

func();
console.log(myVariable); //say 25


function func2() {
    myVariable = 50;
    var myVariable;
}

func2();
console.log(myVariable); //25