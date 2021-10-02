
const express = require('express');
const compression = require('compression');
const helmet = require('helmet');
const serveStatic = require("serve-static")
const path = require('path');

app = express();
app.use(compression());
app.use(serveStatic(path.join(__dirname, 'dist')));
app.use(helmet());

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});