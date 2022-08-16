const primitives = {
    number: 0, 
    string: "",
    boolean: true,
    undefined : undefined, // not sure-empty
}
const others = {
    symbol: Symbol(),
    BigInt: BigInt(0),
}
const compound = {
    array: [],
    object: {},
    null: null, // decided it is empty
}


//var can be redeclared


//operators
let x =1;
console.log(x+1);
console.log(x-1);
console.log(x*10);
console.log(x/2);
console.log(x);//x still equals 1

console.log( x+=1);
//comparison always boolean
console.log(x < 1);
console.log(x>1);
console

//logical operators
// && =and
// || = or 
// ! = NOt

//conditional operators
// if else
//switch case
//ternary operator

function add( a, b) {
    console.log(a = b);
    return a = b;
}
function lotsOfWork(x) { //declaration (x)is signature
    console.log(x+1);
console.log(x-1);
console.log(x*10);
console.log(x/2);
console.log(x);
return x;
}
//usage of function
//manipulation of variables
//input output

//reason to use fuctions
//modularity / reusability
//abstraction
//clarity
//use later/ repeat later

//ex
add(1,2);
add(5, 2);

//methods
//functions attached to objects

//string methods
let firstName = "John";
console.log(firstName.toUpperCase());//makes all uppercase
console.log(firstName.length); //gives length of string
console.log(firstName.indexOf("n"));//says what number n is
//pop up methods
/*alert('you have a virus');//tell user somethin-returns nothing--statement
confirm('are you sur3 u want to exit?');//ok or cancel--asking for input-returns boolean
prompt('what is ur name');//input--returns a string  //let promptAnswer = */

Math.pow(2, 3);
Math.sqrt(9);
 //dates

 const date = new Date();



