app.controller('animalCompanionController', function ($scope) {
    if (!$scope.$parent.char.notNormalAnimal) {
        $scope.$parent.char.notNormalAnimal = "false"; 
    }

    $scope.animalFeats = animalFeats;

    $scope.addFeatAndClose = function(feat, char) {
        if (!char.animal) {
            char.animal = {};
        }
        if (!char.animal.feats) {
            char.animal.feats = [];
        }
        if (char.animal.feats.indexOf(feat)<0) {
            char.animal.feats.push(feat);
        }
    }
    
    $scope.animals = mmdata.animals;

if ($scope.$parent.char.classes.Druid) {
$scope.level = $scope.$parent.char.classes.Druid;
}
else {
$scope.level=1;
}

$scope.test='testt';

    $scope.isFalse = function(value) {
        if (!value || value === 'false') {
            return 1;
        }
        return 0;
    };
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
$scope.calculateAttacks=function(animal, advanced, finesse, agile, notNormal) {
    //I could do this with the || trick
    var attacks = animal.attacks;
    var result = "";
    var strBonus = $scope.statBonus(animal.stats.curstr);
    var dexBonus = $scope.statBonus(animal.stats.curdex);
    var damBonus = agile?dexBonus:strBonus;
    var hitBonus = finesse?dexBonus:strBonus;

    if (advanced && notNormal) {
        if (animal.advancement.attacks) {
            attacks = animal.advancement.attacks;
        }
    }
    for (var i = 0; i < attacks.length; i++) {
        bonus = $scope.bab + hitBonus + $scope.sizeToAc(animal.cursize);
        damage = damBonus;
        if (i > 0) {
            result = result + "; ";
        }
	result = result + attacks[i].type + " +" + bonus + " " + attacks[i].amount + "d" + attacks[i].dice + "+" + damage;
    }
    return result;
};
$scope.calculateHp=function(animal, char) {
    var baseHp = Math.floor($scope.hd*4.5);
    var bonus = $scope.hd * $scope.statBonus(animal.stats.curcon);

    if (char.animal && char.animal.feats) {
        if (char.animal.feats.indexOf('Toughness')!== -1) {
            if ($scope.hd < 3) {
                bonus += 3;
            }
            else {
                bonus += $scope.hd;
            }
        }
    }
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
