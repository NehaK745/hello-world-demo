//express.js server
var express = require('express');
var app = express();
var port = process.env.PORT || 4000;


//create server 
app.listen(port, function(){
    console.log('Server started on port ' + port);
}
);
