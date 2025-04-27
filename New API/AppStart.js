function main() {
    try {
        let generalError = {};
        generalError['responseCode'] = "E200",
            generalError['errorCode'] = "107",
            generalError['responseMessage'] = "Dear Customer, Your request cannot be processed now. Please try again later.";
        setVariable('generalError', generalError);

        if ($MSISDN != null) {
            return "b695eb9";
        } else {
            let errorMsg = {};
            errorMsg['responseCode'] = 'E200';
            errorMsg['errorCode'] = "101";
            errorMsg['responseMessage'] = "Please enter a valid MSISDN";
            errorMsg['transactionID'] = $txnId;
            setVariable('errorMsg', errorMsg);
            setResponseCode('E200');
            return "d680e42";
        }
    } catch (e) {
        console.log(e);
        setResponseCode('E9000');
        return "d680e42";
    }
}