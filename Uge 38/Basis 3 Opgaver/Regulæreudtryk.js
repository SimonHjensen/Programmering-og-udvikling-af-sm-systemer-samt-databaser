// 1. Test om der er bogstaver i sekvensen: BINTO1064U.LA_E21

let course = "BINTO1064U.LA_E21"

console.log(/\w/.test(course))

// True

// 2. Test om der er tal i sekvensen

console.log(/\d/.test(course))

// True

// 3. Prøv at tjekke om det er HA it og print sekvensen ud! (Altså starter det med BINT)

let result = (/BINT/.exec(course));
console.log(result[0])

// 4. Prøv at printe lokationen for ”_” ud (indexet)

console.log(/_/.exec(course));

// 5. Lave en halvkort kode med kun BINTO og tallene (BINTO1064) Man kan både bruge .match og .replace her.

console.log(course.replace(course,"BINT01064"));

// 6. Lave en kortkode med kun BINT og tallene (BINT1064) Man kan både bruge .match og .replace her. Brug $1, $2, $3 osv

let regex = /(\w{4})(O)(\d{4})(.+)/;
course = (course.replace(regex, "$1$3"));
console.log(course);

// 7. Prøv at lave en ny kode hvor du udskifter E21 med F22 med .replace (her skal I bruge $n)

let syv = /(\w{10})(.{4})(.*)/
course = ("BINTO1064U.LA_E21".replace(syv, "$1$2F22"))
console.log(course)