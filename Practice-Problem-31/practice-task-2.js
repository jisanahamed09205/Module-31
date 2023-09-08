const numbers = [1,3,5,7,9];
const even1 = []
for(let num of numbers){
    const result = num + 1 ;
    even1.push(result)
}
console.log(even1);

// and 

const even2 = numbers.map(n => n + 1);
console.log(even2);