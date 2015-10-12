var restify = require('restify');

var server = restify.createServer({
	name: 'ticketforest',
	version: '1.0.0'
});

server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restifybodyParser());

server.get('/users', function (req, res, next) {
	res.send(req.params);
	return next();
});

server.on('uncaughtException',function(request, response, route, error){
  console.error(error.stack);
  response.send(error);
});

server.listen(8080, function () {
	console.log('%s listening at %s', server.name, server.url);
});