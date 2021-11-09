/**
 * Task 9:
 * Using the URL module, parse the URL in the variable and log the hostname, pathname and searchParams
 * 
 * Help: Slide 48
 */


const URL_TO_PARSE = 'https://cbs.dk/en/eller/anden/side?q=Test&p=Test2';

let parsedUrl = new URL(URL_TO_PARSE)

console.log(
    parsedUrl.hostname,
    parsedUrl.pathname,
    parsedUrl.searchParams,
);