var musicians = ["John Lennon", "Paul", "George", "Ringo"];
var instruments = ["Guitar", "Bass", "Guitar", "Drums"];


function theBeatlesPlay(array1, array2) {
  var theBand = [];
  
  var string1 = " plays ";
  var string2;
  for(var i = 0; i < array1.length; i++) {
    theBand.push(array1[i] + string1 + array2[i]);
  }
  console.log(theBand)
  
}

theBeatlesPlay(musicians, instruments);