// need functionality
function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

function add(value) {
    let list = new ListNode();
    list.val = value;
    list.next = null;
    return list;
}

function listNodeToArray(listNode) {
    let arr = [];
    let next = listNode;
    while (next !== null) {
        arr.push(next.val);
        next = next.next;
    }
    return arr;
}

function arrayToListNode(arr) {
    let root = null;
    for (var i = arr.length - 1; i >= 0; i--) {
        const value = arr[i];
        if (root) {
            let newRoot = root;
            root = add(value);
            root.next = newRoot;
        } else {
            root = add(value);
        }
    }
    return root;
}

// given variable
let l1 = [
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 1,
];
let l2 = [5, 6, 4];

l1 = arrayToListNode(l1);
l2 = arrayToListNode(l2);

// solution start here
l1 = listNodeToArray(l1);
l2 = listNodeToArray(l2);

l1 = BigInt(l1.reverse().join(""));
l2 = BigInt(l2.reverse().join(""));

var result = Array.from(String(l1 + l2), (num) => Number(num)).reverse();

return arrayToListNode(result);
