let pung = {
    kort:
        [{
            Udbyder: "DanskeBank",
            Udløbsdato: "08/24",
        },

        {
            Udbyder: "Vestjyskebank",
            Udløbsdato: "05/25",
        },
        {
            Udbyder: "SparNord",
            Udløbsdato: "06/22",
        }],
    kontanter:
        [{

            værdi: "5",
            antal: "7",
        },

        {
            værdi: "20",
            antal: "5",
        },

        {
            værdi: "50",
            antal: "3",

        }]

}
for (let bank in pung.kort) {
    console.log(`${bank}: ${pung.kort[bank].Udbyder}`);
}
for (let bank in pung.kort) {
    console.log(`${bank}: ${pung.kort[bank].Udløbsdato}`);
}

