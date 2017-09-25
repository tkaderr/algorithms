// var moveZeroes = function(nums) {
//     for(var i = 0; i<nums.length; i++){
//         if(nums[i]==0){
//             for(var j = i; j<nums.length-1; j++){
//                 nums[j] = nums[j+1];
//             }
//             nums[nums.length-1] = 0;
//         }
//         if(nums[i-1] == 0){
//             nums[i-1] = nums[i];
//             for(var j = i; j<nums.length-1; j++){
//                 nums[j] = nums[j+1];
//             }
//             nums[nums.length-1] = 0;
//         }
//     }
//     return ;
// };

var moveZeroes = function(nums){
  var lastzero = 0;
  for (var i = 0; i<nums.length; i++){
    nums[lastzero] = nums[i];
    lastzero++;
  }
  for (var i = lastzero; i<nums.length; i++){
    nums[i] = 0;
  }
  return;
};
