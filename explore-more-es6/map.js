// map ==> loops through each element of the array and do the operation that you passed in the call back function and hold the result from each operation in an array and finally returns you the array

const numbers = [4,8,7,9,5];
function dloubleIt(num){
    // console.log('number of',num);
    return num * 2;
}

const double2 = n => n*2;


const result = numbers.map(dloubleIt);
console.log(result);
const arrow = numbers.map(double2);
// console.log(arrow);
const output = numbers.map(n=>n*2);
// console.log(output);





// const doubled = [];
// for(const num of numbers){
//     const double = num * 2;
//     doubled.push(double);
// }
// console.log(doubled);