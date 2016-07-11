app.controller('classController', function ($scope) {
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
        /*
        value.push({
            name: 'Test',
            level: 1
        });
*/
        return value;
    };
});
