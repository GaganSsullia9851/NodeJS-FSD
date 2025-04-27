function main() {
  try {
    let validity = $service.offerValidity;
    let validityUnit = $service.validityUnit;
    if (
      $response.ocsResponse.errorCode == "0" ||
      ($response.ocsResponse.result == "OK" && $offerInfo)
    ) {
      let services = $response.ocsResponse.services;
      let i = 0;

      let productId;
      let tempExpDate = "";
      let k = 0;
      if (services != null) {
        if (!Array.isArray(services["service"])) {
          multipleOffer = "No";

          if (services.service.uaidCategory == $uaidCategory) {
            $offerInfo.forEach((offer) => {
              if (offer.productID) {
                if (k == 0) {
                  productId = offer.productID;
                  if (offer.expiryDateTime) {
                    tempExpDate = offer.expiryDateTime;
                  }
                  if (offer.expiryDate) {
                    tempExpDate = offer.expiryDate;
                  }
                  k++;
                } else {
                  if (productId < offer.productID) {
                    productId = offer.productID;
                    if (offer.expiryDateTime) {
                      tempExpDate = offer.expiryDateTime;
                    }
                    if (offer.expiryDate) {
                      tempExpDate = offer.expiryDate;
                    }
                  }
                  k++;
                }
              } else {
                if (offer.expiryDateTime) {
                  tempExpDate = offer.expiryDateTime;
                }
                if (offer.expiryDate) {
                  tempExpDate = offer.expiryDate;
                }
              }
            });
          } else {
            if (validity == "0" || validity == "-1") {
              tempExpDate = new Date("2030-12-31T22:59:59.010Z");
            } else {
              tempExpDate = "";
            }
          }

          setVariable(
            "expiryDateDays",
            getExpiry(dateDiffInDays(tempExpDate), validity, validityUnit)
          );
        } else if (Array.isArray(services["service"])) {
          multipleOffer = "Yes";

          var secondMap = new Map();
          services.service.forEach((service) => {
            if (
              service.offerId &&
              service.offerId != "NULL" &&
              service.uaidCategory != "NULL" &&
              service.planCategory != "MUSTPLAN" &&
              service.offerSubType != "SHARED" &&
              service.offerSubType != "EBU_SHARE"
            ) {
              secondMap.set(service.offerId, service.uaidCategory);
            }
          });
          $offerInfo.forEach((offer) => {
            if (
              secondMap.get(offer.offerID.toString()) != undefined &&
              secondMap.get(offer.offerID.toString()) == $uaidCategory
            ) {
              if (offer.expiryDateTime) {
                if (i == 0) {
                  tempExpDate = offer.expiryDateTime;
                } else if (
                  _getTime(offer.expiryDateTime) >= _getTime(tempExpDate)
                ) {
                  tempExpDate = offer.expiryDateTime;
                }
                i++;
              }
              if (offer.expiryDate) {
                if (i == 0) {
                  tempExpDate = offer.expiryDate;
                } else if (
                  _getTime(offer.expiryDate) >= _getTime(tempExpDate)
                ) {
                  tempExpDate = offer.expiryDate;
                }
                i++;
              }
            }
          });
          if (tempExpDate == "" || tempExpDate == null) {
            if (validity == "0" || validity == "-1") {
              tempExpDate = new Date("2030-12-31T22:59:59.010Z");
            } else {
              tempExpDate = "";
            }
          }

          setVariable(
            "expiryDateDays",
            getExpiry(dateDiffInDays(tempExpDate), validity, validityUnit)
          );
        } else {
          setVariable(
            "expiryDateDays",
            getExpiry("", Number($offerValidity), validityUnit)
          );
          if ($autoRenewal.toUpperCase() == "YES") {
            setVariable("paymentType", "AIRTIME");
            setVariable("pin", null);
            return "9483143";
          } else if (
            $autoRenewal.toUpperCase() == "NO" &&
            $service.paymentOptions.paymentOption != null
          ) {
            return "eeee404";
          }
        }
      }

      if ($price == 0 || $price == "0") {
        setVariable(
          "expiryDateFinal",
          getExpiry(dateDiffInDays(tempExpDate), validity, validityUnit)
        );
        return "57ab5da";
      } else {
        if ($paymentType.toUpperCase() == "AIRTIME") {
          return "f73c7b0";
        } else if ($paymentType.toUpperCase() == "MOMO") {
          return "77e2550";
        } else if ($paymentType.toUpperCase() == "NOPAYMENT") {
          setVariable(
            "expiryDateFinal",
            getExpiry(dateDiffInDays(tempExpDate), validity, validityUnit)
          );
          return "57ab5da";
        }
      }
    } else {
      setVariable("expiryDateDays", getExpiry("", validity, validityUnit));
    }
  } catch (e) {
    console.log(e);
  }

  setResponseCode("E9000");
  return "a70a28c";
}

function dateDiffInDays(expiryDate) {
  try {
    if (expiryDate) {
      let currentDate = new Date();
      const DAY = 1000 * 60 * 60 * 24;
      return Math.floor(
        (Date.UTC(
          expiryDate.getFullYear(),
          expiryDate.getMonth(),
          expiryDate.getDate()
        ) -
          Date.UTC(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            currentDate.getDate()
          )) /
        DAY
      );
    } else {
      return "0";
    }
  } catch (e) {
    console.log(e);
    return "0";
  }
}

function getExpiry(remainingDays, offerValidity, validityUnit) {
  let newDate;
  let expiryDays;
  try {
    switch (validityUnit) {
      case "DAY(S)":
        expiryDays = Number(remainingDays) + Number(offerValidity);
        newDate = new Date(
          Date.now() + Number(expiryDays) * 24 * 60 * 60 * 1000
        );
        return newDate.setHours(newDate.getHours() + 1);

      case "MONTH(S)":
        expiryDays = Number(remainingDays) + Number(offerValidity) * 30;

        newDate = new Date(
          Date.now() + Number(expiryDays) * 24 * 60 * 60 * 1000
        );

        return newDate.setHours(newDate.getHours() + 1);

      case "YEAR(S)":
        expiryDays = Number(remainingDays) + Number(offerValidity) * 12 * 30;
        newDate = new Date(
          Date.now() + Number(expiryDays) * 24 * 60 * 60 * 1000
        );
        return newDate.setHours(newDate.getHours() + 1);

      case "NA":
        return _endDate(offerValidity);

      default:
        return _endDate(offerValidity);
    }
  } catch (e) {
    console.log(e);
    return _endDate(offerValidity);
  }
}
