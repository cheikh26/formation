'use strict'

const Bossy = require("bossy");

const server = require('../lib/server.js');
var definition = {
    p: {
        description: 'Show help',
        alias: 'port',
        type: 'number',
		default:3000
    },
    d: {
        description: 'directory',
        alias: 'strig',
		type: 'string'
    },
	h: {
        description: 'Show help',
        alias: 'help',
        type: 'boolean'
    }
};
 
 
var args = Bossy.parse(definition);
 
if (args instanceof Error) {
    console.error(args.message);
    return;
}
 
if (args.h || !args.d) {
    console.log(Bossy.usage(definition, 'hello -n <name>'));
    return;
}
let directory = args.d;
let port = args.p;

server.start(directory,port,()=>{
	console.log('server start');
});