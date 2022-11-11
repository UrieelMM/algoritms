let twoSum = function (nums, target) {
    for (let p1 = 0; p1 < nums.length; p1++) {
        const numberToFind = target - nums[p1];

        for (let p2 = p1 + 1; p2 < nums.length; p2++) {
            if (numberToFind === nums[p2]) {
                return console.log([p1, p2]);
            }
        }
    }
    return null;
};

twoSum([2, 7, 11, 15], 9); // [0, 1]    2 + 7 = 9
twoSum([3, 2, 4], 6); // [1, 2]    2 + 4 = 6
