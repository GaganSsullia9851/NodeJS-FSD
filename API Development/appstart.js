function main() {
  try {
    let generalError = {};
    generalError["responseCode"] = "E200";
    generalError["errorCode"] = "107";
    generalError["responseMessage"] =
      "Dear Customer, Your request cannot be processed now. Please try again later.";
    generalError["transactionId"] = $transactionId;
    setVariable("generalError", generalError);

    let Exp1 = new RegExp("^24206[0-9]{7}$");
    let Exp2 = new RegExp("^06[0-9]{7}$");

    if (Exp1.test($MSISDN) || Exp2.test($MSISDN)) {
      if ($requestType == "self") {
        setVariable("tempMSISDN", $MSISDN);
        setVariable("$bNumber", $MSISDN);
        return "4ec0685";
      } else if (
        $requestType == "others" &&
        (Exp1.test($bNumber) || Exp2.test($bNumber))
      ) {
        setVariable("tempMSISDN", $bNumber);
        return "4ec0685";
      } else {
        let errorMessage = {};
        errorMessage["responseCode"] = "E200";
        errorMessage["errorCode"] = "100";
        errorMessage["responseMessage"] = "Please enter a valid B-number";
        errorMessage["transactionId"] = $transactionId;
        setResponseCode("E200");
        setVariable("errorMessage", errorMessage);
        return "a70a28c";
      }
    } else {
      let errorMessage = {};
      errorMessage["responseCode"] = "E200";
      errorMessage["errorCode"] = "100";
      errorMessage["responseMessage"] = "Please enter a valid MSISDN";
      errorMessage["transactionId"] = $transactionId;
      setResponseCode("E200");
      setVariable("errorMessage", errorMessage);
      return "a70a28c";
    }
  } catch (e) {
    console.log(e);
  }
  setResponseCode("E9000");
}
