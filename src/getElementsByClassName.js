// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function (className){
	//console.log(document.body.getAttribute("class"));
	var elements = document.body;
	var targets = [];
	    if(elements.getAttribute && elements.getAttribute('class')){
    		if(elements.getAttribute('class').split(" ").indexOf(className) >= 0){
    			targets.push(elements);
    		}
    	}
	function lookup(node){
    	for (var i=0;i<node.childNodes.length;i++){
    		//console.log(node.childNodes[i].childNodes);
    		if (node.childNodes[i].childNodes.length > 0){ lookup(node.childNodes[i]); } //keep digging 
    		if(node.childNodes[i].getAttribute && node.childNodes[i].getAttribute('class')){
    			//console.log(node.childNodes[i].getAttribute('class').split(" "));
    			if(node.childNodes[i].getAttribute('class').split(" ").indexOf(className) >= 0){
    				targets.push(node.childNodes[i]);
    			}
    		}
		}
	} //each
	lookup(elements);
    return targets;
};