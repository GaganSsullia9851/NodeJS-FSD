function main() {
    try {
        let errorMsg = {};
        if ($resultsets.result1.code == 0) {
            if ($resultsets.result1.rows.length == 0) {
                errorMsg['responseCode'] = 'E200',
                    errorMsg['errorCode'] = '102',
                    errorMsg['responseMessage'] = "Data not found in Oracle table USER_MGMT_API_TBL";
                errorMsg['transactionID'] = $txnId;
                setVariable('errorMsg', errorMsg);
                setResponseCode('E200');
                return "d680e42";
            } else {
                let userDataInformation = [];
                let userData = $resultsets.result1.rows;
                if (userData && Array.isArray(userData)) {
                    userData.forEach((value) => {
                        userDataInformation.push({
                            MSISDN: value.MSISDN,
                            BUNDLE_OFFERID: value.BUNDLE_OFFERID,
                            BUNDLE_NAME: value.BUNDLE_NAME,
                            BUNDLE_PRICE: value.BUNDLE_PRICE,
                            EXPIRY_DATE: value.EXPIRY_DATE,
                            BUNDLE_ACTIVATION_DATE: value.BUNDLE_ACTIVATION_DATE,
                            HASH_KEY: value.HASH_KEY

                        })
                    })
                    let successMsg = {};
                    successMsg['responseCode'] = 'S200';
                    successMsg['errorCode'] = '0';
                    successMsg['responseMessage'] = userDataInformation;
                    successMsg['transactionID'] = $txnId;
                    setVariable('successMsg', successMsg);
                    setResponseCode('S200');
                    return "d680e42";
                } else {
                    errorMsg['responseCode'] = 'E200',
                        errorMsg['errorCode'] = '102',
                        errorMsg['responseMessage'] = "Data not found in Oracle table USER_MGMT_API_TBL";
                    errorMsg['transactionID'] = $txnId;
                    setVariable('errorMsg', errorMsg);
                    setResponseCode('E200');
                    return "d680e42";
                }
            }
        } else {
            errorMsg['responseCode'] = 'E200',
                errorMsg['errorCode'] = '103',
                errorMsg['responseMessage'] = "Oracle Table Error";
            errorMsg['transactionID'] = $txnId;
            setVariable('errorMsg', errorMsg);
            setResponseCode('E200');
            return "d680e42";
        }

    } catch (err) {
        logger.error("AID:111731416806961 | MID: b695eb9 | MSISDN:" + $MSISDN + " " + err);
    }
    setResponseCode('E9000');
    return "d680e42";
}



//MSISDN	BUNDLE_OFFERID	BUNDLE_NAME	BUNDLE_PRICE	EXPIRY_DATE	BUNDLE_ACTIVATION_DATE	HASH_KEY