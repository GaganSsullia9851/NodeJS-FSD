function main() {
    try {
        let validity = $service.offerValidity;
        let validityUnit = $service.validityUnit;
        if ($response.ocsResponse.errorCode == "0" || $response.ocsResponse.result == "OK" && $offerInfo) {
            let services = $response.ocsResponse.services;
            let i = 0;
            let tempDate = "";
            let multipleOffer = "";
            let productId;
            let tempExpDate = "";
            let k = 0;
            if (services != null) {
                if (!Array.isArray(services["service"])) {
                    console.log("Gagan=====Inside !Array.isArray")
                    multipleOffer = 'No';
                    //   console.error("Single Array " + validityUnit);
                    if (services.service.uaidCategory == $uaidCategory) {
                        console.log("Gagan=====Inside if")

                        $offerInfo.forEach(offer => {
                            console.log("Gagan======Offer======", JSON.stringify(offer))
                            if (offer.productID) {

                                if (k == 0) {
                                    productId = offer.productID;
                                    console.log("Gagan======productId======", productId)
                                    if (offer.expiryDateTime) {

                                        tempExpDate = offer.expiryDateTime;
                                        console.log("Gagan======tempExpDate======", tempExpDate)

                                    }
                                    if (offer.expiryDate) {

                                        tempExpDate = offer.expiryDate;
                                        console.log("Gagan======tempExpDate======", tempExpDate)
                                    }
                                    k++;
                                } else {
                                    if (productId < offer.productID) {

                                        productId = offer.productID;
                                        if (offer.expiryDateTime) {

                                            tempExpDate = offer.expiryDateTime;
                                        }
                                        if (offer.expiryDate) {

                                            tempExpDate = offer.expiryDate;
                                        }
                                    }
                                    k++;
                                }
                            } else {

                                if (offer.expiryDateTime) {

                                    tempExpDate = offer.expiryDateTime;

                                }
                                if (offer.expiryDate) {

                                    tempExpDate = offer.expiryDate;
                                }
                            }

                        });
                    } else {
                        if (validity == '0' || validity == '-1') {
                            tempExpDate = new Date('2030-12-31T22:59:59.010Z');
                        } else {
                            tempExpDate = "";
                        }
                    }
                    // setVariable('expiryDateDays', getExpiry(dateDiffInDays(tempExpDate), validity, validityUnit));

                    setVariable('expiryDateDays', getExpiry(dateDiffInDays(tempExpDate), validity, validityUnit));

                    console.log("Gagan1=====", expiryDateDays)
                } else if (Array.isArray(services["service"])) {
                    //console.log("Gagan=====Inside Array.isArray")
                    multipleOffer = "Yes";

                    var secondMap = new Map();
                    services.service.forEach(service => {
                        if (service.offerId && service.offerId != 'NULL' && service.uaidCategory != 'NULL' &&
                            service.planCategory != 'MUSTPLAN' && service.offerSubType != "SHARED") {
                            //console.log("Gagan====services.service.forEach")
                            //console.log("Gagan====services.service.forEach3" + JSON.stringify(service))
                            secondMap.set(service.offerId, service.uaidCategory);
                        }
                    });

                    $offerInfo.forEach(offer => {
                        if (secondMap.get(offer.offerID.toString()) != undefined && secondMap.get(offer.offerID.toString()) == $uaidCategory) {

                            if (offer.expiryDateTime) {
                                //console.log("Gagan===offer.expiryDateTime===1=====" + offer.expiryDateTime)
                                console.log("Gagan===offer.expiryDateTime=1====" + JSON.stringify(offer.expiryDateTime))

                                if (i == 0) {
                                    tempExpDate = offer.expiryDateTime;
                                    console.log(`Gagan===tempExpDate ${i}  ${offer.offerID}==== ${JSON.stringify(tempExpDate)} `)
                                } else if (_getTime(offer.expiryDateTime) >= _getTime(tempExpDate)) {
                                    tempExpDate = offer.expiryDateTime;
                                    console.log(`Gagan===tempExpDate ${i}   ${offer.offerID}==== ${JSON.stringify(tempExpDate)} `)
                                }
                                i++;
                            }
                            if (offer.expiryDate) {

                                if (i == 0) {
                                    tempExpDate = offer.expiryDate;
                                    console.log(`Gagan===offer.expiryDate ${i}==== ${JSON.stringify(tempExpDate)} `)
                                } else if (_getTime(offer.expiryDate) >= _getTime(tempExpDate)) {
                                    tempExpDate = offer.expiryDate;
                                    console.log(`Gagan===offer.expiryDate ${i}==== ${JSON.stringify(tempExpDate)} `)
                                }
                                i++;
                            }
                        }

                    });
                    if (tempExpDate == "" || tempExpDate == null) {
                        if (validity == '0' || validity == '-1') {
                            tempExpDate = new Date('2030-12-31T22:59:59.010Z');
                        } else {
                            tempExpDate = "";
                        }
                    }

                    setVariable('expiryDateDays', getExpiry(dateDiffInDays(tempExpDate), validity, validityUnit));
                    console.log(`Gagan===expiryDateDays 1 ==== ${JSON.stringify(getExpiry(dateDiffInDays(tempExpDate), validity, validityUnit))} `)
                } else {

                    setVariable('expiryDateDays', getExpiry('', Number($offerValidity), validityUnit));
                    console.log(`Gagan===expiryDateDays 2==== ${JSON.stringify(getExpiry('', Number($offerValidity), validityUnit))} `)
                }

            }

            if ($price == 0 || $price == "0") {
                setVariable('expiryDateFinal', getExpiry(dateDiffInDays(tempExpDate), validity, validityUnit));
                console.log(`Gagan===expiryDateDays 3==== ${JSON.stringify(getExpiry(dateDiffInDays(tempExpDate), validity, validityUnit))} `)
                return "";
            } else {
                if ($paymentType.toUpperCase() == "AIRTIME") {
                    return "f73c7b0";
                } else if ($paymentType.toUpperCase() == "MOMO") {

                    return "77e2550";
                }
            }

        } else {

            setVariable('expiryDateDays', getExpiry('', validity, validityUnit));
            console.log("Gagan4=====", expiryDateDays)
        }
    } catch (e) {
        console.log(e);
    }
    let generalError = {};
    generalError['responseCode'] = "E200",
        generalError['errorCode'] = "107",
        generalError['responseMessage'] = "Dear Customer, Your request cannot be processed now. Please try again later.";
    setVariable('generalError', generalError);
    setResponseCode('E9000');
    return "a70a28c"; //roll back
}

function dateDiffInDays(expiryDate) {
    // console.error("expiryDate        "+expiryDate);
    try {
        if (expiryDate) {
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

function getExpiry(remainingDays, offerValidity, validityUnit) {
    console.log("remainingDays  " + remainingDays);
    let newDate;
    let expiryDays;
    try {
        switch (validityUnit) {

            case "DAY(S)":
                expiryDays = Number(remainingDays) + Number(offerValidity);
                newDate = new Date(Date.now() + Number(expiryDays) * 24 * 60 * 60 * 1000);
                return newDate.setHours(newDate.getHours() + 1);
            // break;
            case "MONTH(S)":

                expiryDays = Number(remainingDays) + (Number(offerValidity) * 30);

                newDate = new Date(Date.now() + (Number(expiryDays) * 24 * 60 * 60 * 1000));
                //  console.error(remainingDays+"  VALIDITY    "+offerValidity+"  expiryDays  "+expiryDays+" newDate "+newDate);
                return newDate.setHours(newDate.getHours() + 1);
            //break;
            case "YEAR(S)":

                expiryDays = Number(remainingDays) + (Number(offerValidity) * 12 * 30);
                newDate = new Date(Date.now() + Number(expiryDays) * 24 * 60 * 60 * 1000);
                return newDate.setHours(newDate.getHours() + 1);
            // break;
            case "NA":
                return _endDate(offerValidity);
            //break;
            default:
                return _endDate(offerValidity);
        }
    } catch (e) {
        console.log(e);
        return _endDate(offerValidity);
    }
}


setVariable('msg',`Y ello! Vous n avez pas assez de credit pour activer le ${$offerName}. Veuillez recharger votre compte et reessayer.`)