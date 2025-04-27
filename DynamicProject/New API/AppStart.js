function main() {
    try {
        let generalError = {};
        generalError['responseCode'] = "E200",
            generalError['errorCode'] = "107",
            generalError['responseMessage'] = "Dear Customer, Your request cannot be processed now. Please try again later.";
        setVariable('generalError', generalError);

        if ($IMEI != null) {
            return "2568d15";
        } else {
            let errorMsg = {};
            errorMsg['responseCode'] = 'E200';
            errorMsg['errorCode'] = "101";
            errorMsg['responseMessage'] = "Please enter a valid IMEI";
            errorMsg['transactionID'] = $txnId;
            setVariable('errorMsg', errorMsg);
            setResponseCode('E200');
            return "21de8b4";
        }
    } catch (err) {
        console.log(err);
        setResponseCode('E9000');
        return "21de8b4";
    }
}