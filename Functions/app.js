var express = require('express')
var https = require('https');
var path = require('path');
var Matrix = require('./Matrix.js');
var Discount = require('./Discount.js');
var Speed = require('./Speed.js');
var httpPost = require('./httpPost.js');
var Matrix_New = require('./Matrix_New');
var app = express();
var http = require('http');
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));


app.set('port', process.env.PORT || 8110);

app.post('/MTN_Services/leapCallback/debitcompleted', httpPost.leapCallback);
app.get('/matrix', Matrix.matrix);
app.get('/discount', Discount.discount);
app.get('/speed', Speed.speed);
app.get('/matrixNew', Matrix_New.matrix);
//app.get('/users/:id', user.getUser);

// http.createServer(app).listen(app.get('port'), function () {
//     console.log('Express server listening on port ' + app.get('port'));
// });

const sslServer = https.createServer({
    key: fs.readFileSync(path.join(__dirname, 'cert', 'server.key')),
    cert: fs.readFileSync(path.join(__dirname, 'cert', 'server.crt'))
}, app)
sslServer.listen(app.get('port'), () => console.log("Express server listening on port " + app.get('port')))