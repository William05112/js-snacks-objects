const primoelenco = [`pippo`, `PLUTO`, `Paperino`];
const secondoelenco = [];

for (let i = 0; i < primoelenco.length; i++) {
    const minuscolo = primoelenco[i].toLowerCase();
    const maiuscolo = minuscolo.charAt(0).toUpperCase() + minuscolo.slice(1);
    console.log(maiuscolo);
    secondoelenco.push(maiuscolo);
}
console.log(secondoelenco);
