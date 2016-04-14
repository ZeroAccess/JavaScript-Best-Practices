/**
 * Created by robertsg on 4/13/2016.
 */
'use strict';

function asyncMethod(message, num) {
    return new Promise(function (fulfill, reject) {
        setTimeout(function() {
            console.log(message + ' ' + num);
            fulfill(num + 1);
        }, 500);
    });
}

function findUser() {
    return asyncMethod('Find User')
}
function validateUser() {
    return asyncMethod('validate User')
}
function doStuff() {
    return asyncMethod('do stuff')
}

async function main() {
    var one = await asyncMethod('Open DB Connection', 0)
    var two = await asyncMethod('Find User', one)
    var three = await asyncMethod('validate User', two)
    var four = await asyncMethod('do stuff', three)
}

main();


