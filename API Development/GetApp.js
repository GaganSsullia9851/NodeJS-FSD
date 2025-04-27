function main() {
    try {
        let generalError = {};
        generalError['responseCode'] = "E200";
        generalError['errorCode'] = "107";
        generalError['responseMessage'] = "Dear Customer, Your request cannot be processed now. Please try again later.";
        generalError['transactionId'] = $transactionId;
        setVariable('generalError', generalError);

        if ($transactionId != null) {
            if (typeof $transactionID !== 'undefined' && $transactionID != '$transactionID') {
                setVariable('transactionId', $transactionId);
            }
            return "7072b4c";
        } else {
            let errorMessage = {};
            errorMessage['responseCode'] = 'E200';
            errorMessage['responseMessage'] = "Please send MSISDN with Country code";
            errorMessage['transactionId'] = $txnId;
            setResponseCode('E200');
            setVariable('errorMessage', errorMessage);
            return "e7d784d";
        }
    } catch (e) {
        console.log(e)
    }
    setResponseCode("E9000");
    return "e7d784d"
}








function main() {
    try {
        let generalError = {};
        generalError['responseCode'] = "E200";
        generalError['errorCode'] = "107";
        generalError['responseMessage'] = "Dear Customer, Your request cannot be processed now. Please try again later.";
        generalError['transactionId'] = $transactionId;
        setVariable('generalError', generalError);

        if ($transactionID != null) {
            if (typeof $transactionID !== 'undefined' && $transactionID != '$transactionID') {
                setVariable('transactionID', $transactionID);
            }
            return "7072b4c";
        } else {
            let errorMessage = {};
            errorMessage['responseCode'] = 'E200';
            errorMessage['responseMessage'] = "Please send MSISDN with Country code";
            errorMessage['transactionID'] = $txnId;
            setResponseCode('E200');
            setVariable('errorMessage', errorMessage);
            return "e7d784d";
        }

    } catch (e) {
        console.log(e)
    }
    setResponseCode("E9000");
    return "e7d784d"
}