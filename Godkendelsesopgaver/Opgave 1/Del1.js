// Jeg starter med at definere variablen "hemmeligBesked"
let hemmeligBesked = ["hej", "klaus", "vil", "du", "med", "til", "fodbold", "i", "klubben", "i", "aften", "?", "kurt"]

// 1. Brug en array metode til at slette det sidste element af arrayet hemmeligBesked

hemmeligBesked.pop()
console.log(hemmeligBesked)

// Jeg benytter .pop funktionen til at fjerne sidste element af arrayet, jeg får altså: ['hej', 'klaus', 'vil', 'du', 'med', 'til', 'fodbold', 'i', 'klubben', 'i', 'aften', '?']

// 2. Brug en array metode til at tilføje separate strenge: ‘adressen’,’er’,’Priratvej’ og ’100’ til slutningen af hemmeligBesked

hemmeligBesked.push("adressen", "er", "Piratvej", "100")
console.log(hemmeligBesked)

// Jeg bruger .push kommandoen for at tilføje ordene til slutningen af arrayet.

// 3. Ændrer ordet ‘Klaus’ til ‘bro!’ ved at tilgå indekset og erstatte det

hemmeligBesked.splice(1, 1, "bro!")
console.log(hemmeligBesked)

// Her bruger jeg .splice (nummer i arrayet, antal den skal slette, og hvad den skal erstatte med) Her vælger jeg altså index 1, fordi den skal tage den én til højre fra indeks 1.
// Vælger 1 fordi den kun skal slette ordet Klaus og skriver "bro!" for at erstatte Klaus med "Bro!"

//4. Brug en array metode til at fjerne det første element af array’et

hemmeligBesked.shift()
console.log(hemmeligBesked)

// Her bruger jeg .shift kommandoen til at fjerne første element af arrayet.

// 5. Brug en array metode til at tilføje ‘yo’ til starten af array’et

hemmeligBesked.unshift("yo")
console.log(hemmeligBesked)

// Jeg bruger nu .unshift("yo") til at tilføje "yo" til starten af arrayet

// 6. Brug en array metode til at fjerne strengene ‘fodbold’, ‘i’ og ‘klubben’ og erstatte det med en enkelt streng ‘piratfest’

hemmeligBesked.splice(6, 3, "piratfest")
console.log(hemmeligBesked)

// Jeg bruger her .splice kommandoen igen, denne gang vælger jeg array element nummer 6, fjerner tre elementer "fodbold", "i" og "klubben", erstatter dem med splice.

//7. Lav en ny variable som hedder faktiskeBesked, hvor du joiner alle strengene til en sætning

let faktiskeBesked = hemmeligBesked.join(" ")

// Jeg benytter nu .join(" ") til at concatenate alle elementer og indsætte et mellemrum mellem dem alle.

// 8. console.log() den faktiskeBesked som en sætning

console.log(faktiskeBesked)

// Outputtet: yo bro! vil du med til piratfest i aften ? adressen er Piratvej 100
