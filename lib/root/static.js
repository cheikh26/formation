'user strict';
const Inert = require("inert");

module.exports = function(server){

		server.register(Inert,(err)=>{
		
		server.route({
			method: 'GET',
			path:'/static/{param*}',
			handler:{
				directory: {
					path: directory,
					listing:true,
					redirectionToSlash:true,
					index:true,
					lookCompress:true
					}
				}
			});
	
	});
	
}