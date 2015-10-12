var sequelize = require('sequelize');

var File = sequelize.define('file', {
	type: {
		type: Sequelize.ENUM('Photo', 'Video', 'Document', 'Proof')
	}
	name: {
		type: Sequelize.STRING
	},
	description: {
		type: Sequelize.STRING,
		allowNull: true,
	},
	uri: {
		type: Sequelize.STRING
	},
	takenAt: {
		type: Sequelize.DATE
	},
	isRelativeUri: {
		type: Sequelize.BOOLEAN
	}
});