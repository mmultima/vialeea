app.controller('loadController', function ($scope, $resource) {
    var AllCharacters = $resource('/rest/allchars');

    $scope.allCharacters = [];

    AllCharacters.query({}, function(characters) {
        $scope.allCharacters = characters;
    });

    $scope.load = function(id) {
        $scope.$parent.load(id);
    }
});
