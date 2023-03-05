// let myNum1: number[][]= [[1,2,23,4],[2,3,4,5,6]];
// for(let i=0;i<myNum1.length;i++){
//    for(let j=0;j<myNum1[i].length;j++){
//     console.log(myNum1[i][j]+" ");
//    }
// }
//total and average of numbers
var myNum2 = [1, 2, 3, 4, 8, 5, 6, 77,];
var total = 0;
for (var i = 0; i < myNum2.length; i++) {
    total += myNum2[i];
}
console.log("This is total of myNum2" + total);
var average = total / myNum2.length;
console.log("avereage" + average);
console.log("size of mynum2" + myNum2);
