/**
 * Created by robertsg on 4/13/2016.
 */

var obj = {
  val: 'Hi there',
    printVal: function() {
        //console.log(obj); Instead of referring to the obj you can use this instead
        console.log(this);
        console.log(this.val);
    }
};

var obj2 = {
    val: 'Whats up'
};

obj2.printVal = obj.printVal; // Declare this printVal as the same as obj printVal because I already wrote it and
                             // it's using this

//obj2.printVal = obj.printVal.bind(obj2); // this basically makes it so that "this" is obj2

// obj.printVal();
obj2.printVal();

// var print = obj.printVal;
// print(); // prints undefined because there's no object thus it doesn't know what "this" is
            // if you use console.log(this) and there's no object it goes to the global scope which is
            // basically the window