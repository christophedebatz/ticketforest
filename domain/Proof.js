var sequelize = require('sequelize');

var Proof = sequelize.define('Proof', {
	code: {
		type: Sequelize.STRING
	},
	name: {
		type: Sequelize.STRING,
		allowNull: true
	}
});