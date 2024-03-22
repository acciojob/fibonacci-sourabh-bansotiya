function fibonacci(num) {
// your code here
	let sum = 0;
	for (let i = 0; i < num.length; i++) {
		for (let j = i; j < num.lenght; j++) {
			if (num[i] + num[j] >= 0) {
				sum = num[i] + num[j]
			}
		}
	}
	return sum;
}

module.exports = fibonacci;
