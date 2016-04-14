/**
 * Created by robertsg on 4/13/2016.
 */


var obj = {
    a: {
        b: {
            c: 'hello'
        }
    }
}

console.log(obj.a.b.c); // Same as below
//var c = 'this is important'; // remove the c from above because of scope

with(obj.a.b)
console.log(c);



// Don't use the above
// This is an ify notice passing the object at the end between ()
(function (newVar) {
    console.log(newVar);
}(obj.a.b.c));