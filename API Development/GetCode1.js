function main() {
  setVariable("amount", $price);
  if (typeof $speed !== "undefined" && !($speed.indexOf("ee") !== -1)) {
    setVariable("speed", $speed);
  } else {
    setVariable("speed", "null");
  }
  if (
    typeof $channelName !== "undefined" &&
    !($channelName.indexOf("nn") !== -1)
  ) {
    setVariable("channelName", $channelName);
  } else {
    setVariable("channelName", "null");
  }
  try {
    if ($response.responseCode == "0") {
      if ($response.offerInformationList) {
        let offerInfo = $response.offerInformationList;
        setVariable("offerInfo", offerInfo);
        let offerIds = [];
        if (offerInfo.length > 0) {
          offerInfo.forEach((offer) => {
            //checking for active offers
            if (
              _getTime(offer.expiryDate) >= _now() ||
              _getTime(offer.expiryDateTime) >= _now()
            ) {
              if (!offerIds.includes(offer.offerID)) {
                offerIds.push(offer.offerID);
              }
            }
          });
        }
        setVariable("activatedOfferIds", offerIds.toString());
      } else {
        if ($offerValidity != "0") {
          getExpiry(dateDiffInDays(new Date()), $offerValidity, $validityUnit);
        } else {
          getExpiry(
            dateDiffInDays(
              new Date("2030-12-31T22:59:59.010Z"),
              $offerValidity,
              $validityUnit
            )
          );
        }
        if ($paymentType != null && $paymentType != "") {
          switch ($paymentType.toUpperCase()) {
            case "AIRTIME":
              return "f73c7b0";
            case "MOMO":
              return "77e2550";
          }
        }
      }
      return "49c450a";
    }
  } catch (e) {
    console.log(e);
  }
  setResponseCode("E9000");
  return "a70a28c";
}

function dateDiffInDays(expiryDate) {
  try {
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
  } catch (e) {
    console.log(e);
  }
}

function getExpiry(expiryDate, offerValidity, validityUnit) {
  let newDate;

  try {
    let validity = Number(expiryDate) + Number(offerValidity);
    switch (validityUnit) {
      case "DAY(S)":
        newDate = new Date(Date.now() + Number(validity) * 24 * 60 * 60 * 1000);

        setVariable("expiryDate", newDate.setHours(newDate.getHours() + 1));
        setVariable("expiryDateDays", newDate.setHours(newDate.getHours() + 1));
        break;
      case "MONTH(S)":
        newDate = new Date(
          Date.now() + Number(validity) * 30 * 24 * 60 * 60 * 1000
        );
        setVariable("expiryDate", newDate.setHours(newDate.getHours() + 1));
        setVariable("expiryDateDays", newDate.setHours(newDate.getHours() + 1));
        break;
      case "YEAR(S)":
        newDate = new Date(
          Date.now() + Number(validity) * 12 * 30 * 24 * 60 * 60 * 1000
        );
        setVariable("expiryDate", newDate.setHours(newDate.getHours() + 1));
        setVariable("expiryDateDays", newDate.setHours(newDate.getHours() + 1));
        break;
      case "NA":
        setVariable("expiryDate", _endDate(validity));
        setVariable("expiryDateDays", _endDate(validity));
        break;
      default:
    }
  } catch (e) {
    console.log(e);
  }
}