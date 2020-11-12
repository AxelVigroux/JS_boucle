const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

/* EMPRUNTED ? */
const results = books.every(function(b) {
  return b.rented > 0;
})
console.log(results)
console.log('1. Tous les livres ont été empruntés au moins 1 fois.')

  


console.log('2. Le livre le plus empruntés est :');
const  mostRented = books.sort(function(a, b){
  if (a.rented > b.rented){
    return -1;
  } else if (a.rented < b.rented){
    return 1;
  } else {
    return 0;
  }
})
console.log(mostRented[0]);

/* Si j'utilise la methode .shift/.pop je supprime le livre */

console.log('3. le livre le moins emprunté est : ');
const lessRented = books.sort(function(a, b){
  if (a.rented < b.rented){
    return -1;
  } else if (a.rented > b.rented){
    return 1;
  } else {
    return 0;
  }
})
console.log(lessRented[0]);
/* Si j'utilise la methode .shift/.pop je supprime le livre */

const index = books.find(function(b) {
  return b.id === 873495;
  
})

console.log('4. Le livre est :');
console.log({ index });


const suppr = books.findIndex(function(b) {
  return b.id === 133712;
})
books.splice(suppr, 1)
console.log('5. La liste sans le livre 133712 : ');
console.log(books)


