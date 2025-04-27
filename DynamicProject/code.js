if ($requestType.toUpperCase() == "SELF") {
    return "68bd64f"; //Normal bundle activation
} else {
    setVariable('stvmsisdn', $number);
    setVariable('stvTxnId', $leapid);
    setVariable('stvOfferId', $offerID);
    setVariable('stvOfferName', $response.ocsResponse.services.service.offerName);
    setVariable('stvPrice', $price);
    setVariable('stvBundleType', $response.ocsResponse.services.service.offerType);
    return "6151c32"; //STV recovery
}


// Custom code panel
// main function is the default method executed after processing current module
function main() {
    if ($pamRequired && $pamRequired == 'no') {
        return "29fb37b";
    } else {
        return "867cfda";

    }
}

// Custom code panel
// main function is the default method executed after processing current module
function main() {
    if ($pamRequired && $pamRequired == 'no') {
        return "29fb37b";
    } else {
        return "a0690a0";
    }
}


setVariable('shortCode', "154");
setVariable('paymentSourceCode', "STV-MOMO-BFO");


function main() {
    try {
        if ($response.ocsResponse.errorCode == 0 || $response.ocsResponse.errorCode == 'OK') {
            setVariable('shortCode', "154");
            setVariable('paymentSourceCode', "STV-MOMO-BFO");
            setVariable('stvmsisdn', $number);
            setVariable('stvTxnId', $leapid);
            setVariable('stvOfferId', $offerID);
            setVariable('stvOfferName', $response.ocsResponse.services.service.offerName);
            setVariable('stvPrice', $amount);
            setVariable('stvBundleType', $response.ocsResponse.services.service.offerType);
            return "9795119"; //STV recovery
        }
    } catch (e) {
        console.log(e);
    }
    return "dcff73b";
}





function main() {
    try {
        if ($option == '1') {
            if ($paymentType && $paymentType == 'MOMO') {
                return "0d6513d";
            } else {
                setVariable('transactionId', $txnId);
                setVariable('sharableBundle', 'yes');
                setVariable('paymentType', $paymentType);

                setVariable('refillProfileID', $refillProfileID);
                setVariable('offerId', $service.offerId);
                setVariable('offerValidity', $expiryDateDays);
                setVariable('price', $price);
                if (typeof $bNumber !== 'undefined' && $bNumber != '$bNumber') {
                    setVariable('bPartyMsisdn', $bNumber);
                } else {
                    setVariable('bPartyMsisdn', $MSISDN);
                }
                setVariable('subscriberInput', $subscriberInput);
                setVariable('requestType', $requestType);
                setVariable('channelName', $shortCode);

                setVariable('shortCode', "154");
                setVariable('paymentSourceCode', "STV-MA-BFO");
                setVariable('stvmsisdn', $msisdn);
                setVariable('stvTxnId', $txnId);
                setVariable('stvOfferId', $service.offerId);
                setVariable('stvOfferName', $service.offerName);
                setVariable('stvPrice', $price);
                setVariable('stvBundleType', $bundleType);

                return "6043dcb";
                // return "9483143";
            }
        } else if ($option == '2') {
            setResponseCode('C100');
            return "a1ee934";
        }
    } catch (e) {
        console.log(e);
    }

    return "a1ee934";
}