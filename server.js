const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
}

app.use(allowCrossDomain());

app.use(express.static('./dist/than-os'));
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, './../dist/than-os/index.html'));
    console.log('path', path.join(_dirname, './. ./dist/than-os/index.html'))
});

// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 8080);