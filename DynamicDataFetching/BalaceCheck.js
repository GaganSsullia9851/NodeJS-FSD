function main() {
    if ($response.responseCode == 0) {
        let dataDA = ""
        if ($service.toUpperCase() == "DATA") {
            dataDA = $dataDaId;
        } else {
            dataDA = $voiceDaId;
        }
        let newDate = new Date();
        let daInfo = _parseDedicatedAccount($response.dedicatedAccountInformation, Number(dataDA));
        let daDate = new Date(daInfo.expiryDate);
        if (daInfo.dedicatedAccountID != -1) {
            if (daInfo.expiryDate == '9999-12-30T23:00:00.120Z' || new Date(daInfo.expiryDate).getTime() == new Date('9999-12-30T23:00:00.120Z').getTime()) {
                console.log($MSISDN + " Entered 1 " + daDate);
                var someDate = new Date();
                var numberOfDaysToAdd = $validity;
                if (someDate.getHours() == 0 || someDate.getHours() == 23) {

                    setVariable('expiryDateFinal', someDate.setDate(someDate.getDate() + 1 + (Number(numberOfDaysToAdd))));
                } else {

                    setVariable('expiryDateFinal', someDate.setDate(someDate.getDate() + (Number(numberOfDaysToAdd))));
                }

            } else if (daDate.getTime() > new Date($expiryDate).getTime()) {
                // console.error($MSISDN + " Entered 2 " + new Date(daDate).getTime());
                setVariable('expiryDateFinal', new Date(daDate).getTime());
            } else if (daDate.getTime() < new Date($expiryDate).getTime()) {

                // console.error($MSISDN + " Entered 3 " + new Date(daDate).getTime());
                if (newDate.getHours() == 0 || newDate.getHours() == 23) {
                    let day = new Date($expiryDate);
                    // console.error($MSISDN + " Entered into 0 hour 3 " + day.setDate(day.getDate() + 1));
                    setVariable('expiryDateFinal', day.setDate(day.getDate() + 1));
                } else {
                    setVariable('expiryDateFinal', $expiryDate);
                }
            }
        } else {
            console.log($MSISDN + " Entered 4 " + daDate);
            var someDate = new Date();
            var numberOfDaysToAdd = $validity;
            if (someDate.getHours() == 0 || someDate.getHours() == 23) {
                // console.error($MSISDN + " Entered into 0 hour 4 " + daDate);
                setVariable('expiryDateFinal', someDate.setDate(someDate.getDate() + 1 + (Number(numberOfDaysToAdd))));
            } else {
                setVariable('expiryDateFinal', someDate.setDate(someDate.getDate() + (Number(numberOfDaysToAdd))));
            }
        }
        if ($service == "DATA") {
            setVariable('dataOfferID', $dbill_service.offerId);
            setVariable('offerId', $dbill_service.offerId);
            setVariable('refillProfileID', $dbill_service.offerId + "DATA");
            setVariable('dataDA', $dataDaId);
            setVariable('transactionType', $dbill_service.transactionType.replace("DIY_", ""));
            setVariable('transactionCode', $dbill_service.transactionCode);
            setVariable('externalData1', $dbill_service.externalData1);
            setVariable('externalData2', $dbill_service.externalData2);
            setVariable('dataRefillProfileID', $dbill_service.refillProfileID);
            setVariable('dataBonus', $dbill_service.bonus);
            setVariable('data_multiplier', $data_volume * 100);
            setVariable('benifit', $data_volume * 100);
            setVariable('multiplier', $data_volume * 100);
        } else {
            setVariable('voiceOfferID', $dbill_service.offerId);
            setVariable('offerId', $dbill_service.offerId);
            setVariable('dataDA', $voiceDaId);
            setVariable('refillProfileID', $dbill_service.offerId + "DATA");
            setVariable('transactionType', $dbill_service.transactionType.replace("DIY_", ""));
            setVariable('transactionCode', $dbill_service.transactionCode);
            setVariable('externalData1', $dbill_service.externalData1);
            setVariable('externalData2', $dbill_service.externalData2);
            setVariable('voiceRefillProfileID', $dbill_service.refillProfileID);
            setVariable('voiceBonus', $dbill_service.bonus);
            setVariable('voice_multiplier', $voice_volume * 60 * 100);
            setVariable('benifit', $voice_volume * 60 * 100);
            setVariable('multiplier', $voice_volume * 60 * 100);
        }
        if ($paymentType.toUpperCase() == "NOPAYMENT") {
            if (Number($amount) >= 500 && $service == "DATA") {
                if ($requestType == "others") {
                    setVariable('finalAmount', $benifit);
                    setVariable('finalAmountBunmber', $benifit);
                    setVariable('price', $amount);
                    setVariable('finalBenifit', Number($benifit));
                    setVariable('finalBenifitBnumber', Number($benifit) * 3);
                } else {
                    setVariable('finalAmount', $benifit);
                    setVariable('price', $amount);
                    setVariable('finalBenifit', Number($benifit) * 3);
                }
            } else {
                console.log("ENTERED");
                if ($requestType == "others") {
                    setVariable('price', $amount);
                    setVariable('finalAmountBunmber', $benifit);
                    setVariable('finalBenifit', Number($benifit));
                    setVariable('finalAmount', $benifit);
                } else {
                    setVariable('price', $amount);
                    setVariable('finalAmount', '0');
                    setVariable('finalBenifit', '0');
                }
            }
            if ($requestType == "self") {
                console.log("Entered Self");
                setVariable('DIYType', 'DIYDATA');
            } else {
                console.log("Entered Others");
                setVariable('DIYType', 'KDODIYDATA');
                setVariable('DIYTypeFORBnumber', 'DIYDATA');
            }

            if ($service == "VOICE") {
                return "383060a";
            } else if ($service == "DATA") {
                return "7ecfb69";
            }
        } else if ($paymentType.toUpperCase() == "AIRTIME") {
            console.log("Main account selected");
            return "a207eac";
        } else if ($paymentType.toUpperCase() == "MOMO") {
            setVariable('transactionID', $txnId);
            return "bcf95d2";
        }
    }
    else {
        let msg = {};
        msg['responseCode'] = 'E200';
        msg['errorCode'] = '101';
        msg['responseMessage'] = "Insufficient Balance";
        setResponseCode('E200');
        setVariable('msg', msg);
        return "fd01cf5";
    }
    let generalError = {};
    generalError['responseCode'] = "E200",
        generalError['errorCode'] = "107",
        generalError['responseMessage'] = "Dear Customer, Your request cannot be processed now. Please try again later.";
    setVariable('generalError', generalError);
    setResponseCode('E9000');
    return "fd01cf5";
}





function main() {
    try {
        console.error("Txn ID " + $transactionID + " MSISDN " + $MSISDN + " Maria DB Status " + JSON.stringify($resultsets));
        if ($resultsets.result1.code == '0') {
            setResponseCode('S200');
            let successMsg = {};
            successMsg['responseCode'] = 'M200';
            successMsg['errorCode'] = '0';
            successMsg['responseMessage'] = 'Please wait for ECW SMS confirmation';
            setVariable('successMsg', successMsg);
            return "fd01cf5";// return end moduleId
        } else {
            let msg = {};
            msg['responseCode'] = 'E200';
            msg['errorCode'] = '101';
            msg['responseMessage'] = "Dear customer Bundle Activation failed";
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


function main() {
    try {
        if ($resultsets.result1.code == '0') {
            if($successMsg.
            
        } else {
            let msg = {};
            msg['responseCode'] = 'E200';
            msg['errorCode'] = '101';
            msg['responseMessage'] = "Dear customer Bundle Activation failed";
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