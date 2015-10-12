var sequelize = require('sequelize');

var UserEvents = sequelize.define('UserEvents', {
	status: {
		type: Sequelize.ENUM('Validating', 'Waiting prooves', 'Ready', 'Completed') 
	}
});

UserEvents.hasOne(EventResults, { as: 'Results'});
UserEvents.hasMany(ProofStatus, { as: 'ProovesStatus' });
UserEvents.hasMany(File, { as: 'Photos' });