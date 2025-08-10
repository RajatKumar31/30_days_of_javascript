//2635: Apply Transform Over Each Element in Array

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
	for (let i = 0; i < arr.length; i++) {
		arr[i] = fn(arr[i], i);
	}
};

function fn(x) {
	return x + 1;
}

const arr = [1, 2, 3, 4];
map(arr, fn);
console.log(arr);
