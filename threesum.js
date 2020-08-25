/**

Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Note:

The solution set must not contain duplicate triplets.

Example:

Given array nums = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]
 * 
 * @param {*} nums 
 */
var threeSum = function (nums) {
    //let unique = [...new Set(nums)];
    nums.sort(function (a, b) { return a - b });
    var arr = [];

    var previous;
    var previous1;

    for (let i = 0; i < nums.length - 1; i++) {
        previous1 = undefined;
        if (nums[i] <= 0 && nums[i] != previous) {
            var left = i + 1;
            var right = nums.length - 1;
            while (left < right) {
                if (nums[left] + nums[right] == -nums[i] && nums[left] != previous1) {
                    arr.push([nums[i], nums[left], nums[right]])
                    previous1 = nums[left];
                    left++;
                    continue;
                }
                else if (nums[left] + nums[right] < -nums[i]) {
                    left++;
                } else {
                    right--;
                }
            }
            previous = nums[i];
        }
        else {
            continue;
        }
    }

    return arr;





    // for (let x = 0; x < nums.length; x++) {
    //     for (let y = x + 1; y < nums.length; y++) {
    //         for (let z = y + 1; z < nums.length; z++) {
    //             var total = nums[x] + nums[y] + nums[z];
    //             if (total == 0) {
    //                 arr.push(nums[x] + "###" + nums[y] + "###" + nums[z])
    //             }
    //         }
    //     }
    // }
    // var arr2 = [...new Set(arr)];
    // var result = [];
    // for (let i = 0; i < arr2.length; i++) {
    //     var arr3 = arr2[i].split('###')
    //     result.push(arr3);
    // }
    // return result;
};
//console.log(threeSum([-1, 0, 1, 2, -1, -4]))
console.log(threeSum([3, 0, -2, -1, 1, 2]))
//console.log(threeSum([0, 0, 0, 0, 0]))
//console.log(threeSum([0, -4, -1, -4, -2, -3, 2]))

