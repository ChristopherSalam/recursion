// test cases are described in fixtures.js
describe('stringifyJSON', function(){
  it('should match the result of calling JSON.stringify', function(){

    stringifiableObjects.forEach(function(test){
      var expected = JSON.stringify(test);
      //console.log(expected);
      var result = stringifyJSON(test);
      //console.log(result);      
      expect(result).to.equal(expected);
      //console.log(expect(result).to.equal(expected));
    });

    unstringifiableValues.forEach(function(obj){
      var expected = JSON.stringify(obj);
      //console.log(expected);
      var result = stringifyJSON(obj);
      //console.log(result); 
      expect(result).to.equal(expected);
    });

  });
});
