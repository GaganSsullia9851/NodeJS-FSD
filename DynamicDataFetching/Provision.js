function main() {
    try {
        if (($response.responseCode == 0 || $response.responseCode == 100) && $response.code != 800) {
            if ($requestType == "self") {
                if ($mainService.toUpperCase() == "DATA" || $mainService.toUpperCase() == "VOICE") {
                    let msg = {};
                    setResponseCode('S200');
                    msg['responseCode'] = 'S200';
                    msg['errorCode'] = '102';
                    msg['responseMessage'] = "Bundel Activation is successfully done";
                    setVariable('msg', msg);
                    return "82d7024";
                } else {
                    let msg = {};
                    setResponseCode('S200');
                    msg['responseCode'] = 'S200';
                    msg['errorCode'] = '101';
                    msg['responseMessage'] = "Bundel Activation is successfully done.Your bonus is failed to activate.Please contact customer care";
                    setVariable('msg', msg);
                    return "82d7024";
                }
            } else if ($requestType == "others" && ($mainService.toUpperCase() == "DATA" || $mainService.toUpperCase() == "VOICE")) {
                return "9e980a3";
            } else {
                let msg = {};
                setResponseCode('S200');
                msg['responseCode'] = 'S200';
                msg['errorCode'] = '101';
                msg['responseMessage'] = "Bundel Activation is successfully done.Your bonus is failed to activate.Please contact customer care";
                setVariable('msg', msg);
                return "82d7024";
            }
        } else {
            let msg = {};
            setResponseCode('S200');
            msg['responseCode'] = 'S200';
            msg['errorCode'] = '101';
            msg['responseMessage'] = "Bundel Activation is successfully done.Your bonus is failed to activate.Please contact customer care";
            setVariable('msg', msg);
            return "82d7024";
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
    return "fd01cf5";
}




// ==============MariaDB code=================

function main() {
    try {
        console.error("Txn ID " + $transactionID + " MSISDN " + $MSISDN + " Maria DB Status " + JSON.stringify($resultsets));
        if ($resultsets.result1.code == '0') {
            if ($msg.errorCode == '102') {
                let msg = {};
                setResponseCode('S200');
                msg['responseCode'] = 'S200';
                msg['errorCode'] = '102';
                msg['responseMessage'] = "Bundel Activation is successfully done";
                setVariable('msg', msg);
                return "fd01cf5";
            } else {
                let msg = {};
                setResponseCode('S200');
                msg['responseCode'] = 'S200';
                msg['errorCode'] = '101';
                msg['responseMessage'] = "Bundel Activation is successfully done.Your bonus is failed to activate.Please contact customer care";
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
    }
    catch (e) {
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



function main() {
    try {
        if ($response.responseCode == '0' || $response.responseCode == 0) {
            setResponseCode('S200');
            let successMsg = {};
            successMsg['responseCode'] = 'S200';
            successMsg['errorCode'] = '103';
            successMsg['responseMessage'] = "Bundel Activation is successfully done";
            setVariable('successMsg', successMsg);
            return "82d7024";
        } else {
            let msg = {};
            setResponseCode('E200');
            msg['responseCode'] = 'S200';
            msg['errorCode'] = '101';
            msg['responseMessage'] = "Bundel Activation is successfully done.Your bonus is failed to activate.Please contact customer care";
            setVariable('msg', msg);
            return "82d7024";
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
    return "fd01cf5";
}