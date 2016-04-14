/**
 * Created by robertsg on 4/13/2016.
 */

// 'use strict'; //can be used in global or functional scope

var toPrint = 'print me';

function print(out) {
    'use strict';
    var stringToPrint = out; //supposed to have a var
    console.log(stringToPrint);
}

randomVariable = 24; //will run because use strict is in the function doesn't see this
print('Hello');

// console.log(stringToPrint); //will print Hello because it's declared as undefined
                            // then when it gets to (no var) stringToPrint it becomes out