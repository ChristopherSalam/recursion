// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function (className){
	// look through dom for 
	var body = document.body, targets = [];

	if (body.getAttribute('class') && body.getAttribute('class').split(" ").indexOf(className) >= 0){
    			targets.push(body);
    	}// What if body has the target class? I haven't found a way to roll this all into one function.

	function lookup(node){
    	for (var i=0;i<node.childNodes.length;i++){
            var tag = node.childNodes[i]; //console.log(subgroup.childNodes);
    		if(tag.childNodes.length > 0){ lookup(tag); } //keep digging
    		if( tag.getAttribute && 
                tag.getAttribute('class') && 
                tag.getAttribute('class').split(" ").indexOf(className) >= 0){ //console.log(subgroup.getAttribute('class'));
    			 targets.push(tag);
    		}
    	}
	}

	lookup(body); //console.log(targets);

    return targets;
};