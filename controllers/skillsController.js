app.controller('skillsController', function ($scope) {
    $scope.addLanguageAndClose = function(language) {
        $scope.$parent.char.languages.push(language);
        $("#languageModal .mmclose").click();
    };
   
    $scope.removeLanguage = function (language) {
        $scope.$parent.char.languages.splice(
            $scope.$parent.char.languages.indexOf(language), 1);
    };

    if (!$scope.$parent.char.languages) {
        $scope.$parent.char.languages = [  ];
    }

    $scope.maxLanguages = function() {
        if (!$scope.$parent.char || !$scope.$parent.char.totalstat) {
            return 0;
        }
        var max = $scope.statBonus($scope.$parent.char.totalstat['int']);
        if ($scope.$parent.char.skills.linguistics) {
            max += $scope.$parent.char.skills.linguistics;
        }
        if ($scope.$parent.char.race.languages) {
            max += $scope.$parent.char.race.languages.length;
        }
        return max;
    };

    $scope.statBonus=function(stat){
        return (Math.floor(stat/2))-5;
    };

    $scope.usedPoints = function() {
        var used = 0;

        for (var skillIndex = 0; skillIndex < skillData.length; skillIndex++) {
            var skill = skillData[skillIndex];
            used += $scope.char.skills[skillData[skillIndex].name];
            if (skill.subtype && skill.subtypes) {
                for (var subtypeIndex = 0; subtypeIndex < skill.subtypes.length; subtypeIndex++) {
                    used+= $scope.char.skills[skill.name+'('+skill.subtypes[subtypeIndex]+')'];
                }
            }
        }   
        return used;     
    }
   
    $scope.calculatePoints = function() {
        var points = 0;
        if (!$scope.$parent.char || !$scope.$parent.char.totalstat) {
            return 0;
        }

        points += $scope.calculateHd() * $scope.statBonus($scope.$parent.char.totalstat['int']);

        for (var classIndex = 0; classIndex < classes.length; classIndex++) {
            var levels = $scope.$parent.char.classes[classes[classIndex].name];
            if (levels) {
                points += levels * classes[classIndex].Skills.Points; 
            }
        }

        if ($scope.$parent.char.race.name === "Human") {
            points+=util.hd($scope.$parent.char, classes);
        }

        if ($scope.$parent.char.classMeta) {
            /**/
            var fav = $scope.$parent.char.classMeta.favourite;

            if (fav) {
                /**/
                for (var i = 0; i < $scope.$parent.char.classes[fav]; i++) {
                    if ($scope.$parent.char.favouriteBonuses[i]==="skill") {
                        points++;
                    }
                }
                /**/
            }
            /**/
        }

        return points;
    }

    $scope.calculateHd = function() {
         var hd = 0;

         for (var classIndex = 0; classIndex < classes.length; classIndex++) {
             hd += $scope.$parent.char.classes[classes[classIndex].name]||0;
         }
         return hd;
    }

    $scope.isClassSkill = function(skill) {
        for (var classIndex = 0; classIndex < classes.length; classIndex++) {
            var myclass= classes[classIndex];
            for (var skillIndex = 0; skillIndex < classes[classIndex].Skills['Class skills'].length; skillIndex++) {
                if (skill === classes[classIndex].Skills['Class skills'][skillIndex]) {
                    if ($scope.$parent.char.classes[myclass.name] > 0) {
                        return true;
                    }
                }
            }
        }
        return false;
    }


    if (!$scope.$parent.char) {
        $scope.$parent.char = {};
    }
    $scope.char = $scope.$parent.char;

    $scope.skillCtrlTest = "Works";
    $scope.skills = skillData;

    $scope.statBonus=function(stat){
                return (Math.floor(stat/2))-5;
                    };

    if (!$scope.char.skills) {
        $scope.char.skills = {};

        for (var skillIndex = 0; skillIndex < skillData.length; skillIndex++) {
            $scope.char.skills[skillData[skillIndex].name] = 0;
        }
    }

    $scope.checkSkill =  function (myChar, skill, subtype) {
        if (!myChar.skills[skill.name+'('+subtype+')']) {
            myChar.skills[skill.name+'('+subtype+')'] = 0;
        }
        return 0;
    }

    $scope.maybeAdjust = function(skill, amount, subtype) {
        var name = subtype?skill.name+'('+subtype+')':skill.name;
        
        var newValue = $scope.char.skills[name] + amount;
        if ((newValue >= 0) && (newValue <= $scope.calculateHd())) {
            $scope.char.skills[name] = newValue;
        }

    }
});
