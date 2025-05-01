let name1="MISSIE    NGUE              AL    AIN BOSCO          " 
let name2="MISSI    ENGUE ALAI   N                                 BOSCO"

if(name1.trim().toLowerCase().split(' ').join('') === name1.trim().toLowerCase().split(' ').join('')){
    console.log('match')
}else{
    console.log('not matching')
}

//str.trim().toLowerCase().replace(/\s+/g, ' ')
if(name1.trim().toLowerCase().replace(/\s+/g, ' ') === name2.trim().toLowerCase().replace(/\s+/g, ' ')){
    console.log('matching')
}else{
    console.log('not matching')
}

console.log(name1.trim())
console.log(name1.trim().toLowerCase())
console.log(name1.trim().split(' '))
console.log('===============',name1.trim().toLowerCase().split(' ').join(''))
console.log(name2.trim().toLowerCase().split(' ').join(''))

console.log(name1.trim().toLowerCase().replace(/\s+/g, ' '))
console.log(name2.trim().toLowerCase().replace(/\s+/g, ' '))