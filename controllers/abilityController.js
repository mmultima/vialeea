app.controller('abilityController', function ($scope) {
    $scope.deeds = deeds;

    var getClass = function(key) {
        for (var i = 0; i < classes.length; i++) {
            if (key === classes[i].name) {
                return classes[i];
            }
        }
    };

    $scope.getClassAbilities = function(character) {
        var value = [];
        for (var key in character.classes) {
            if (character.classes.hasOwnProperty(key)) {
                if (character.classes[key]>0) {
                    var myClass = getClass(key);
                    var abilities = myClass["class abilities"];
                     
                    for (var abil in abilities) {
                        if (abilities.hasOwnProperty(abil)) {
                            var entry = {
                                name: abil,
                                Text: "<no text>",
                                deeds: []
                            };
                            if (classAbilityDescriptions[abil]) {
                                entry.Text = classAbilityDescriptions[abil].Text;
                                entry.deeds = classAbilityDescriptions[abil].Deeds;
                            }
                            value.push(entry);
                        } 
                    }
                }
            }
        }
        return value;
    };
});
