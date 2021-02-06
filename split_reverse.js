// var arr1 = "John";
// console.log(arr1);

var arr1 = "John".split('');
console.log("arr1 before reverse:", arr1);
var arr2 = arr1.reverse();
console.log("arr1 after reverse:", arr1);
console.log("arr2 after arr1 reverse and assigned:", arr2);
var arr3 = "Johns".split('');
arr2.push(arr3);
console.log("arr1 after arr3 push to arr2:", arr1);
console.log("arr2 after arr3 push to arr2:", arr2);
console.log("arr1 : length=",  + arr1.length + " Last = ",  arr1.slice(-1));
console.log("arr2 : length=",  + arr2.length + " Last = ",  arr2.slice(-1));
