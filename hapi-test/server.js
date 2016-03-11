'use strict';

const Hapi = require('hapi');
const server = new Hapi.Server();

server.connection({port: 3000});

// create your routes
server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply.file('./public/index.html');
    }
});

server.start((err) => {
    if (err) {
        throw err;
    }
    console.log('Server started at:', server.info.uri);
});
