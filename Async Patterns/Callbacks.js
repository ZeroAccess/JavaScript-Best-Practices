/**
 * Created by robertsg on 4/13/2016.
 */

// var passport = require('passport'),
//     LocalStrategy = require('passport-local').Strategy,
//     mongodb = require('mongodb').MongoClient;
//
// module.exports = function() {
//     passport.use(new LocalStrategy({
//         usernameField: 'userName',
//         passwordField: 'password'
//     },
//     function(username,password,done) {
//         var url = 'mongodb://localhost:27017/libraryApp';
//
//         mongodb.connect(url, function(err,db) {
//             var collection = db.collection('users');
//             collection.findOne({
//                     username: username
//                 },
//                 function (err, results) {
//                     if (results.password == password) {
//                         var user = results;
//                         done(null, user);
//                     } else {
//                         done(null, false, {
//                             message: 'Badd password'
//                         });
//                     }
//                 }
//             );
//         });
//     }));
// };

//Same thing as above but all the functions aren't anonymous functions and there's error checking

var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    mongodb = require('mongodb').MongoClient;

function findAndValidateUser (username,password,done) {
    var url = 'mongodb://localhost:27017/libraryApp';

    function validateUser (err, results) {
        if(err) {
            return done(err, null);
        }
        if (results.password == password) {
            var user = results;
            done(null, user);
        } else {
            done(null, false, {
                message: 'Bad password'
            });
        }
    }

    function findUser(err,db) {
        if(err) {
            return done(err, null);
        }
        var collection = db.collection('users');
        collection.findOne({
                username: username
            },validateUser);
    }

    if(err) {
        return done(err, null);
    }

    mongodb.connect(url, findUser);
}

module.exports = function() {
    passport.use(new LocalStrategy({
            usernameField: 'userName',
            passwordField: 'password'
        }, findAndValidateUser));
};