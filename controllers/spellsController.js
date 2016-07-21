app.controller('spellsController', function ($scope) {
    if (!$scope.$parent.char.spells) {
        $scope.$parent.char.spells = {};
    }

    $scope.spells = spells;
    $scope.spellLists = {
        Cleric: spellsCleric,
        Druid: spellsDruid
    };

    $scope.addSpell = function(level, spell, list, char) {
        console.log(level + "#" + spell + "#" + list + "#" + char.name);
        if (!char.spells[list][level]) {
            char.spells[list][level] = [];
        }
        var index = -1;
        for (var i = 0; i < char.spells[list][level].length; i++) {
            var spellObj = char.spells[list][level][i];
            if (spellObj.name === spell) {
                index = i;
            }
        }
        if (index === -1) {
            char.spells[list][level].push(
                    {
                        name: spell,
                        amount: 1
                    }
                    );
        }
        else {
            char.spells[list][level][index].amount++;
        }

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

                        if (!char.spells[myclass]) {
                            char.spells[myclass] = {};
                        }
                    }
                }
            }
        }
        return value;
    };
});
