/**
 * Task 1:
 * Write a program that captures command line arguments when you run it.
 * The program should console.log() the first argument passed an an error if it is not passed.
 * 
 * To run this program, you need to open a terminal in this folder and write "node opg1.js"
 * If you do not know what a command line argument is, it is when you add something after the filename.
 * For example: "node opg1.js firstArgument secondArgument"
 * 
 * Help: Slide 12
 */

// This is how you get the arguments
let args = process.argv;

/**
 * I am logging the arguments, and you can actually see that the first two are node and the file
 * You need to use the third one
 */

let input = args[2] // Definerer input som nummer to i arrayet, da process er 0 og argv er 1, dermed må det inputtede være det efterfølgende.

if(input){
    console.log(input);
} else console.log("Error"); //Laver en funktion der console logger input, hvis der er input ellers får man beskeden Error
    
