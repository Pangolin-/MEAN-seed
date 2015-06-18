angular
	.module('pangolin')
	.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'views/home.html',
				controller: 'HomeCtrl'
			})
			
			.when('/user/list', {
				templateUrl: 'views/userList.html',
				controller: 'UserCtrl'
			})
			
		$locationProvider.html5Mode(true);
			
	}])