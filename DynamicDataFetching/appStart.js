function main() {
    try {

        let generalError = {};
        generalError['responseCode'] = "E200",
            generalError['errorCode'] = "107",
            generalError['responseMessage'] = "Dear Customer, Your request cannot be processed now. Please try again later.";
        setVariable('generalError', generalError);

        if (_msisdnValidator($MSISDN) == true) {
            setVariable('tempMSISDN', $MSISDN);
            // if ($requestType == "self") {
            //setVariable('tempMSISDN', $MSISDN);
            //logger.error("Gagan==================="+typeof($MSISDN))
            // } else {
            //     let msg = {};
            //     msg['responseCode'] = 'E200';
            //     msg['responseMessage'] = "Please enter correct data";
            //     msg['errorCode'] = "102",
            //         msg['transactionID'] = $txnId;
            //     setResponseCode('E200');
            //     setVariable('msg', msg);
            //     return "429ebfc";
            // }

            if ($DIYtype.toUpperCase() == "NEEDS") {
                if ($service.toUpperCase() == "DATA") {
                    if (!($volume >= 36)) {
                        let msg = {};

                        msg['responseCode'] = 'E200';
                        msg['responseMessage'] = "Y ello! Veuillez entrer un volume a partir de 36 pour construire votre forfait comme ca vous chante.";
                        msg['errorCode'] = "102",
                            msg['transactionID'] = $txnId;
                        setResponseCode('E200');
                        setVariable('msg', msg);
                        return "429ebfc";
                    }
                } else if ($service.toUpperCase() == "VOICE") {
                    if (!($volume >= 6)) {
                        let msg = {};

                        msg['responseCode'] = 'E200';
                        msg['responseMessage'] = "Y ello! Veuillez entrer un nombre de minutes a partir de 6 pour construire votre forfait comme ca vous chante.";
                        msg['errorCode'] = "102",
                            msg['transactionID'] = $txnId;
                        setResponseCode('E200');
                        setVariable('msg', msg);
                        return "429ebfc";
                    }
                } else {
                    setResponseCode('E9000');
                    return "429ebfc";
                }
            } else if ($DIYtype.toUpperCase() == "BUDGET") {
                if ($service.toUpperCase() == "DATA") {
                    if (!($volume >= 150)) {
                        let msg = {};

                        msg['responseCode'] = 'E200';
                        msg['responseMessage'] = "Y ello! Veuillez entrer un montant a partir de 150 pour construire votre forfait comme ca vous chante.";
                        msg['errorCode'] = "102",
                            msg['transactionID'] = $txnId;
                        setResponseCode('E200');
                        setVariable('msg', msg);
                        return "429ebfc";
                    }
                } else if ($service.toUpperCase() == "VOICE") {
                    if (!($volume >= 100)) {
                        let msg = {};

                        msg['responseCode'] = 'E200';
                        msg['responseMessage'] = "Y ello! Veuillez entrer un montant a partir de 100 pour construire votre forfait comme ca vous chante.";
                        msg['errorCode'] = "102",
                            msg['transactionID'] = $txnId;
                        setResponseCode('E200');
                        setVariable('msg', msg);
                        return "429ebfc";
                    }
                } else {
                    let msg = {};
                    msg['responseCode'] = 'E200';
                    msg['responseMessage'] = "Please enter correct data";
                    msg['errorCode'] = "102",
                        msg['transactionID'] = $txnId;
                    setResponseCode('E200');
                    setVariable('msg', msg);
                    return "429ebfc";
                }
            } else {
                let msg = {};
                msg['responseCode'] = 'E200';
                msg['responseMessage'] = "Please enter correct data";
                msg['errorCode'] = "102",
                    msg['transactionID'] = $txnId;
                setResponseCode('E200');
                setVariable('msg', msg);
                return "429ebfc";
            }

            if ($validity >= 1 && $validity <= 30) {
                setVariable('validPeriod', $validity);
            } else {
                let msg = {};
                msg['responseCode'] = 'E200';
                msg['responseMessage'] = "Please enter validity between 1 and 30";
                msg['errorCode'] = "102",
                    msg['transactionID'] = $txnId;
                setResponseCode('E200');
                setVariable('msg', msg);
                return "429ebfc";
            }
            return "77586f2";
        } else {
            let msg = {};
            msg['responseCode'] = 'E200';
            msg['responseMessage'] = "Please send MSISDN with Country code";
            msg['errorCode'] = "101",
                msg['transactionID'] = $txnId;
            setResponseCode('E200');
            setVariable('msg', msg);
            return "429ebfc";
        }

    } catch (e) {
        console.log(e);
    }
    setResponseCode('E9000');
    return "429ebfc";
}