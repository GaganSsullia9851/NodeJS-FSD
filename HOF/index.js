function main() {
    try {
        if ($response.responseCode == '0') {
            let result = {}
            if ($response.serviceClassCurrent) {
                setVariable('ServiceClass', $response.serviceClassCurrent);
                result['MSISDN'] = $msisdn
                result['serviceClass'] = $response.serviceClassCurrent
                setVariable('result', result)
                return "b1c2b15";
            }
            // if ($numberType.prepaid.includes(String($response.serviceClassCurrent))) {
            //     for (let offer of $response.offerInformationList) {
            //         if (offer.offerID == $numberType.FiftyGB) {

            //         }
            //     }
            //     setVariable('offerId',$numberType.FiftyGB);
            //     return "cdaab60"; // Return if no match for FiftyGB
            // }
        }
    } catch (e) {
        console.log(e);
    }
    setResponseCode('E203');
    return "8dd0287"; // Default return if no conditions are met
}



function main() {
    try {
        if ($response.responseCode == '0') {
            if ($response.offerInformationList) {
                let offerInfo = $response.offerInformationList;
                setVariable('offerInfo', offerInfo);
                let offerIds = [];
                if (offerInfo.length > 0) {
                    offerInfo.forEach(offer => {
                        if (_getTime(offer.expiryDate) >= _now() || _getTime(offer.expiryDateTime) >= _now()) {
                            if (!offerIds.includes(offer.offerID)) {
                                offerIds.push(offer.offerID);
                            }
                        }
                    });
                }
                setVariable('activatedOfferIds', offerIds.toString());
                result['serviceClass'] = offerIds.toString()

                return "8dd0287";
            } else {
                if ($offerValidity != '0') {
                    getExpiry(dateDiffInDays(new Date()), $offerValidity, $validityUnit);
                } else {
                    getExpiry(dateDiffInDays(new Date('2030-12-31T22:59:59.010Z'), $offerValidity, $validityUnit));
                }
                return "8dd0287";
            }
        }
    } catch (e) {
        console.log(e);
    }
    return "8dd0287";
}
function dateDiffInDays(expiryDate) {
    try {
        if (expiryDate != '' && expiryDate != null) {
            let currentDate = new Date();
            const DAY = 1000 * 60 * 60 * 24;
            return Math.floor((Date.UTC(expiryDate.getFullYear(), expiryDate.getMonth(), expiryDate.getDate()) - Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate())) / DAY);
        } else {
            return '0';
        }
    } catch (e) {
        console.log(e);
        return '0';
    }

}

function getExpiry(expiryDate, offerValidity, validityUnit) {
    let newDate;
    try {
        let validity = Number(expiryDate) + Number(offerValidity);
        switch (validityUnit) {
            case "DAY(S)":
                newDate = new Date(Date.now() + Number(validity) * 24 * 60 * 60 * 1000);
                setVariable('expiryDateDays', newDate.setHours(newDate.getHours() + 1));
                break;
            case "MONTH(S)":
                newDate = new Date(Date.now() + Number(validity) * 30 * 24 * 60 * 60 * 1000);
                setVariable('expiryDateDays', newDate.setHours(newDate.getHours() + 1));
                break;
            case "YEAR(S)":
                newDate = new Date(Date.now() + Number(validity) * 12 * 30 * 24 * 60 * 60 * 1000);
                setVariable('expiryDateDays', newDate.setHours(newDate.getHours() + 1));
                break;
            case "NA":
                setVariable('expiryDateDays', _endDate(validity));
                break;
            default:
                setVariable('expiryDateDays', _endDate(validity));
        }
    } catch (e) {
        console.log(e);
    }
}


function main() {
    try {
        if ($response.responseCode == '0') {
            let result = {}
            if ($response.serviceClassCurrent) {
                let sc = $response.serviceClassCurrent
                setVariable('ServiceClass', sc);
                if ($numberType.includes(String($response.serviceClassCurrent))) {
                    for (let i = 0; i < $numberType.length; i++) {
                        if (sc == $numberType[i]) {
                            setVariable("sname", $numberType[i])
                        }
                    }

                }
                result['MSISDN'] = $msisdn
                result['serviceClass'] = $response.serviceClassCurrent
                setVariable('result', result)
                console.log("Gagan============" + JSON.stringify(result))
                setResponseCode('S500');
                return "30d631b";
            }
            // if ($numberType.prepaid.includes(String($response.serviceClassCurrent))) {
            //     for (let offer of $response.offerInformationList) {
            //         if (offer.offerID == $numberType.FiftyGB) {

            //         }
            //     }
            //     setVariable('offerId',$numberType.FiftyGB);
            //     return "cdaab60"; // Return if no match for FiftyGB
            // }
        }
    } catch (e) {
        console.log(e);
    }
    setResponseCode('E203');
    return "8dd0287"; // Default return if no conditions are met
}







function main() {
    try {
        if ($response.responseCode == '0') {
            let result = {}
            if ($response.serviceClassCurrent) {
                let sc = $response.serviceClassCurrent
                setVariable('ServiceClass', sc);
                // if ($numberType.includes(String($response.serviceClassCurrent))) {
                //     for (let i = 0; i < $numberType.length; i++) {
                //         if (sc == $numberType[i]) {
                //             setVariable("sname", $numberType[i])
                //         }
                //     }

                // }
                //if (Object.keys($numberType).includes(String(sc))) {
                    //console.log("Gagan=======inside if object")
                    for (let key in $numberType) {
                        if ($numberType[key] == sc) {
                            console.log("Gagan=====numbertype====" + $numberType[key]);
                            let sname = $numberType[key]
                            setVariable("sname", sname); // Set variable with the matching value
                            break; // Exit loop once the match is found
                        }
                    }

                

                console.log("Gagan============" + JSON.stringify(sname))
                result['MSISDN'] = $msisdn
                result['serviceClass'] = $response.serviceClassCurrent
                setVariable('result', result)
                console.log("Gagan============" + JSON.stringify(result))
                setResponseCode('S500')
                return "8dd0287";
            }
            // if ($numberType.prepaid.includes(String($response.serviceClassCurrent))) {
            //     for (let offer of $response.offerInformationList) {
            //         if (offer.offerID == $numberType.FiftyGB) {

            //         }
            //     }
            //     setVariable('offerId',$numberType.FiftyGB);
            //     return "cdaab60"; // Return if no match for FiftyGB
            // }
        }
    } catch (e) {
        console.log(e);
    }
    setResponseCode('E203');
    return "8dd0287"; // Default return if no conditions are met
}