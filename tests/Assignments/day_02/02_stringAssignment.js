/*
Given a string s consisting of words and spaces, return the length of the last word in the string.
 
Example 1:
 
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
 
Example 2:
 
Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.

Example 3: 

Write a function to check if two strings are anagrams.

 Input: isAnagram('listen', 'silent')
 Output: true
 Input: isAnagram('hello', 'world') 
 Output: false
 Explanation: An anagram is when you mix up the letters of a word to make a new one, using all the letters.
 
*/
/*
If the given string and reverse string is same --> palindrome

Objective: If the given string is palindrome

hints:

1) use the above logic to reverse the string
2) if the reverse string === original string --> true else the false

*/



//******************************** 1===>  return the length of the last word in the string. ********************************************
console.log("++++++++++++ Exercise 1 ++++++++++++")
function getLastWordLength(s) {
    //use trim and split
    const words = s.trim().split(" ");
    let lastwordlength = words[words.length - 1].length;
    return lastwordlength;
}

let example1 = "Hello  World";
let example2 = "fly me   to   the moon"

console.log("length of the last word in the string < Hello  World > is: " + (getLastWordLength(example1)))
console.log("length of the last word in the string < fly me   to   the moon > is: " + (getLastWordLength(example2)))


//****************************** 2===> Write a function to check if two strings are anagrams *******************************************
console.log("++++++++++++ Exercise 2 ++++++++++++")
function areAnagrams(str1, str2) {
    // here first we need to Remove spaces and convert to lowercase to make the comparison case-insensitive and space-insensitive
    const cleanedStr1 = str1.replace(/\s/g, '').toLowerCase();
    const cleanedStr2 = str2.replace(/\s/g, '').toLowerCase();

    // Sort the characters in both strings and compare them
    const sortedStr1 = cleanedStr1.split('').sort().join('');
    const sortedStr2 = cleanedStr2.split('').sort().join('');

    return sortedStr1 === sortedStr2;
}
let string1 = "listen";
let string2 = "silent";

if (areAnagrams(string1, string2)) {
    console.log(`${string1} and ${string2} are anagrams.`);
} else {
    console.log(`${string1} and ${string2} are not anagrams.`);
}

//******************* 3===> a function that returns If the given string and reverse string is same--> palindrome ***************
console.log("++++++++++++ Exercise 3 ++++++++++++")
function checkPalindrome(str) {
    let reversedString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversedString += str[i];
    }
    if (reversedString === str)
        return "the given string is a: palindrome";
    else
        return "the given string is not a: palindrome";
}
console.log(checkPalindrome("radar"));