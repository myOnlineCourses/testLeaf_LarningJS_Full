/*
1. Create a function named `calculateGrade` that takes a student's score as a parameter.

2. Use `switch` statement inside the function - 
   - Use a `switch` statement with the condition `true`.
   - Use `case` statements to check different score ranges and return the corresponding grade.

3. Declare and initialize the variable

4. Call the function and print the result


*/

function calculateGrade(score) {
    switch (true) {
        case (score = 100):
            return "your grade  is A+";
            break

        case (score >= 90):
            return "your grade  is A";
            break;

        case (score >= 80):
            return "your grade  is B";
            break;

        case (score >= 70):
            return "your grade  is C"
            break;

        case (score >= 60):
            return "your grade  isD"
        default:

            return "your grade  is F";
    }

}
let score = 95
console.log(calculateGrade(score))
