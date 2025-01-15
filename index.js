// Part 1: Fizz Buzz

// Loop through all numbers from 1 to 100.
// If a number is divisible by 3, log “Fizz.”
// If a number is divisible by 5, log “Buzz.”
// If a number is divisible by both 3 and 5, log “Fizz Buzz.”
// If a number is not divisible by either 3 or 5, log the number.

// Create a variable that is less than or equal to 100
// Increase number by 1 after each loop
for (let f = 1; f <= 100; f++)
    // Number is divisible by both 3 and 5
    if (f % 3 === 0 && f % 5 === 0) {
        console.log(`Fizz Buzz`)
    // Number is divisible by 3
    } else if (f % 3 === 0) {
        console.log(`Fizz`)
    // Number is divisible by 5
    } else if (f % 5 === 0) {
        console.log(`Buzz`)
    // Number is not divisible by either 3 or 5
    } else {
        console.log(f)
    }

// Part 2: Prime Time

// Declare an arbitrary number, n.
// Create a loop that searches for the next prime number, starting at n and incrementing from there.
// As soon as you find the prime number, log that number and exit the loop.

// User inputs a random number that is less than 100
let n = 10;
// The lopp is checking the next number to see whether or not it's prime
// Create a variable to represent the following number (by adding 1 to the original)
for (let p = n + 1; p <= 100; p++) {
    let isPrime = true;

    for (let d = 2; d < p; d++){

        if (p % d === 0) {
            isPrime = false;
        }
    }

    if (isPrime) {
        console.log(`Number: ${n}`)
        console.log(`Next prime number: ${p}`)
        break;
    }

}

// Part 3: Feeling Loopy

// Loop through the characters of a given CSV string.
// Store each “cell” of data in a variable.
// When you encounter a comma, move to the next cell.
// When you encounter the “\r\n” sequence, move to the next “row.”
// Log each row of data.
    // There will only be 4 cells per row.
    // There will be no escaped characters other than “\n”.

const csvString ="Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";

// Create an array to store rows
let rows = [];
// Create variable with an empty string
let currentRow = "";

// Separate csvString into rows
for (let i = 0; i < csvString.length; i++) {
    if (csvString[i] === '\n') { // End of the row
        rows[rows.length] = currentRow; // Puts the finished row in the array
        currentRow = ""; // Beginning for new row
    } else {
        currentRow += csvString[i]; // Each character goes into the variable one by one per loop
    }
}
rows[rows.length] = currentRow; // Adds the last row, which doesn't need with the break
console.log(rows)

// Create an array to store headers
let headers = [];
// Create variable wirh an empty string
let currentHeader = "";

// Extract headers
for (let i = 0; i < rows[0].length; i++) {
    if (rows[0][i] === ",") { // End of the header
        headers[headers.length] = currentHeader; // Puts the finished header in the array
        currentHeader = ""; // Beginning for new header
    } else {
        currentHeader += rows[0][i];
    }
}
headers[headers.length] = currentHeader;

console.log(headers);


// const rows = csvString.split("\n"); // Split by line breaks into rows
// console.log(rows)

// const headers = rows[0].split(","); // Extract headers for each row
// console.log(headers)

// const info = rows.map(row => {
//     console.log(row);
// })

// const tableData = []

// const data = rows.slice(1).map(row => {
//     const values = row.split(1);
//     const tableData = {};
//     headers.forEach((headers, index))
// })