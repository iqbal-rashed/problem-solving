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

let lists = [];

for (let i = 0; i < lists.length; i++) {
    lists[i] = arrayToListNode(lists[i]);
}

// solution

for (let i = 0; i < lists.length; i++) {
    lists[i] = listNodeToArray(lists[i]);
}

lists = lists.flat().sort((a, b) => a - b);

console.log("ACTUAL DATA", lists);
lists = arrayToListNode(lists);

console.log(listNodeToArray({ val: null, next: null }));

console.dir(lists, { depth: null });
