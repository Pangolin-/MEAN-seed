angular
	.module('pangolin')
	.controller('MainCtrl', ['$scope', '$rootScope', 'UserService', function($scope, $rootScope, UserService) {
		
		$scope.tabs = [
			{
				link: "#/",
				label: "Home"
			},
			{
				link: "#/users/",
				label: "Users"
			}
		]
		
		$scope.setSelected = function(tab) {
			$rootScope.selectedTab = tab;
		}
		$scope.tabClass = function(tab) {
			if ($rootScope.selectedTab == tab) {
				return "active";
			}
			else {
				return "";
			}
		}
		console.log("MainCtrl");
	}])