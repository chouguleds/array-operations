function isArray(arr) {

	if (arr.constructor === Array)
		return true;
	else
		return false;
}

function isFunction(fun) {

	if (typeof fun === "function")
		return true;
	else
		return false;
}

exports.difference = function(arr1, arr2) {

	var array = {};
	if (!isArray(arr1) || !isArray(arr2)) {

		throw new TypeError("Invalid argument, Please pass proper array argument");
	}

	var result = [];
	for (var i = 0; i < arr2.length; i++) {
		array[arr2[i]] = arr2[i];
	}

	for (var i = 0; i < arr1.length; i++) {
		if (array[arr1[i]] === undefined)
			result.push(arr1[i])
	}
	return result;
}
exports.union = function(arr1, arr2) {

	var array = {};
	if (!isArray(arr1) || !isArray(arr2)) {

		throw new TypeError("Invalid argument, Please pass proper array argument");
	}

	var result = [];
	for (var i = 0; i < arr1.length; i++) {

		if (array[arr1[i]] === undefined) {
			array[arr1[i]] = arr1[i];
			result.push(arr1[i])
		}
	}

	for (var i = 0; i < arr2.length; i++) {

		if (array[arr2[i]] === undefined) {

			result.push(arr2[i])
			array[arr2[i]] = arr2[i];
		}
	}
	return result;
}

exports.intersection = function(arr1, arr2) {

	var array = {};
	if (!isArray(arr1) || !isArray(arr2)) {

		throw new TypeError("Invalid argument, Please pass proper array argument");
	}

	var result = [];
	for (var i = 0; i < arr1.length; i++) {

		if (array[arr1[i]] === undefined)
			array[arr1[i]] = arr1[i];
	}

	for (var i = 0; i < arr2.length; i++) {
		if (array[arr2[i]] !== undefined) {

			result.push(arr2[i])
			delete array[arr2[i]];
		}
	}
	return result;
}

exports.removeDuplicates = function(arr) {

	var array = {};
	if (!isArray(arr)) {

		throw new TypeError("Invalid argument, Please pass proper array argument");
	}

	var result = [];
	for (var i = 0; i < arr.length; i++) {
		if (array[arr[i]] === undefined) {
			array[arr[i]] = arr[i];
			result.push(arr[i])
		}
	}
	return result;
}

exports.filter = function(arr, condition) {

	if (!isArray(arr)) {

		throw new TypeError("Invalid argument, Please pass proper array argument");
	}

	if (!isFunction(condition)) {

		throw new TypeError("Invalid argument, Please pass proper function");
	}
	var result = [];
	for (var i = 0; i < arr.length; i++) {
		if (condition(arr[i])) {
			result.push(arr[i])
		}
	}
	return result;
}

exports.sum = function(arr) {

	if (!isArray(arr)) {

		throw new TypeError("Invalid argument, Please pass proper array argument");
	}
	if (arr.length === 0)
		return 0;
	var result = arr[0];
	for (var i = 1; i < arr.length; i++)
		result += arr[i];

	return result;
}

exports.forEachPerform = function(arr, condition) {

	if (!isArray(arr)) {

		throw new TypeError("Invalid argument, Please pass proper array argument");
	}

	if (!isFunction(condition)) {

		throw new TypeError("Invalid argument, Please pass proper function");
	}
	var result = [];
	for (var i = 0; i < arr.length; i++) {
		result.push(condition(arr[i]))
	}
	return result;
}

exports.min = function(arr) {

	if (!isArray(arr)) {

		throw new TypeError("Invalid argument, Please pass proper array argument");
	}

	var min = arr[0];
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] < min)
			min = arr[i];
	}
	return min;
}

exports.max = function(arr) {

	if (!isArray(arr)) {

		throw new TypeError("Invalid argument, Please pass proper array argument");
	}

	var max = arr[0];
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] > max)
			max = arr[i];
	}
	return max;
}

exports.average = function(arr) {

	if (!isArray(arr)) {

		throw new TypeError("Invalid argument, Please pass proper array argument");
	}
	if (arr.length === 0)
		return 0;
	var total = this.sum(arr);
	if (typeof total === "number")
		var average = (total / arr.length);
	else
		throw Error("Array contains Non-numbers");

	return average;
}

exports.areEqual = function(arr1, arr2) {

	if (!isArray(arr1) || !isArray(arr2)) {

		throw new TypeError("Invalid argument, Please pass proper array argument");
	}

	if (arr1.length !== arr2.length)
		return false;
	for (var i = 0; i < arr1.length; i++) {

		if (arr1[i] !== arr2[i])
			return false;
	}
	return true;
}

exports.areDistinct = function(arr1, arr2) {

	if (!isArray(arr1) || !isArray(arr2)) {

		throw new TypeError("Invalid argument, Please pass proper array argument");
	}
	return (!this.areEqual(arr1, arr2));

}

exports.flatten = function(arr, level) {

	if (!isArray(arr)) {

		throw new TypeError("Invalid argument, Please pass proper array argument");
	}
	var result = []
	if (level === undefined)
		return recursiveFlatten(arr, result);
	else
		return recursiveFlattenWithDepth(arr, result, level);
}

function recursiveFlatten(arr, result) {

	for (var i = 0; i < arr.length; i++) {

		if (isArray(arr[i])) {

			recursiveFlatten(arr[i], result)
		} else
			result.push(arr[i])
	}
	return result;
}

function recursiveFlattenWithDepth(arr, result, level) {

	for (var i = 0; i < arr.length; i++) {

		if (isArray(arr[i]) && level > 0) {
			level--;
			recursiveFlattenWithDepth(arr[i], result, level)
		} else
			result.push(arr[i])
	}
	return result;
}