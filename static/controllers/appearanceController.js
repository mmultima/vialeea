app.controller('appearanceController', function ($scope, $resource) {
    if (!$scope.$parent.char.appearance) {
        $scope.$parent.char.appearance = {};
    }
    if (!$scope.$parent.char.misc) {
        $scope.$parent.char.misc = {};
    }
});
