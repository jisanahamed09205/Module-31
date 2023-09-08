const people = [
    {name:'Meena',age:20},
    {name:'Rina',age:15},
    {name:'Suchorita',age:22}
];
let ageSum = 0;
// for(const ji of people){
//     ageSum = ageSum + ji.age;
// }
// console.log(ageSum);
for(let i = 0;i<people.length;i++){
    ageSum = ageSum + people[i].age;

}
// console.log(ageSum);
// and
const ageTotal = people.reduce((p,c) => p + c.age,0)
// console.log(ageTotal);

// test
const nums = [1,2,3,4,5];
let output = nums.filter(n => n%2);
console.log(output);