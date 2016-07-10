app.controller('abilityController', function ($scope) {
    $scope.deeds = deeds;

    $scope.mmtest = "Whee";

    $scope.getClassAbilities = function(character) {
        var value = [];
        for (var key in character.classes) {
            if (character.classes.hasOwnProperty(key)) {
                //value.push(key);
                if (character.classes[key]>0) {
                    //value.push(key);
                    /*
                    for (var abil in classes[key]["class abilities"]) {
                        if (classes[key]["class abilities"].hasOwnProperty(abil)) {
                            value.push(
                                {
                                    name: abil, 
                                    Text: classAbilityDescriptions[abil].Text,
                                    deeds: classAbilityDescriptions[abil].deeds
                                }
                                );
                        } 
                    }
                    */
                }
            }
        }
        if (value.length ===0) {
            //value = [1,2,3,character.name];
        }


        return value;
    };
});
