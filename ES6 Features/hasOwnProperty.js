const car={
    name:'Audi', price:'10 Lakh', model:2024, milege:25,true:1, 1:true,function:1,class:2,object:1,array:1
}

console.log(car)  // {name:'Audi',price:'10 Lakh',model:2024,milege:25}

console.log(Object.keys(car)) // ['name','price','model','milege']
console.log(Object.values(car))  // ['Audi','10 Lakh',2024,25]
console.log(Object.entries(car))  // [['name','Audi'],['price','10 Lakh'],['model',2024],['milege',25]]

console.log(car.hasOwnProperty('name'))  // true
console.log(car.hasOwnProperty(10))  // false
console.log(car.hasOwnProperty('price')) // true
console.log(car.hasOwnProperty(true)) // true

