var http = require('http');
var request = require('request');
const parser = require("../../../extlibs/xml2json/");
const loggerService = require('./loggerService');
var dateFormat = require('dateformat');

loggerService.log({
    level: 'error',
    message: 'Pass an object and this works',
    additional: 'properties',
    are: 'passed along'
});

exports.leapCallback = function (request, response) {
    try {
        response.setHeader('Content-Type', 'text/xml')
        if (request.method == "GET") {
            response.end("received GET request.")
        }
        else if (request.method == "POST") {
            response.end('<?xml version="1.0" encoding="UTF-8"?><ns0:debitcompletedresponse xmlns:ns0="http://www.ericsson.com/em/emm"/>');
            let json;
            request.on('data', (d) => {
                sendUSSD(JSON.parse(parser.toJson(d)));
            });
        }
        else {
            response.end("Undefined request .");
        }
    } catch (e) {
        console.log(e);
    }
}

async function sendUSSD(req) {
    let urlUSSD = "";
    let leapTransID = req["ns0:debitcompletedrequest"].externaltransactionid;;
    let ecwTransID = req["ns0:debitcompletedrequest"].transactionid;
    try {
        console.log(" Time " + dateFormat(new Date(), "yyyy-mm-dd h:MM:ss"))
        loggerService.error(dateFormat(new Date(), "yyyy-mm-dd h:MM:ss") + '   Sending Request to LEAP :' + JSON.stringify(req));
        urlUSSD = 'http://192.168.35.172:9003/app_engine/staging/1690112121211' + "?" + "&MSISDN=" + req["ns0:debitcompletedrequest"].transactionid + "&status=" + req["ns0:debitcompletedrequest"].status;

        if (req["ns0:debitcompletedrequest"].status != undefined && req["ns0:debitcompletedrequest"].status == 'SUCCESSFUL') {
            loggerService.error(dateFormat(new Date(), "yyyy-mm-dd h:MM:ss") + ' Transaction ID :' + req["ns0:debitcompletedrequest"].transactionid + " URL :: " + urlUSSD);
        } else {
            loggerService.error(dateFormat(new Date(), "yyyy-mm-dd h:MM:ss") + " Common transaction ID " + leapTransID + " Rejected transaction ID " + req["ns0:debitcompletedrequest"].transactionid + " URL :: " + urlUSSD);

        }

        console.log(" urlUSSD " + urlUSSD);
        let options = {
            method: 'GET',
            url: urlUSSD
        };
        request(options, (error, response, body) => {
            if (response != null) {
                loggerService.error(dateFormat(new Date(), "yyyy-mm-dd h:MM:ss") + " Common transaction ID " + leapTransID + " ecw transaction ID " + ecwTransID + " Status Code " + response.statusCode + " Response Body " + response.body);
            } else {
                loggerService.error(dateFormat(new Date(), "yyyy-mm-dd h:MM:ss") + " Common transaction ID " + leapTransID + " ecw transaction ID " + ecwTransID + " Error " + error);
            }
        });
    } catch (e) {
        console.log(e);
    }
}



//=============================



var http = require('http');
var request = require('request');
const parser = require("../../../extlibs/xml2json/");
const loggerService = require('./loggerService');
var dateFormat = require('dateformat');

loggerService.log({
    level: 'error',
    message: 'Pass an object and this works',
    additional: 'properties',
    are: 'passed along'
});


exports.leapCallback = function (request, response) {
    try {

        response.setHeader('Content-Type', 'text/xml')

        if (request.method == "GET") {
            response.end("received GET request.")
        }
        else if (request.method == "POST") {
            response.end('<?xml version="1.0" encoding="UTF-8"?><ns0:debitcompletedresponse xmlns:ns0="http://www.ericsson.com/em/emm"/>');
            let json;
            request.on('data', (d) => {

                sendUSSD(JSON.parse(parser.toJson(d)));
            });

        }
        else {
            response.end("Undefined request .");
        }
    } catch (e) {
        console.log(e);
    }
}
//}


async function sendUSSD(req) {
let urlUSSD = "";
let leapTransID = req["ns0:debitcompletedrequest"].externaltransactionid;;
let ecwTransID = req["ns0:debitcompletedrequest"].transactionid;
    try {
         console.log(" Time "+dateFormat(new Date(), "yyyy-mm-dd h:MM:ss"))
        loggerService.error(dateFormat(new Date(), "yyyy-mm-dd h:MM:ss") +'   Sending Request to LEAP :' + JSON.stringify(req));
   if(req["ns0:debitcompletedrequest"].status != undefined && req["ns0:debitcompletedrequest"].status == 'SUCCESSFUL'){
        urlUSSD = 'http://127.0.0.1:9004/app_engine/production/11594043878080' + "?" + "MSISDN=" + req["ns0:debitcompletedrequest"].transactionid+"&leapid=" +req["ns0:debitcompletedrequest"].externaltransactionid;
  loggerService.error(dateFormat(new Date(), "yyyy-mm-dd h:MM:ss")+' Transaction ID :' + req["ns0:debitcompletedrequest"].transactionid+" URL :: "+urlUSSD);
}else{
    urlUSSD = 'http://127.0.0.1:9004/app_engine/production/11598771352370' + "?" + "MSISDN=" + req["ns0:debitcompletedrequest"].transactionid+"&leapid=" +req["ns0:debitcompletedrequest"].externaltransactionid;
   loggerService.error(dateFormat(new Date(), "yyyy-mm-dd h:MM:ss")+" Common transaction ID "+leapTransID+" Rejected transaction ID "+req["ns0:debitcompletedrequest"].transactionid+" URL :: "+urlUSSD);

}

console.log(" urlUSSD "+urlUSSD);
        let options = {
            method: 'GET',
            url: urlUSSD
        };
        request(options, (error, response, body) => {
            if (response != null) {
               loggerService.error(dateFormat(new Date(), "yyyy-mm-dd h:MM:ss")+" Common transaction ID "+leapTransID+" ecw transaction ID "+ecwTransID+" Status Code "+response.statusCode+" Response Body "+response.body);
            } else {
                loggerService.error(dateFormat(new Date(), "yyyy-mm-dd h:MM:ss")+" Common transaction ID "+leapTransID+" ecw transaction ID "+ecwTransID+" Error "+error);
            }
        });
    } catch (e) {
        console.log(e);
    }
}