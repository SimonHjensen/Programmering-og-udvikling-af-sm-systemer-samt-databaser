/**
 * Task 2:
 * Write a program that accepts a date as a command line argument.
 * The program must check if the input is a date or not using the util module.
 * console.log() the result.
 * 
 * Help: Slide 14
 */

const util = require('util');

const idag = new Date();

console.log(idag);
console.log(util.types.isDate(idag));
