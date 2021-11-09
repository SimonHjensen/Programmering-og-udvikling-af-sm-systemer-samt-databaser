/**
 * Task 5:
 * You have to create a function that returns a promise.
 * This promise must resolve when the input number is divisible by 5.
 * This promise must reject when the input number is not divisible by 5.
 * You need to chain it with .then(), .catch() and .finally()
 * 
 * This is probably confusing, so I will start with an example.
 * 
 * Help: Slides 23-25
 */

/*
const isEven = (number) => {
    return new Promise((resolve, reject) => {
        if(number % 2 === 0){
            resolve('I resolved!');
        } else {
            reject('I rejected!');
        }
    });
}

*/

const isDivisibleByFive = (number) => {
    // You have to write code here
    return new Promise((resolve, reject) => {
        if(number % 5 === 0){
            resolve('I resolved!');
        } else {
            reject('I rejected!');
        };
    });
}

isDivisibleByFive() //Indsæt tal her
    .then(response => console.log(response)) // Virker hvis promisset bliver resolved
    .catch(error => console.log(error)) // Virker  hvis promisset bliver rejected
    .finally(() => console.log("This always runs")); // Finally kører uanset 
  