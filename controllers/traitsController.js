app.controller('traitsController', function($scope) {
	$scope.selectedFeats = [];

    if ($scope.$parent.char.feats === undefined) {
        $scope.$parent.char.feats = [];
    }

	$scope.feats = [
		{
			name: 'Power attack',
			prereq: { bab: 1}
		},
		{
			name: 'Point-blank shot',
			prereq: {}
		},
		{
			name: 'Precise shot',
			prereq: { feat: 'Point-blank shot' }
		},
		{
			name: 'Rapid shot',
			prereq: {feat: 'Point-blank shot' }
		},
		{
			name: 'Multishot',
			prereq: {feat: 'Rapid shot', bab: 6 }
		},
		{
			name: 'Weapon focus',
			prereq: {}
		},
		{
			name: 'Weapon specialization',
			prereq: {}
		},
		{
			name: 'Toughness',
			prereq: {}
		}
	];

	$scope.feats = featData;

	$scope.BAB = 0;

	$scope.babValid = function(feat) {
		if (feat.prereq.bab) {
			return $scope.BAB >= feat.prereq.bab;
		}

		return true;
	};

	$scope.maybeDecrease = function(value, limit) {
		return value > limit?value-1:value;	
	};

	$scope.prereqsValid = function(feat) {

		if (feat.prereq.feats) {
			for (var j = 0; j < feat.prereq.feats.length; j++) {
			var curFeat =  feat.prereq.feats[j].name;
			var prereqFeat = null;
			for (var i = 0; i < $scope.feats.length; i ++) {
				if (curFeat === $scope.feats[i].name) {
					prereqFeat = $scope.feats[i];
				}
}
			if (!inArray(prereqFeat, $scope.$parent.char.feats)) {
				return false;
			}
			}
		}
		return true;

/*
		if (feat.prereq.feat) {
			var prereqFeat = null;
			for (var i = 0; i < $scope.feats.length; i ++) {
				if (feat.prereq.feat === $scope.feats[i].name) {
					prereqFeat = $scope.feats[i];
				}
}
			return inArray(prereqFeat, $scope.selectedFeats);
		}
		return true;
*/
	};

	var inArray = function(object, myArray) {
		for (var i = 0; i < myArray.length; i++) {
			if (object === myArray[i]) {
				return true;
			}
		}
		return false;
	};

	$scope.addFeat = function(feat) {
		if (!inArray(feat, $scope.$parent.char.feats)) {				if ($scope.prereqsValid(feat) && $scope.babValid(feat)) {
				$scope.$parent.char.feats.push(feat);
			}
		}
	}
	
	$scope.removeFeat = function (feat) {
		var newList = [];

		for (var i = 0; i < $scope.$parent.char.feats.length; i++) {
			if ($scope.$parent.char.feats[i] !== feat) {
				newList.push($scope.$parent.char.feats[i]);
			}
		}
		$scope.$parent.char.feats = newList;
	}	

});


