// function findMatchingValues(array1, array2) {
//     let matchingValues = [];
//     for (let i = 0; i < array1.length; i++) {
//         if (array2.includes(array1[i])) {
//             console.log('match')
//         }
//     }
//     return matchingValues;
// }

// const array1 = [1, 2, 3, 4, 5];
// const array2 = [3, 4, 5, 6, 7];

// const result = findMatchingValues(array1, array2);
// console.log(result); // Output: [3, 4, 5]


function isArraySubset(subset, superset) {
    for (let i = 0; i < subset.length; i++) {
        if (!superset.includes(subset[i])) {
            return false;
        }
    }
    return true;
}

//const array1 = [898988888800000000000,3333333333333,77777777777777777777,8888888888888888888,9];
const array1 = [898988888800000000000];
const array2 = [898988888800000000000, 3333333333333, 77777777777777777777, 8888888888888888888, 1, 2, 3, 4, 5];

if (isArraySubset(array1, array2)) {
    console.log("Match");
} else {
    console.log("Not Match");
}



//================================

function isArraySubset(subset, superset) {
    for (let i = 0; i < subset.length; i++) {
        if (!superset.includes(subset[i])) {
            return false;
        }
    }
    return true;
}

const array12 = [898988888800000000000, 3333333333333, 77777777777777777777, 8888888888888888888, 9];
const array21 = [898988888800000000000, 3333333333333, 77777777777777777777, 8888888888888888888, 1, 2, 3, 4, 5];

if (isArraySubset(array1, array2)) {
    console.log("Match");
} else {
    console.log("Not Match");
}






function main() {
    console.log("Gagan==========888888888888888========" + JSON.stringify($response))
    console.log('Gagan=1===$response.resultsets.result1.rows=======' + JSON.stringify($resultsets.result1.rows))
    console.log("Gagan==================" + JSON.stringify($response.Response))
    try {
        let GSMNumber = []
        setVariable('GSMNumber', GSMNumber);
        let CALLED_NUMBER = []
        if ($response.responseCode == 0 || $response.code == 0) {
            console.log('Gagan    inside if condition')
            console.log('Gagan==2==$response.resultsets.result1.rows=======' + JSON.stringify($resultsets.result1.rows))
            let dbResponseArray = $resultsets.result1.rows

            console.log('Gagan====dbResponseArray=======' + dbResponseArray)
            if (Array.isArray(dbResponseArray) && dbResponseArray.length >= 2) {

                dbResponseArray.forEach((res) => {
                    CALLED_NUMBER.push(res.CALLED_NUMBER)
                })
                console.log("Gagan======3===CALLED_NUMBER==============" + CALLED_NUMBER)
                setVariable('CALLED_NUMBER', CALLED_NUMBER);
                return "9e4975f"
            } else {
                setVariable('responseMessage', 'Vous devez avoir au minimum 2 numeros les plus utilise pour realiser SIM SWAP en libre-service. Merci')
                setResponseCode('E2000');
                return "45d174b";

            }
        }

    } catch (err) {
        logger.error("AID:11632590776458 | MID: 4662c81 | MSISDN:" + $msisdn + " " + err);
    }
    setResponseCode('E9000');
    return "45d174b";// return end moduleId
}

