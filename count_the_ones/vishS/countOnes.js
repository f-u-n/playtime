  function countOne(number){
    var count = 0;
    var numberArray = number.toString().split("");
    for(i=0; i<numberArray.length; i++){
        if(numberArray[i] == 1){
           count++;
        }
    }
    return count;
  }

countOne(467);
countOne(81511);
countOne(123);
