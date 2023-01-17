var nums1 = [4, 5, 6, 0, 0, 0],
    m = 3,
    nums2 = [1, 2, 3],
    n = 3;

var merge = function (nums1, m, nums2, n) {
    for (let i = 0; i < nums1.length; i++) {
        if (i >= m) {
            nums1[i] = nums2[i - m];
        }
    }
    for (let i = 0; i < nums1.length; i++) {
        for (j = 0; j < nums1.length; j++) {
            if (nums1[j] > nums1[j + 1]) {
                let temp = nums1[j];
                nums1[j] = nums1[j + 1];
                nums1[j + 1] = temp;
            }
        }
    }
};

merge(nums1, m, nums2, n);

console.log(nums1);
