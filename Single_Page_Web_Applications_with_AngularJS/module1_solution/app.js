(function() {

	'use strict'
	angular.module("LunchCheck", [])
	.controller("LunchCheckController", LunchCheckController);

	LunchCheckController.$inject = ['$scope'];

	function LunchCheckController($scope) {

		$scope.textBox = "";

		$scope.countItem = function() {
			var str = $scope.textBox;
			var comma = 0;
			var mark;
			$scope.count = 0;

			if(str == "" || str == " ") {
				$scope.warn = "Please enter data first";
				$scope.message = "";
			}
			else {
				for(var i = 0; i < str.length; i++) {
					mark = str[i-1];
					if(str[i] == " " || str[i] == ',') {
						continue;
					}
					else {
						if(mark == "," || mark == undefined)
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
