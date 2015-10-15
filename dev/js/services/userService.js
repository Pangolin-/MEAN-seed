angular
	.module('pangolin')
	.factory('UserService', ['$http', function($http) {
		return {
			get: function() {
				console.log("GET User List.");
				return $http.get('/api/user/list');
			},
			display: function() {
				return "User Display API functioning correctly."
			}
		}
	}])