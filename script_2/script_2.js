console.log("De quel nombre veux-tu calculer la factorielle ?")

nbr = window.prompt()


function fact(nbr){
  var i, nbr, f = 1;
  for(i = 1; i <= nbr; i++)  
  {
    f *= i;
  }  
  return f;
}
console.log( `Tu as choisis : ${nbr}`)
console.log(`Le résultat est : ${fact(nbr)}`)


