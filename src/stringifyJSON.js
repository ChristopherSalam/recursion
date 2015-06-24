// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(value) {
  // your code goes here
      //var escMap = {'"': '\\"', '\\': '\\\\', '\b': '\\b', '\f': '\\f', '\n': '\\n', '\r': '\\r', '\t': '\\t'};
      //var escFunc = function (m) { return escMap[m] || '\\u' + (m.charCodeAt(0) + 0x10000).toString(16).substr(1); };
      //var escRE = /[\\"\u0000-\u001F\u2028\u2029]/g; 
      //From MDN polyfill for JSON parse
      //NULL
  	if (value == null) { 									
  		  return 'null'; 
      //NUMBER
  	} else if (typeof value === 'number') {					
          return isFinite(value) ? value.toString() : 'null';
      //BOOLEAN
  	} else if (typeof value === 'boolean') {
          return value.toString();	
      //Object & Arrays						
  	} else if (typeof value === 'object') {
             if (Array.isArray(value)) { //Array
            	var res = '[';
            	for (var i = 0; i < value.length; i++){
              	res += (i ? ',' : '') + stringifyJSON(value[i]);
            	  } return res + ']';
          		} else if (toString.call(value) === '[object Object]') {
            var tmp = [];
            for (var k in value) { //Object
              if (value.hasOwnProperty(k) && k!== "undefined" && k!== "functions"){ 
                //This line above deals with unstringifyable sections, such as functions and undefined.
                tmp.push(stringifyJSON(k) + ':' + stringifyJSON(value[k]));
            	}
        	}
            return '{' + tmp.join(',') + '}';
        }
	};
	return '"' + value.toString() + '"'//'"' + value.toString().replace(escRE, escFunc) + '"'; //To address escapes
}
