// A function that return a function 
const foo = () =>{ // this is a arrow function 
    function printHello () {
        console.log("Hello")
    }
    return printHello;
}

const fun = foo();

fun ();


// A function that takes as a argument of a function 

print(fun);

function print(fun){
    fun();
}

(()=>console.log("Hello"))() // self invoke function