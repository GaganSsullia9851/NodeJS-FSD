function main() {
  try {
    if ($response.responseCode == "0") {
      let maxSubscription = _calculateAccumulatorValue(
        $response.accumulatorInformation,
        $uaid
      );
      let categoryInfo = _calculateAccumulatorValue(
        $response.accumulatorInformation,
        $uaidCategory
      );
      let discountInfo = _calculateAccumulatorValue(
        $response.accumulatorInformation,
        $uaidDiscount
      );

      let price = $service.price;
      if (
        price == "" ||
        price == "NA" ||
        price == "na" ||
        price == "-1" ||
        price.includes("-") ||
        price == 0.0
      ) {
        price = 0;
      }

      if (
        (maxSubscription.accumulatorID >= -1 &&
          categoryInfo.accumulatorID >= -1 &&
          maxSubscription.accumulatorValue < $maxSubscription &&
          categoryInfo.accumulatorValue < $maxBundelInCategory) ||
        $maxSubscription == -1
      ) {
        if (
          discountInfo.accumulatorID >= -1 &&
          discountInfo.accumulatorValue < $discountThreshold
        ) {
          let discount = ($service.discount / 100) * price;
          setVariable("price", price - discount);
        } else {
          setVariable("price", price);
        }
        return "d1755e1";
      } else if (
        $uaid == "null" ||
        Number($uaid == -1) ||
        $maxSubscription == "-1" ||
        maxSubscription.accumulatorID == -1
      ) {
        setVariable("price", Math.round($service.price));
        return "d1755e1";
      } else {
        let errorMessage = {
          responseCode: "E200",
          errorCode: "102",
          responseMessage: "subscriber not allowed.",
          transactionId: $transactionId,
        };
        setResponseCode("E200");
        setVariable("errorMessage", errorMessage);
        return "a70a28c";
      }
    } else {
      let errorMessage = {
        responseCode: "E200",
        errorCode: "102",
        responseMessage: "subscriber not allowed.",
        transactionId: $transactionId,
      };
      setResponseCode("E200");
      setVariable("errorMessage", errorMessage);
      return "a70a28c";
    }
  } catch (e) {
    console.log(e);
  }
  setResponseCode("E9000");
  return "7a6c88c";
}
