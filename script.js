function fibonacci(num) {
// your code here
	if (num <= 0) return 0;
    if (num === 1) return 0;
    let prev = 0;
    let curr = 1;
    for (let i = 2; i < num; i++) {
        let next = prev + curr;
        prev = curr;
        curr = next;
    }
    return prev;
}

module.exports = fibonacci;
