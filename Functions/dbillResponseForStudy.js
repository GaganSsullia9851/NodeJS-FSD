{
    "code": 0,
    "msg": {
      "ocsResponse": {
        "sequenceNo": "111726274945980",
        "callingParty": "242064743947",
        "serviceType": "MTN",
        "serviceId": "DATA_BUNDLE",
        "result": "OK",
        "errorCode": "OK",
        "services": {
          "service": {
            "offerId": "36821",
            "offerName": "forfait 50GB 15J a 5000F",
            "offerType": "DATA_BUNDLE",
            "offerSubType": "Data Bundle",
            "planCategory": "DATA_BUNDLE",
            "maxBundelInCategory": "6",
            "uaidCategory": "null",
            "qos": "Max",
            "price": "5000.0",
            "discount": "0",
            "discountThreshold": "0",
            "uaidDiscount": "null",
            "volume": "50",
            "volumeUnit": "GB",
            "dailyVolume": "NA",
            "validityUnit": "DAY(S)",
            "offerValidity": "15",
            "autoRenewal": "N",
            "autoRenewalThreshold": "null",
            "uaidAutoRenewal": "null",
            "maxSubscriptionThreshold": "6",
            "uaidMaxSubscription": "null",
            "sharedOffer": "NO",
            "sharedOfferId": "NA",
            "freeOffer": "NO",
            "allowedChannels": "ANY",
            "subscriberProfile": "Prepaid/Hybrid",
            "allowedSegements": {
              "allowedSegement": "-1"
            },
            "serviceClasses": {
              "serviceClass": "6"
            },
            "location": "null",
            "roamingPlan": "NO",
            "countersThresholds": {
              "countersThreshold": {
                "usageCounterID": "36821",
                "usageCounterValue": "0",
                "usageThresholdID": "36821",
                "usageThresholdValue": "53687091200"
              }
            },
            "associatedDAs": {
              "associatedDA": {
                "associatedDAID": "1",
                "DAUnitType": "1",
                "DAValue": "0"
              }
            },
            "accumulators": {
              "accumulator": {
                "accumulatorID": "NA",
                "accumulatorValue": "NA"
              }
            },
            "devices": {
              "device": {
                "deviceType": "-1",
                "deviceModel": "-1"
              }
            },
            "pamServiceDetails": {
              "pamServiceDetail": {
                "pamService": "3",
                "pamClasse": "3",
                "pamScheduler": "3",
                "pamIndicator": "3"
              }
            },
            "locationIds": {
              "locationId": "-1"
            },
            "paymentOptions": {
              "paymentOption": [
                "AIRTIME",
                "MOMO"
              ]
            },
            "planStatus": "ACTIVE",
            "validUntil": "NA",
            "bonus": "NO",
            "refillProfileID": "DB00",
            "refillType": "2",
            "transactionType": "DATABUNDLE",
            "transactionCode": "36821",
            "externalData1": "5000",
            "externalData2": "36821",
            "externalData3": "MOMO",
            "externalData4": "0",
            "notificationMessage": "null",
            "notificationMessagesRauto": "null",
            "notificationMessageAplan": "null",
            "notificationMessageDplan": "null",
            "notificationMessageUsage": "null",
            "notificationMessageSubscriptionSuccess": "null",
            "notificationMessageRenewSuccess": "null",
            "minumumForSharing": "NA",
            "maximumForSharing": "NA",
            "bundleSharingFee": "0",
            "diySubscriptionFee": "0",
            "evdCommission": "0",
            "diyMultiplicator": "NA"
          }
        }
      }
    },
    "diagnostics": {
      "ocsRequest": {
        "serviceNode": "CONGOB",
        "sequenceNo": 111726274945980,
        "requestType": 1,
        "cpcgFlag": 19,
        "callingParty": 242064743947,
        "planId": "36821",
        "serviceId": "DATA_BUNDLE",
        "serviceType": "MTN",
        "asyncFlag": "N",
        "bearerId": "LEAP",
        "offerId": "DATA_BUNDLE"
      },
      "url": "http://10.51.167.17:8180/dbill/smsc?serviceNode=CONGOB",
      "serializerTime": "0",
      "elapsedTime": 9,
      "responseStartTime": 1726274949478,
      "timingStart": 1726274949469,
      "timings": {
        "socket": 0.32331180572509766,
        "response": 8.961903810501099,
        "end": 9.100543975830078,
        "lookup": 0.32331180572509766,
        "connect": 0.32331180572509766
      },
      "timingPhases": {
        "wait": 0.32331180572509766,
        "dns": 0,
        "tcp": 0,
        "firstByte": 8.638592004776001,
        "download": 0.1386401653289795,
        "total": 9.100543975830078
      },
      "httpRTT": "9",
      "deserializerTime": "1",
      "pluginResponse": "11"
    },
    "pecounter": 1,
    "peThrottleValue": "9000",
    "responseTime": 11
  }