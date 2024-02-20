let username='shindhuja'; //literal
console.log(typeof username);

let user=new String("shindhuja");//new keyword
console.log(typeof user);

//count the characters of given string
console.log(username.length);

let productPrice= "The discounted price of the product is \"200\"";
console.log(productPrice);

//let deal='Today\'s deals';
//Backtick
let deal= `Today's deal is "50%"`;
console.log(deal);

let price=1000;
console.log(`the price of the product is ${price}`);

let browserName='chrome';
console.log(browserName.length);
//length -6 ->index of the string starts with zero.
//first indexed character
let firstCh=browserName.charAt(0);
console.log(firstCh);


//last indexed character
let lastCh=browserName.charAt(browserName.length-1);
console.log(lastCh);

//chrome --> c-0 h-1 r-2 o-3 m-4 e-5

//to get the index of a particular character
let chPosition=browserName.indexOf('h');
console.log(chPosition);

//separates the string
console.log(browserName.split(""));
let msg= '  Learning Javascript with String';
console.log(msg.split(" "));

//get sequence of characters form the string 

let subString=msg.slice(10,12); //substring with the start and end index
console.log(subString);

//to check for the presecnce of substring

let presence=msg.includes('With');
console.log(presence);

console.log( browserName.toUpperCase());
console.log( browserName.toLowerCase());
console.log(msg);
console.log(msg.trim());

let pdtPrice= 'price = 1200';
console.log( pdtPrice.slice(8));
let fixedPrice=pdtPrice.slice(8,13);

console.log(fixedPrice+12);
//converting string into number
let value =parseInt(fixedPrice);
console.log(value+12);

let fname='vidya';
let chars=fname.split("");
console.log(chars);


//loop in reverse
//for(i=lengthof the string ;i>0;i--)


/*
Classroom:2
-----------
let yourName = "Hassan";
write a function to reverse the string.


// hints
1) convert the input into characters
2) loop them in reverse direction
3) concate the string
4) print the new string
*/
let myName = "Hassan";
let reverseString = "";
function reverse (myName){
    for (let i = myName.length - 1; i >= 0; i--) {
        reverseString += myName[i];
    }
    return reverseString;
}

console.log(reverse(myName));



/*

//count characters of given string

let homework= "hello world"
//how to reverse string

function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString(homework)); 

//How to find the length of a string

function lengthOfString(str) {
    return str.length;
}
console.log(lengthOfString(homework));

//How to check if a string contains another string

function includesString(string, substring){
   return string.includes(substring);
}
console.log(includesString(homework,"world"));

//How to convert a string into an array

function stringToArray(str) {
    return str.split("");       
}
console.log(stringToArray(homework));

*/
