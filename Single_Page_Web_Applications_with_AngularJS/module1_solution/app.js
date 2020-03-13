(function() {

	'use strict'
	angular.module("LunchCheck", [])
	.controller("LunchCheckController", LunchCheckController);

	LunchCheckController.$inject = ['$scope'];

	function LunchCheckController($scope) {

		$scope.textBox = "";		

		$scope.countItem = function() {
			var str = $scope.textBox;
			$scope.count = 0;

			if(str == "" || str == " ") {
				$scope.warn = "Please enter data first";
				$scope.message = "";
			}
			else {
				for(var i = 0; i < str.length; i++) {
					if(str[i] == "" || str[i] == " " || str[i] == ',') {
						continue;
					}
					else {
						$scope.count += 1;
					}
				}

				if($scope.count <= 3){
					$scope.warn = "";
					$scope.message = "Enjoy!";
				}
				else if($scope.count > 3) {
					$scope.warn = "";
					$scope.message = "Too much!";
				}
			}
		}
	}
	})();