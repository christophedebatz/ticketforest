var mysql = require('mysql');

var connection = null;

function Mysql () {
	this.connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: ''
	});
}

Mysql.prototype.connect = function () {
	connection.connect(function (err) {
		if (err) throw new Exception('Unable to establish mysql connection.');
	});
}		
