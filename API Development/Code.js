function main() {
  try {
    if ($response.ocsResponse.errorCode == 0 || $response.ocsResponse.errorCode == 'OK') {
      setVariable('bonus', $response.ocsResponse.services.service.bonus);
      setVariable('refillProfileID', $response.ocsResponse.services.service.refillProfileID);
      setVariable('transType', $response.ocsResponse.services.service.transactionType);
      setVariable('transCode', $response.ocsResponse.services.service.transactionCode);
      setVariable('offerValidity', $response.ocsResponse.services.service.offerValidity);
      setVariable('validityUnit', $response.ocsResponse.services.service.validityUnit);
      setVariable('externalData1', $response.ocsResponse.services.service.externalData1);
      setVariable('externalData2', $response.ocsResponse.services.service.externalData2);
      setVariable('offerSubType', $response.ocsResponse.services.service.offerSubType);
      setVariable('momoRefillProfileID', $response.ocsResponse.services.service.externalData3);
      return "1d8966e";
    } else {
      let errorMessage = {};
      errorMessage['responseCode'] = 'E200';
      errorMessage['errorCode'] = '101'
      errorMessage['responseMessage'] = "Bundle not created/configured";
      errorMessage['transactionId'] = $transactionId;
      setResponseCode('E200');
      setVariable('errorMessage', errorMessage);
      return "a70a28c";
    }
  } catch (e) {
    console.log(e);
  }
  setResponseCode('E9000');
  return "a70a28c";
}