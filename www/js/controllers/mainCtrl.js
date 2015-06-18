angular
	.module('pangolin')
	.controller('MainCtrl', ['UserService', function(UserService) {
		console.log("MainCtrl");
		console.log(UserService.display());
	}])