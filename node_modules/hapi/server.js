var Hapi = require('hapi');


// Declare internals

var internals = {};

internals.main = function () {

    var http = new Hapi.Server(process.env.PORT || 8080);

    http.route([
        { method: 'GET', path: '/safebook', handler: { file: { path: './safebook/index.html'} } }
    ]);

    http.start();
};

internals.main();