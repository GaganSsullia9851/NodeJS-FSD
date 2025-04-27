// JSON.stringify => to convert JSON object to JSON string=>type is string
// JSON.parse => to convert JSON string to JSON object and type is Object

const path=require('path')

const base='/D:'
const sub='/sub1/sub'
const fullPath=path.join(base,sub)
console.log(`The full path is ${fullPath}`)
console.log(path.resolve('/d','f','dssd/1.txt'))

console.log('Here',typeof(path.parse(fullPath)))

const str={name:'Raj',place:'Bangalore',age:25,height:25,dob:'01/01/2021'}
const name="Good morning"
//const strparse=JSON.parse(name)

console.log(typeof(JSON.stringify(str)))

