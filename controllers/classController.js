app.controller('classController', function ($scope) {
    if (!$scope.$parent.char) {
        $scope.$parent.char = {};
    }
    if (!$scope.$parent.char.classMeta) {
        $scope.$parent.char.classMeta = {};
        $scope.$parent.char.favouriteBonuses={};
    }

    $scope.util = util;
    $scope.classes = classes;

    $scope.getClassArray = function() {
        var character = $scope.$parent.char;
        var value = [];
        for (var key in character.classes) {
            if (character.classes.hasOwnProperty(key)) {
                if (character.classes[key] > 0) {
                    value.push({
                        name: key, 
                        level: character.classes[key]
                    });
                }
            }
        }
        return value;
    };

    $scope.getClasses = function() {
        var value = [];
        for (var key in $scope.$parent.char.classes) {
            if ($scope.$parent.char.classes.hasOwnProperty(key)) {
                if ($scope.$parent.char.classes[key]) {
                    value.push({name:key});
                }
            }
        }
        //value = ['a', 'b', 'c'];

        return value;
    };

    $scope.getRange = function(end) {
        var value = [];
        for (var i =1; i <= end; i++) {
            value.push(i);
        }
        return value;
    };
});
