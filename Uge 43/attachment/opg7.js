/**
 * Task 7:
 * Sometimes promises are "pending" because JavaScript does not wait for delayed results (async vs. sync).
 * Write a function that logs the response of delayedResponse().
 * Remember to use .catch(), .then() and finally()
 * 
 * Help: Slide 32-33
 * Hint: Use async/await
 */


const delayedResponse = () => {
    return new Promise((resolve, reject) => {
        let randomNumber = Math.floor(Math.random() * 11);
        setTimeout(() => {
            if(randomNumber % 2 === 0){
                resolve({response: 'Got data from website'});
            } else {
                reject({response: 'The website did not respond'})
            }
        }, 1000);
    });
}

// Promise with chaining

delayedResponse()
    .then(resolve => console.log(resolve.response))
    .catch(error => console.log(error.response))
    .finally(() => console.log(`Finally...`));

// Try/Catch + async/await

const getDelayedResponse = async () => {
    try {
        let result = await delayedResponse();
        console.log(result.response);
    } catch(error) {
        console.log(error.response);

    }
    console.log("Finally...");
}

getDelayedResponse()