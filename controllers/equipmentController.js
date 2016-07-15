app.controller('equipmentController', function ($scope) {
    $scope.weapons = weapons;
    $scope.armors = armors;

    if (!$scope.$parent.char.equipment) {
        $scope.$parent.char.equipment = {};
    }
    if (!$scope.$parent.char.equipment.weapons) {
        $scope.$parent.char.equipment.weapons = [];
    }
    if (!$scope.$parent.char.equipment.armors) {
        $scope.$parent.char.equipment.armors = [];
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

    $scope.calculateTotal = function(field, arr1, arr2, arr3) {
        var total = 0;
        for (var i = 0; i < arr1.length; i++) {
            total += arr1[i][field];
        }
        for (var j = 0; j < arr1.length; j++) {
            total += arr2[j][field];
        }
        /*
        for (var k = 0; k < arr1.length; k++) {
            total += arr3[k][field];
        }
        */
        return total;
    };
});
