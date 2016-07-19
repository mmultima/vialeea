app.controller('traitsController', function($scope) {
	$scope.selectedFeats = [];

    if ($scope.$parent.char.traits === undefined) {
        $scope.$parent.char.traits = [];
    }

	$scope.feats = featData;

    $scope.traits = traits;

	$scope.BAB = 0;

	$scope.babValid = function(trait) {
        return true;
    };

	$scope.maybeDecrease = function(value, limit) {
		return value > limit?value-1:value;	
	};

	$scope.prereqsValid = function(trait) {
        return true;
	};

	var inArray = function(object, myArray) {
		for (var i = 0; i < myArray.length; i++) {
			if (object === myArray[i]) {
				return true;
			}
		}
		return false;
	};

	$scope.addTrait = function(trait) {
		if (!inArray(trait, $scope.$parent.char.traits)) {				if ($scope.prereqsValid(trait) && $scope.babValid(trait)) {
				$scope.$parent.char.traits.push(trait);
			}
		}
	}
	
	$scope.removeTrait = function (trait) {
		var newList = [];

		for (var i = 0; i < $scope.$parent.char.traits.length; i++) {
			if ($scope.$parent.char.traits[i] !== trait) {
				newList.push($scope.$parent.char.traits[i]);
			}
		}
		$scope.$parent.char.traits = newList;
	}	

});


