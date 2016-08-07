app.controller('equipmentController', function ($scope) {
    $scope.weapons = weapons;
    $scope.armors = armors;
    $scope.items = items;

    if (!$scope.$parent.char.equipment) {
        $scope.$parent.char.equipment = {};
    }
    if (!$scope.$parent.char.equipment.weapons) {
        $scope.$parent.char.equipment.weapons = [];
    }
    if (!$scope.$parent.char.equipment.armors) {
        $scope.$parent.char.equipment.armors = [];
    }
    if (!$scope.$parent.char.equipment.items) {
        $scope.$parent.char.equipment.items = [];
    }

    $scope.addWeaponAndClose = function(weapon) {
        $scope.$parent.char.equipment.weapons.push(weapon);
        $("#weaponModal .mmclose").click();
    };

    $scope.removeWeapon = function (weapon) {
        $scope.$parent.char.equipment.weapons.splice(
            $scope.$parent.char.equipment.weapons.indexOf(weapon), 1);
    };
    $scope.addArmorAndClose = function(armor) {
        $scope.$parent.char.equipment.armors.push(armor);
        $("#armorModal .mmclose").click();
    };

    $scope.removeArmor = function (armor) {
        $scope.$parent.char.equipment.armors.splice(
            $scope.$parent.char.equipment.armors.indexOf(armor), 1);
    };
    $scope.addItemAndClose = function(item) {
        $scope.$parent.char.equipment.items.push(item);
        $("#itemModal .mmclose").click();
    };
    $scope.removeItem = function (item) {
        $scope.$parent.char.equipment.items.splice(
            $scope.$parent.char.equipment.items.indexOf(item), 1);
    };

    $scope.calculateTotal = function(field, arr1, arr2, arr3) {
        var total = 0;
        if (arr1) {
            for (var i = 0; i < arr1.length; i++) {
                total += arr1[i][field];
            }
        }
        if (arr2) {
            for (var j = 0; j < arr2.length; j++) {
                total += arr2[j][field];
            }
        }
        if (arr3) {
            for (var k = 0; k < arr3.length; k++) {
                total += arr3[k][field];
            }
        }
        return total;
    };

    $scope.calculateDiceForSize = function(number, dice, size) {
        console.log(number + "d" + dice + " " + size);
        var sizes = "FDTSMLHGC";
        var sizeIndex = sizes.indexOf(size);
        if (sizeIndex === 4) {
            return number + "d" + dice;
        }
        var damageProgression = [
    "1", 
    "1d2",
    "1d3",
    "1d4",
    "1d6",
    "1d8",
    "1d10",
    "2d6",
    "2d8",
    "3d6",
    "3d8",
    "4d6",
    "4d8",
    "6d6",
    "6d8",
    "8d6",
    "8d8",
    "12d6",
    "12d8",
    "16d6"]; 

        var origDice = number + "d" + dice;
        var damageIndex = damageProgression.indexOf(origDice);
        if (sizeIndex < 4) {
            for (var index = 4; index > sizeIndex; index--) {
                damageIndex--;
            }
        }
        else {
            for (var indexL = 4; indexL < sizeIndex; indexL++) {
                if (damageIndex < 5) {
                    damageIndex++;
                }
                else {
                    damageIndex += 2;
                }
            }
        }
        return damageProgression[damageIndex]; 
    };

});
