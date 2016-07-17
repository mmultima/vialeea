app.controller('spellsController', function ($scope) {

    $scope.spells = spells;
    $scope.spellLists = {
        Cleric: spellsCleric,
        Druid: spellsDruid
    };

    $scope.charSpellLists = function(char) {
        var value = [];
        for (var myclass in char.classes) {
            if (char.classes.hasOwnProperty(myclass)) {
                if (char.classes[myclass] > 0) {
                    var theClass = undefined;
                    for (var i = 0; i < classes.length; i++) {
                        if (myclass === classes[i].name) {
                            theClass = classes[i];
                        }
                    }

                    if (theClass && theClass['class abilities']['spells']) {
                        value.push(myclass);
                    }
                }
            }
        }
        return value;
    };
});
