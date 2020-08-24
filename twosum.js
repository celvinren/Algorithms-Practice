var twoSum = function (nums, target) {
    var i;
    var j;
    for (i = 0; i < nums.length; i++) {
        for (j = i + 1; j < nums.length; j++) {
            var n = nums[i] + nums[j];
            if (n == target) {
                return [i, j];
            }
        }
    }

    //////////////////////
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

