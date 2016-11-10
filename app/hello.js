var fs = require('fs');
var m = require('./module');
var express = require('express');



fs.readFile('st.txt', function (err, inputText) {
    if(err){
     console.log(err)
    }
    else{
        console.log(inputText.toString())
    }
});
var hello = function () {
    console.log("Hello!");
    console.log(m);
};

hello();