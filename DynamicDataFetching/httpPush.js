function main() {
    //console.log($transType+"---"+$transCode);
    console.log($transactionType + "====" + $transactionCode);
    console.log("processing roll back");
    if ($response.responseCode == 'S200') {
        let successMsg = {};
        successMsg['responseCode'] = 'E200';
        successMsg['errorCode'] = '103';
        successMsg['responseMessage'] = "Dear customer Bundle Activation failed, Amount is credited back suessfully";
        setResponseCode('S200');
        setVariable('successMsg', successMsg);
    } else {
        let msg = {};
        // return "57ab5da";// return update offer moduleId
        msg['responseCode'] = 'E200';
        msg['errorCode'] = '103';
        msg['responseMessage'] = "Failed to add credit Amount";
        setResponseCode('E200');
        setVariable('msg', msg);
        return "366348d";// return end moduleId
    }
    return "366348d";// return end moduleId
}



function main() {
    try {
        console.error("Txn ID " + $transactionID + " MSISDN " + $MSISDN + " Maria DB Status " + JSON.stringify($resultsets));
        if ($resultsets.result1.code == '0') {
            if ($successMsg.responseCode == 'E200') {
                let successMsg = {};
                successMsg['responseCode'] = 'E200';
                successMsg['errorCode'] = '103';
                successMsg['responseMessage'] = "Dear customer Bundle Activation failed, Amount is credited back suessfully";
                setResponseCode('S200');
                setVariable('successMsg', successMsg);
                return "fd01cf5";
            } else {
                let msg = {};
                // return "57ab5da";// return update offer moduleId
                msg['responseCode'] = 'E200';
                msg['errorCode'] = '103';
                msg['responseMessage'] = "Failed to add credit Amount";
                setResponseCode('E200');
                setVariable('msg', msg);
                return "fd01cf5";
            }
        } else {
            let msg = {};
            msg['responseCode'] = 'E200';
            msg['errorCode'] = '101';
            msg['responseMessage'] = "Failed to store data in MariaDB";
            setResponseCode('E200');
            setVariable('msg', msg);
            return "fd01cf5";
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
    return "fd01cf5";// return end moduleId
}