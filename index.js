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
// The loop is checking the next number to see whether or not it's prime
// Create a variable to represent the following number (by adding 1 to the original)
for (let p = n + 1; p <= 100; p++) {
    // The numher that was input is a prime number
    let isPrime = true;

    // Loops through the numbers    
    for (let d = 2; d < p; d++) {

        // Checks to see if there is a remainder when the divided
        if (p % d === 0) {
            // The numher that was input is a not prime number
            isPrime = false;
        }
    }

    // When the number is prime, print console and exit loop
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

const csvString = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";

// Set variables that will store cell values for each row
let cell1 = "", cell2 = "", cell3 = "", cell4 = ""; // Cells for each row
let currentCell = ""; // Stores characters as the string is being built through the loop iterations
let cellIndex = 0;

// Loop through each character in csvString
for (let i = 0; i < csvString.length; i++) {
    let c = csvString[i]; // The chracter that is being viewed

    if (c === "," || c === "\n") {
        // Assign currentCell to the correct variable
        if (cellIndex === 0) cell1 = currentCell; // First cell
        else if (cellIndex === 1) cell2 = currentCell; // Second cell
        else if (cellIndex === 2) cell3 = currentCell; // Third cell
        else if (cellIndex === 3) cell4 = currentCell; // Fourth cell

        currentCell = ""; // Reset currentCell to create next cell value
        cellIndex++; // Go to next cell

        // If the character is a newline, it is the end of the row
        if (c === "\n") {
            // Log the completed row
            console.log(cell1, cell2, cell3, cell4);

            // Reset variables for the next row
            cell1 = "", cell2 = "", cell3 = "", cell4 = "";
            cellIndex = 0;
        }
    } else {
        // If the character is neither a comma nor a newline, it belongs to the current cell
        currentCell += c; // Build current cell character by character in currentCell
    }
}

// Handle the last row (does not end with a newline)
if (currentCell !== "") {
    // Assign remaining cell values
    if (cellIndex === 0) cell1 = currentCell; 
    else if (cellIndex === 1) cell2 = currentCell;
    else if (cellIndex === 2) cell3 = currentCell;
    else if (cellIndex === 3) cell4 = currentCell;

    console.log(cell1, cell2, cell3, cell4); // Print the final row
}
