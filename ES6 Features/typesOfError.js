//console.log(a) // ReferenceError: Cannot access 'a' before initialization
let a = 5
console.log(a)
//console.log(b)  // 1. refernce error: a is not defined

console.log(a)

// 2. syntax error

//let const  // SyntaxError: Unexpected token 'const'
// let a1=1
// let a1  // SyntaxError: Identifier 'a1' has already been declared
//const b   // SyntaxError: Missing initializer in const declaration
//const

// 3. type error
const c = 1
//c=2




function main() {
    try {
        let expDate = _date2customformat($response.expiryDateTime, "ddmmyyyyhhMMss");
        setVariable('dbillExpiryDate', expDate);
        if ($pamRequired && $pamRequired == 'no') {
            return "29fb37b";
        } else {
            return "867cfda";
        }
    } catch (e) {
        console.log(e);
    }
    let generalError = {};
    generalError['responseCode'] = "E200",
        generalError['errorCode'] = "107",
        generalError['responseMessage'] = "Dear Customer, Your request cannot be processed now. Please try again later.";
    generalError['transactionID'] = $transactionID;
    setVariable('generalError', generalError);
    setResponseCode('E9000');
    return "a70a28c";
}