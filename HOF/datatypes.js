// Number datatypes
let num=1
let float=1.2
let float2=0.0
console.log(typeof(num), typeof(float), typeof(float2))  // number

// Boolean
let istrue=true
let isFalse=false
let isfalse=true
console.log(typeof(istrue),typeof(isFalse),typeof(isfalse))  // boolean

// String
const name="Raj"
console.log(typeof(name))  // string

// null 
let isNull=null
console.log(typeof(isNull))  // object

// undefined
let a;
let b;
console.log(typeof(a),typeof(b))  // undefined undefined

// =================Non Primitive datatypes=========================

// Array
let fruits=['apple','oragnge','Mango','Banana','Pomegranates']
console.log(typeof(fruits))   // object

// Object
let profile={name:"Raj",age:20,place:'India'}
console.log(typeof(profile))  // object

// date
let todayDate=new Date()
console.log(typeof(todayDate))  // object

///function
function add(a,b){
    return a+b
}
console.log(typeof(add))  // function

// RegEXP
let validate=/[a-zA-Z]+/
console.log(typeof(validate))  // object

// Map
let mapValue=new Map()
mapValue.set('1','Hai')
mapValue.set(2,'Hello')
mapValue.set(3,'Hello1')
console.log(mapValue)  // {'1':'Hai',2:'Hello'}

// set
let setValue=new Set()
setValue.add(1)
setValue.add(1) // If I add same values to set, its not taking that value
setValue.add('Raj')
setValue.add('Raj')
setValue.add([1])
setValue.add({1:'Hai'})
console.log(typeof(setValue),setValue)  // object   {1,'Raj',[1],{'1':'Hai'}}