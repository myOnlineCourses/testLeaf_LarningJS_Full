/*
int val = 5;
funtion to sum all the values between 1 to val
and return the sum
// activity ---> print between 1, 10 --> keep adding the sum of values
// 1, 2 (3), 3 (6), 4 (10), 5 (15)
// finally, print the sum !! 

*/

function sumAllValues(val) {
    let totalSum = 0;
    for (let i = 1; i <= val; i++) {
        totalSum += i;
        console.log(`Sum after adding ${i} is : ${totalSum}`);
    }
    return totalSum;
}
let val = 10;
let result = sumAllValues(val);
console.log(`The sum for all numbers from 1 to  ${val} is: ${result}`);