{ "soapenv:Envelope": { "xmlns:soapenv": "http://schemas.xmlsoap.org/soap/envelope/", "soapenv:Body": { "sch:clientRequestResponse": { "xmlns:sch": "http://schema.concierge.com", "env:EaiEnvelope": { "xmlns:env": "http://schema.concierge.com/Envelope", "env:ApplicationName": "MTNCG", "env:Domain": "abl_portal", "env:Service": "CBSInterfaceService", "env:ServiceId": { }, "env:Language": "En", "env:UserId": "externalapp", "env:Sender": "externalapp", "env:MessageId": "abl_portal", "env:CorrelationId": "?", "env:GenTimeStamp": "?", "env:SentTimeStamp": "?", "env:Payload": { "cbs:CBSInterface": { "xmlns:cbs": "http://schema.concierge.com/CBSInterfaceService", "cbs:Response": { "cbs:Result_OutputData": { "cbs:resultCode": "0", "cbs:resultMessage": "SUCCESS", "cbs:reference_ID": "336600420" }, "cbs:Data": { "EVENT": { "API_OUTPUT": { "REQUEST_STATUS": "0", "SUCCESS_FLAG": "0", "ABILLITY_REF_NUM": "336600420", "SUCCESS_MESG_LANG_1": { }, "SUCCESS_MESG_LANG_2": { }, "TRANSACTION_LOG_REFERNCE": "2024102912052720241029120527" }, "ROWSET": { "ROW": { "DATE": "14/03/2024", "TIME": "19:19:28", "MSISDN": "064691285", "OPERATION_TYPE": "SIM SWAP" } } } } } } } } } } }, "responseCode": "0" }


{
    "soapenv:Envelope": {
      "xmlns:soapenv": "http://schemas.xmlsoap.org/soap/envelope/",
      "soapenv:Body": {
        "sch:clientRequestResponse": {
          "xmlns:sch": "http://schema.concierge.com",
          "env:EaiEnvelope": {
            "xmlns:env": "http://schema.concierge.com/Envelope",
            "env:ApplicationName": "MTNCG",
            "env:Domain": "abl_portal",
            "env:Service": "CBSInterfaceService",
            "env:ServiceId": {},
            "env:Language": "En",
            "env:UserId": "externalapp",
            "env:Sender": "externalapp",
            "env:MessageId": "abl_portal",
            "env:CorrelationId": "?",
            "env:GenTimeStamp": "?",
            "env:SentTimeStamp": "?",
            "env:Payload": {
              "cbs:CBSInterface": {
                "xmlns:cbs": "http://schema.concierge.com/CBSInterfaceService",
                "cbs:Response": {
                  "cbs:Result_OutputData": {
                    "cbs:resultCode": "0",
                    "cbs:resultMessage": "SUCCESS",
                    "cbs:reference_ID": "336600420"
                  },
                  "cbs:Data": {
                    "EVENT": {
                      "API_OUTPUT": {
                        "REQUEST_STATUS": "0",
                        "SUCCESS_FLAG": "0",
                        "ABILLITY_REF_NUM": "336600420",
                        "SUCCESS_MESG_LANG_1": {},
                        "SUCCESS_MESG_LANG_2": {},
                        "TRANSACTION_LOG_REFERNCE": "2024102912052720241029120527"
                      },
                      "ROWSET": {
                        "ROW": {
                          "DATE": "14/03/2024",
                          "TIME": "19:19:28",
                          "MSISDN": "064691285",
                          "OPERATION_TYPE": "SIM SWAP"
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    "responseCode": "0"
  }


  