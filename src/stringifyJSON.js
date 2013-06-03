// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (object) {
	var i, result, key, jsonKey, jsonValue;

	switch (typeof object) {

	case 'string':
	case 'number':
	case 'boolean':
		return String(string);

	case 'undefined':
		return undefined;

	case 'function':
		// return null

	case 'object':
		//Null
		if (!object) {
			return 'null';
		}

		result = [];

		//It's a girl/boy (array)!
		if (Object.prototype.toString.apply(object) === '[object Array]') {
			for (i = 0; i < object.length; i += 1) {
				// result[i] = stringifyJSON(object[i]) || 'null';
				result.push(stringifyJSON(object[i]) || 'null');
			}
			return "[" + result + "]";
		} else {
			// recursive section for (true) objects
		}

	}
};