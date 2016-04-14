/**
 * Created by robertsg on 4/12/2016.
 */

//Rule 1a
var a = 12
var b = 13
var c = b + a

//Rule 1b
if(a){console.log(a)}

//Rule 2
console.log(a+b)

['menu','items','listed'] //This will throw an error as this is undefined
    .forEach(function (element)
    {
        console.log(element) //Rule 1b
    })

    var a = 12
    var b = 13
    var c = b + a

//Ify syntax
(function(){
    console.log('inside my life');
    console.log('doing secret stuff...');
}())

//Rule 3
function returnObject()
{
    if(someTrueThing)
    {
        return //will insert a semicolon here thus the next curly braces will not run
        {
            hi: 'hello'
        }
    }
}

if(a == b) {
    console.log(a);
}