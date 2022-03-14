// templeat string
const mynames= 'Abu bakar siddique'
const sudent='Daffodil University';
const Depatment = 'CSE'
const myLife= `Hello... iam ${mynames} iam student of ${sudent}department of ${Depatment}`
console.log(myLife);


// another way to use funcation
const sum =function(num1,num2){
    return num1+num2;
    
}

console.log(sum(20,60));

// arrow funcation
const add4 =(a ,b)=>a+b
console.log(add4(20,30))

// Another way to arrow function

const multiply = (num1 ,num2)=>num1*num2;
const result = multiply(20,30);
console.log(result);

// function use string 

const myname =()=>'abu bakar siddique'
const name = myname()
console.log(name);


// spread operator

const mynumbers = [20,30,50,40,80,60];
console.log(mynumbers);

console.log(...mynumbers)

// array math 
const max = Math.max(20,30,60);
console.log(max)

// large number
const array1 = [1, 3, 2];

console.log(Math.max(...array1));

//copy array 

const digite = [20,30,50,60,70,80];
const mydigite= [...digite];
digite.push(55);
console.log(digite);

// Destructuring Object 
const friends = {id:50, name:'Shakib Khan',phone:'01789848646',address:'Bhola Charfassion'};
console.log(friends.phone);
const { phone, id}=friends
console.log(phone, id);
//Another 
const company = {
    mame: 'GP',
    ceo:{id:1, name: 'Ajam', Food:'singara'},
    web:{work: 'web Development', employe:22, Fremwork:'react'}

};
const {work, Fremwork}=company.web;
const{Food} = company.ceo;
console.log(work,Fremwork,Food);

// Declar variable based  on object 
const myobject ={x:2,y:50,z:500};
const {x}=myobject;
console.log(x);

const {sky,color}={sky:'blue',solid:'matti',color:'red',Location:'Dhaka'}
console.log(sky,color);

//chaining
const girla={
    name:'Babu',
    ceo:{id:10, job:'warkar', food:"fish"},
    web:{
        work:"website dev",
        employe:22,
        Fremwork:'react',

    },
    techa:{
        first:'html',
        second:'css',
        third:'JS'

    }
}
console.log(girla.web.work); 
console.log(girla?.techa?.third); 

// Array Map
const numbers = [4,6,8,10,12];
const output=[];
for(const newnumber of numbers){
    const result =newnumber*2;
    output.push(result)
}
console.log(output);
//Another array map 

const allofnumber = [5,6,10,12,50,40,80];
const arrayoutput=[]
const myfuncations =arraynumber => arraynumber*2;
for(const numarray of allofnumber){
    const results = myfuncations(numarray);
    arrayoutput.push(results)
}
console.log(arrayoutput);

// array Map...

const allofnumbers = [5,6,10,12,50,40,80];
const arrayoutputs=[]
const yourfuncations =arraynumber => arraynumber*2;

const allput = allofnumbers.map(yourfuncations);
console.log(allput);

//another map problem

const squaresArray = [50,60,40];
const square = squaresArray.map(x=>x*x);
console.log(square);

// more array map
const allofmyFriends = ['tom','korim','rohim','barkaot','jabbar','salam'];
const allfriend = allofmyFriends.map(friends=>friends.length);
console.log(allfriend);


const equepment = [
    {name:'water bottol',price:50,color:'yellow'},
    {name:'tab',price:50,color:'Black'},
    {name:'Remort',price:70,color:'green'},
    {name:'Toothbrash',price:30,color:'skay blue'}
];
const allofequement = equepment.map(products=>products.name);
console.log(allofequement);

//for each
equepment.forEach(products=>console.log(products));

//filter 
const alloffilternumber = [5,13,15,16,1,20,16,40,50,14,20];
const bignumber = alloffilternumber.filter(numer => numer>20);
console.log(bignumber);
//filte for small numbe
const smallnumber = alloffilternumber.filter(numbers=>numbers<20)
console.log(smallnumber);

const alloffilterproduct = equepment.filter(products=>products.price==50);
console.log(alloffilterproduct);
