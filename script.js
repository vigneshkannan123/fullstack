function add(a,b){
    return a+b
}
const mul=(a,b)=>{
    return a*b
}
console.log(mul(12,11));
const obj={
    name:'chris',
    age:40,
    message:function(name){
        
        return `Hello I am ${name}`
    }
}
console.log(obj.name);
console.log(obj.message(obj.name));
// map function
const numbers=[1,3,4,88,21,-35,-26]
const mappednum=numbers.map((num)=>num*3)
console.log(mappednum);
//filter condition
const posNum=numbers.filter((n)=>n>0)
console.log(posNum)
const posnum=numbers.filter((n)=>n%2==0)
console.log(posnum)
//reduce return a single element
const total=numbers.reduce((sum,n)=>sum+n,0)
console.log(total);
const products=[
    {name:'tv',price:8000},
    {name:'phone',price:5000},
    {name:'lap',price:7500},
    {name:'game',price:2500},
    {name:'remote',price:4500},
    {name:'ac',price:9500}
]
const tot=products.reduce((sum,n)=>sum+n.price,0)
console.log(tot)
const a=products.filter((n)=>n.price>5000)
console.log(a);
//destructing
const user={name:'CR7',password:'12345678'}
const {name,password}=user
console.log(password);
const number=[1,2,3,4,5,6]
const [first,second,third,...rest]=number
console.log(rest);
console.log(third);
//spread 
const arr1=[1,2,3]
const arr2=[4,5,6]
const copy=[...arr2,...arr1]
console.log(copy);
//rest 
function add2(...arguments){
    return arguments.reduce((sum,n)=>sum+n,0);
}
console.log(add2(1,2,3,4,5));
//callback
function function1(){
    console.log(`from inside callback`)
}
function fun(name,callback){
    callback()
    return `${name} from outside callback`
}
console.log(fun('function',()=>{console.log(`from inside callback`)}));
async function fetchUsers(){
    try{
        const response = await fetch(
            'https://jsonplaceholder.typicode.com/users'
        )
        const data=await response.json()
        data.map((n)=>console.log(n.name));
        console.log(data);
       const i=3;
        data.map((i)=>console.log(i.name));
    } catch(error){
        console.log(error);
    }   
}
fetchUsers()