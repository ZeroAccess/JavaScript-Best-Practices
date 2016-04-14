/**
 * Created by robertsg on 4/12/2016.
 */

// expression(); //undefined

var expression = function() {
    console.log('Hi from expression');
}

function myFunc() {
    console.log('Hi from myFunc');
}

myFunc(); //console out the function
expression(); //consoles out the function

//Best Practices

//variable first
var x = 10;
//functions next
function print(input) {
    //variables first
    var x = 0; //this goes here..
    //functions next
    function log() {
        //log stuff
    }
    //run code
    console.log(input);
}
//run code
print(10);