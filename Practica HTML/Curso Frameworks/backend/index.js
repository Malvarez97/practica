'use restrict'

var mongoose = require('mongoose');
var app = require("./app");
var port = 3900;// puerto 
mongoose.Promise = global.Promise; // promesa para evitar algunos fallos en mongo 

mongoose.connect('mongodb://localhost:27017/apirestlog', { useNewUrlParser : true }) // conecto con la Bd y creo la 
    .then(() => {
        console.log('se conecto bien');
            // creo servidor y escucho peticiones HTTP
        app.listen(port, ()=> 
            console.log("servidor corriendo en "+port))
    })

