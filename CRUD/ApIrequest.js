<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:sch="http://schema.concierge.com"
    xmlns:env="http://schema.concierge.com/Envelope">
    <soapenv:Header />
    <soapenv:Body>
        <sch:clientRequest>
            <env:EaiEnvelope>
                <env:ApplicationName>MTNCG</env:ApplicationName>
                <env:Domain>abl_portal</env:Domain>
                <env:Service>CBSInterfaceService</env:Service>
                <env:ServiceId />
                <env:Language>En</env:Language>
                <env:UserId>externalapp</env:UserId>
                <env:Sender>externalapp</env:Sender>
                <env:MessageId>abl_portal</env:MessageId>
                <!--Optional:-->
                <env:CorrelationId>?</env:CorrelationId>
                <env:GenTimeStamp>?</env:GenTimeStamp>
                <!--Optional:-->
                <env:SentTimeStamp>?</env:SentTimeStamp>
                <env:Payload>
                    <cbs:CBSServiceRequestDtls xmlns:cbs="http://schema.concierge.com/CBSInterfaceService">
                        <cbs:Request>
                            <cbs:Operation_Name>cbsServiceRequest</cbs:Operation_Name>
                            <cbs:Data>
                                <EVENT>
                                    <REQUEST API_CODE="81568" ENTITY_ID="$noCCMSISDN" EXTERNAL_APPLICATION="MOM" EXTERNAL_USER="ECW" />
                                </EVENT>
                            </cbs:Data>
                        </cbs:Request>
                    </cbs:CBSServiceRequestDtls>
                </env:Payload>
            </env:EaiEnvelope>
        </sch:clientRequest>
    </soapenv:Body>
</soapenv:Envelope>



setVariable('soapRequest', `
    {
      "method": "POST",
      "url": "http://10.119.22.93:7003/services/EIAproxy",
      "headers": {
        "0": { "key": "Content-Type", "value": "text/xml;charset=UTF-8" },
        "1": { "key": "Accept-Encoding", "value": "gzip,deflate" },
        "2": { "key": "User-Agent", "value": "Apache-HttpClient/4.1.1" },
        "3": { "key": "Connection", "value": "Keep-Alive" },
        "4": { "key": "SOAPAction", "value": "\\"http://www.openuri.org/clientRequest\\"" }
      },
      "form": "<soapenv:Envelope xmlns:soapenv=\\"http://schemas.xmlsoap.org/soap/envelope/\\" xmlns:sch=\\"http://schema.concierge.com\\" xmlns:env=\\"http://schema.concierge.com/Envelope\\">\\n <soapenv:Header/>\\n <soapenv:Body>\\n <sch:clientRequest>\\n <env:EaiEnvelope>\\n <env:ApplicationName>MTNCG</env:ApplicationName>\\n <env:Domain>abl_portal</env:Domain>\\n <env:Service>CBSInterfaceService</env:Service>\\n <env:ServiceId/>\\n <env:Language>En</env:Language>\\n <env:UserId>externalapp</env:UserId>\\n <env:Sender>externalapp</env:Sender>\\n <env:MessageId>abl_portal</env:MessageId>\\n <!--Optional:-->\\n <env:CorrelationId>?</env:CorrelationId>\\n <env:GenTimeStamp>?</env:GenTimeStamp>\\n <!--Optional:-->\\n <env:SentTimeStamp>?</env:SentTimeStamp>\\n <env:Payload>\\n <cbs:CBSServiceRequestDtls xmlns:cbs=\\"http://schema.concierge.com/CBSInterfaceService\\">\\n <cbs:Request>\\n <cbs:Operation_Name>cbsServiceRequest</cbs:Operation_Name>\\n <cbs:Data>\\n<EVENT>\\n<REQUEST API_CODE=\\"81568\\" ENTITY_ID=\\"${msisdn}\\" EXTERNAL_APPLICATION=\\"MOM\\" EXTERNAL_USER=\\"ECW\\" />\\n</EVENT>\\n </cbs:Data>\\n </cbs:Request>\\n </cbs:CBSServiceRequestDtls>\\n </env:Payload>\\n </env:EaiEnvelope>\\n </sch:clientRequest>\\n </soapenv:Body>\\n</soapenv:Envelope>",
      "rejectUnauthorized": true
    }
    `);