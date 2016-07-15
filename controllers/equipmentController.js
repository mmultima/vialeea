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
});
