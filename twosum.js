/**
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
 * @param {*} nums 
 * @param {*} target 
 */
var twoSum = function (nums, target) {
    // var i;
    // var j;
    // for (i = 0; i < nums.length; i++) {
    //     for (j = i + 1; j < nums.length; j++) {
    //         var n = nums[i] + nums[j];
    //         if (n == target) {
    //             return [i, j];
    //         }
    //     }
    // }

    // //////////////////////
    var i;
    var j = -1;
    for (i = 0; i < nums.length; i++) {
        var num = target - nums[i];
        j = nums.indexOf(Number(num));
        if (j != -1 && j != i) {
            return [i, j];
        }
    }
};
console.log(twoSum([2, 7, 11, 15], 9))
console.log(twoSum([3, 2, 4], 9))

