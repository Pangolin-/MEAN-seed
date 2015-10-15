angular
	.module('pangolin')
	.controller('HomeCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {
		console.log("HomeCtrl");
		$rootScope.selectedTab = 0;
	}])