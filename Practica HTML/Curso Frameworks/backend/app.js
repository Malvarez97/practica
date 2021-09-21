// creamos servidor, cargamos express, cargamos peticiones, cargamos las rutas que vamos creando, utilizamos midellwars etc. 
'use strict'
// cargo modulos de node
var express = requiere ('express');
var bodyparser =('body-parser');

// ejecutar express (http)
var app = express();
// cargar ficheros de rutas 

// Middleewares 
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());// creo todo en json 
//CORS

// añadir prefijos a rutas 

// exportar modulos(fichero actual)
module.exports = app;