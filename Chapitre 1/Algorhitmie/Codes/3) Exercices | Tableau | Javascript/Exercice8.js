function moyenneClass(...noteArray){
   let arraySum = 0;
   for (i = 0; i < noteArray.length; i++) {
      arraySum += noteArray[i]
   }
   let finality = arraySum / noteArray.length
   let moyenneSup = 0
   for (i = 0; i < noteArray.length; i++) {
      if (noteArray[i] > finality) {
         moyenneSup += 1
      }
   }
   console.log("la moyenne de classe est de: " + finality + ".")
   console.log(moyenneSup + " personnes ont eu plus que la moyenne.")
}
moyenneClass(8, 8, 12, 12, 11)