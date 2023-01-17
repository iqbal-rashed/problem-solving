var n1 = [0, 0, 0, 0, 0],
    n2 = [-1, 0, 0, 0, 0, 0, 1];

var findMedianSortedArrays = function (nums1, nums2) {
    var arr = nums1.concat(nums2);

    let length = arr.length;
    if (length % 2 == 0) {
        const firstIndex = length / 2;
        const secondIndex = firstIndex - 1;
        const jog = arr[secondIndex] + arr[firstIndex];
        console.log(arr[secondIndex], arr[firstIndex]);
        return jog == 0 ? 0 : jog / 2;
    } else if (length == 1) {
        return arr[0];
    } else {
        const index = length / 2 + 0.5;
        return arr[index];
    }
};

console.log(findMedianSortedArrays(n1, n2));
