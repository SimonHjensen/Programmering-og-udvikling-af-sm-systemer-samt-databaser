// Hjælp Anton med at lave en funktion gørBeskedPersonlig(), som tager et navn som input og erstatter ‘bro’ i den faktiskeBesked med navnet

let hemmeligBesked = ["hej", "klaus", "vil", "du", "med", "til", "fodbold", "i", "klubben", "i", "aften", "?", "kurt"]

hemmeligBesked.pop()

hemmeligBesked.push("adressen", "er", "Piratvej", "100")

hemmeligBesked.splice(1, 1, "bro!")

hemmeligBesked.shift()

hemmeligBesked.unshift("yo")

hemmeligBesked.splice(6, 3, "piratfest")

let faktiskeBesked = hemmeligBesked.join(" ")

// Jeg henter alle operationerne fra Del 1 som gør det muligt at definere faktiskeBesked.


function gørBeskedPersonlig(name = "bro") { // Jeg starter her på at definere funktionen "gørBeskedPersonlig"
    if (name == "Sigurd") { // Opretter et if statement der reagerer på stringen "Sigurd"
        return ("yo Sigurd vil du med til piratfest på reffen i aften? Adressen er Piratvej 100.") // Her beskriver jeg at hvis input er lig med "Sigurd" skal den returne beskeden til venstre.
    }
    return faktiskeBesked.replace('bro', name) // Denne del er hvis name ikke er lig med "Sigurd", her tager den stringen faktiskeBesked og erstatter "bro" med det givne navn.
    
    
}

console.log(gørBeskedPersonlig("X")); // Indputter jeg "Sigurd" får jeg: yo Sigurd vil du med til piratfest på reffen i aften? Adressen er Piratvej 100.
// Indputter jeg et andet vilkårligt navn får jeg:: yo X! vil du med til piratfest i aften ? adressen er Piratvej 100
 

