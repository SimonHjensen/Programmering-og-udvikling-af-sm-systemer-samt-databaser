// Task 1
document.getElementById('taskOneParagraph').addEventListener('click', () => {
    document.getElementById("taskOneParagraph").innerHTML = "This text was changed" // Gør at stringen ændres når jeg klikker.
});

// Task 2
document.addEventListener("keydown", event => { //Søger bredt i min addEventListener, laver et keydown event.
    
    if (event.key == "Escape") { // Hvis tasten Escape bliver trykket
        taskTwo.style.background = "violet"; // Bliver baggrunden for id'et "taskTwo" ændret til violet
    }
  });
  document.addEventListener("keyup", event => { //hvis knappen slippes styles den tilbage til intet.
    if (event.key == "Escape") {
        taskTwo.style.background = "";
    }
});

// Task 3

document.getElementById('task3Input').addEventListener('change', (e) => {
    e.target.parentElement.style.background = e.target.value // Laver en eventlisterner med change, der holder øje med alle ændringer. 
}); // Her definerer jeg at inputfeltets "forældre" skal styles baggrundsfarven af værdien af inputfeltet.

// Task 4

document.addEventListener('keydown', (e) => {
   var tast = e.key;
   function minfunktion() {
       document.getElementById("task4Paragraph").innerHTML = tast};
       minfunktion();
   });


// Task 5
//document.getElementById('').addEventListener('', () => {
        document.getElementById('taskFiveParagraph').addEventListener('mouseover', (e) => {
            setTimeout(() => {
                e.target.style.color = "red"
        // Write code here
    }, 1000);
});
//});

// Task 6

document.getElementById('taskSixParagraph').addEventListener('mouseover', (e) => {
    setTimeout(() => {
        e.target.style.color = "red" //Træder in i diven skifter farven til rød efter 0,5 sekunder
}, 500);
});

document.getElementById('taskSixParagraph').addEventListener('mouseout', (e) => {
    setTimeout(() => {
        e.target.style.color = "black" // Træder ud af diven skifter farven tilbage til sort efter 1 sekund.
}, 1000);
});

// Task 7

document.getElementById('task7Button').addEventListener('click', () => {
    setTimeout(() => {
    alert("Hey!") // Simpel alert med en timerfunktion omkring.
}, 1000);
});





// Debouncer - you can use this with any function
// Read more: https://www.geeksforgeeks.org/debouncing-in-javascript/
const debouncer = (func, delay) => {
    let debounceTimer;

    return function() {
        const context = this;
        const args = arguments;

        clearTimeout(debounceTimer);

        debounceTimer = setTimeout(() => func.apply(context, args), delay);
    };
}

// Task 8
document.getElementById('task8Button').addEventListener('click', debouncer(() => {
        
        alert("Hey!") // Simpel alert med en timerfunktion omkring.
     // Write code here
}, 1000));

// Task 9

document.getElementById('task9Button').addEventListener('click', debouncer(() => { 

        var x = Math.floor(Math.random() * 256);
        var y = Math.floor(Math.random() * 256);
        var z = Math.floor(Math.random() * 256);
        var bgColor = "rgb(" + x + "," + y + "," + z + ")";

        document.getElementById("taskNine").style.backgroundColor = bgColor;
}, 1000));    
  



// Task 10
document.getElementById('task10Form').addEventListener('submit', (e) => {
    e.preventDefault();

    // Write code here
});

// Task 12
// fetch('')