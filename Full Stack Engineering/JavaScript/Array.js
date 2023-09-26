const arr = ["Ravi", 1, 5.2]
console.log(arr)
var arr1 = new Array("Ravi", 1, 5.2)
console.log(arr1)
var arr4 = new Array(5) // 5 is the size
var arr1 = new Array(arr) //copy
console.log(arr1)
var arr1 = new Array(...arr) //destructring
console.log(arr1)
console.log(arr1.length)
arr.concat(arr1)
console.log(arr)