var searchInsert = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) return i;
        if (i == nums.length - 1 && nums[i] < target) return nums.length;
        if (nums[i] < target && nums[i + 1] > target) return i + 1;
        if (i === 0 && target < nums[i]) return i;
    }
};

var nums = [1, 3, 5, 6],
    target = 7;

console.log(searchInsert(nums, target));
