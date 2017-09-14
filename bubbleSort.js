function switcher(arr, min, max){
  var temp = arr[min];
  arr[min]= arr[max];
  arr[max] = temp;
};

function bubbleSort(arr){
  var switched = true;

  while(switched){
    switched = false;
    for(var i = 0; i<array.length; i++){
      if(arr[i] && arr[i+1] && arr[i]>arr[i+1]){
        switched = true;
        switcher(arr, i, i+1);
      }
    }
  }
  return array;
};

var array = [4,2,3,7,1];
console.log(bubbleSort(array));
