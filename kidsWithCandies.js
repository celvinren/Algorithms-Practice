var kidsWithCandies = function (candies, extraCandies) {
    var maxInArray = Math.max.apply(null, candies);
    var result = [];
    for (let i = 0; i < candies.length; i++) {
        result.push(candies[i] + extraCandies >= maxInArray)
    }
    return result;
};
console.log(kidsWithCandies([2, 3, 5, 1, 3], 3))