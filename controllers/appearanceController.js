app.controller('appearanceController', function ($scope, $resource) {
    if (!$scope.$parent.char.appearance) {
        $scope.$parent.char.appearance = {};
    }
    //Nothing yet.
});
