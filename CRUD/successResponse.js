
x["soapenv:Envelope"]["soapenv:Body"]["sch:clientRequestResponse"]["env:EaiEnvelope"]["env:Payload"]["cbs:CBSInterface"]["cbs:Response"]

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
                                    "env:ServiceId": { },
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
                                            "cbs:reference_ID": "336684439"
                                },
                                "cbs:Data": {
                                    "EVENT": {
                                        "API_OUTPUT": {
                                            "REQUEST_STATUS": "0",
                                                "SUCCESS_FLAG": "0",
                                                    "ABILLITY_REF_NUM": "336684439",
                                                        "SUCCESS_MESG_LANG_1": { },
                                            "SUCCESS_MESG_LANG_2": { },
                                            "TRANSACTION_LOG_REFERNCE": "2024103007175020241030071750"
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
                                    "env:ServiceId": { },
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
                                    "cbs:resultCode": "104",
                                        "cbs:resultMessage": "Subscriber has never done a SIM swap operation",
                                            "cbs:reference_ID": "336684477"
                                },
                                "cbs:Data": {
                                    "EVENT": {
                                        "API_OUTPUT": {
                                            "SUCCESS_FLAG": "1",
                                                "REQUEST_STATUS": "104",
                                                    "ABILLITY_REF_NUM": "336684477",
                                                        "ERROR_DESC_LANG_1": "Subscriber has never done a SIM swap operation",
                                                            "ERROR_DESC_LANG_2": "Subscriber has never done a SIM swap operation",
                                                                "TRANSACTION_LOG_REFERNCE": "2024103007184320241030071843"
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