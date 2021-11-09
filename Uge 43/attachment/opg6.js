/**
 * Task 6:
 * The randomizerPromise returns a random number between 0 and 10.
 * Even numbers are resolved. Uneven numbers are rejected.
 * You need to chain it with .then(), .catch() and .finally()
 * 
 * Help: Slide 26-30
 */


const randomizerPromise = () => {
    return new Promise((resolve, reject) => {
        let randomNumber = Math.floor(Math.random() * 11);
        if(randomNumber % 2 === 0){
            resolve("Random number is even");
        } else {
            reject("Random number is not even");
        }
    });
}

randomizerPromise() //
    .then(response => console.log(`Then ${response}`))
    .catch(error => console.log(`Catch ${error}`))
    .finally(() => console.log("Finally!"));