// Del A

const express = require('express');

const app = express();
app.use(express.json());

const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Server lytter på port ${PORT}`)
});


// Del B

var besaetning = [
    { id: 0, dyr: `koeer`, antal: 50 },
    { id: 1, dyr: `Hunde`, antal: 1 },
    { id: 2, dyr: `Grise`, antal: 100 },
    { id: 3, dyr: `Faar`, antal: 20 },
];

console.log(besaetning);

// Del C

app.get(`/besaetning`, (req, res, next) => {
    res.send(besaetning);
});

// Del D

app.get(`/returner_antallet_af_dyr_for_en_kategori/:kategori`, (req, res, next) => {
    var kategori = req.params.kategori;
    var antal = besaetning[kategori]
    if (!antal) {
        res.status(400).send(`Kategorien du leder efter, findes ikke.`);
        return
    }
    res.status(200).send(antal)
});

// Del E

app.put(`/returner_antallet_af_dyr_for_en_kategori/:kategori`, (req, res, next) => {
    let found = besaetning.find(function (item) {
        return item.id === parseInt(req.params.kategori);
    });

    if (!found) {
        res.sendStatus(404);
    }
    let updated = {
        id: found.id,
        dyr: req.body.dyr,
        antal: req.body.antal
    };

    let targetIndex = besaetning.indexOf(found);

    besaetning.splice(targetIndex, 1, updated);

    res.status(200).json(updated);

});

// Del F

app.delete(`/returner_antallet_af_dyr_for_en_kategori/:kategori`, (req, res, next) => {
    let found = besaetning.find(function (item) {
        return item.id === parseInt(req.params.kategori);
    });

    if (found) {
        let targetIndex = besaetning.indexOf(found);
        besaetning.splice(targetIndex, 1);
    }
    res.status(200).json(found);
});

// Opgave 2

<html>
    <h1> Tabel over Jens Hansens dyr </h1>
<script>
    function showTable(){
    document.getElementById(`table`).style.visibility = `visible`    
    }

    
</script>
</html>