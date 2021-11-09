/**
 * Task 10:
 * Create a function that returns a promise. The function needs to take a name as input.
 * The promise must resolve with the given name backwards and have a delay of 500ms.
 * If a name contains the letter 'a', the promise must reject with "Sorry, but something went wrong.".
 * 
 * Call the function and chain a .then(), .catch() and .finally() on it.
 * Console log the results inside the .then() and .catch().
 */


const reversedName = (firstName) => {
    firstName = [...firstName];

    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if(firstName.includes('a') || firstName.includes('A')){
                reject('Sorry, but something went wrong.')
            } else{
                resolve(firstName.reverse().join(""));
            }
        }, 500);
    });
}

reversedName("Preben")
    .then(resolve => console.log(resolve))
    .catch(error => console.log(error))
    .finally(() => console.log("Thank you! for using our service"));

reversedName("Anders")
    .then(resolve => console.log(resolve))
    .catch(error => console.log(error))
    .finally(() => console.log("Thank you! for using our service"));
