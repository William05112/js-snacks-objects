const animali = [
    { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
    { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
    { nome: 'elefante', famiglia: 'elefantidi', classe: 'mammiferi' },
    { nome: 'giraffa', famiglia: 'giraffidi', classe: 'mammiferi' },
    { nome: 'aquila', famiglia: 'accipitridi', classe: 'uccelli' },
    { nome: 'serpente', famiglia: 'colubridi', classe: 'rettili' },
    { nome: 'salmone', famiglia: 'salmonidi', classe: 'pesci' }
  ];
  
  console.log(animali);
  

//   const mammiferi = [];

//     for (let i = 0; i < animali.length; i++) {
//         if (animali[i].classe === 'mammiferi') {
//             mammiferi.push(animali[i]);
//         }

//     }
//     console.log(mammiferi);


function filtraPerClase (array, classe) {
    const risultato = [];
 for (let i = 0; i < array.length; i++) {
    if (array[i].classe === classe) {
        risultato.push(array[i]);
    }
    
 }
    return risultato;
}
    const mammiferi = filtraPerClase(animali, 'mammiferi');
    console.log(mammiferi);
    