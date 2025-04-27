function main() {
    let responseObj = _xml2json($response.msg);
    setVariable("appleSamsung", false)
    setVariable('imeiok', responseObj.subscriber.imei);
    if (responseObj.subscriber.device.hasOwnProperty("model")) {
        if (_isEmpty(responseObj.subscriber.imei) == false && _substring(responseObj.subscriber.imei, 0, 14) == $IMEI14 && responseObj.subscriber.device.internet != 'N') {

            if (responseObj.subscriber.device.has_5g != null && responseObj.subscriber.device.has_5g !== undefined && responseObj.subscriber.device.lte != null && responseObj.subscriber.device.lte !== undefined) {
                setVariable("has_5g", responseObj.subscriber.device.has_5g);
                setVariable("lte", responseObj.subscriber.device.lte);
            }
            if (responseObj.subscriber.device.model.includes('ZTE') || responseObj.subscriber.device.model.includes('Zte') || responseObj.subscriber.device.model.includes('FROG') || responseObj.subscriber.device.model.includes('Frog')) {
                setVariable('zte', 'yes');
                setVariable('Frog', 'yes');
                return "1b4065b";
            }
            else if (responseObj.subscriber.device.model.includes('Samsung') || responseObj.subscriber.device.model.includes('Apple')) {
                setVariable("appleSamsung", true)
                return "5d22f9a"
            }
            else if (responseObj.subscriber.device.model.includes('CHINA') || responseObj.subscriber.device.model.includes('China')) {
                return "ff35c08";
            }
            else {
                return "5d22f9a";
            }
        }
        else if (_isEmpty(responseObj.subscriber.imei) == false && _substring(responseObj.subscriber.imei, 0, 14) == $IMEI14 && responseObj.subscriber.device.internet == 'N') {
            setResponseCode("ERRPHONE");
            return "b2897f6";
        }
        else {
            setResponseCode("CERR01");
            return "e77b9ac";
        }
    }
    else {
        //setResponseCode("MODELERR");
        //return "641e7ee";
        return "5d22f9a";

    }
}





function main() {
    try {
        console.log($resultsets.result1.rows[0].COUNT_NUMB + " NUMB number ")
        if ($resultsets.result1.rows[0].NUMB == "0") {
            if ($has_5g === "Yes" && $lte === "Yes") {
                if ($appleSamsung == true) {
                    setVariable("offerId", 36859);
                } else {
                    setVariable("offerId", 36860);
                }
                setVariable('model', 'fiveG');
            }
            else if ($has_5g === "No" && $lte === "Yes") {
                setVariable("offerId", 35677);
                setVariable('model', 'fourG');
            } else if ($has_5g === "No" && $lte === "No") {
                setVariable("offerId", 35183);
                setVariable('model', 'threeG');
            }
            return "51a3843"
        } else {
            console.log(" Entered into else");
        }
    } catch (e) {
        console.log(e)
    }
    setResponseCode('ERRMSISDN');
    return "34c9a71";// return end moduleId
}





function main() {
    try {
        let errorMessage = {};
        let successMsg = {};

        if ($response != null && $response.responseCode === '0') {
            setVariable('currentdate', new Date().toISOString());
            let expDate = _date2customformat($response.expiryDateTime, 'dd-mm-yyyy HH:MM');
            setVariable('dbillExpiryDate', expDate);

            if ($zte === 'yes' || $Frog === 'yes') {
                setVariable('BA', `Y'ello! Vous avez activé avec succès le Forfait 8.33 GB 30Jrs au ${$tempMSISDN}. Forfait expire: Le ${$datePart} à Heure ${$time}`);
                setVariable('Subscriber', `Y'ello! Le forfait 8.33 GB 30Jrs a été activé avec succès. Forfait expire: Le ${$datePart} à Heure ${$time} Tapez *154*100*3#OK pour suivre votre consommation. #RéseauCHARISMATIQUE`);
            } else if ($model == "fourG") {
                setVariable('BA', `Y'ello! Vous avez activé avec succès le Forfait 2.5GB+16Min+16SMS 30Jrs au ${$tempMSISDN}. Forfait expire: Le ${$datePart} à Heure ${$time}`);
                setVariable('Subscriber', `Y'ello! Le forfait 2.5GB+16Min+16SMS 30Jrs a été activé avec succès. Forfait expire: Le ${$datePart} à Heure ${$time} Tapez *154*100*4#OK pour suivre votre consommation. #RéseauCHARISMATIQUE`);
                return "64e95f8";
            } else if ($model == "threeG") {
                setVariable('BA', `Y'ello! Vous avez activé avec succès le Forfait 2.16GB+15Min+15SMS 30Jrs au ${$tempMSISDN}. Forfait expire: Le ${$datePart} à Heure ${$time}`);
                setVariable('Subscriber', `Y'ello! Le forfait 2.16GB+15Min+15SMS 30Jrs a été activé avec succès. Forfait expire: Le ${$datePart} à Heure ${$time} Tapez *154*100*4#OK pour suivre votre consommation. #RéseauCHARISMATIQUE`);
                return "64e95f8";
            } else if ($model == "fiveG") {
                setVariable('BA', `Y'ello! Vous avez activé avec succès le Forfait ${$offerName} au ${$tempMSISDN}. Forfait expire: Le ${$datePart} à Heure ${$time}`);
                setVariable('Subscriber', `Y'ello! Le forfait ${$offerName} a été activé avec succès. Forfait expire: Le ${$datePart} à Heure ${$time} Tapez *154*100*4#OK pour suivre votre consommation. #RéseauCHARISMATIQUE`);
            }

            successMsg.responseCode = 'S201';
            successMsg.errorCode = '103';
            successMsg.responseMessage = "SMS Success";
            setResponseCode('S201');
            setVariable('successMsg', successMsg);
            return "b3672d4";
        } else {
            errorMessage.responseCode = 'E200';
            errorMessage.errorCode = '101';
            errorMessage.responseMessage = "Dear customer Bundle Activation failed";
            setResponseCode('E200');
            setVariable('errorMessage', errorMessage);
            return "a70a28c"; // SMS
        }
    } catch (e) {
        console.error(e);
        let generalError = {
            responseCode: "E9000",
            errorCode: "107",
            responseMessage: "Dear Customer, Your request cannot be processed now. Please try again later."
        };
        setVariable('generalError', generalError);
        setResponseCode('E9000');
        return "a70a28c";
    }
}


// Custom code panel
// main function is the default method executed after processing current module
function main() {
    let successMsg = {}
    successMsg['responseCode'] = 'S201';
    successMsg['errorCode'] = '103';
    successMsg['responseMessage'] = "SMS Success";
    successMsg['offerName'] = $offerName;
    successMsg['volume'] = $volume;
    setResponseCode('S201');
    setVariable('successMsg', successMsg);
    return "a70a28c";
}


function main() {
    try {
        if ($response.responseCode == 'S201' || $response.responseMessage == 'SMS Success') {
            setVariable('zte', 'no');
            setVariable('Frog', 'no');
            setVariable('offerName', $response.offerName)
            setVariable('volume', $response.volume)
            return "9c863ac"
        }
    } catch (e) {
        console.error(e);
        setResponseCode('VERIFNUM');
        return "b40863d";
    }
}


function main() {
    try {
        if ($response.responseCode == 0 || $response.code === 0) {
            if ($zte == 'yes' || $Frog == 'yes') {
                setResponseCode('S0010');
                setVariable('ZTE', `Y'ello! Forfait 50GB activé avec succès au ${$bnumber}`);
            } else if ($model == "fourG") {
                setResponseCode('S0010');
                setVariable('ZTE', `Y'ello! Forfait 15GB+100Mins+100SMS activé avec succès au ${$bnumber}`);
            } else if ($model == "threeG") {
                setResponseCode('S0010');
                setVariable('ZTE', `Y'ello! Forfait 13GB+90Mins+90SMS activé avec succès au ${$bnumber}`);
            } else if ($model == "fiveG") {
                setResponseCode('S0010');
                setVariable('ZTE', `Y'ello! Forfait ${$offerName} activé avec succès au ${$bnumber}`);
            } else {
                setResponseCode('S200');
            }
            return "b40863d";
        } else {
            setResponseCode('S200');
            return "b40863d";
        }
    } catch (e) {
        console.log(e);
        setResponseCode('S200');
        return "b40863d";
    }
}