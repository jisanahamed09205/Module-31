// data access
const data = [{id:1,name:'abul',address:'kochu khet'}];
// console.log(data[0].address);

const product = {
    count:5000,
    data:[
        {id:1,name:'lenovo',price:45698},
        {id:2,name:'hp', price:786454444}
    ]
}
// second product price
// console.log(product.data[1].price);

const user ={
    id:45657,
    name:'shariful raj',
    address:{
        street:{
            first:'4/1 jamuna',
            second:'tfc',
            third:'no dorai'
        },
        city:'dhaka'
    }
}
const user2 ={
    address:'kjxdfh',
    city:{
        name:'kgf',
        country:'india'
    }
}
console.log(user.address.street.third);
console.log(user2.address.street?.third);