const persone = [
    { nome: 'Marco', cognome: 'Rossi', eta: 25 },
    { nome: 'Laura', cognome: 'Bianchi', eta: 30 },
    { nome: 'Giovanni', cognome: 'Verdi', eta: 40 },
    { nome: 'Anna', cognome: 'Neri', eta: 15 },   // Minorenne
    { nome: 'Stefano', cognome: 'Galli', eta: 12 }, // Minorenne
    { nome: 'Francesca', cognome: 'Romano', eta: 95 }, // Maggiore di 90 anni
    { nome: 'Luca', cognome: 'Ferrari', eta: 33 },
    { nome: 'Giorgio', cognome: 'Marini', eta: 10 }, // Minorenne
    { nome: 'Giulia', cognome: 'Serra', eta: 100 }, // Maggiore di 90 anni
    { nome: 'Antonio', cognome: 'De Luca', eta: 92 } // Maggiore di 90 anni
];

function verificaGuida(persone) {
    const guidaInfo = [];

    for (let i = 0; i < persone.length; i++) {
        let frase = `${persone[i].nome} ${persone[i].cognome} `; // Aggiunto spazio alla fine

        if (persone[i].eta < 18) {
            frase += `non può guidare perché è minorenne.`;
        } else if (persone[i].eta > 90) {
            frase += `non può guidare perché è anziano.`;
        } else {
            frase += `buona guida.`;
        }

        guidaInfo.push(frase);
    }

    return guidaInfo;
}


console.log(verificaGuida(persone));









// esercizio strutturato con ciclo for

const guidaInfo = [];

for (let i = 0; i < persone.length; i++) {
    let frase = `${persone[i].nome} ${persone[i].cognome} `;

    if (persone[i].eta < 18) {
        frase += `non può guidare perché è minorenne.`;
    } else if (persone[i].eta > 90) {
        frase += `non può guidare perché è anziano.`;
    } else {
        frase += `buona guida.`;
    }

    guidaInfo.push(frase);
}

console.log(guidaInfo);
// const guidaInfo = [];

// for (let i = 0; i < persone.length; i++) {
//     let frase = `${persone[i].nome} ${persone[i].cognome} `; // Aggiunto spazio alla fine

//     if (persone[i].eta < 18) {
//         frase += `non può guidare perché è minorenne.`;
//     } else if (persone[i].eta > 90) {
//         frase += `non può guidare perché è anziano.`;
//     } else {
//         frase += `buona guida.`;
//     }

//     guidaInfo.push(frase);
// }

// console.log(guidaInfo);















