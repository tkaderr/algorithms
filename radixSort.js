var array = [2,3,3,4,5];
var buckets = [2,3,3,4,5];
var bucketIndex;
for (i = 0; i < array.length; i++) {
    bucketIndex = i;
    console.log("before:",bucketIndex);
    console.log("before:",buckets[bucketIndex]);
    //buckets[bucketIndex]++;
    //buckets[bucketIndex] = buckets[bucketIndex] + 1;
    //--buckets[bucketIndex];
    // buckets[bucketIndex] = buckets[bucketIndex] - 1;
    console.log("after:",bucketIndex);
    console.log("after:",buckets[bucketIndex]);
    console.log("--------------------")
  }
  console.log(buckets);

var radix = true;
radix = radix || 10;
console.log(radix);
