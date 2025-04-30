
function main() {
    try {
        if ($response.ocsResponse.errorCode == 0 || $response.ocsResponse.errorCode == 'OK') {
            setVariable('service', $response.ocsResponse.services.service);
            setVariable('bonus', $response.ocsResponse.services.service.bonus);
            setVariable('refillProfileID', $response.ocsResponse.services.service.refillProfileID);
            setVariable('maxSubscription', $response.ocsResponse.services.service.maxSubscriptionThreshold);
            setVariable('uaid', $response.ocsResponse.services.service.uaidMaxSubscription);
            setVariable('maxBundelInCategory', $response.ocsResponse.services.service.maxBundelInCategory);
            setVariable('uaidCategory', $response.ocsResponse.services.service.uaidCategory);
            setVariable('offerValidity', $response.ocsResponse.services.service.offerValidity);
            setVariable('uaidDiscount', $response.ocsResponse.services.service.uaidDiscount);
            setVariable('volume', $response.ocsResponse.services.service.volume);
            setVariable('discountThreshold', $response.ocsResponse.services.service.discountThreshold);
            setVariable('refillProfileID', $response.ocsResponse.services.service.refillProfileID);
            setVariable('offerName', $response.ocsResponse.services.service.offerName);
            setVariable('validityUnit', $response.ocsResponse.services.service.validityUnit);
            setVariable('momoRefillProfileID', $response.ocsResponse.services.service.externalData3);

            let offerValidity = $response.ocsResponse.services.service.offerValidity;
            let validityUnit = $response.ocsResponse.services.service.validityUnit;

            function getExpiry(remainingDays, offerValidity, validityUnit) {
                let newDate;
                let expiryDays;
                try {
                    if (offerValidity != '' && offerValidity != null && offerValidity != 'NULL' && validityUnit != null && validityUnit != '' && validityUnit != 'NULL') {
                        switch (validityUnit) {
                            case "DAY(S)":
                                expiryDays = Number(remainingDays) + Number(offerValidity);
                                newDate = new Date(Date.now() + Number(expiryDays) * 24 * 60 * 60 * 1000);
                                return newDate.setHours(newDate.getHours() + 1);
                            case "MONTH(S)":
                                expiryDays = Number(remainingDays) + (Number(offerValidity) * 30);
                                newDate = new Date(Date.now() + (Number(expiryDays) * 24 * 60 * 60 * 1000));
                                return newDate.setHours(newDate.getHours() + 1);
                            case "YEAR(S)":
                                expiryDays = Number(remainingDays) + (Number(offerValidity) * 12 * 30);
                                newDate = new Date(Date.now() + Number(expiryDays) * 24 * 60 * 60 * 1000);
                                return newDate.setHours(newDate.getHours() + 1);
                            case "NA":
                                return _endDate(offerValidity);
                            default:
                                return _endDate(offerValidity);
                        }
                    } else {
                        return '2030-12-31T22:59:59.010Z';
                    }
                } catch (e) {
                    console.log(e);
                    return '2030-12-31T22:59:59.010Z';
                }
            }
            //setVariable('expiryDateDays', getExpiry('', Number(offerValidity), validityUnit));
            let remainingDays = ''; // or the actual number of remaining days
            let expiryDate = getExpiry(remainingDays, offerValidity, validityUnit);


            let date = new Date(expiryDate);
            let [datePart, timePart] = date.toISOString().replace('T', ' ').replace('Z', '').split(' ')
            let [hours, minutes] = timePart.split(':').slice(0, 2);
            let time = `${hours}:${minutes}`

            setVariable('datePart', datePart);
            setVariable('time', time);

            let serviceClassList = $response.ocsResponse.services.service.serviceClasses.serviceClass;
            if (Array.isArray(serviceClassList)) {
                if (!(serviceClassList.includes(String($ServiceClass)))) {
                    //logger.trace("Service class is not allowed");
                    setResponseCode('V203');
                    return "a1ee934";
                }
            } else if (typeof serviceClassList === 'string') {
                if (!(serviceClassList == String($ServiceClass))) {
                    //logger.trace("Service class is not allowed");
                    setResponseCode('V203');
                    return "a1ee934";
                }
            } else {
                //logger.trace("Service class is not allowed");
                setResponseCode('V203');
                return "a1ee934";
            }

            let mid = Date.now();
            let dynamic = {
                children: {
                    items: [{
                        "id": "Title; ID: eeee404",
                        "uid": "eeee404",
                        "name": "Veuillez choisir le mode de paiement ",
                        "type": "TITLE",
                        "update": false,
                        "enabled": true,
                        "children": {
                            "items": []
                        }
                    }]
                }
            };
            if ($response.ocsResponse.services.service.paymentOptions.paymentOption) {
                for (i = 0; i < $response.ocsResponse.services.service.paymentOptions.paymentOption.length; i++) {

                    if ($response.ocsResponse.services.service.offerId == $offerId) {
                        var j = i + 1;
                        let menuName = "";
                        let menuValue = ""
                        if ($response.ocsResponse.services.service.paymentOptions.paymentOption[i] == "AIRTIME") {
                            if ($language == "en") {
                                menuName = "Compte principal";

                            } else if ($language == "fr") {
                                menuName = " Compte principal ";
                            }
                        } if ($response.ocsResponse.services.service.paymentOptions.paymentOption[i] == "MOMO") {
                            menuName = "Compte MTN MoMo";
                        }
                        if (menuName != null) {

                            let menuProperty = {
                                "id": "Menu; Id: " + mid,
                                "uid": String(mid),
                                "name": menuName,
                                "type": "CHOICE",
                                "menuProperty": {
                                    "value": j
                                },
                                "update": false,
                                "children": {
                                    "items": []
                                },
                                "enabled": true
                            };
                            dynamic.children.items.push(menuProperty);
                        }
                        setVariable('dynamicMenu', dynamic);
                    }
                }
            } else {
                let menuName = "";
                var j = "1";
                if ($language == "en") {
                    menuName = "Compte principal ";
                } else if ($language == "fr") {
                    menuName = " Compte principal ";
                }
                if (menuName != null) {
                    let menuProperty = {
                        "id": "Menu; Id: " + mid,
                        "uid": String(mid),
                        "name": menuName,
                        "type": "CHOICE",
                        "menuProperty": {
                            "value": j
                        },
                        "update": false,
                        "children": {
                            "items": []
                        },
                        "enabled": true
                    };
                    dynamic.children.items.push(menuProperty);
                }
                setVariable('dynamicMenu', dynamic);
            }
            return "b7c929e";
        } else {
            setResponseCode('E1004');
            return "a1ee934";
        }
    } catch (e) {
        console.log(e);
    }
    return "a1ee934";
}