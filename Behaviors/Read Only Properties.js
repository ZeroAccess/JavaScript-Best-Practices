/**
 * Created by robertsg on 4/13/2016.
 */

'use strict'; //will blow it up!

var obj = {};

Object.defineProperty(obj, 'readOnly', {
    enumerable: false,
    configurable: false,
    writable: false, //declares it read only
    value: 'This var is read only'
});

obj.readOnly = 'I wrote this'; //doesn't do anything because it's read only

console.log(obj.readOnly);