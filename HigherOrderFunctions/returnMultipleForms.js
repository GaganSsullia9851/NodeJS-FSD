// 1
function number() {
    return 1
}

console.log(number())

// Alertnative way

function display() {
    return console.log(1)
}

display()

//  2
function stringValue() {
    return "stringVlaue"
}

console.log(stringValue())

function boolean() {
    return true
}
console.log(boolean())


function array() {
    return [1, 2, 3]
}
console.log(array())


function object() {
    return { a: 1, b: 2 }
}
console.log(object())


function parameters(a = 1, b = 2) {
    return a + b
}
console.log(parameters())

function undefined() {
    return
}

console.log(undefined())

function Add() {
    return "Add"
}
console.log(Add())

function aDD() {
    return console.log('aDD')
}
aDD()

function $add() {
    return console.log(`$add is a valid one`)
}
$add()

function _add() {
    return console.log('the _add is also valid function name')
}
_add(

)




function main() {
    try {
        let activeOffers = [];
        if ($response.responseCode == '0' && $response.serviceClassCurrent && $response.offerInformationList) {
            setVariable('ServiceClass', $response.serviceClassCurrent);
            if ($response.offerInformationList.length > 0) {
                $response.offerInformationList.forEach(offer => {
                    if (_getTime(offer.expiryDate) >= _now() || _getTime(offer.expiryDateTime) >= _now()) {
                        activeOffers.push(offer.offerID);
                    }
                });
                setVariable('activeOffersList', activeOffers);
            }
            if ($numberType.prepaid.includes(String($response.serviceClassCurrent)) || $numberType.hybrid.includes(String($response.serviceClassCurrent))) {
                setVariable('responseMessage', 'Not Eligible for Loyalty Program.')
                setResponseCode('E2000');
                return "e8c557c"; // postpaid activation
            }
            if (activeOffers.length > 0) {
                return "9bc4ae9";
            }
            else {
                setResponseCode('E203');
                return "e8c557c";
            }
        }
    } catch (err) {
        logger.error("AID:111712817533216 | MID: 6d4076a " + err);
    }
    setResponseCode('E203');
    return "e8c557c";// return end moduleId
}
