var sequelize = new Sequelize('database', 'username', 'password', {
	host: 'localhost',
	dialect: 'mysql',
	pool: {
		max: 5,
		min: 0,
		idle: 10000
	}
});

module.export = sequelize;