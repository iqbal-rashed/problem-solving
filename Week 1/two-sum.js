const nums = [3, 2, 4];
const target = 6;

var output = [];

for (var i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
        if (i != j && nums[i] + nums[j] == target) {
            output.push(i);
        }
    }
}

console.log(output);
