angular
	.module('pangolin')
	.controller('UserCtrl', ['$scope', '$rootScope', '$http', 'UserService', function($scope, $rootScope, $http, UserService) {
		console.log("UserCtrl");
		$rootScope.selectedTab = 1;
		
		UserService.get()
			.then(function(res) {
				$scope.users = res.data;
			})
		
	}])