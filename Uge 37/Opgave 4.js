const indkøbsliste = ["ris", "gulerødder", "mælk", "sukker", "kaffe", "toiletpapir"];

indkøbsliste.shift()
console.log(indkøbsliste)

indkøbsliste.unshift("pasta") 
console.log(indkøbsliste)

console.log(indkøbsliste.indexOf("mælk"))
indkøbsliste.splice(2,1)
console.log(indkøbsliste)
