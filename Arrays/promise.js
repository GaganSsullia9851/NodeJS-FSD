// 1. First method

function home() {
    return new Promise((res, rej) => {
        if (1 != 1) {
            res()
        } else {
            rej()
        }
    })
}

home().then(
    () => {
        console.log(true)
    }
).catch(() => {
    console.log(false)
})


// 2. Method

let home1 = new Promise((res, rej) => {
    if (1 != 1) {
        res()
    } else {
        rej()
    }
})


home1.then(
    () => {
        console.log(true)
    }
).catch(() => {
    console.log(false)
})



function sum(a, b) {
    return a + b
}
console.log(sum(1, 2))

let sums = function (a, b) {
    return a + b
}
console.log(sums(1, 2))