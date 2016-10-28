'user strict';
const Hapi = require('hapi');
const server = new Hapi.Server();

const staticroot = require('./root/static.js');

module.exports.start = function(path,port,callback){
server.connection({port:port});

	server.start((err)=>{
		if(err){
			throw err;
		}
			console.log(`server running at ${server.info.uri}`);
			
		if(callback){
			callback();
		}
	})

server.register(Inert,(err)=>{
	server.route({
	method: 'GET',
	path:'/static/{param*}',
	handler:{
		directory: {
            path: path,
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
/*module.exports.start = function(path,port,callback){
	server.start((err)=>{
		if(err){
			throw err;
		}
			console.log(`server running at ${server.info.uri}`);
			
		if(callback){
			callback();
		}
	})*/
};