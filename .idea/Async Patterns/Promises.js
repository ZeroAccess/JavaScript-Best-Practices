/**
 * Created by robertsg on 4/13/2016.
 */

// In the course he uses the browser and uses this script on an html document


//Christmas Tree Code and is wrong
// function asyncMethod(message, cb) {
//     setTimeout(function() {
//         console.log(message);
//         cb();
//     }, 500);
// }
//
// asyncMethod('Open DB Connection', function() {
//     asyncMethod('Find User', function() {
//         asyncMethod('validate User', function() {
//             asyncMethod('do stuff', function() {
//
//             });
//         });
//     });
// });

// Using promises to make the above code better
// https://www.promisejs.org/
// Grab this script from the above website
// <script src="https://www.promisejs.org/polyfills/promise-7.0.4.min.js"></script>


function asyncMethod(message) {
    return new Promise(function (fulfill, reject) {
        setTimeout(function() {
            console.log(message);
            fulfill();
        }, 500);
    });
}

//Still Incorrect but getting there, this is just gross and hard to read

// asyncMethod('Open DB Connection').then(function() {
//     asyncMethod('Find User').then(function() {
//         asyncMethod('validate User').then(function() {
//             asyncMethod('do stuff').then(function() {
//
//             });
//         });
//     });
// });


//Getting there

// function findUser() {
//     asyncMethod('Find User')
//         .then(validateUser)
// }
// function validateUser() {
//     asyncMethod('validate User')
//         .then(doStuff)
// }
// function doStuff() {
//     asyncMethod('do stuff').then(function() {
//
//     })
// }
// asyncMethod('Open DB Connection')
//     .then(findUser)


//Correct Way

function findUser() {
    return asyncMethod('Find User')
}
function validateUser() {
    return asyncMethod('validate User')
}
function doStuff() {
    return asyncMethod('do stuff')
}

asyncMethod('Open DB Connection')
    .then(findUser)
    .then(validateUser)
    .then(doStuff)
    .then(function() {})