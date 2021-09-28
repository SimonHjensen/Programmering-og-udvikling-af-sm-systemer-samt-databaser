let katalog = { // Jeg starter med at definere et object jeg kalder katalog: kataloget inderholdet navnene på Antons venner og hans venners yndlingssange.
    venner:
        [{
            Navn: "Sigurd", // Øverste linje defineres som navn på personen.
            Sang: "Hit me baby one more time", // Anden linje inderholder personens yndlingssang.
        },

        {
            Navn: "Tessa",
            Sang: "Ben",
        },
        {
            Navn: "Mia",
            Sang: "Love will tear us apart",
        }],
    }
        for (let person in katalog.venner) {  // Her opretter jeg en funktion der kan loope information ud af objektet.
            console.log("Yo " + `${katalog.venner[person].Navn}` + ` vil du med til piratfest på reffen i aften? Adressen er Piratvej 100`); // Denne del af funktionen hiver navnene ud af objektet
        } // Dernest concatenater den stringsne "Yo " + navnene der hentes ud af objektet + Antons besked.

        for (let sange in katalog.venner) { // Denne funktion henter Antons venners yndlingssange ud af objektivt og viser dem i konsolen.
            console.log([`${katalog.venner[sange].Sang}`]);
        }

        