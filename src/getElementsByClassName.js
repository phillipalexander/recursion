// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But in stead we're going to implement it from scratch:

// var getElementsByClassName = function (className) {
// };

// But in stead we're going to implement it from scratch:
// var getElementsByClassName = function (className) {
// 	var result = [];
// 	var focus = focus || document.body;
// debugger;
// 	if (focus.classList.contains(className)) {
// 		result.push(focus);
// 	}
// 	if (focus.children.length) {
// 		for (i = 0; i < focus.children.length; i++) {
// 			getElementsByClassName(focus.children[i]);
// 		}
// 	}
// 	return result;
// };

// // Crockford's Version (which uses firstChild() and nextSibling() methods :( )

var getElementsByClassName = function (className) {

	var result = [];
	// debugger;
	var magic = function (node) {
		if (node.classList) {
			if (node.classList.contains(className)) {
				result.push(node);
			}
		}
	};
	var walkDOM = function (node) {
		magic(node);
		node = node.firstChild;
		while (node) {
			walkDOM(node, magic);
			node = node.nextSibling;
		}

	};

	walkDOM(document.body);
	return result;

};