/**
 * Created by robertsg on 4/13/2016.
 */

var obj = {a: 100, b: 200};

var myVar = 10;

delete obj.a;
delete myVar;
delete obj;

console.log(obj);
console.log(myVar);

