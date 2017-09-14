function binarySearch(search, array){
  var max = array.length - 1;
  var min = 0;
  var mid;
  var curr;

  while(min <= max){
    mid = Math.floor((max+min)/2);
    current = array[mid];
    if(current < search){
      min = mid + 1;
    }
    else if (current > search){
      max = mid - 1;
    }
    else {
      return mid;
    }
  }
  return false;
}

var arr = [2,3,5,6,7,8];
var search = 3;
console.log(binarySearch(search,arr));
