const instructor = [
    {name:'Nodi', age:28, position:'Senior'},
    {name:'Akil', age:26, position:'Junior'},
    {name:'Shobuj', age:30, position:'Senior'}
];
const seniors = instructor.filter(p => p.position === 'Senior')
console.log(seniors);