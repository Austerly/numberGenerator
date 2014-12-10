'use strict';

(function(){
	var app = angular.module('numGenApp', []);

})();

angular.module('numGenApp').controller('numGenControl', function($scope){
	$scope.test = 5;
	$scope.numberGroup = [];

	$scope.numberGenerator = function(amount) {
		$scope.numberGroup = [];
		for (var i=0; i < amount; i++) {

			var randNum = parseInt(Math.random() * 10);
			console.log(randNum);

			$scope.numberGroup.push(randNum);
		}
		
	}
});