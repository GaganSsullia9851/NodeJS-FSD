//First 10 Fibonacci series



function Fibonacci(val) {
    let a = 0, b = 1;
    let result = []
    let n = val
    for (let i = 0; i < n; i++) {
        result.push(a)
        let next = a + b
        a = b
        b = next
    }
    return result

}

//console.log(Fibonacci(10))

// Palindrome

function palindrome(str) {
    try {

        //let newStr=str.split('').reverse().join('')
        let left = 0
        let right = str.length - 1
        while (left < right) {
            if (str[left] !== str[right]) {
                return false;
            }

        }
        left--;
        right++;

        return true

    }
    catch (e) {
        console.log(e)
    }
}
console.log(palindrome("ABA"))
console.log(palindrome("Abcd"))



