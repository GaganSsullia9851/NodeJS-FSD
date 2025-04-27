let newPin = "TESTVDA"
TESTV
TESTMAGICNDEKO
TESTDY
TESTCMB
TESTBU
TESTSM
TESTRolover
TESTINTNA
TESTPS
TESTNDK
TESTMAGICVL
TESTINT100
TESTDAT100
TESTSM100
TESTEDAS100
TESTSHORTMESSAGE
TESTRUBI


function main() {
    try {
        if ($newPin == 'TESTVDA') {
            return "9a3b859";
        }
        if ($newPin == 'TESTV') {
            return "eb6c52e";
        } if ($newPin == 'TESTMAGICNDEKO') {
            return "9a3ad83";
        }
        if ($newPin == 'TESTDY') {
            return "aacd1e6";

        } if ($newPin == 'TESTCMB') {
            return "9560414";

        }
        if ($newPin == 'TESTBU') {
            return "e717c7c";
        }
        if ($newPin == 'TESTSM') {
            return "8659eaa";
        }
        if ($newPin == 'TESTRolover') {
            return "0b0edb4";
        }
        if ($newPin == 'TESTINTNA') {
            return "c88bb3b";
        }
        if ($newPin == 'TESTPS') {
            return "3fbdc01";
        }
        if ($newPin == 'TESTNDK') {
            return "40e1945";
        }
        if ($newPin == 'TESTMAGICVL') {
            return "659feb0";
        }
        if ($newPin == 'TESTINT100') {
            return "28f2dfa";
        }
        if ($newPin == 'TESTDAT100') {
            return "aa8d6a8";
        }
        if ($newPin == 'TESTSM100') {
            return "6e1f965";
        }
        if ($newPin == 'TESTEDAS100') {
            return "25e39e8";
        }
        if ($newPin == 'TESTSHORTMESSAGE') {
            return "90eccdd";
        }
        if ($newPin == 'TESTRUBI') {
            return "0353043";
        } else {
            return "1409fab";
        }
    }
} catch (e) {
    console.error("ECW Payment ID " + $MSISDN + " Maria DB Status " + JSON.stringify($resultsets));
    console.error(e);
}

console.error("ECW Payment ID " + $MSISDN + " Maria DB Status " + JSON.stringify($resultsets));
return "c085d3c";
}



if ($checkType.includes('DIY')) {
    return "aacd1e6";
} else if ($checkType.includes('COMBO')) {
    return "9560414";
} else if (checkType.includes('EBU')) {
    return "e717c7c";
} else if (checkType.includes('SMESMI')) {
    return "8659eaa";
} else if (checkType.includes('RollOver')) {
    return "0b0edb4";
} else if (checkType.includes('VOICE')) {
    return "eb6c52e";
} else if (checkType.includes('INTERNA')) {
    return "c88bb3b";
} else if (checkType.includes('POS')) {
    return "3fbdc01";
} else if (checkType.includes('NDAKO')) {
    return "40e1945";
} else if (checkType.includes('MAGICNETVALENTINE')) {
    return "659feb0";
} else if (checkType.includes('INTER100')) {
    return "28f2dfa";
} else if (checkType.includes('DATA100')) {
    return "aa8d6a8";
} else if (checkType.includes('SME100')) {
    return "6e1f965";
} else if (checkType.includes('EDATASHARE100')) {
    return "25e39e8";
} else if (checkType.includes('VOIXDA')) {
    return "9a3b859";
} else if (checkType.includes('MAGICNETNDEKO')) {
    return "9a3ad83";
} else if (checkType.includes('SMS')) {
    return "90eccdd";
} else if (checkType.includes('RUBYCOM')) {
    return "0353043";
} else if (checkType.includes('TESTAPP')) {
    return "c987ac9";
} else {
    return "1409fab";
}
        }
    } catch (e) {
    console.error("ECW Payment ID " + $MSISDN + " Maria DB Status " + JSON.stringify($resultsets));
    console.error(e);
}

console.error("ECW Payment ID " + $MSISDN + " Maria DB Status " + JSON.stringify($resultsets));
return "c085d3c";
}


function main() {
    try {
        if ($newPin === 'TESTVDA') {
            return "9a3b859";
        } else if ($newPin === 'TESTV') {
            return "eb6c52e";
        } else if ($newPin === 'TESTMAGICNDEKO') {
            return "9a3ad83";
        } else if ($newPin === 'TESTDY') {
            return "aacd1e6";
        } else if ($newPin === 'TESTCMB') {
            return "9560414";
        } else if ($newPin === 'TESTBU') {
            return "e717c7c";
        } else if ($newPin === 'TESTSM') {
            return "8659eaa";
        } else if ($newPin === 'TESTRolover') {
            return "0b0edb4";
        } else if ($newPin === 'TESTINTNA') {
            return "c88bb3b";
        } else if ($newPin === 'TESTPS') {
            return "3fbdc01";
        } else if ($newPin === 'TESTNDK') {
            return "40e1945";
        } else if ($newPin === 'TESTMAGICVL') {
            return "659feb0";
        } else if ($newPin === 'TESTINT100') {
            return "28f2dfa";
        } else if ($newPin === 'TESTDAT100') {
            return "aa8d6a8";
        } else if ($newPin === 'TESTSM100') {
            return "6e1f965";
        } else if ($newPin === 'TESTEDAS100') {
            return "25e39e8";
        } else if ($newPin === 'TESTSHORTMESSAGE') {
            return "90eccdd";
        } else if ($newPin === 'TESTRUBI') {
            return "0353043";
        } else {
            return "1409fab";
        }
    } catch (e) {
        console.error(e);
        return "c085d3c";
    }
}


function main() {
    try {
        let errorMessage = {};
        if ($response != null && $response.responseCode == '0') {
            let expDate = _date2customformat($response.expiryDateTime, "ddmmyyyyhhMMss");
            setVariable('dbillExpiryDate', expDate);
            return "1f349c2";

            // if ($pamRequired && $pamRequired == 'no') {

            //   return "29fb37b";
            // } else {

            //   return "867cfda";

            // }
        } else {
            errorMessage['responseCode'] = 'E200';
            errorMessage['errorCode'] = '101';
            errorMessage['responseMessage'] = "Dear customer Bundle Activation failed";
            errorMessage['transactionID'] = $transactionID;
            setResponseCode('E200');
            setVariable('errorMessage', errorMessage);
            setVariable('MSISDN', $tempMSISDN);
            setVariable('mainBal', $mainBal);
            setVariable('daBal', $daBal);
            setVariable('requestTransactionid', $transactionId);
            setVariable('transType', $transType);
            setVariable('transCode', $service.transactionCode);
            setVariable('externalData1', $service.externalData1);
            setVariable('externalData2', $service.externalData2);
            setVariable('deleteOffer', 'no');
            if ($mainBal != 0) {
                return "74bfa15";
            } else {
                return "db6d50a";
            }
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
        if ($response.ocsResponse.errorCode == 0 || $response.ocsResponse.errorCode == 'OK') {
            setVariable('service', $response.ocsResponse.services.service);
            setVariable('bonus', $response.ocsResponse.services.service.bonus);
            //bundleCompletion variables start
            setVariable('bcTxnId', $txnId);
            setVariable('bcMSISDN', $MSISDN);

            setVariable('bcOfferId', $upsellOfferID);
            setVariable('bcOfferName', $upsellOfferName);
            setVariable('bcPrice', $price);
            setVariable('bcBundleType', $upsellBundleType);
            //bundleCompletion variables end
            if ($serviceType == 'MAXINET') {
                setVariable('offerName', $offerName);
                setVariable('bonusVolume', $bonusVolume);
            } else {
                setVariable('offerName', $response.ocsResponse.services.service.offerName);
                setVariable('bonusVolume', Math.floor(Number($txnAmt) / 100));
            }

            setVariable('volumeUnit', $response.ocsResponse.services.service.volumeUnit);
            setVariable('refillProfileID', $response.ocsResponse.services.service.refillProfileID);
            setVariable('transType', $response.ocsResponse.services.service.transactionType);
            setVariable('transCode', $response.ocsResponse.services.service.transactionCode);
            setVariable('externalData1', $response.ocsResponse.services.service.externalData1);
            setVariable('externalData2', $response.ocsResponse.services.service.externalData2);
            setVariable('MSISDN', $tempMSISDN);
            setVariable('amount', $price);
            setVariable('requestTransactionid', $transactionId);

            setVariable('requestType', $requestType);
            setVariable('number', $number);
            //setVariable('externalData4', 0);

            let pamService = [];
            let pamClasse = [];
            let pamScheduler = [];
            let pamIndicator = [];
            if ($response.ocsResponse.services.service.pamServiceDetails != undefined && $response.ocsResponse.services.service.pamServiceDetails.pamServiceDetail != null) {
                if (Array.isArray($response.ocsResponse.services.service.pamServiceDetails.pamServiceDetail)) {
                    setVariable('pamRequired', 'yes');
                    for (i = 0; i < $response.ocsResponse.services.service.pamServiceDetails.pamServiceDetail.length; i++) {
                        console.log("$response.ocsResponse.services.service.pamServiceDetails.pamServiceDetail[i].pamClasse" + $response.ocsResponse.services.service.pamServiceDetails.pamServiceDetail[i].pamClasse)
                        pamService.push($response.ocsResponse.services.service.pamServiceDetails.pamServiceDetail[i].pamService);
                        pamClasse.push($response.ocsResponse.services.service.pamServiceDetails.pamServiceDetail[i].pamClasse);
                        pamScheduler.push($response.ocsResponse.services.service.pamServiceDetails.pamServiceDetail[i].pamScheduler);
                        pamIndicator.push($response.ocsResponse.services.service.pamServiceDetails.pamServiceDetail[i].pamIndicator)
                    }
                } else {
                    if ($response.ocsResponse.services.service.pamServiceDetails.pamServiceDetail.pamService != "NA" && $response.ocsResponse.services.service.pamServiceDetails.pamServiceDetail.pamClasse != "NA" && $response.ocsResponse.services.service.pamServiceDetails.pamServiceDetail.pamScheduler != "NA" && $response.ocsResponse.services.service.pamServiceDetails.pamServiceDetail.pamIndicator != "NA") {
                        pamService.push($response.ocsResponse.services.service.pamServiceDetails.pamServiceDetail.pamService);
                        pamClasse.push($response.ocsResponse.services.service.pamServiceDetails.pamServiceDetail.pamClasse);
                        pamScheduler.push($response.ocsResponse.services.service.pamServiceDetails.pamServiceDetail.pamScheduler);
                        pamIndicator.push($response.ocsResponse.services.service.pamServiceDetails.pamServiceDetail.pamIndicator);
                        setVariable('pamRequired', 'yes');
                    } else {
                        setVariable('pamRequired', 'no');
                    }
                }


                if (!_isEmpty(pamService) && !_isEmpty(pamClasse) && !_isEmpty(pamScheduler) && !_isEmpty(pamIndicator)) {
                    let pamServiceId = pamService.shift();
                    let pamClasseId = pamClasse.shift();
                    let pamSchedulerId = pamScheduler.shift();
                    let pamIndicatorID = pamIndicator.shift();

                    setVariable('pamServiceId', pamServiceId);
                    setVariable('pamClasseId', pamClasseId);
                    setVariable('pamSchedulerId', pamSchedulerId);
                    setVariable('pamIndicatorID', pamIndicatorID);

                    setVariable('pamService', pamService);
                    setVariable('pamClasse', pamClasse);
                    setVariable('pamScheduler', pamScheduler);
                    setVariable('pamIndicator', pamIndicator);
                    console.log("responseCode " + " " + _length(pamService) + " " + _length(pamClasse) + " " + _length(pamScheduler) + " " + _length(pamIndicator));

                }
            } else {
                setVariable('pamRequired', 'no');
            }
            return "ae391a8";
        } else {
            let errorMessage = {};
            errorMessage['responseCode'] = 'E200';
            errorMessage['errorCode'] = '105';
            errorMessage['responseMessage'] = "Bundle not created/configured";
            errorMessage['transactionID'] = $transactionID;
            setResponseCode('E200');
            setVariable('errorMessage', errorMessage);
            return "a70a28c";
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