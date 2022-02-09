#!/usr/bin/node

let http = require("http");
let fs = require("fs");

let http_server = http.createServer(function(request, response){
	
	if (request.url == "/fondo_bdd.png"){
		fs.readFile("fondo_bdd.png", function(err, data) {
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

