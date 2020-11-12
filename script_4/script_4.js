const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

/* SEVENTIES */
console.log("1. Les entrepreneurs nés dans les années 70 sont :")
let year70 = entrepreneurs.filter(entrepreneur => entrepreneur.year>1970 && entrepreneur.year<1980);
console.log(year70)

/* FIRST AND LAST NAME */
console.log("2. Les prénoms et noms sont :");
entrepreneurs.forEach(function(e) {
  console.log(e.first  +" " + e.last)
})

/* AGES EN 2020 */
console.log("3. Âge de chaque inventeur aujourd'hui")

const actualYear = new Date().getFullYear();
  entrepreneurs.forEach(function(entrepreneur) {
    const actualAge = actualYear - entrepreneur.year;
    console.log(entrepreneur.first + ' ' + entrepreneur.last + ' a ' + actualAge  + " ans ");
  })


console.log("4. Ordre alphabetique par le nom :")

  entrepreneurs.sort(function(a, b) {
    if (a.last < b.last){
    return -1;
    } else if (a.last > b.last){
    return 1;
    }  else {
      return 0;
    }  
  })
console.log(entrepreneurs)


