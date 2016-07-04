app.controller('statblockController', function ($scope) {
    var s = window.location.search;
    if (s) { 
        $scope.charId = s.substring(s.indexOf('=')+1);
    }
    if (!$scope.charId) {
        $scope.charId = 'No ID!';
    }
    else {
        $scope.$parent.load($scope.charId);
    }
});
