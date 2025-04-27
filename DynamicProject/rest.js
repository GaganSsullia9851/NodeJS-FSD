function Add(...num) {
    // return num
    console.log(num)
    return 1
}


let a = 10
console.log(a)
console.log(Add(1, 2, 3, 4, 5, 6, 7, 8, 9))


function main() {
    try {
        console.error("MSISDN " + $MSISDN + " Transaction ID " + $txnId + "  Response :: " + JSON.stringify($response));
        if ($response.code && ($response.code == 'ESOCKETTIMEDOUT' || $response.code == 'ECONNREFUSED' || $response.code == '800' || $response.code == '899')) {

            sendImmediateResponse('M200');
            if ($requestType && $requestType == 'self') {

                setVariable('bNumber', $MSISDN);
            } else {
                setVariable('bNumber', $bNumber);
            }
            setVariable('transactionid', 'null');
            return "8275f9d";

        }
        if (!_isEmpty($UpsellOfferId)) {
            setVariable('DIYDA', '$subscriberSpeedChoose:$upsellOfferID');
        } else {
            setVariable('DIYDA', '$subscriberSpeedChoose');
        }


        if ($response["ns0:debitresponse"] && $response["ns0:debitresponse"].transactionid) {

            setVariable('transactionid', $response["ns0:debitresponse"].transactionid);
            sendImmediateResponse('M200');
            if ($requestType && $requestType == 'self') {

                setVariable('bNumber', $MSISDN);
            } else {
                setVariable('bNumber', $bNumber);
            }
            return "8275f9d";
        } else if ($response["ns0:errorResponse"].errorcode == 'INTERNAL_ERROR' || $response["ns0:errorResponse"].errorcode == 'REFERENCE_ID_ALREADY_IN_USE') {
            sendImmediateResponse('M200');
            if ($requestType && $requestType == 'self') {

                setVariable('bNumber', $MSISDN);
            } else {
                setVariable('bNumber', $bNumber);
            }
            setVariable('transactionid', 'null');
            return "8275f9d";
        } else if ($response["ns0:errorResponse"].errorcode == 'TARGET_AUTHORIZATION_ERROR') {
            if ($requestType.toUpperCase() == "SELF") {
                setVariable('bcTxnId', $txnId);
                setVariable('bcMSISDN', $MSISDN);
                setVariable('bcOfferId', $offerId);
                setVariable('bcOfferName', $offerName);
                setVariable('bcPrice', $price);
                setVariable('bcBundleType', $bundleType);
                return "ef76b38"; // re-direct to Bundle completion when not enough balance
            } else {
                setResponseCode('M600');
                return "a1ee934";
            }
        } else {

            sendImmediateResponse('M500');
            return "a1ee934";
        }
    } catch (e) {
        console.log(e);
    }
    return "a1ee934";
}


if ($pamRequired && $pamRequired == 'no') {

    return "29fb37b";
} else {

    return "867cfda";

}


function main() {
    try {
        if ($pamRequired && $pamRequired == 'no') {
            return "29fb37b";
        } else {
            return "867cfda";
        }
    } catch (e) {
        console.log(e);
    }
    let generalError = {};
    generalError['responseCode'] = "E200",
        generalError['errorCode'] = "107",
        generalError['responseMessage'] = "Dear Customer, Your request cannot be processed now. Please try again later.";
    generalError['transactionID'] = $transactionID;
    setVariable('generalError', generalError);
    setResponseCode('E9000');
    return "a70a28c";
}


function main() {
    try {
        if ($pamRequired && $pamRequired == 'no') {
            return "29fb37b";
        } else {
            return "a0690a0";
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
    return "a70a28c";
}