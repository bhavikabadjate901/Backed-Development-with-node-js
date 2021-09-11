#!/usr/bin/env node

var argv = require('minimist')(process.argv.slice(2), {
    boolean : ["help"]
});
console.log(argv);


console.log("Hello World"); 

var args =  process.argv.slice(2);

// console.log("Hello " + args[0]);
// console.log("Good Morning " + args[1]);
// console.log("Byee " + args[2]);

