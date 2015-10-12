var sequelize = require('sequelize');

var File = sequelize.define('event', {
	name: {
		type: Sequelize.STRING
	},
	smallCaption: {
		type: Sequelize.STRING,
		allowNull: true
	},
	access: {
		type: Sequelize.STRING,
		allowNull: true
	},
	parking: {
		type: Sequelize.STRING,
		allowNull: true
	},
	content: {
		type: Sequelize.TEXT
	},
	capacity: {
		type: Sequelize.INT
	},
	openedAt: {
		type: Sequelize.DATE
	},
	closedAt: {
		type: Sequelize.DATE
	},
	isClosed: {
		type: Sequelize.BOOLEAN
	},
	address: {
		type: Sequelize.STRING
	},
	complement: {
		type: Sequelize.STRING
	},
	city: {
		type: Sequelize.STRING
	},
	zipCode: {
		type: Sequelize.STRING
	},
	date: {
		type: Sequelize.DATE
	},
	price: {
		type: Sequelize.FLOAT
	}
});

Event.belongsToMany(User, { through: UserEvents});
Event.hasMany(User, { as: 'waitingParticipants' });
Event.hasMany(Proof, { as: 'mandatoryProoves' });
Event.hasOne(File, { as: 'Banner' });
Event.hasOne(File, { as: 'trailer' });
Event.hasMany(File, { as: 'photos' });