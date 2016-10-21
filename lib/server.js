'user strict';
const Hapi = require('hapi');
const Inert = require("inert");
const server = new Hapi.Server();
server.connection({port:3000});

server.register(Inert,(err)=>{
	server.route({
	method: 'GET',
	path:'/static/{param*}',
	handler:{
		directory: {
            path: './app',
			listing:true
			}
		}
	});
});

server.route({
	method: 'Get',
	path:'/',
	handler:function(request,replay){
		replay('Hello,world!');
	}
});
module.exports.start = function(callback){
	server.start((err)=>{
		if(err){
			throw err;
		}
			console.log(`server running at ${server.info.uri}`);
			
		if(callback){
			callback();
		}
	})
};