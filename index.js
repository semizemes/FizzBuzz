var n = 1;
var output = [];
var f = "Buzz";
var v = "FizzBuzz1"

function FizzBuzz(){

    
    
    if ( n % 3 === 0 && n % 5 === 0 ) {
        output.push("FizzBuzz");
    } else if (n % 5 === 0 ) {
        output.push("Buzz");
    } else if (n % 3 === 0 ) {
        
        output.push("Fizz");
    } else {
        output.push(n);
    }
    n++;
    
    console.log(output);
    }

FizzBuzz();
