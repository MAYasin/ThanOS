const express = require('express');
const app = express();
const path = require('path');
const helmet = require('helmet')

app.use(helmet.frameguard({ action: 'deny' }));

app.use(express.static('./dist/than-os'));
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, './../dist/than-os/index.html'));
    console.log('path', path.join(_dirname, './. ./dist/than-os/index.html'))
});

// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 8080);