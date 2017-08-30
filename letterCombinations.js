
var letterCombinations = function(digits) {
    var arr=[];
    var digit = digits.toString();
    var dict = {
      "2" : ["a","b","c"],
      "3" : ["d","e","f"],
      "4" : ["g","h","i"],
      "5" : ["j", "k","l"],
      "6" : ["m","n","o"],
      "7" : ["p","q","r","s"],
      "8" : ["t","u","v"],
      "9" : ["w","x","y","z"]
    };


    if(digit.length == 1){
      return dict[digit];
    }
    //for the first digits
    for(var i = 0; i<digit.length; i++){
      //for the seconds digit
      for(var j = i+1; j<digit.length; j++){
        //for the first number array
        for(var x = 0; x<dict[digit[i]].length; x++){
          //for the second number array
          for(var y = 0; y<dict[digit[j]].length; y++){
            var temp = dict[digit[i]][x] + dict[digit[j]][y];
            arr.push(temp);
            console.log(arr);
          }
        }
      }
    }
    return arr;
}

console.log(letterCombinations(234));
