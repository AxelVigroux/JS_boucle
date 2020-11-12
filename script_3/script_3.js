console.log("Combien d'étages veux-tu ?")

nbr = prompt()

function pyra (nbr) {
  
  for (var i = 1; i <= nbr; i++) {
    var row = '';

    for (var j = 1; j <= (nbr - i); j++) {
      row += ' ';
    }
    
    /* Imprime les * */
    for (var k = 1; k <= i; k++) {
      row += '*';
    }
    
    console.log(row);
  }
}

pyra(nbr);

