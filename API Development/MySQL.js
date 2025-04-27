function main() {
  try {
    if ($resultsets.result1.code == "0") {
      if ($actStatus == "0") {
        setResponseCode("S200");
        let msg = {};
        msg["responseCode"] = "S200";
        msg["errorCode"] = "0";
        msg["responseMessage"] = "Bundle activation is successful";
        msg["transactionId"] = $transactionId;
        setVariable("msg", msg);
        return "a70a28c";
      } else {
        let errorMessage = {};
        errorMessage["responseCode"] = "E200";
        errorMessage["errorCode"] = "103";
        errorMessage["responeMessage"] = "Bundle activation has failed";
        errorMessage["transactionId"] = $transactionId;
        setResponseCode("E200");
        setVariable("errorMessage", errorMessage);
        return "a70a28c";
      }
    } else {
      let errorMessage = {};
      errorMessage["responseCode"] = "E200";
      errorMessage["errorCode"] = "103";
      errorMessage["responeMessage"] = "Bundle activation has failed";
      errorMessage["transactionId"] = $transactionId;
      setResponseCode("E200");
      setVariable("errorMessage", errorMessage);
      return "a70a28c";
    }
  } catch (e) {
    console.log(e);
  }
  let generalError = {};
  generalError["responseCode"] = "E200";
  generalError["errorCode"] = "107";
  generalError["responseMessage"] =
    "Dear Customer, Your request cannot be processed now. Please try again later.";
  generalError["transactionId"] = $transactionId;
  setVariable("generalError", generalError);
  setResponseCode("E9000");
  return "a70a28c";
}
