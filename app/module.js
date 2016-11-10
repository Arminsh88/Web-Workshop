var sum = function (a , b) {
    return a+b;
};


var print = function () {
    return "hello World From Module! :) \n" + sum(5,6);
};





module.exports = print() ; //this is the return line of the module