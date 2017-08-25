// var twoSum = function(nums, target) {
//   for(var i = 0; i<nums.length; i++){
//       var arr =[i];
//       for(var j = i+1; j<nums.length; j++){
//           if(target - nums[i] === nums[j]){
//               arr.push(j);
//               return arr;
//           }
//       }
//   }
// };

var twoSum = function(nums, target){
  var saved={}
  var result=[]
  for(i=0; i< nums.length; i++){
    if(saved[nums[i]]!= null){
      result[0] = saved[nums[i]]
      result[1] = i;
      return result
    }
    saved[target - nums[i]] = i
  }
}

var nums = [0, 7, 11, 0];
var target = 0;
console.log(twoSum(nums,target));
