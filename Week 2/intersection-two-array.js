var intersection = function (nums1, nums2) {
    let result = [];
    for (let i = 0; i < nums1.length; i++) {
        const element = nums1[i];
        if (nums2.includes(element) && !result.includes(element)) {
            result.push(element);
        }
    }
    return result;
};

var intersect = function (nums1, nums2) {
    let result = [];
    for (let i = 0; i < nums1.length; i++) {
        isExist(nums1, nums2, result, i);
    }
    return result;
};

function isExist(nums1, nums2, result, i) {
    for (let j = 0; j < nums2.length; j++) {
        if (nums1[i] != "_" && nums1[i] == nums2[j]) {
            result[result.length] = nums1[i];
            nums2[j] = "_";
            nums1[i] = "_";
            return;
        }
    }
}

const nums1 = [
    170, 388, 873, 467, 111, 706, 52, 28, 576, 660, 277, 45, 917, 340, 742, 225,
    864, 372, 749, 554, 548, 362, 560, 977, 206, 891, 432, 788, 651, 370, 876,
    238, 188, 558, 429, 436, 624, 129, 374, 718, 760, 683, 580, 949, 491, 218,
    627, 135, 860, 450, 506, 465, 823, 156, 979, 871, 765, 302, 724, 163, 622,
    998, 441, 453, 868, 25, 204, 674, 801, 704, 753, 946, 153, 577, 821, 255,
    723, 15, 688, 909, 68, 726, 975, 736, 40, 55, 216, 942, 138, 629, 54, 133,
    664, 656, 981, 389, 990, 363, 42, 166, 785, 272, 296, 852, 306, 15, 733,
    794, 760, 298, 744, 385, 486, 345, 956, 838, 411, 412, 752, 849, 508, 942,
    334, 221, 712, 325, 157, 455, 807, 761, 618, 905, 287, 2, 735, 350, 689,
    406, 428, 922, 925, 155, 823, 888, 675, 789, 942, 137, 773, 417, 759, 902,
    728, 87, 215, 764, 968, 913, 961, 784, 601, 790, 369, 16, 132, 960, 418,
    312, 127, 198, 584, 2, 401, 209, 360, 568, 369, 130, 588, 760, 125, 139,
    395, 678, 700, 779, 94, 881, 494, 265, 965, 291, 873, 870, 985, 105, 554,
    849, 779, 194, 700, 8, 361, 774, 646, 703, 235, 239, 30, 422, 541, 385, 157,
    460, 863, 835, 644, 520, 970, 933, 707, 174, 243, 905, 776, 952, 345, 667,
    683, 84, 702, 471, 529, 753, 158, 827, 496, 754, 248, 184, 939, 645, 457,
    397, 181, 846, 245, 951, 58, 584, 236, 834, 25, 122, 553, 730, 186, 490,
    957, 334, 587, 819, 454, 594, 363, 651, 776, 268, 913, 964, 324, 721, 472,
    621, 112, 912, 344, 510, 749, 542, 662, 402, 250, 640, 988, 938, 335, 477,
    847, 142, 945, 130, 144, 737, 16, 646, 373, 786, 818, 869, 820, 304, 114,
    111, 111, 124, 752, 157, 79, 433, 34, 574, 85, 662, 268, 886, 985, 451, 623,
    684, 819, 184, 253, 384, 532, 406, 960, 88, 466, 615, 665, 195, 562, 372,
    888, 689, 570, 149, 698, 961, 99, 586, 643, 285, 269, 781, 590, 454, 959,
    389, 326, 132, 140, 941, 725, 315, 250, 951, 822, 691, 412, 399, 484, 811,
    394, 355, 444, 73, 416, 505, 652, 584, 990, 409, 382, 500, 124, 995, 256,
    227, 12, 586, 578, 439, 101, 15, 373, 289, 200, 102, 210, 355, 368, 818,
    345, 109, 404, 18, 853, 937, 991, 228, 725, 981, 223, 165, 896, 73, 212,
    444, 998, 915, 999, 767, 858, 673, 753, 771, 414, 189, 434, 823, 817, 925,
    604, 836, 795, 363, 217, 395, 111, 592, 716, 566, 802, 650, 466, 381, 361,
    892, 424, 162, 223, 874, 486, 985, 687, 947, 405, 386, 896, 498, 871, 975,
    322, 900, 288, 531, 361, 520, 170, 670, 805, 27, 463, 261, 253, 218, 945,
    346, 551, 765, 763, 251, 670, 968, 97, 712, 653, 737, 528, 692, 853, 24,
    997, 326, 782, 320, 825, 260, 938, 942, 501, 695, 276, 927, 30, 405, 173,
    786, 365, 434, 378, 555, 627, 98, 757, 691, 545, 834, 673, 75, 797, 452,
    448, 963, 562, 784, 712, 384, 666, 870, 622, 369, 418, 66, 522, 860, 865,
    499, 751, 726, 42, 198, 303, 440, 930, 820, 493, 950, 418, 980, 141, 439,
    711, 392, 145, 569, 853, 341, 970, 401, 673, 99, 614, 771, 528, 529, 361,
    113, 183, 310, 224, 763, 972, 924, 33, 773, 590, 712, 252, 420, 198, 813,
    107, 401, 802, 606, 4, 716, 250, 250, 496, 528, 12, 890, 580, 983, 343, 564,
    252, 819, 517, 360, 440, 292, 629, 294, 222, 814, 168, 701, 737, 428, 395,
    799, 694, 969, 244, 654, 81, 423, 255, 912, 488, 641, 893, 165, 32, 214, 69,
    507, 106, 968, 66, 713, 444, 632, 326, 73, 893, 836, 52, 216, 547, 787, 958,
    175, 95, 75, 200, 269, 97, 10, 734, 865, 342, 481, 205, 257, 871, 603, 558,
    206, 707, 3, 661, 95, 738, 90, 154, 925, 329, 585, 179, 29, 447, 485, 872,
    403, 357, 617, 295, 378, 979, 773, 900, 726, 31, 540, 159, 308, 952, 480,
    253, 699, 721, 915, 127, 279, 860, 223, 951, 630, 139, 521, 410, 620, 438,
    534, 809, 738, 335, 589, 852, 833, 886, 965, 954, 265, 411, 988, 939, 867,
    943, 828, 141, 378, 799, 541, 793, 949, 867, 137, 527, 387, 896, 300, 224,
    704, 464, 301, 29, 979, 772, 649, 233, 580, 921, 642, 72, 660, 216, 63, 560,
    734, 385, 186,
];

const nums2 = [
    913, 215, 304, 510, 645, 472, 737, 435, 767, 25, 675, 53, 583, 685, 457,
    578, 709, 51, 434, 605, 744, 688, 549, 209, 712, 772, 976, 791, 935, 543,
    253, 829, 329, 298, 173, 404, 367, 84, 511, 440, 965, 386, 395, 323, 588,
    631, 198, 62, 143, 976, 662, 830, 719, 611, 163, 104, 718, 997, 790, 625,
    748, 355, 747, 429, 677, 869, 644, 383, 627, 881, 758, 820, 762, 812, 823,
    306, 324, 27, 819, 964, 346, 969, 629, 486, 271, 702, 808, 302, 179, 314,
    579, 194, 752, 449, 980, 623, 574, 326, 479, 403, 318, 561, 984, 754, 106,
    34, 55, 898, 391, 313, 268, 46, 163, 336, 966, 237, 23, 949, 550, 274, 865,
    760, 547, 162, 805, 690, 114, 818, 127, 854, 497, 558, 884, 608, 374, 851,
    481, 363, 805, 975, 292, 197, 366, 950, 343, 46, 700, 286, 976, 917, 949,
    845, 28, 671, 739, 940, 725, 13, 283, 839, 636, 701, 477, 171, 549, 367,
    218, 206, 928, 542, 896, 156, 470, 652, 998, 720, 892, 317, 783, 849, 155,
    9, 358, 736, 61, 218, 107, 448, 334, 638, 443, 382, 571, 879, 244, 607, 977,
    481, 408, 227, 410, 598, 302, 989, 547, 656, 212, 748, 102, 129, 456, 872,
    625, 189, 940, 814, 16, 448, 643, 332, 934, 77, 816, 275, 987, 491, 169, 76,
    362, 6, 57, 122, 81, 457, 528, 1, 182, 953, 893, 853, 408, 380, 746, 252,
    546, 749, 40, 821, 392, 636, 135, 75, 347, 329, 918, 546, 44, 64, 13, 442,
    868, 237, 894, 526, 751, 628, 460, 137, 327, 156, 794, 823, 985, 162, 877,
    138, 12, 116, 846, 420, 800, 665, 661, 83, 864, 378, 911, 524, 994, 398, 6,
    430, 184, 91, 172, 362, 756, 504, 465, 439, 651, 604, 877, 481, 955, 578,
    651, 144, 163, 335, 730, 735, 8, 142, 394, 597, 975, 183, 340, 786, 816,
    238, 400, 955, 914, 278, 164, 396, 336, 647, 326, 525, 162, 552, 343, 304,
    182, 918, 743, 546, 94, 843, 139, 207, 243, 165, 63, 563, 393, 827, 669,
    364, 437, 143, 115, 222, 741, 933, 483, 911, 647, 383, 428, 532, 703, 90,
    436, 869, 785, 14, 215, 209, 531, 845, 44, 951, 559, 914, 41, 950, 741, 901,
    741, 975, 361, 766, 185, 819, 70, 652, 821, 971, 318, 373, 801, 319, 620,
    394, 386, 407, 658, 123, 449, 870, 667, 169, 721, 632, 601, 420, 217, 933,
    0, 104, 418, 910, 331, 630, 290, 219, 731, 249, 532, 544, 97, 393, 470, 870,
    35, 320, 121, 157, 117, 233, 258, 717, 752, 539, 774, 100, 867, 817, 0, 66,
    662, 495, 987, 680, 570, 145, 3, 740, 556, 594, 712, 222, 325, 312, 189,
    942, 475, 847, 529, 686, 181, 958, 813, 321, 802, 970, 403, 561, 910, 988,
    210, 653, 480, 324, 806, 704, 521, 288, 635, 306, 773, 907, 161, 29, 713,
    776, 147, 120, 584, 102, 59, 15, 834, 983, 415, 446, 370, 122, 891, 988,
    491, 651, 408, 527, 923, 685, 619, 36, 882, 726, 741, 32, 419, 249, 569,
    252, 256, 409, 630, 738, 73, 268, 22, 1, 396, 784, 732, 597, 713, 846, 993,
    263, 730, 215, 143, 553, 338, 433, 739, 171, 40, 910, 934, 249, 431, 826,
    459, 182, 683, 976, 670, 762, 870, 732, 651, 682, 15, 833, 95, 26, 309, 562,
    416, 91, 439, 345, 928, 770, 763, 697, 213, 950, 266, 43, 961, 102, 689,
    701, 272, 633, 792, 7, 482, 867, 815, 79, 704, 122, 833, 608, 520, 946, 406,
    591, 833, 383, 957, 29, 800, 397, 243, 490, 337, 239, 16, 172, 579, 908,
    713, 695, 70, 360, 386, 458, 512, 859, 410, 767, 917, 538, 34, 431, 150,
    718, 636, 416, 192, 686, 355, 245, 751, 693, 569, 651, 644, 760, 663, 255,
    264, 228, 640, 560, 875, 438, 3, 829, 353, 607, 224, 428, 106, 140, 414,
    815, 976, 700, 826, 451, 949, 858, 771, 102, 462, 258, 306, 901, 361, 205,
    167, 557, 250, 22, 850, 615, 146, 306, 499, 584, 345, 803, 234, 536, 347,
    526, 539, 875, 94, 58, 477, 576, 781, 698, 973, 115, 399, 624, 530, 17, 451,
    504, 584, 430, 446, 992, 552, 931, 284, 987, 68, 556, 737, 723, 210, 617,
    57, 821, 885, 104, 718, 926, 760, 824, 771, 191, 155, 233, 692, 855, 242,
    851, 280, 785, 14, 6, 800, 215, 984, 205, 19, 649, 591, 702, 781, 428, 203,
    441, 836, 663, 230, 285, 850, 862, 998, 217, 631, 406, 718, 751, 231, 21,
    400, 493, 965, 879, 464, 614, 717, 506, 724, 351, 921, 801, 130,
];

console.log(intersect(nums1, nums2));