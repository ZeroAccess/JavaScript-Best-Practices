/**
 * Created by robertsg on 4/13/2016.
 */

var obj = function () {
    var _this = this;
    _this.hello = 'hello';
    _this.greet = function () {
        console.log(_this.hello);
    }
    // return this; // if you use the new it implicitly applies the return statement

    this.delayGreeting = function() {
        setTimeout(_this.greet, 1000);
    }
}

var greeter = new obj();

greeter.greet();
greeter.delayGreeting(); //this prints undefined because setTimeout isn't calling the original obj