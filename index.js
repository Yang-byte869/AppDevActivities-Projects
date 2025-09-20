
// Problem Set 1 
let base_number = 8;
let score = base_number * 10 + 5;
let grade = calculateGrade(score);

function calculateGrade(score) { // function to determine letter grade
    if (score >= 90 && score <= 100) { // score between 90 and 100

        return 'A';

    } else if (score >= 80 && score <= 89) {// score between 80 and 89

        return 'B';

    } else if (score >= 70 && score <= 79) { // score between 70 and 79

        return 'C';

    } else if (score >= 60 && score <= 69) { // score between 60 and 69

        return 'D';

    } else { // score below 60

        return 'F';

    }
}
// call the function and log the result
console.log(`Base: ${base_number} → Score: ${score} → Grade: ${grade}`);



//Problem Set 2
let rows = base_number + 2;
console.log(''); // print a blank line for separation

function showStars(rows) {
    for (let i = 1; i <= rows; i++) { // loop through each row

        let spaces = ' '.repeat(rows - i); // leading spaces
        let stars = '*'.repeat(2 * i - 1); // stars for the current row
        console.log(spaces + stars); // print the row

    }
}
console.log(`Base: ${base_number} → Rows: ${rows}\n`); // print base and rows
showStars(rows); // call the function to display the star pattern


// Problem Set 3
let test_number = base_number + 10;

console.log(''); // print a blank line for separation
function isPrime(n) {
    
    if (n <= 1) return false;       // Numbers <= 1 are not prime
    if (n === 2) return true;       // 2 is prime
    if (n % 2 === 0) return false;  // Eliminate even numbers

    // Check for factors up to √n
    for (let i = 3; i <= Math.sqrt(n); i += 2) { // test only odd numbers

        if (n % i === 0) return false; // found a factor, not prime
        
    }

    return true; // no factors found, it's prime
}
console.log(`Base: ${base_number} → Test number: ${test_number}`); // print base and test number
console.log(`${test_number} is ${isPrime(test_number) ? 'prime' : 'not prime'}.`); // print if prime or not


// Problem Set 4
function multiplicationTable(n) { // function to print multiplication table
    
    console.log(''); // print a blank line for separation
    console.log(`Multiplication Table of ${n}:`); // print header

    for (let i = 1; i <= 10; i++) { // loop from 1 to 10

        console.log(`${n} x ${i} = ${n * i}`); // print the multiplication result

    } // end of for loop
}
multiplicationTable(base_number); // call the function to display the multiplication table