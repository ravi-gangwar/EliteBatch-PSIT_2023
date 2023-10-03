const arr = [1,2,3,4,5,6]

arr.forEach((i) => console.log(i))
 /// OR 
arr.forEach((val, index, arr)=>{
    console.log(val, index, arr)
})
arr.filter((i) => i%2==0 && console.log(i))
var a = arr.filter((i) => i%2==0)
console.log(a)


arr2 = arr.map((a)=>{
    return a * 2
})

console.log(arr2)