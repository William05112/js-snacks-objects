const automobili = [
    { marca: "Fiat", modello: "Punto", alimentazione: "Benzina"},
    { marca: "Fiat", modello: "Panda", alimentazione: "Benzina"},
    { marca: "Pegeaut", modello: "208", alimentazione: "Diesel"},
    { marca: "Tesla", modello: "model s", alimentazione: "Elettrica"},
    { marca: "Tesla", modello: "model t", alimentazione: "Elettrica"},
    { marca: "Renault", modello: "Megane", alimentazione: "Diesel"},
    { marca: "Volkswagen", modello: "Touareg", alimentazione: "Metano"},
    { marca: "Citroen", modello: "C3", alimentazione: "Metano"},
    { marca: "Renault", modello: "Capture", alimentazione: "GPL"},
    { marca: "Dacia", modello: "Duster", alimentazione: "GPL"},
]

const automobiliBenzina = [];
const automobiliDiesel = [];
const automobiliAlternative = [];

for (let i = 0; i < automobili.length; i++) {
    if (automobili[i].alimentazione === "Benzina") {
        automobiliBenzina.push(automobili[i]);
    } else if (automobili[i].alimentazione === "Diesel") {
        automobiliDiesel.push(automobili[i]);
    } else {
        automobiliAlternative.push(automobili[i]);
    }
}

console.log(automobiliBenzina, automobiliDiesel, automobiliAlternative);

