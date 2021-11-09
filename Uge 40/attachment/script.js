document.getElementById('buttonTaskOne').addEventListener('click', () => {
    // To complete task 1, you need to write code below
    alert('Boom!') // Indsætter en alert kommando, der giver alarmen "Boom!"
});

document.getElementById('buttonTaskTwo').addEventListener('click', (e) => {
    document.getElementById("taskTwo").style.backgroundColor = 'green' // finder mit id "taskTwo" og styler baggrunden.
        })

document.getElementById('buttonTaskThree').addEventListener('click', () => {
   
    prompt("Hvor gammel er du?") // Simpel prompt der spørger besøgeren om alderen.
});

document.getElementById('buttonTaskFour').addEventListener('click', () => {
    document.getElementById("taskFourParagraph").innerHTML = "TADA!" // Gør at stringen ændres når jeg klikker.
  
});

document.getElementById('taskFiveParagraph').addEventListener('click', () => {
    document.getElementById("taskFiveParagraph").style.color = 'red';  //Gør at teksten skal blive rød når jeg klikker
});

document.getElementById('buttonTaskSix').addEventListener('click', () => {
    var svar = prompt("Hvad skal der stå?") // UNDER ARBEJDE
});
