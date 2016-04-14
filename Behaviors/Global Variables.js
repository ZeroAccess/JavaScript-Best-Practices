/**
 * Created by robertsg on 4/13/2016.
 */

var toPrint = 'print me';

function print(out) {
    stringToPrint = out; //supposed to have a var
    console.log(stringToPrint);
}

print('Hello');

console.log(stringToPrint); //will print Hello because it's declared as undefined
                            // then when it gets to (no var) stringToPrint it becomes out