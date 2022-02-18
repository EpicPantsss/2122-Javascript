#!/usr/bin/node

let http = require("http");
let fs = require("fs");

const data = require('./images.json');

let http_server = http.createServer(function(request, response){

	for(let i = 0; i < data.images.length; i++){

		if (request.url == "/" + data.images[i]){
			fs.readFile(data.images[i], function(err, data){
				if (err){
					console.log("error");
					return
				}
				response.writeHead(200);
				response.end(data);
			});
		}
	}
    if (request.url == "/racer_green.png"){
        fs.readFile("racer_green.png", function(err, data){
            if (err){
                console.log("error");
                return
            }
            response.writeHead(200);
            response.end(data);
        });
   }

	fs.readFile("index.html", function(err, data){
		if (err){
			console.log("errror");
			return
		}
		response.writeHead(200);

		response.end(data);
	});

}).listen(1095);

