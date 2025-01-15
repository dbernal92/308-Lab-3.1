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