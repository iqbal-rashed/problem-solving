const dataHead = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: {
                val: 4,
                next: {
                    val: 5,
                    next: null,
                },
            },
        },
    },
};

const dataK = 2;

const rotateRight = function (head, k) {
    let result = head;
    for (let i = 0; i < k; i++) {
        result = rotate(result);
    }
    return result;
};

const rotate = (head) => {
    let previous = head;
    let newNext = head.next;
    while (newNext.next != null) {
        previous = newNext;
        newNext = newNext.next;
    }
    const last = previous.next;
    previous.next = null;
    last.next = head;
    return last;
};
