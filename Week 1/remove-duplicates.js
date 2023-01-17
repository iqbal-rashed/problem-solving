var nums = [-3, -1, 0, 0, 0, 3, 3];
var removeDuplicates = function (nums) {
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        const value = nums[i];
        if (result.includes(value)) {
            nums[i] = "_";
        } else {
            result.push(value);
        }
    }
    nums.sort((a, b) => {
        if (b == "_") {
            return -1;
        } else {
            return 1;
        }
    });
    return result.length;
};

removeDuplicates(nums);
console.log(nums);
