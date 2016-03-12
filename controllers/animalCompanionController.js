app.controller('animalCompanionController', function ($scope) {
$scope.animals = mmdata.animals;

if ($scope.$parent.char.classes.Druid) {
$scope.level = $scope.$parent.char.classes.Druid;
}
else {
$scope.level=1;
}

$scope.test='testt';

//$scope.level=1;

//Make a "calculate3/4 function
$scope.calculateHd=function(level) {
    return Math.floor(3*(level+2)/4);
};
$scope.calculateBab=function(hd) {
    return Math.floor(3*(hd)/4);
};
$scope.calculateHighSave=function(hd) {
    return Math.floor(hd/2+2);
};
$scope.calculateLowSave=function(hd) {
    return Math.floor(hd/3);
};
$scope.isAdvanced=function(level,animal) {
    return (level<animal.advancement.level?0:1);
};
$scope.choose=function(choice, zerovalue, onevalue) {
	return (choice?onevalue:zerovalue);
};
$scope.sizeToAc=function(size) {
    return (size==='M'?0:size==='L'?-1:1);
};
$scope.maybeAdjust=function(value, amount, min, max) {
    if (value+amount < min || value+amount > max) {
        return value;
    }
    return value+amount;
};
$scope.calculateAttacks=function(animal, advanced) {
    //I could do this with the || trick
    var attacks = animal.attacks;
    var result = "";
    var statBonus = $scope.statBonus(animal.stats.curstr);
    if (advanced) {
        if (animal.advancement.attacks) {
            attacks = animal.advancement.attacks;
        }
    }
    for (var i = 0; i < attacks.length; i++) {
        bonus = $scope.bab + statBonus + $scope.sizeToAc(animal.cursize);
        damage = statBonus;
        if (i > 0) {
            result = result + "; ";
        }
	result = result + attacks[i].type + " +" + bonus + " " + attacks[i].amount + "d" + attacks[i].dice + "+" + damage;
    }
    return result;
};
$scope.calculateHp=function(animal) {
    var baseHp = Math.floor($scope.hd*4.5);
    var bonus = $scope.hd * $scope.statBonus(animal.stats.curcon);
    return baseHp + bonus;
};
$scope.stats=['str', 'dex', 'con', 'int', 'wis', 'cha'];

   $scope.statBonus=function(stat){
        return (Math.floor(stat/2))-5;
    };

$scope.calculateStatIncs = function() {
    $scope.incs = {};
    var incLevels = [4,9,14,20];
    for (var i = 0; i < incLevels.length; i++)  {
        if ($scope.level > incLevels[i]-1) {
            if (!$scope.incs[$scope["level" + incLevels[i] + "stat"]]) {
                $scope.incs[$scope["level" + incLevels[i] + "stat"]]=0;
            }
            $scope.incs[$scope["level" + incLevels[i] + "stat"]]++;
        } 
    }
    var result = "";
    for (var property in $scope.incs) {
        if ($scope.incs.hasOwnProperty(property)) {
            result = result + " " + property + ": " + $scope.incs[property];
        }
    }    
    return result;
};

});
