const products = [
    {id:1 , name:'lenovo' , price:65000},
    {id:2 , name:'hp' , price:70000},
    {id:3 , name:'dell' , price:40000},
    {id:4 , name:'mac' , price:170000}
];
// has some properties , method
class Product {
    country = 'Bangladesh'
    constructor(name){
        this.name = name;
    }
    speak(talk){
        console.log(`talking about ${talk}`);
    }
}
const lenovo = new Product('le le lenovo');
// console.log(lenovo);
// lenovo.speak('valo aco ne')

class Teacher{
    constructor(name,subject){
        this.name = name;
        this.subject = subject;
    }
    lecture(){
        console.log('Sir is teaching Math');
    }
}

const tapan = new Teacher('tapan sir', 'Physics');
console.log(tapan);

const rashid = new Teacher('rashid sir','English')
console.log(rashid);