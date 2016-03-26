app.controller('skillsController', function ($scope) {
    $scope.statBonus=function(stat){
        return (Math.floor(stat/2))-5;
    };

    $scope.usedPoints = function() {
        var used = 0;

        for (var skillIndex = 0; skillIndex < skillData.length; skillIndex++) {
            used += $scope.char.skills[skillData[skillIndex].name];
        }   
        return used;     
    }
   
    $scope.calculatePoints = function() {
        var points = 0;

        points += $scope.calculateHd() * $scope.statBonus($scope.$parent.totalstat['int']);

        for (var classIndex = 0; classIndex < classes.length; classIndex++) {
            var levels = $scope.$parent.char.classes[classes[classIndex].name];
            if (levels) {
                points += levels * classes[classIndex].Skills.Points; 
            }
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

    $scope.maybeAdjust = function(skill, amount) {
        
        var newValue = $scope.char.skills[skill.name] + amount;
        if ((newValue >= 0) && (newValue <= $scope.calculateHd())) {
            $scope.char.skills[skill.name] = newValue;
        }

    }
});
