function switcher(arr, min, max){
  var temp = arr[min];
  arr[min]= arr[max];
  arr[max] = temp;
};

function selectionSort(arr){
  for (var i = 0; i<arr.length; i++){
    var min = i;
    for (var j = i+1; j<arr.length; j++){
      if(arr[j]<arr[min]){
        min = j;
      }
      if(i != min){
        switcher(arr, i, min);
      }
    }
  }
  return arr;
}
