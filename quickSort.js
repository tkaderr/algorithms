function quickSort(arr){
  if(arr.length<2){
    return arr;
  }

  var greater=[];
  var lesser=[];
  var pivot = arr[0];

  for(var i = 1; i<arr.length; i++){
    if(arr[i]<pivot){
      lesser.push(arr[i]);
    }
    else{
      great.push(arr[i]);
    }

    return quickSort(lesser).concat(pivot, quickSort(greater));
  }
}
