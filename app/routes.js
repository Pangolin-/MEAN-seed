var dbUsers = require('./models/dbUser.js');

module.exports = function(app) {
	
	//Server routes
	app.get('/api/user/list', function(req, res) {
		dbUsers.find(function(err, users) {
			if (err) {
				res.send(err);
			}
			else {
				res.json(users);
			}
		})
	})
	
	//Front-end routes
	app.get('*', function(req, res) {
		res.sendfile('./www/index.html'); // load our public/index.html file
	});
}