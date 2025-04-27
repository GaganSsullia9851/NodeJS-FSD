// Map returns the new array by transforming array elements

// 1. Basic example
let arrNum = [1, 2, 3, 4, 5]

function basicFetch(arrData) {
    return arrData.map((ele, index, array) => {
        console.log(ele, index, array);

    })
}
basicFetch(arrNum)

/**
 * 1 0 [1, 2, 3, 4, 5]
 * 2 1 [1, 2, 3, 4, 5]
 * 3 2 [1, 2, 3, 4, 5]
 * 4 3 [1, 2, 3, 4, 5]
 * 5 4 [1, 2, 3, 4, 5]
 */


// 2. Double the value

let arrNum1 = [1, 2, 3, 4, 5]

function double(arrData) {
    return arrData.map(ele => {
        return ele * 2
    })
}

console.log(double(arrNum1))  // [ 2, 4, 6, 8, 10 ]


// Alternatively using callback

let arrNum2 = [1, 2, 3, 4, 5]

let double2 = arrNum2.map(doubleData)

function doubleData(ele) {
    return ele * 2
}

console.log(double2)   //[ 2, 4, 6, 8, 10 ]
console.log(arrNum2)  // [1, 2, 3, 4, 5]

// 3. Using functions
let arrNum3 = [1, 2, 3, 4, 5]

function double(arrData) {
    return arrData.map(function (ele) {
        return ele * 10
    })
}

console.log(double(arrNum3))  // [ 10, 20, 30, 40, 50 ]

//// 3. Using functions
let arrObject = [
    {
        "id": 1,
        "name": "Raj",
        "age": 25
    },
    {
        "id": 2,
        "name": "Ravi",
        "age": 30
    },
    {
        "id": 3,
        "name": "Rekha",
        "age": 28
    }
]

function modifyData(arrData) {
    return arrData.map(ele => {
        return ele.name = "GAGAN"
    })
}

console.log(modifyData(arrObject))   // [ 'GAGAN', 'GAGAN', 'GAGAN' ]

function modifyData1(arrData) {
    return arrData.map(ele => {
        return ele.name = "Krishna"
    })
}
console.log(modifyData1(arrObject))   // [ 'Krishna', 'Krishna', 'Krishna' ]

function modifyData2(arrData) {
    return arrData.map(ele => {
        return [ele.name = "Rama"]
    })
}
console.log(modifyData2(arrObject))   // [ [ 'Rama' ], [ 'Rama' ], [ 'Rama' ] ]


// Modifying Multiple Objects

function modifyData3(arrData) {
    return arrData.map(ele => {
        return [ele.id = ele.id * 2, ele.name = "Rama"]  // returning array
    })
}
console.log(modifyData3(arrObject))   // [[2,'Rama'],[4,'Rama'],[6,'Rama']]

// Using Objects
function modifyData4(arrData) {
    return arrData.map(ele => {
        return { // returning object
            id: ele.id * 1,
            name: "Krishna"
        }
    })
}
console.log(modifyData4(arrObject))

/**
 * [
 * {id:2,name:'Krishna'},
 * {id:4,name:'Krishna'},
 * {id:6s,name:'Krishna'}
 */


let stringData = ["Apple", "Ball", "Lion", "ELephant"]

function strData(arr) {
    return arr.map(ele => {
        return ele.length
    })

}
console.log(strData(stringData));  // [5,4,5,8]


function strData1(arr) {
    return arr.map(ele => {
        return ele.toUpperCase()
    })

}
console.log(strData1(stringData));  // [ 'APPLE', 'BALL', 'LION', 'ELEPHANT' ]


function strData2(arr) {
    return arr.map(ele => {
        return ele.toUpperCase().length > 1
    })

}
console.log(strData2(stringData));  // [ true, true, true, true ]

function strData3(arr) {
    return arr.map(ele => {
        return ele.substring(0, 1)
    })

}
console.log(strData3(stringData));  // [ 'A', 'B', 'L', 'E' ]