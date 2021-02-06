
 var x;
(function(){
    var a = b = 5;
})();

console.log( 3 != 3);
console.log("a defined? " + (typeof a !== 'undefined'));
// console.log("a defined? " + ( undefined !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));
console.log("typeof a: ",typeof a );
console.log("typeof b: ", typeof b );
console.log(" x :", x);
console.log("typeof x :",typeof x);
console.log(typeof 'undefined');
console.log(typeof '0');




// node definedUndefined