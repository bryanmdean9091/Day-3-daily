//Day 3 daily challenge 1
let  userName;
userName = prompt("Please enter your name");
alert("Hello, "+userName+", nice to meet you");
let res = userName.split("").reverse().join("");
alert(res);

let num1 = prompt("enter a number",10);
let num2 = prompt("Enter another number",10);
let addResult = parseInt(num1)+ parseInt(num2);
alert(addResult);

//Day-3 Take-Home

let firstName = prompt("What is your first name? ");
let lastName = prompt("what is your last name? ");
console.log(firstName);
alert(lastName);

//Bonus

let birthday = prompt("What is your birthday? ");
confirm("Are you sure "+birthday+" is your correct birthday? Press OK for Yes or Cancel for No");
alert(birthday);





















