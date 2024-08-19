const myArr =[1,2,3,4,5,6,7]
const myHeroes=["shaktiman","yamunanagar"]
const myArr2= new Array(12,3,4,5,56)
// console.log(myArr[1]);
// array methods
myArr.push(9);
myArr.push(34);
myArr.unshift(2);
// console.log(myArr2)

console.log("A",myArr)
const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B ",myArr)

const myn2=myArr.splice(1,3)
console.log("C ", myArr)
console.log(myn2);
