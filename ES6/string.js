const name='Rama'
let salary='5lakh'

console.log(name[2])

console.log(name.split())  //['Rama']
console.log(name.split(''))//['R','a','m','a']
console.log(name.split(' ')) //['Rama']
console.log(name.split('a')) //['R','m','']

let age='16_1'
console.log(age.split('_'))  // ['16','1']
console.log(age.split(' '))  // ['16_1']
console.log(age.split(''))  // ['1','6','_','1']

let place='USA_INDIA$1 123.1-12*'
console.log(place.split())  // ['USA_INDIA$1 123.1-12*']
console.log(place.split('')) // ['U','S','A','_','I','N','D','I','A','$','1','1','2','3','.','1','-','1','2','*']
console.log(place.split('_'))  // ['USA','INDIA$1 123.1-12*']
console.log(place.split('+')) //['USA_INDIA$1 123.1-23*']  here as it is place is stored
console.log(place.split(' ')) // ['USA_INDIA$1','123.1-12*']

console.log([...place])

let i='1111$'
console.log([...`${i}`])
