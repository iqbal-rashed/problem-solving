var singleNumber = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        if (!isExist(nums, i)) {
            return nums[i];
        }
    }
};

var isExist = function (nums, i) {
    for (let j = 0; j < nums.length; j++) {
        if (i !== j && nums[i] == nums[j]) {
            return true;
        }
    }
    return false;
};

nums = [4, 1, 2, 1, 2];
console.log(singleNumber(nums));
