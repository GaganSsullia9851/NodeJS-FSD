let Exp1 = new RegExp("^24206[0-9]{7}$");
let Exp2 = new RegExp("^6[0-9]{7}$");


let msisdn=6123456
if(Exp1.test(msisdn)){
    return console.log('match 1')
}else if(Exp2.test(msisdn)){
    return console.log('match 2')
}else{
    return console.log('not match=========')
}