//{"device":{"model":"Nokia N85-1/Nokia N85","imei":"35153504000001","id":"RhrQg6"},"responseCode":"0"}

function main() {
    try {
        if ($response.code == "899" || $response.responseCode == "899") {
            let errorMsg = {};
            errorMsg['responseCode'] = 'E200';
            errorMsg['errorCode'] = "102";
            errorMsg['responseMessage'] = "Invigo API Response Timeout";
            errorMsg['transactionID'] = $txnId;
            setVariable('errorMsg', errorMsg);
            setResponseCode('E200');
            return "21de8b4";
        } else if ($response.responseCode == "0" || $response.code == "0") {
            let successMsg = {};
            successMsg['responseCode'] = 'S200';
            successMsg['errorCode'] = '0';
            successMsg['responseMessage'] = $response.device;
            successMsg['transactionID'] = $txnId;
            setVariable('successMsg', successMsg);
            setResponseCode('S200');
            return "21de8b4";

        } else {
            let errorMsg = {};
            errorMsg['responseCode'] = 'E200';
            errorMsg['errorCode'] = "103";
            errorMsg['responseMessage'] = "HTTP Response failed";
            errorMsg['transactionID'] = $txnId;
            setVariable('errorMsg', errorMsg);
            setResponseCode('E200');
            return "21de8b4";

        }
    } catch (err) {
        logger.error("AID:111732273035336 | MID: 2568d15 | MSISDN:" + $MSISDN + " " + err);
    }
    setResponseCode("E9000")
    return "21de8b4";
}