var sequelize = require('sequelize');

var User = sequelize.define('user', {
	firstName: {
		type: Sequelize.STRING
	},
	lastName: {
		type: Sequelize.STRING
	},
	email: {
		type: Sequelize.STRING
	},
	address: {
		type: Sequelize.STRING
	},
	complement: {
		type: Sequelize.STRING,
		allowNull: true
	},
	city: {
		type: Sequelize.STRING
	},
	zipCode: {
		type: Sequelize.INTEGER
	},
	birthdate: {
		type: Sequelize.DATE
	}
});

User.hasOne(File, { as: 'Photo' });
User.hasMany(File, { as: 'Documents'});
User.belongsToMany(Event, { through: UserEvents});